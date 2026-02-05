'use client';

import React from 'react';
import Ribbon from '../../components/Ribbon';

const featuredVideo = 'https://www.youtube.com/embed/KhpkqxtoSB4?rel=0';

const videos = [
  {
    title: 'Complete Guide to Selecting the Right Security Guard Company',
    embedUrl: 'https://www.youtube.com/embed/nECnOOoW7PQ?rel=0',
  },
  {
    title: 'Security Guard Duties and Responsibilities (Training)',
    embedUrl: 'https://www.youtube.com/embed/QZzsxVFKgbE?rel=0',
  },

  {
    title: 'Security Customer Service - What You Need to Know',
    embedUrl: 'https://www.youtube.com/embed/kvu2PVq9vQs?rel=0',
  },
  {
    title: 'Customer Service Basics (Event Security Training)',
    embedUrl: 'https://www.youtube.com/embed/3fkXsJNFZ4I?rel=0',
  },
  {
    title: 'Patrolling and Observation Training for Security Guards',
    embedUrl: 'https://www.youtube.com/embed/5LJ6fqHRIDo?rel=0',
  },
  {
    title: 'Basic Security Guard Training: Access Control',
    embedUrl: 'https://www.youtube.com/embed/Y6eJzoUG45E?rel=0',
  },
  {
    title: 'How to Write Reports for Security Officers',
    embedUrl: 'https://www.youtube.com/embed/Li4cR5fp95c?rel=0',
  },
  {
    title: 'Security Guard Training: Communication & De-Escalation',
    embedUrl: 'https://www.youtube.com/embed/I3qqiZcTK3g?rel=0',
  },

  {
  title:
    'Security Guard De-escalation Training: Body Language, Verbal Skills, Reactionary Gap, & Safety Tips',
  embedUrl: 'https://www.youtube.com/embed/PtCoqlnDXlg?rel=0',
},

];

function VideoPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <Ribbon name="Videos" showfont={false} />

      {/* Featured Video Section */}
      <section className="max-w-7xl mx-auto rounded-md px-4 sm:px-6 py-10 sm:py-12 md:py-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8" style={{ color: 'var(--text)' }}>
            Featured Security  Video
          </h2>

          <div className="flex justify-center">
            <div
              className="w-full max-w-7xl aspect-video rounded-lg overflow-hidden shadow-2xl"
              style={{ border: '1px solid var(--border)' }}
            >
              <iframe
                src={featuredVideo}
                title="Featured Security & Productivity Video"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 md:px-8">
        <h2 className="card2 text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text)' }}>
          Security Awareness & Office Software Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="text-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ background: 'var(--background)', border: '1px solid var(--border)' }}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-t-md"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <p className="text-sm sm:text-base mt-3 px-3 pb-4 font-medium" style={{ color: 'var(--text2)' }}>
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideoPage;
