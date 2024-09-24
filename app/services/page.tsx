import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services for blog',
  description: 'List of services for blog website.',
  openGraph: {
    title: "Services for blog",
    images: ['https://en.wikipedia.org/wiki/Dummy_%28TV_series%29#/media/File:Dummy_Title_Card.jpeg']
  }
};

export default function Page() {
  return (
    <main className="pt-20 pb-16 lg:pt-20 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div>Services coming soon</div>
    </main>
  );
}
