import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.dormitory.findMany();
        return Response.json(data)
    } catch (error) {
        throw new Error("Failed to fetch data!");
    }
}