import { Box } from "@mui/material";
// FIXME
import { GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";

import LoginForm from "@/components/users/LoginForm";

import Logo from "./../../public/images/logo.png";

const HomeComponent: React.FC = () => {
  return (
    <Box
      className="app-max-width"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <GoogleOAuthProvider clientId="554539700276-7ofmtmaendohcdss79l752c1e25leb7e.apps.googleusercontent.com">
        <Image alt="" src={Logo} style={{ width: "280px", height: "74px", margin: "30px 0px" }} />
        <LoginForm />
      </GoogleOAuthProvider>
    </Box>
  );
};

export default HomeComponent;
