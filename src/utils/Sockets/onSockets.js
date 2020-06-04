import React, { useState, useCallback } from "react";

import { client } from "./sockets.config";

export const changeStatusSocketOn = () => {
  client.on("changeStatus", ({ isActive }) => {
    console.log(`Client socket: changeStatus to ${isActive}`);
    return isActive;
  });
};
