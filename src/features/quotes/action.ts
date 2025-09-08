'use server'

import prisma from "@/lib/prisma/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createQuoteAction(initialState: any, formData: FormData) {
    const quote = formData.get('quote') as string;

    if (!quote.trim()) {
        return { success: false, error: 'input field can not be undefined' }
    }
    const create_quote = await prisma.quote.create({ data: { title: quote } });
    if (!create_quote) {
        return { success: true, error: 'quote create fail!' }
    };
    revalidatePath('/quotes')

    return redirect('/quotes')
}