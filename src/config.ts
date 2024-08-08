import dotenv from 'dotenv';
import { Config } from './types/config';
dotenv.config();

export const config: Config = {
  port: process.env.PORT,
}