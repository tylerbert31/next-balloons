import connectMongoDb from "@/db/mongodb";
import Product from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDb();
  const products = await Product.find();
  return NextResponse.json({ products });
}
