import React, { useState } from "react";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { Stack, Box, TextField, InputAdornment, Divider, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoftoutlook } from "react-icons/si";
import Image from "next/image";
import { UilFacebookF } from "@iconscout/react-unicons";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Logo from ".//../../public/images/logo.png";

interface Values {
  username: string;
  password: string;
}

// This is for the main login/signup page with Google, FB and Outlook sign in
export default function LoginForm() {
  const [tokenResponse, setTokenResponse] = useState<TokenResponse | null>();
  const [user, setUser] = useState<any>(null);

  const [email, setEmail] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);

  let emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
  });

  return (
    <Stack
      spacing={2}
      sx={{
        width: "70%",
        justifyContent: "center",
        ml: "15%!important",
      }}>
      <Image
        alt=""
        src={Logo}
        style={{
          width: "100%",
          height: "auto",
          margin: "2vh 0px",
        }}
        width="600"
        height="300"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{
            width: "100%",
            "& .MuiFormLabel-root": {
              fontWeight: 500,
              color: "#6D5747",
            },
          }}
          label={"Enter Your Email to Begin"}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          // required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={invalidEmail}
          helperText={invalidEmail ? "Please enter a valid email address." : ""}
          InputProps={{
            endAdornment: <InputAdornment position="end">{emailIsValid && <CheckCircleOutlinedIcon color={"success"} />}</InputAdornment>,
          }}
          autoFocus
          onBlur={() => {
            if (emailRegex.test(email)) {
              setEmailIsValid(true);
              setInvalidEmail(false);
            } else {
              setEmailIsValid(false);
              setInvalidEmail(true);
            }
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
          fontWeight: 700,
          borderRadius: "12px",
          boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
        }}>
        Login
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "#6D5747",
          borderColor: "white",
          fontWeight: 700,
          borderRadius: "12px",
          boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
        }}>
        Sign Up
      </Button>
      <Divider
        sx={{
          color: "#6D5747",
          fontWeight: 500,
          fontSize: "14px",
        }}>
        Or
      </Divider>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "white",
          fontWeight: 700,
          borderRadius: "12px",
          boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
        }}
        onClick={() => googleLogin()}
        startIcon={<FcGoogle />}>
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "white",
          fontWeight: 700,
          borderRadius: "12px",
          boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
        }}
        startIcon={<UilFacebookF color="#3182E7" />}>
        Continue with Facebook
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "white",
          fontWeight: 700,
          borderRadius: "12px",
          boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
        }}
        startIcon={<SiMicrosoftoutlook color="#0071C5" />}>
        Continue with Outlook
      </Button>
    </Stack>
  );
}
