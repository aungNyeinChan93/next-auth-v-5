import prisma from "@/lib/prisma/prisma-client"
import { type Quote } from "./type";


export async function getAllQuotes() {
    const quotes: Quote[] | undefined = await prisma.quote.findMany();
    return quotes;
}