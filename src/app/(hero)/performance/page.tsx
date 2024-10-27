import Hero from "@/components/Hero";
import image from "../../../../public/1.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Performance",
};

const data = {
    imgUrl: image,
    altTxt: "Performance Image",
    content: "Performance Content",
};

export default function Performance() {
    return <Hero {...data} />;
}
