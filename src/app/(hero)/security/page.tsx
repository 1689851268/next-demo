import Hero from "@/components/Hero";
import image from "../../../../public/3.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security",
};

const data = {
    imgUrl: image,
    altTxt: "Security Image",
    content: "Security Content",
};

export default function Security() {
    return <Hero {...data} />;
}
