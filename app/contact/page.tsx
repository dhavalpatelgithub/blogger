import { Metadata } from "next";
import Image from "next/image";

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
      <div>Contact coming soon</div>
    </main>
  );
}
