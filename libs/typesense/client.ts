import * as dotenv from "dotenv";
dotenv.config();
import { Client } from "typesense";

export const typesense = new Client({
  apiKey: process.env.ADMIN_API_KEY as string,
  nodes: [
    {
      host: process.env.TYPESENSE_NODE_HOST as string,
      port: Number(process.env.TYPESENSE_NODE_PORT as string),
      protocol: process.env.TYPESENSE_NODE_PROTOCOL as string,
    },
  ],
  connectionTimeoutSeconds: 600,
});
