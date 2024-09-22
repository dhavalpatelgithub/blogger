import Image from "next/image";

export default function Figure({content}: any) {
    return (
        <figure>
            <Image
            width={2000}
            height={2000}
            src={content?.src}
            alt=""
            />
            <figcaption>{ content?.caption }</figcaption>
        </figure>
    );
}