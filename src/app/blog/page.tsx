import Link from "next/link";

export default function Blog() {
    return (
        <>
            <ul className="m-10">
                <li>
                    <Link href="/blog/1">1</Link>
                </li>
                <li>
                    <Link href="/blog/2">2</Link>
                </li>
                <li>
                    <Link href="/blog/3">3</Link>
                </li>
            </ul>
        </>
    );
}
