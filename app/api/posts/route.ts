import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    // return NextResponse.json(['Hello GET'])
    return NextResponse.json({ data: ['React', 'Next'] }, { status: 200 })
}

export async function POST() {
    // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    return NextResponse.json(['Hello POST'])
}