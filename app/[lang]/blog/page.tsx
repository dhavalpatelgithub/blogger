import Image from "next/image";
import { promises as fs } from 'fs';
import path from "path";
import Link from "next/link";
import { getBlogs } from "@/app/api/api";
import { Props } from "@/app/model/common-model";
import { LangStorage } from "@/app/api/storage";

export default async function Page({ params }: Props) {
    let lang = 'en';
    if (params?.lang) {
        lang = params?.lang;
    } else {
        lang = LangStorage.getLang();
    }
    const blogs = await getBlogs(lang);
    
    return (
        <>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 px-10 pt-20 dark:bg-gray-900">
                { blogs.map((blog: any) => {
                    return (
                        <article key={blog.title} className="max-w-xs">
                            <Link href={`/${blog.lang}/blog/${blog.id}`}>
                                <Image
                                width={500}
                                height={500}
                                src={blog.images[0]}
                                className="mb-5 rounded-lg"
                                alt="Image 1"
                                />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <Link href={`/${blog.lang}/blog/${blog.id}`}>{blog.title}</Link>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-white-400">
                                { blog.description }
                            </p>
                            <Link
                                href={`/${blog.lang}/blog/${blog.id}`}
                                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-white hover:no-underline"
                            >
                                Read in 2 minutes
                            </Link>
                        </article>
                    )
                }) }
          </div>
        </>
    )
}