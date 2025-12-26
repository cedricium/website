import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

import { FILE_MAPPINGS } from "@/lib/files";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const mapping = FILE_MAPPINGS[slug];

  if (!mapping) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "public", mapping.path);

  try {
    const fileBuffer = await readFile(filePath);
    const disposition = mapping.inline ? "inline" : "attachment";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": mapping.contentType,
        "Content-Disposition": `${disposition}; filename="${mapping.path}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
