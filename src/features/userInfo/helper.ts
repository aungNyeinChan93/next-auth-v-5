import prisma from "@/lib/prisma/prisma-client";



export async function getUserDatiel(id: number | string = '') {

    return await prisma.user.findUnique({
        where: { id: id as string },
        include: {
            articles: true,
            Comment: true
        },
    })
}