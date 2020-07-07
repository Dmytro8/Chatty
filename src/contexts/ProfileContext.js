import { createContext } from "react";

export const ProfileContext = createContext({
  profile: {
    id: null,
    is_active: false,
    name: null,
    surname: null,
    email: null,
    username: null,
  },
  searchUser: "",
  setSearchUser: () => {},
});
