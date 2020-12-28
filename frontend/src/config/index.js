import dotenv from 'dotenv';

dotenv.config();

export const baseUrl = process.env.REACT_APP_BASE_URL;
export const envairoment = process.env.REACT_APP_NODE_ENV;
