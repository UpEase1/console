// Without a defined matcher, this line applies next-auth to every route
// export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

