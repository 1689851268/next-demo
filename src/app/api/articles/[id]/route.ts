import db, { Post } from "@/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    id: string;
}

// DELETE /api/articles/:id
export async function DELETE(request: NextRequest, { params }: { params: Promise<Params> }) {
    const { id } = await params;
    let data: Post | null = null;

    await db.update(({ posts }) => {
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            [data] = posts.splice(index, 1);
        }
    });

    if (!data) {
        return NextResponse.json({
            code: 404,
            message: "Not Found",
        });
    }

    return NextResponse.json({
        code: 200,
        message: "success",
        data,
    });
}

// PATCH /api/articles/:id
export async function PATCH(request: NextRequest, { params }: { params: Promise<Params> }) {
    const { id } = await params;
    const body = await request.json();
    let data: Post | null = null;

    await db.update(({ posts }) => {
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            posts[index] = { ...posts[index], ...body };
            data = posts[index];
        }
    });

    if (!data) {
        return NextResponse.json({
            code: 404,
            message: "Not Found",
        });
    }

    return NextResponse.json({
        code: 200,
        message: "success",
        data,
    });
}

// PUT /api/articles/:id
export async function PUT(request: NextRequest, { params }: { params: Promise<Params> }) {
    const { id } = await params;
    const body = await request.json();
    let data: Post | null = null;

    await db.update(({ posts }) => {
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            posts[index] = { id, ...body };
            data = posts[index];
        }
    });

    if (!data) {
        return NextResponse.json({
            code: 404,
            message: "Not Found",
        });
    }

    return NextResponse.json({
        code: 200,
        message: "success",
        data,
    });
}

// GET /api/articles/:id
export async function GET(request: NextRequest, { params }: { params: Promise<Params> }) {
    const { id } = await params;

    const post = db.data.posts.find((post) => post.id === id);

    if (!post) {
        return NextResponse.json({
            code: 404,
            message: "Not Found",
        });
    }

    return NextResponse.json({
        code: 200,
        message: "success",
        data: post,
    });
}
