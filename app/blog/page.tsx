import Image from "next/image";
import { promises as fs } from 'fs';
import path from "path";
import Link from "next/link";

const getBlogs = async () => {
    const file = await fs.readFile(path.join(process.cwd(), `/data/blogs.json`), 'utf8');
    const data = JSON.parse(file);
    if (data) {
      return data;
    }
    return null;
};

export default async function Page() {
    const blogs = await getBlogs();
    
    return (
        <>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 px-10 pt-20 dark:bg-gray-900">
                { blogs.map((blog: any) => {
                    return (
                        <article key={blog.title} className="max-w-xs">
                            <Link href={`/blog/${blog.id}/${blog.lang}`}>
                                <Image
                                width={500}
                                height={500}
                                src={blog.images[0]}
                                className="mb-5 rounded-lg"
                                alt="Image 1"
                                />
                            </Link>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <Link href={`/blog/${blog.id}/${blog.lang}`}>{blog.title}</Link>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-white-400">
                                { blog.description }
                            </p>
                            <Link
                                href={`/blog/${blog.id}/${blog.lang}`}
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