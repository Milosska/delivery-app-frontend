import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://delivery-app-backend-ilxj.onrender.com';
// const PRODUCTS_LIMIT = 10;

export const fetchSignup = async userdata => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/register`,
      userdata
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};
