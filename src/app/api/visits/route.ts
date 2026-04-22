import { NextResponse } from "next/server";
import Redis from "ioredis";

export async function GET() {
  try {
    const redis = new Redis(process.env.REDIS_URL!, { lazyConnect: true, connectTimeout: 3000 });
    const visits = await redis.incr("site_visits");
    redis.quit();
    return NextResponse.json({ visits });
  } catch (e) {
    return NextResponse.json({ visits: -1, error: String(e) });
  }
}
