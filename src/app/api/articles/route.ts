import db, { Post, PostData } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/articles
export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const pageNum = +(searchParams.get("pageNum") || "1");
    const pageSize = +(searchParams.get("pageSize") || "5");
    const query = searchParams.get("query") || "";

    let filterPosts = db.data.posts;
    if (query) {
        filterPosts = filterPosts.filter((post) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...rest } = post;
            return Object.values(rest).some((value) => value.toLowerCase().includes(query.toLowerCase()));
        });
    }

    const total = filterPosts.length;
    if (!total) {
        return NextResponse.json({
            code: 200,
            message: "success",
            data: {
                total,
                list: [],
            },
        });
    }

    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, total);
    let list: Post[] = [];
    if (total > startIndex) {
        list = filterPosts.slice(startIndex, endIndex);
    }

    return NextResponse.json({
        code: 200,
        message: "success",
        data: {
            total,
            list,
        },
    });
}

// POST /api/articles
export async function POST(request: NextRequest) {
    const body: PostData = await request.json();
    const id = Math.random().toString(36).slice(-8);

    await db.update(({ posts }) => {
        posts.push({ id, ...body });
    });

    return NextResponse.json({
        code: 200,
        message: "success",
        data: id,
    });
}
