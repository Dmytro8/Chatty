import { client } from "./sockets.config";
export const loginSocketEmit = (userId) => {
  client.emit("login", { userId }, (error) => {
    if (error) {
      alert(error);
    }
  });
};
export const logoutSocketEmit = (userId) => {
  client.emit("logout", { userId }, (error) => {
    if (error) {
      alert(error);
    }
  });
};
export const authenticatedSocketEmit = (userId) => {
  client.emit("authenticated", { userId }, (error) => {
    if (error) {
      alert(error);
    }
  });
};
