import React from "react";
import { Target, Gem, Eye } from "lucide-react";

type CommitmentCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
};


function CommitmentCard({ title, description, Icon }: CommitmentCardProps) {
  return (
    <div
      className="
        group
        rounded-[28px]
        h-112
        px-[calc(2rem+20px)] py-[calc(2.5rem+20px)]
        sm:px-[calc(2.5rem+20px)] sm:py-[calc(3rem+20px)]
        shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
      "
      style={{
        background: "var(--background)",
        border: "6px solid #EEE9DB",
        color: "var(--text)",
        minHeight: "calc(100% + 20px)", // ensures extra length even if content is short
      }}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <Icon
          className="
            h-7 w-7
            transition-transform duration-300 ease-out
            group-hover:scale-110 group-hover:-rotate-6
          "
          style={{ color: "var(--text)" }}
          strokeWidth={1.6}
        />
        <h3 className="text-2xl font-extrabold" style={{ color: "var(--text)" }}>
          {title}
        </h3>
      </div>

      <p
        className="text-center text-[16px] sm:text-[17px] leading-8"
        style={{ color: "var(--text2)" }}
      >
        {description}
      </p>
    </div>
  );
}


export default function CommitmentsSection() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{
       
        background: "var(--mainBackground)",
      }}
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <p
            className="font-semibold text-2xl italic tracking-wide"
            style={{ color: "#00715D" }}
          >
            Our commitments
          </p>

          <h2
            className="mt-3 text-4xl sm:text-4xl font-bold leading-tight"
            style={{ color: "var(--text)" }}
          >
            Commitment is an act,
            <br />
            not a word
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <CommitmentCard
            title="Mission"
            Icon={Target}
            description="To offer the greatest defense and establish the benchmark for security services that consistently surpass the needs of our clients. Save lives and property by using creative and original ideas!"
          />

          <CommitmentCard
            title="Values"
            Icon={Gem}
            description="Be proud of what we do and do it with the utmost honesty, integrity, and fairness. Aim to complete each assignment in a superior way. Always look for better methods to do everything is innovation."
          />

          <CommitmentCard
            title="Vision"
            Icon={Eye}
            description="A devoted security team, works to reach the highest level of customer satisfaction through insightful risk solutions, exceptional service, and the best possible protection for our clients and their assets."
          />
        </div>
      </div>
    </section>
  );
}
