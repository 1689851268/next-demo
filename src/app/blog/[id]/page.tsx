import React from "react";

export default async function BlogDetail({ params }: { params: { id: string } }) {
    const { id } = await params;
    return <div>BlogDetail {id}</div>;
}
