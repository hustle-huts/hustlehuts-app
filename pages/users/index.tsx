import LoginForm from "@/components/users/login-form";
import Image from "next/image";
import Logo from ".//../../public/images/logo.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SignUpOrHomePage() {
  const [email, setEmail] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<boolean>(true);

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <>
      <GoogleOAuthProvider clientId="554539700276-7ofmtmaendohcdss79l752c1e25leb7e.apps.googleusercontent.com">
        <Stack spacing={2}>
          <Image
            alt=""
            src={Logo}
            style={{ width: "50%", height: "auto", margin: "40px 0px", alignSelf: "center" }}
            width="600"
            height="300"
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              sx={{
                width: "70%",
                "& .MuiFormLabel-root": {
                  fontWeight: 500,
                  color: "#6D5747",
                },
              }}
              label={"Enter Your Email to Begin"}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={invalidEmail}
              helperText={invalidEmail ? "Please enter a valid email address." : ""}
              autoFocus
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              justifyContent: "center",
              ml: "15%!important",
              width: "70%",
              background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
            }}
            onClick={() => setInvalidEmail(!invalidEmail)}>
            Login
          </Button>
        </Stack>

        {/* <LoginForm></LoginForm> */}
      </GoogleOAuthProvider>
    </>
  );
}
