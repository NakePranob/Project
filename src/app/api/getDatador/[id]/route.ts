import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const data = await prisma.dormitory.findUnique({
            where: {id: id},
            include: { 
                user: true,
                dormitory_state: true,
                dormitory_type: {
                    include: {
                        dormitory_img: true,
                        dormitory_facilitate: true
                    }
                },
                review: {
                    include: {
                        user: true
                    }
                },
             }
        });
        return Response.json(data)
    } catch (error) {
        return Response.json({ error: "Failed to fetch data!" })
    }
}