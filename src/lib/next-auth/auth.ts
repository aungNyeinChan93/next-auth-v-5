import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma/prisma-client";
import { isVerify } from "@/features/auth/helper";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "*****",
                },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;
                if (!email && !password) {
                    throw new CredentialsSignin('some fields are required!')
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: email as string
                    }
                });
                if (!user) {
                    throw new Error('User not found!')
                }
                const isCorrect = await isVerify(password as string, user?.password as string)
                if (!isCorrect) {
                    throw new Error('Credentials is not correct!')
                }
                return user;
            },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (token?.sub) {
                session.user!.id = token?.sub
            }
            return session;
        },
        signIn: async ({ user, account }) => {
            if (account?.provider === 'github') {
                const { id, email, image, name } = user;
                const alreadyUser = await prisma.user.findUnique({ where: { email: email as string } })
                if (!alreadyUser) {
                    await prisma.user.create({
                        data: {
                            provider_id: id,
                            email: email as string,
                            name: name,
                        }
                    })
                }
                return true;
            }
            if (account?.provider === 'credentials') {
                return true
            }
            return false
        }
    }


})