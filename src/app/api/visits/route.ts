import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const visits = await redis.incr("site_visits");
    return NextResponse.json({ visits });
  } catch (e) {
    return NextResponse.json({ visits: -1, error: String(e) });
  }
}
