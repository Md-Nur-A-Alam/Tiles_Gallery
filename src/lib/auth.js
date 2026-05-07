import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4'])

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);

// Connect once and reuse the same promise across all requests (singleton pattern)
const clientPromise = client.connect();

await clientPromise;
const db = client.db("Nur_PH13_A8_tiles");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || "http://localhost:3000",
    ],
    database: mongodbAdapter(db, {
        client,
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});