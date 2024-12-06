// app/api/authenticated-request/route.ts
import { NextResponse } from "next/server";
import { makeAuthenticatedRequest } from "@/actions/makeAuthenticatedRequest";

export async function POST(req: Request) {
  const body = await req.json();
console.log(body)
  // Appel de makeAuthenticatedRequest
  const response = await makeAuthenticatedRequest(
    body.url,
    body.method,
    body.body,
    body.headers,
  );

  return NextResponse.json(response);
}
