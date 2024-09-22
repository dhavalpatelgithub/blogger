import Image from "next/image";

export default function Img({ content }: any) {
    return (
        <Image
            width={2000}
            height={2000}
            src={ content?.src }
            alt=""
        />
    );
}