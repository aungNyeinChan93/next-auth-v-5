import prisma from '@/lib/prisma/prisma-client'

// get all articles
export async function getAllArticles(limit: string | number = 10) {
    const articles = await prisma?.article.findMany({
        include: {
            author: true,
            comments: true
        },
        orderBy: {
            id: "desc"
        },
        take: limit as number
    });
    return articles;
}