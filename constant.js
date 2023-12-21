import { config } from "dotenv";

config();
export let port= process.env.PORT;
export let email= process.env.EMAIL;
export let password= process.env.PASSWORD;
export let secretkey= process.env.SECRET_KEY;
export let serverlink= process.env.SERVER_LINK;
export let databaselink= process.env.DATABASE_LINK;