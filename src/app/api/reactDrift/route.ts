import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    try {
        const participantList = await prisma.reactDriftParticipants.findMany({
            orderBy: {submittedAt: "desc"}
        })
        return NextResponse.json(participantList)
    } catch (error) {
        NextResponse.json({
            error: "Error retrieving participant list"
        }, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}
