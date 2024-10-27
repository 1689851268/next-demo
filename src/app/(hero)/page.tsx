import Hero from "@/components/Hero";
import image from "../../../public/0.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
};

const data = {
    imgUrl: image,
    altTxt: "Home Image",
    content: "Home Content",
};

export default function Home() {
    return <Hero {...data} />;
}
