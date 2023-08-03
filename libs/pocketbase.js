import PocketBase from "pocketbase";
import AsyncAuthStore from "./store"

export const pb = new PocketBase(process.env.EXPO_PUBLIC_API_URL, new AsyncAuthStore());