import Image from "next/image";

export default function Header({ content }: any) {
    return (
        <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image
                width={500}
                height={500}
                className="mr-4 w-16 h-16 rounded-full"
                src={content?.address?.authorPicture}
                alt="Author profile picture"
                />
                <div>
                <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                >
                    { content?.address?.authorName }
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                    { content?.address?.authorDesignation }
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                    <time title="February 8th, 2022">{ content?.address?.updatedDate }</time>
                </p>
                </div>
            </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            { content?.content }
            </h1>
        </header>
    );
}