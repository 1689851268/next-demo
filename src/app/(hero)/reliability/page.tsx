import Hero from "@/components/Hero";
import image from "../../../../public/2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reliability",
};

const data = {
    imgUrl: image,
    altTxt: "Reliability Image",
    content: "Reliability Content",
};

export default function Reliability() {
    return <Hero {...data} />;
}
