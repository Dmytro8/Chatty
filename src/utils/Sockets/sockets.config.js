import io from "socket.io-client";
import { API_BASE_URL_GLOBAL } from "../../constants/general";
export const ENDPOINT = API_BASE_URL_GLOBAL;
export const client = io(ENDPOINT);
