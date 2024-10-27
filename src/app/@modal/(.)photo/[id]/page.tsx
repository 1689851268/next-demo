"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ModalInterceptingPhoto({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params);

    return (
        <div className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]" onClick={() => router.back()}>
            <Image
                src={`https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-${id}.jpg`}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                width={500}
                height={500}
                className="rounded-lg"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
