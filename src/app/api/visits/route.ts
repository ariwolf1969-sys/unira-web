import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    const visits = await kv.incr("site_visits");
    return NextResponse.json({ visits });
  } catch {
    return NextResponse.json({ visits: 0 });
  }
}
