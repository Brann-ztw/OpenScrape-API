import dotenv from 'dotenv';
import { Config } from './types/configType';
dotenv.config();

export const config: Config = {
  port: process.env.PORT,
}