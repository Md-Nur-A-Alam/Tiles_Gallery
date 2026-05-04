import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
})

// Export helpers from the same single instance
export const { signIn, signUp, useSession } = authClient  // from the SAME instance
