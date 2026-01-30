import Image from "next/image";

export default function NOtice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Sudarshan Security Services"
            width={100}
            height={20}
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-200">
            Sudarshan Security Services
          </span>
        </div>

        {/* News */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Latest News & Updates
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Stay informed with announcements, service updates, and operational
            notices from Sudarshan Security Services Pvt. Ltd. We regularly share
            important updates about deployments, training programs, client
            support, and safety standards.
          </p>

          <div className="max-w-md rounded-2xl border border-black/[.08] p-5 text-left dark:border-white/[.145]">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Operational Update
            </p>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Our rapid response coordination and site supervision checks have
              been strengthened across active locations to ensure consistent
              service quality and faster on-ground support.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
              Updated: Jan 30, 2026
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/news"
          >
            View All News
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
