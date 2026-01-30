'use client';

import React from 'react';
import Ribbon from '../../components/Ribbon';

const featuredVideo = 'https://www.youtube.com/embed/UCkjoQjbY_s?rel=0';

const videos = [
  // ✅ Security awareness
  {
    title: 'Recognize and Report Phishing (CISA)',
    embedUrl: 'https://www.youtube.com/embed/JlQovysQBn0?rel=0',
  },
  {
    title: 'How to Avoid Phishing (CISA)',
    embedUrl: 'https://www.youtube.com/embed/sg0kQYvTlnc?rel=0',
  },
  {
    title: 'Four Easy Ways to Stay Safe Online',
    embedUrl: 'https://www.youtube.com/embed/fgd-osFId00?rel=0',
  },
  {
    title: 'Enable Google 2-Step Verification',
    embedUrl: 'https://www.youtube.com/embed/XcggWXRAitE?rel=0',
  },

  // ✅ Office software everyone uses
  {
    title: 'Microsoft Teams Tutorial in 10 Minutes',
    embedUrl: 'https://www.youtube.com/embed/VDDPoYOQYfM?rel=0',
  },
  {
    title: 'Excel Tutorial for Beginners (15 minutes)',
    embedUrl: 'https://www.youtube.com/embed/LgXzzu68j7M?rel=0',
  },
  {
    title: 'Microsoft Word Tutorial (Basics)',
    embedUrl: 'https://www.youtube.com/embed/Cw6a3b5QoAs?rel=0',
  },
  {
    title: 'PowerPoint Tutorial for Beginners',
    embedUrl: 'https://www.youtube.com/embed/l5Ij7nUy9UQ?rel=0',
  },
  {
    title: 'Google Workspace Basics (Overview)',
    embedUrl: 'https://www.youtube.com/embed/_oYMrYCs2fU?rel=0',
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
            Featured Security & Productivity Video
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
