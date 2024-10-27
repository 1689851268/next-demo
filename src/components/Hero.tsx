import Image, { StaticImageData } from "next/image";

interface IProps {
    imgUrl: StaticImageData;
    altTxt: string;
    content: string;
}

export default function Hero({ imgUrl, altTxt, content }: IProps) {
    return (
        <div className=" h-screen relative">
            <div className="absolute inset-0 -z-10">
                <Image src={imgUrl} alt={altTxt} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
            </div>
            <div className="flex justify-center items-center h-full">
                <h1 className="text-white text-6xl">{content}</h1>
            </div>
        </div>
    );
}
