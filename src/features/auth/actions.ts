'use server'

import prisma from "@/lib/prisma/prisma-client";
import { hashPassword } from "./helper";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/next-auth/auth";

// login with credentail
export async function loginWithCredential(initialState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, error: 'Some Fields are required!' }
    }

    try {
        await signIn('credentials', { redirect: false, email, password });
    } catch (error) {
        if (error instanceof Error) {
            // return { success: false, error: error?.message }
            console.error(error?.message)
            return { success: false, error: 'Credential Error!' }
        }
    }
    return redirect('/')
}

// register action
export async function registerAction(initialState: any, formDate: FormData) {

    const email = formDate.get('email') as string;
    const password = formDate.get('password') as string;

    if (!email || !password) {
        return { success: false, error: 'some fields are required!' }
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email as string
        }
    });

    if (user) {
        return { success: false, error: 'Emial is already exists!' }
    }

    try {
        await prisma.user.create({
            data: {
                email: email,
                password: await hashPassword(password as string, 10)
            }
        });
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error?.message }
        }
    };

    return redirect('/login')
}