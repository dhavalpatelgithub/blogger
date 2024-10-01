import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 dark:text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          width={750}
          height={750}
          src="/images/404.png"
          className="mb-5 rounded-lg"
          alt="404 - Page Not Found"
        />
      </main>
    </div>
  );
}
