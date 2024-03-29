// types/next-auth.d.ts
import 'next-auth';
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Extends the built-in session types
   */
  interface Session {
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
  }
}
