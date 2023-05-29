import axios from 'axios';
import { toast } from 'react-hot-toast';

const BASE_URL = 'https://delivery-app-backend-ilxj.onrender.com';
// const PRODUCTS_LIMIT = 10;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchSignup = async userdata => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/register`,
      userdata
    );
    toast.success('Registaration completed succesfully!');
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};

export const fetchLogin = async userdata => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, userdata);
    token.set(response.data.refresh_token);
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};

export const fetchLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/logout`);
    token.unset();
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};

export const fetchCurrentUser = async userToken => {
  if (!userToken) {
    return;
  }
  token.set(userToken);
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/current`);
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};

export const fetchProductsByCompany = async company => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/${company}`);
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};
