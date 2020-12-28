import dotenv from 'dotenv';

dotenv.config();

const Config = {
  baseUrl: process.env.REACT_APP_BASE_URL,
};

export default Config;
