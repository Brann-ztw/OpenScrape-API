import dotenv from 'dotenv';
import { Config } from './types/configInterface';
dotenv.config();

export const config: Config = {
  port: process.env.PORT,
}