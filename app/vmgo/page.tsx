'use client';

import Image from 'next/image';
import Ribbon from '../../components/Ribbon';

export default function Vmgo() {
  return (
    <div className="min-h-screen">
      <Ribbon name="Vision, Mission, Goals and Objectives" showfont={false} />

      {/* Intro section */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-content-center place-items-center">
          <a href="#vision" className="flex flex-col justify-center items-center gap-3">
            <Image height={96} width={96} src="/images/vmgo/vision.webp" alt="Vision" className="w-24 h-24" />
            <p>Vision</p>
          </a>

          <a href="#mission" className="flex flex-col justify-center items-center gap-3">
            <Image height={96} width={96} src="/images/vmgo/mission.webp" alt="Mission" className="w-24 h-24" />
            <p>Mission</p>
          </a>

          <a href="#goals" className="flex flex-col justify-center items-center gap-3">
            <Image height={96} width={96} src="/images/vmgo/goals.webp" alt="Goals" className="w-24 h-24" />
            <p>Goals</p>
          </a>

          <a href="#objectives" className="flex flex-col justify-center items-center gap-3">
            <Image height={96} width={96} src="/images/vmgo/Objectives.webp" alt="Objectives" className="w-24 h-24" />
            <p>Objectives</p>
          </a>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="flex justify-between gap-24 mb-12 py-8 max-w-5xl mx-auto">
        <div className="hidden md:flex items-center mb-6">
          <Image height={600} width={800} src="/images/vmgo/vision.webp" alt="Vision" className="w-auto h-40" />
        </div>

        <div className="p-8 md:p-16 card space-y-4 max-w-3xl rounded-xl">
          <h2 className="text-3xl font-bold text">Vision</h2>
          <p className="text-md leading-relaxed mb-4">
            Our vision at <span className="font-semibold">Sudarshan Security Services Pvt. Ltd.</span> is to be a
            trusted leader in professional security services—creating safer environments for people, properties, and
            businesses across Nepal.
          </p>
          <p className="text-md leading-relaxed">
            We aim to set the standard for reliability, discipline, and service excellence by delivering security that
            clients can depend on—every day, in every assignment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="flex justify-between gap-24 mb-12 max-w-5xl mx-auto">
        <div className="p-8 md:p-16 bg-teal-700 text-white space-y-4 max-w-3xl rounded-xl">
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="text-md leading-relaxed">
            Our mission is to provide professional, responsive, and ethical security solutions through well-trained
            personnel, strong supervision, and clear operating procedures—tailored to each client’s needs.
          </p>
          <p className="text-md leading-relaxed">
            We are committed to protecting people and assets, preventing risk, and maintaining order with discipline,
            respect, and continuous improvement.
          </p>
        </div>

        <div className="hidden md:flex items-center mb-6">
          <Image height={600} width={800} src="/images/vmgo/mission.webp" alt="Mission" className="w-auto h-40" />
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="flex justify-between gap-24 py-8 max-w-5xl mx-auto">
        <div className="hidden md:flex items-center mb-6">
          <Image height={600} width={800} src="/images/vmgo/goals.webp" alt="Goals" className="w-60 h-40" />
        </div>

        <div className="p-8 md:p-16 space-y-4 card rounded-xl">
          <h2 className="text-3xl font-bold text">Our Goals</h2>
          {[
            'Deliver dependable security guarding and protection services with consistent quality and professionalism.',
            'Build a highly trained, disciplined, and customer-focused security workforce through continuous training.',
            'Strengthen client trust through timely communication, strong supervision, and transparent reporting.',
            'Reduce security risks through proactive patrolling, incident prevention, and emergency preparedness.',
          ].map((goal, index) => (
            <div key={index} className="flex items-center gap-3 pl-4">
              <ul className="list-disc">
                <li>{goal}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="flex justify-between gap-24 mb-12 py-8 max-w-5xl mx-auto">
        <div className="p-8 md:p-16 space-y-4 text-white bg-teal-700 max-w-3xl rounded-xl">
          <h2 className="text-3xl font-bold">Objectives</h2>
          {[
            'Provide site-specific security plans for each client, including duty instructions, patrol routes, and reporting formats.',
            'Maintain strict standards of discipline, grooming, attendance, and conduct for all deployed personnel.',
            'Ensure quick response and proper escalation for incidents through supervision, control rooms, and clear SOPs.',
            'Improve service quality through regular audits, client feedback, refresher training, and performance reviews.',
          ].map((objective, index) => (
            <div key={index} className="flex items-center gap-3 pl-4">
              <ul className="list-disc">
                <li>{objective}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center mb-6">
          <Image height={600} width={800} src="/images/vmgo/Objectives.webp" alt="Objectives" className="w-auto h-44" />
        </div>
      </section>
    </div>
  );
}
