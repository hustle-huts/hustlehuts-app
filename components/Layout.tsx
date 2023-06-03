import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { userState } from "@/recoil/auth/atom";
import { authApi } from "@/services/auth.service";

const GUEST_PAGES = ["/", "/signup", "/login", "/login/password"];
const LOGGED_IN_PAGES = ["/bookings", "/profile"];

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const checkUserIsAlreadyLoggedIn = async () => {
    const has_access_token = localStorage.getItem("access_token");
    if (!has_access_token) {
      return;
    }

    try {
      const user = await authApi();
      setUser(user);
      if (router.pathname === "/") {
        return;
      }
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const checkUserIsAuthenticated = async () => {
    try {
      console.log("Fetching user...");
      const user = await authApi();
      setUser(user);
    } catch (error) {
      console.warn("User is not authenticated. Redirecting to login page...");
      router.replace("/login");
    }
  };

  useEffect(() => {
    if (GUEST_PAGES.includes(router.pathname)) {
      checkUserIsAlreadyLoggedIn();
    }

    // TODO: Uncomment this when the integration is done
    // else if (LOGGED_IN_PAGES.includes(router.pathname)) {
    //   checkUserIsAuthenticated();
    // }
  }, []);

  return <>{children}</>;
};

export default Layout;
