import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact for blog',
  description: 'Contact details for blog website.',
  openGraph: {
    title: "Contact for blog",
    images: ['https://en.wikipedia.org/wiki/Dummy_%28TV_series%29#/media/File:Dummy_Title_Card.jpeg']
  }
};

export default function Page() {
  return (
    <main className="pt-20 pb-16 lg:pt-20 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
          key="blog"
          className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <h2>Contact Us</h2>
          <p>We’re here to help! Whether you have questions, need support, or want to explore how we can collaborate, feel free to reach out. We’d love to hear from you!</p>
          <h3>Get in Touch</h3>
          <h4>Email Us</h4>
          <p>For general inquiries or service requests:</p>
          <p>📧 pateldhaval891@gmail.com</p>
          <h4>Call Us</h4>
          <p>Speak directly with a member of our team:</p>
          <p>📞 +91 9574040028</p>
          <h4>Business Hours</h4>
          <p>We’re available from:</p>
          <p>🕒 Monday – Friday: 9:00 AM – 5:00 PM (Your Time Zone)</p>
          <h3>Follow Us</h3>
          <p>Stay updated with our latest news, blog posts, and offerings by connecting with us on social media:</p>
          <p>🔗 <a href="https://github.com/dhavalpatelgithub">https://github.com/dhavalpatelgithub</a></p>
        </article>
      </div>
    </main>
  );
}
