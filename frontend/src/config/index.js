import dotenv from 'dotenv';

dotenv.config();

export default config = {
  baseUrl: process.env.REACT_APP_BASE_URL,
};
