import React, { useState } from 'react';
import { DatePicker} from '@mui/lab';
import { TextField } from '@mui/material';


// NOT IN USE CURRENTLY 
interface CalendarProps {
  availabilityTimeSlots: {
    date: string;
    time: string[];
    seat: number[];
  }[];
  onSelectDate: (date: string) => void;
}

const SlotCalendar: React.FC<CalendarProps> = ({ availabilityTimeSlots, onSelectDate }) => {
  const availableDates = availabilityTimeSlots.map((slot) => slot.date);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (date: string | null) => {
    setSelectedDate(date);
    if (date) {
      onSelectDate(date);
    }
  };

  const isDateAvailable = (date: string) => {
    return availableDates.includes(date);
  };

  return (
    <DatePicker
      label="Select Date"
      value={selectedDate}
      onChange={(date: React.SyntheticEvent<any, Event> | null) =>
        handleDateChange(date ? (date.target as HTMLInputElement).value : null)
      }
      renderInput={(params: any) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            style: { color: isDateAvailable(params.value) ? 'black' : 'grey' },
          }}
        />
      )}
      disablePast
    />
  );
};

export default SlotCalendar;