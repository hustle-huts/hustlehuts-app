import _ from "lodash";
import { selector } from "recoil";

import { userState } from "./atom";

const hasUserState = selector({
  key: "hasUserState",
  get: ({ get }) => {
    const user = get(userState);
    return !_.isEmpty(user);
  },
});

export { hasUserState };
