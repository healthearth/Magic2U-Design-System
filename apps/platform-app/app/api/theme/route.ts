import { NextResponse } from "next/server"
import { baseTokens } from "@magic2u/tokens"
import { createTheme } from "@magic2u/theme-engine"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const brand = searchParams.get("brand")

  if (brand === "unitedhealthcare") {
    return NextResponse.json(
      createTheme(baseTokens, {
        colors: { primary: "#0057B8" },
      })
    )
  }

  return NextResponse.json(baseTokens)
}
