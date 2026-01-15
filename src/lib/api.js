import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://ducwgnvnuymdiuacweto.supabase.co/rest/v1",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.SUPABASE_API_KEY}`,
    apikey: "sb_publishable_RjjPY77zpSypHu-8r00d1A_Kr0df-1z",
  },
});
