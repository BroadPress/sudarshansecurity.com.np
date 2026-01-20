import Image from "next/image";
import type { Metadata } from "next";


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
  logo?: string;
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
    logo: "/images/testimonials/nameste.jpg",
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
    logo: "/images/testimonials/nameste.jpg",
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
    logo: "/images/testimonials/nameste.jpg",
  },
];

function toWhatsappLink(phone: string) {
  // Convert "+977-985-202-0058" -> "9779852020058"
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-gray-700">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/90 text-white text-sm">
        ✓
      </span>
      <span className="text-base">{children}</span>
    </li>
  );
}

function MessageBlock({ person }: { person: Person }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* LEFT CARD */}
      <div className="relative">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[320px] md:min-h-[360px] flex items-end justify-center p-10">
          {person.logo ? (
            <Image
              src={person.logo}
              alt="Company mark"
              width={90}
              height={90}
              className="opacity-80"
            />
          ) : (
            <div className="h-20 w-20 rounded-full border border-gray-200" />
          )}
        </div>

        {/* avatar (overlapping) */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden ring-8 ring-white shadow">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 144px, 176px"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="px-2 md:px-0">
        <p className="text-emerald-700 font-semibold italic tracking-wide">
          {person.role}
        </p>

        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {person.name}
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
          {person.message}
        </p>

        <ul className="mt-8 space-y-4">
          <BulletItem>
            <a className="hover:underline" href={`tel:${person.phone}`}>
              {person.phone}
            </a>
          </BulletItem>

          <BulletItem>
            <a className="hover:underline" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </BulletItem>

          <BulletItem>
            <a
              className="hover:underline"
              href={toWhatsappLink(person.phone)}
              target="_blank"
              rel="noreferrer"
            >
              {person.whatsappLabel ?? "WhatsApp Message"}
            </a>
          </BulletItem>
        </ul>
      </div>
    </div>
  );
}

export default function MessagePage() {
  return (
    <main className="bg-[#F4F6FB]">
      {/* Header */}
      <Ribbon name="Message" showfont={true} />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* ✅ Vertically stacked blocks */}
        <div className="space-y-16 md:space-y-20">
          {people.map((person) => (
            <MessageBlock key={person.email} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
