import React from "react";

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    return {
        title: `BlogDetail - ${id}`,
    };
}

export default async function BlogDetail({ params }: Props) {
    const { id } = await params;
    return <div className="m-10">BlogDetail {id}</div>;
}
