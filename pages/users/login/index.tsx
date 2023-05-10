import HeaderImage from "../../../public/images/LoginHeader.png";
import { Stack, Box, Typography, TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function LogInPage() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
    <>
      <Stack spacing={2} sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            top: 0,
          }}>
          <img
            src={HeaderImage.src}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
              objectPosition: "50% 100%",
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
          }}>
          Log In
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pt: "5vh" }}>
          <TextField
            sx={{
              width: "70%",
              "& .MuiFormLabel-root": {
                fontWeight: 500,
                color: "#6D5747",
              },
            }}
            label={"Enter Password"}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", pt: "5vh" }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
              fontWeight: 700,
              borderRadius: "12px",
              boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
              width: "70%",
              height: "3rem",
            }}>
            Login
          </Button>
        </Box>
      </Stack>
    </>
    );
}