import fetch from "isomorphic-fetch";

import { UserAPIResponse } from "../react/types/userTypes";

export const fetchCurrentUser = async (): Promise<UserAPIResponse> => {
  const endpoint = "/api/current_users";
  const headers = {
    Accept: "application/json",
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};

export const fetchUserProfile = async (
  user_id: number
): Promise<UserAPIResponse> => {
  const endpoint = "/api/users/" + user_id;
  const headers = {
    Accept: "application/json",
  };

  const response = await fetch(endpoint, { headers, method: "GET" });
  return response.json();
};
