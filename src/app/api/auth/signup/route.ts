import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
const pump = promisify(pipeline);
const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
    return Response.json({
        message:"Success",
    })
}

export async function POST(req: Request, res: Response) {

    try{
        const formData = await req.formData();
        const file:any = formData.getAll('image')[0]
        const firstname = formData.get('firstname') as string
        const lastname = formData.get('lastname') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const day = formData.get('day') as string
        const month = formData.get('month') as string
        const year = formData.get('year') as string

        const myDay:string = day.length < 2 ? '0' + day : day;
        const myMonth:string = month.length < 2 ? '0' + month : month;
        const birthday = year + '-' + myMonth + '-' + myDay;

        const fileName = Date.now()+'-'+file.name;
        if (typeof file !== "string") {
            const filePath = `./public/images/profile/${fileName}`;
            await pump(file.stream(), fs.createWriteStream(filePath));
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                profile: `${typeof file !== "string" ? fileName : "profile.webp"}`,
                firstname,
                lastname,
                birthday,
                roleId: 1
            }
        })
        return Response.json({
            message:"Success",
            data: newUser,
        })
    }
    catch (error) {
        return Response.json({
            message: "Email already exists",
            data: "มีอีเมลนี้ในระบบแล้ว!"
        })
    }
}