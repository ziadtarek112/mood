import { getUSerByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST () {
    const user = await getUSerByClerkId();

    const entry = await prisma.journalEntry.create({
        data : {
            userId : user.id,
            content : 'Write you jounal entry here'
        }
    })
    return NextResponse.json({data : entry})
}