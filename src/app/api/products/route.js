import { NextResponse } from "next/server";
import database_url from "@/lib/database";
// import PocketBase from "pocketbase";

const url = database_url;
// const client = new PocketBase(url);

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 20;

  if (code !== "balloons") {
    return new NextResponse(null, { status: 404 });
  }

  const res = await fetch(
    `${url}api/collections/products/records?perPage=${limit}&page=${page}`,
    {
      headers: {
        "pass": "2378",
      },
    }
  );
  const data = await res.json();

  return new NextResponse(JSON.stringify({ data }));
}
