import NextAuth from "next-auth"
import CredentialsProviders from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

function checkPassword(password: any) {
    if (typeof password === "string") {
        return password;
    }
    return password.toString();
}

declare module "next-auth" {
    interface Session {
      user: User | null | undefined;
    }
}
  
interface User {
    id:     any | null
    email:  String
    name:   String | null | undefined
    image:  any | null
}

const handler = NextAuth({
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email.address@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                if (user && 
                    (await bcrypt.compare(credentials.password, checkPassword(user.password)))
                ) {
                    return {
                        id: `${user.id}`,
                        email: user.email,
                        name: user.prefix+' '+user.firstname+' '+user.lastname,
                        image: user.profile,
                        roleId: `${user.roleId}`
                    }
                } else {
                    throw new Error('Invalid email or password')
                }
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.image = user.image;
            }
            return token;
        },

        session: async ({ session, token }) => {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.image = token.image;
            }
            return session;
        },
    },
})

export { handler as GET, handler as POST }