import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Ribbon from "../../components/Ribbon";

export const metadata: Metadata = {
  title: "Message | Sudarshan Security Services",
  description: "Messages from our management team at Sudarshan Security Services Pvt. Ltd.",
};

type Person = {
  role: string;
  name: string;
  image: string;
  message: string;
  phone: string;
  email: string;
  whatsappLabel?: string;
};

const people: Person[] = [
  {
    role: "Managing Director",
    name: "Dambar Bahadur Tamang",
    image: "/images/team/1.png",
    message:
      "With more than two decades of experience in the field of private security arrangement, having defence background. It is an important part of human being and all type of industrial and commercial sectors. The Sudarshan Security Services Pvt. Ltd. is a professional security company. Has been providing more than 1500 security personnels all over Nepal in the various aspects of industries, commercial banks, finance companies, hotel premises, school compound etc.",
    phone: "+977-985-202-0058",
    email: "dambar@sudarshansecurity.com.np",
    whatsappLabel: "WhatsApp Message",
  },
  {
    role: "General Manager",
    name: "Keshab Adhikari",
    image: "/images/team/2.png",
    message:
      "Being a General Manager of Sudarshan Security Services, Pvt. Ltd. with an experience of more than two decades. I enjoy to manage the best manpower. We always find satisfaction into providing the security personnel’s minor, major problems quickly & positively is my main goal. Past experience always plays productive role on my further steps to the Sudarshan Security Services, Pvt. Ltd. forever.",
    phone: "+977-985-205-4100",
    email: "keshab@sudarshansecurity.com.np",
    whatsappLabel: "WhatsApp Message",
  },
  {
    role: "Operation Director",
    name: "Ramesh Ghising",
    image: "/images/team/4.png",
    message:
      "Sudarshan Security Services, Pvt. Ltd. express glory for creating employment for more than 2200 men & women within the native land. Producing & providing capable man power is our main goal. Being sage & providing safety is our Moto. Its may glory to be part of Sudarshan Security Services, Pvt. Ltd. as an operation officer. I regard, my past experience of Deputy Superintendent of Police will be fruitful for this company. As an Operation Officer, my effort will always spend to manage the dedicated manpower of the clients.",
    phone: "+977-985-102-4462",
    email: "ramesh@sudarshansecurity.com.np",
    whatsappLabel: "WhatsApp Message",
  },
];

function toWhatsappLink(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function ActionLink({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex items-center justify-center  px-4 py-2 text-sm font-semibold transition
                   hover:shadow-sm ${className}`}
      
    >
      {children}
    </a>
  );
}

function MessageCard({ person }: { person: Person }) {
  return (
    <article
      className="
        w-full max-w-6xl mx-auto
        flex flex-col md:flex-row
        md:items-start items-center
        gap-6 md:gap-10
        py-10
      "
      style={{ color: "var(--text)" }}
    >
      {/* Left: Big circular photo */}
      <div className="shrink-0">
        <div
          className="
            relative
            w-28 h-28
            sm:w-32 sm:h-32
            md:w-44 md:h-44
            rounded-full overflow-hidden
            border
            shadow
          "
          style={{
            borderColor: "var(--border)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
          }}
        >
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 176px"
          />
        </div>
      </div>

      {/* Right: Message + Name/Role */}
      <div className="flex-1 w-full">
        <p
          className="text-[15px] sm:text-base leading-relaxed text-justify"
          style={{ color: "var(--text2)" }}
        >
          {person.message}
        </p>

        {/* Name + Role (under the message like screenshot) */}
        <div className="mt-6">
          <p className="font-bold text-sm" style={{ color: "var(--text)" }}>
            {person.name}
          </p>
          <p className="text-xs font-semibold" style={{ color: "var(--text2)" }}>
            {person.role}
          </p>
        </div>

        {/* Optional: contacts (nice inline row) */}
        <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <ActionLink
            className="rounded-full border"
            href={`tel:${person.phone}`}
            children={`📞 ${person.phone}`}
          />
          <ActionLink
            className="rounded-full border"
            href={`mailto:${person.email}`}
            children={`✉️ ${person.email}`}
          />
          <ActionLink
            className="rounded-full border"
            href={toWhatsappLink(person.phone)}
            external
            children={`💬 ${person.whatsappLabel ?? "WhatsApp Message"}`}
          />
        </div>
      </div>
    </article>
  );
}


export default function MessagePage() {
  return (
    <main
      className="pb-20"
      style={{
        background: "var(--mainBackground)",
        color: "var(--text)",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <Ribbon name="Message" showfont={true} />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Vertically stacked cards */}
        <div className="space-y-10">
          {people.map((person) => (
            <MessageCard key={person.email} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
