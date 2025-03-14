import prisma from "./prisma";

export default async function getFurnitureById(id) {
    const furnitures = await prisma.furniture.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            reviews: true,
            tags: true,
            variations: {
                include: {
                    color: true
                }
            }
        }
    }
    );
    return furnitures
}