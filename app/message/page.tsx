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
      className="group relative w-full max-w-[560px] mx-auto rounded-3xl border shadow-sm hover:shadow-md transition overflow-hidden"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      {/* subtle top accent */}
      <div className="h-1 w-full" style={{ background: "rgba(0,0,0,0.06)" }} />

      <div className="p-6 sm:p-8">
        {/* Centered Avatar + Name + Role */}
        <header className="flex flex-col items-center text-center">
          <div
            className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border shadow"
            style={{
              borderColor: "var(--border)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>

          <h2
            className="mt-4 text-xl sm:text-2xl font-extrabold leading-tight"
            style={{ color: "var(--text)" }}
          >
            {person.name}
          </h2>

          <p
            className=" mt-1 text-sm sm:text-base font-semibold"
            style={{ color: "var(--text2)" }}
            
          >
            {person.role}
          </p>
        </header>

        {/* Message */}
        <p
          className="cardText mt-6 text-[15px] sm:text-base leading-relaxed"
          style={{ color: "var(--text2)" }}
        >
          {person.message}
        </p>

        {/* Contacts: different lines + centered */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <ActionLink className="w-full max-w-sm" href={`tel:${person.phone}`}>
            📞 {person.phone}
          </ActionLink>

          <ActionLink className="w-full max-w-sm" href={`mailto:${person.email}`}>
            ✉️ {person.email}
          </ActionLink>

          <ActionLink
            className="w-full max-w-sm"
            href={toWhatsappLink(person.phone)}
            external
          >
            💬 {person.whatsappLabel ?? "WhatsApp Message"}
          </ActionLink>
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
