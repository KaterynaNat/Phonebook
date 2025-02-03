import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../contacts/operations";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

// ✅ Встановлення заголовка авторизації
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// ✅ Видалення заголовка авторизації
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// ✅ Запобігання дублюванню помилок
const showErrorToast = (message, id) => {
  toast.dismiss(id); // Видаляє попередню помилку з цим id
  toast.error(message, { id, duration: 3000 });
};

// 🟢 **Реєстрація нового користувача**
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthHeader(data.token);
      thunkAPI.dispatch(fetchContacts());
      toast.success(`Welcome, ${data.user.name}!`);
      return data;
    } catch (error) {
      let message = "Registration failed. Please try again.";

      if (error.response) {
        switch (error.response.status) {
          case 400:
            message = "Invalid registration data. Please check your input.";
            break;
          case 409:
            message = "User already exists. Try logging in!";
            break;
          default:
            message = "Something went wrong. Please try again.";
        }
      }

      showErrorToast(message, "register-error");
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟢 **Логін користувача**
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuthHeader(data.token);
      thunkAPI.dispatch(fetchContacts());
      toast.success(`Welcome back, ${data.user.name}!`);
      return data;
    } catch (error) {
      let message = "Login failed. Please try again.";

      if (error.response) {
        switch (error.response.status) {
          case 400:
            message = "Invalid email or password.";
            break;
          case 401:
            message = "Unauthorized. Please check your credentials.";
            break;
        }
      }
      toast.dismiss("login-error");
      toast.error(message, { id: "login-error", duration: 3000 });

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// 🔴 **Вихід (Logout)**
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
    toast.success("You have logged out successfully.");
  } catch (error) {
    console.error("Refresh error:", error);
    clearAuthHeader();
    showErrorToast("Logout failed. Please try again.", "logout-error");
    return thunkAPI.rejectWithValue("Logout failed.");
  }
});

// 🔄 **Оновлення користувача (refresh)**
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      clearAuthHeader(); 
      return thunkAPI.rejectWithValue("No token found.");
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.get("/users/current");
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      console.error("Refresh error:", error);
      clearAuthHeader();
      showErrorToast("Session expired. Please log in again.", "refresh-error");
      return thunkAPI.rejectWithValue("Session expired. Please log in again.");
    }
  }
);

