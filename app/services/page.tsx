import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services for blog",
  description: "List of services for blog website.",
  openGraph: {
    title: "Services for blog",
    images: [
      "https://en.wikipedia.org/wiki/Dummy_%28TV_series%29#/media/File:Dummy_Title_Card.jpeg",
    ],
  },
};

export default function Page() {
  return (
    <main className="pt-20 pb-16 lg:pt-20 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
          key="blog"
          className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <h1>Our Blog Services</h1>
          <p>
            At [Your Blog Name], we offer specialized blog services designed to
            enhance your global reach and improve user experience. Our{" "}
            <strong>multilingual blog setup</strong> ensures your content is
            accessible in multiple languages, making it easy to connect with
            diverse audiences worldwide. We also optimize your blog’s
            readability with <strong>light and dark theme enhancements</strong>,
            providing seamless switching between modes while ensuring color
            contrast and typography are perfect for any setting. Whether you
            need engaging <strong>SEO-optimized content</strong> or a sleek,
            user-friendly design, our expert team will help you create a blog
            that looks great, reads well, and ranks high in search engines.
            Ready to elevate your blog? Contact us today!
          </p>

          <p>
            At [Your Blog Name], we are continuously evolving to meet the
            ever-changing needs of our clients and the blogging world. We're
            committed to staying ahead of trends, constantly refining our
            services to ensure your blog is always at its best. Whether it's
            incorporating the latest SEO practices, improving multi-language
            integration, or enhancing theme readability, we're dedicated to
            making your blog more effective, accessible, and engaging. As we
            grow, so will your blog’s potential, ensuring it remains relevant
            and competitive in today’s digital landscape. We're excited about
            the journey ahead and can't wait to bring these improvements to your
            blog!
          </p>
        </article>
      </div>
    </main>
  );
}
