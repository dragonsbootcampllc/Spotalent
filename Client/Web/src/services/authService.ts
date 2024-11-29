import axios from "axios";
import { User } from "../types";
import { API_BASE_URL } from "./config";

export interface AuthResponse {
  token: string;
  user: User;
}

// Login API
export async function login(credentials: { email: string; password: string }): Promise<AuthResponse> {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
}

// Signup API
export async function signup(credentials: { name: string; email: string; password: string }): Promise<AuthResponse> {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, credentials);
  return response.data;
}
