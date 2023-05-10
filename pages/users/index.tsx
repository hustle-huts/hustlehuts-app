import LoginForm from "@/components/users/login-form";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function SignUpOrHomePage() {
  return (
    <>
      <GoogleOAuthProvider clientId="554539700276-7ofmtmaendohcdss79l752c1e25leb7e.apps.googleusercontent.com">
        <LoginForm />
      </GoogleOAuthProvider>
    </>
  );
}
