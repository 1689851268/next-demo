import Image from "next/image";
import React from "react";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="container mx-auto pt-8 ">
            <Image
                className="rounded-lg mx-auto"
                src={`https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-${id}.jpg`}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                width={500}
                height={500}
            />
            <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-5">
                <p>
                    <strong>Title:</strong> Earthen Bottle
                </p>
                <p>
                    <strong>Price:</strong> $48
                </p>
                <p>
                    <strong>Description:</strong>
                    Tall slender porcelain bottle with natural clay textured body and cork stopper.
                </p>
            </div>
        </div>
    );
}
