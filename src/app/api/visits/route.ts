import { NextResponse } from "next/server";
import Redis from "ioredis";

export async function GET(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
    const redis = new Redis(process.env.REDIS_URL!, { lazyConnect: true, connectTimeout: 3000 });
    const added = await redis.sadd("unique_visitors", ip);
    const visits = await redis.scard("unique_visitors");
    redis.quit();
    return NextResponse.json({ visits, isNew: added === 1 });
  } catch (e) {
    return NextResponse.json({ visits: -1, error: String(e) });
  }
}
