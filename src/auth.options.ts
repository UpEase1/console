import AzureADProvider from 'next-auth/providers/azure-ad';
import type { NextAuthOptions } from 'next-auth'

// Check for required environment variables
const { AZURE_AD_CLIENT_ID, AZURE_AD_CLIENT_SECRET, AZURE_AD_TENANT_ID, MASTER_BACKEND_AZURE_AD_CLIENT_ID } = process.env;

if (!AZURE_AD_CLIENT_ID || !AZURE_AD_CLIENT_SECRET || !AZURE_AD_TENANT_ID) {
  throw new Error("Missing environment variables for Azure AD authentication");
}

const options = {
  session: { strategy: "jwt" },
  providers: [
    AzureADProvider({
      clientId: AZURE_AD_CLIENT_ID,
      clientSecret: AZURE_AD_CLIENT_SECRET,
      tenantId: AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope: `openid api://${MASTER_BACKEND_AZURE_AD_CLIENT_ID}/UpeaseUnified.ReadWrite.All`, // Add your desired scopes here
          // You might also need to set additional parameters depending on your requirements
        },
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // If account is not null and accessToken is available, save it in the token
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass accessToken to the client-side session
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // pages: {
  //   signIn: '/login',
  // },
} satisfies NextAuthOptions
export default options; 