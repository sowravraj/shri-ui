import axios from "axios";
import { getUserData } from './Storage'; // Adjust the path if needed

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyC4huvv9YuYp-ai-uNWqT6BCxuUGuD3aLo";
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;

export const RegisterApi = (inputs) => {
    let data = { displayName: inputs.name, email: inputs.email, password: inputs.password };
    return axios.post(REGISTER_URL, data);
};

export const LoginApi = (inputs) => {
    let data = { email: inputs.email, password: inputs.password };
    return axios.post(LOGIN_URL, data);
};

export const UserDetailsApi = () => {
    const idToken = getUserData();
    console.log('ID Token:', idToken);
    return axios.post(USER_DETAILS_URL, { idToken })
      .catch((error) => {
        console.error('Error fetching user details:', error.response?.data || error.message);
        throw error;
      });
  };



