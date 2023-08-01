import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    developer: "Mark Kenneth Calendario",
    status: "running"
  });
}
