'use client';

import React from "react";
import Ribbon from "../../components/Ribbon";

type FileItem = {
  title: string;
  size: string;
  type: string;
  date: string;
  link: string;
};

export default function Download() {
  // Everyday software (official download pages)
  const files: FileItem[] = [
    { title: "Adobe Acrobat Reader", size: "Depends", type: "Software Download", date: "Always latest", link: "https://get.adobe.com/reader/" },
    { title: "Zoom", size: "Depends", type: "Software Download", date: "Always latest", link: "https://zoom.us/download" },
    { title: "Microsoft Teams", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.microsoft.com/microsoft-teams/download-app" },
    { title: "Google Drive for Desktop", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.google.com/drive/download/" },
    { title: "WhatsApp Desktop", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.whatsapp.com/download" },
    { title: "Telegram Desktop", size: "Depends", type: "Software Download", date: "Always latest", link: "https://desktop.telegram.org/" },
    { title: "VLC Media Player", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.videolan.org/vlc/" },
    { title: "7-Zip", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.7-zip.org/" },
    { title: "WinRAR", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.rarlab.com/download.htm" },
    { title: "AnyDesk", size: "Depends", type: "Software Download", date: "Always latest", link: "https://anydesk.com/en/downloads" },
    { title: "Spotify", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.spotify.com/download/" },
    { title: "LibreOffice", size: "Depends", type: "Software Download", date: "Always latest", link: "https://www.libreoffice.org/download/download-libreoffice/" },
  ];

  return (
    <div>
      {/* Header Ribbon */}
      <Ribbon name="Download" showfont={false} />

      <div className="px-3 md:px-0 py-5 sm:py-8 max-w-7xl mx-auto">
        <div className="px-5 max-w-7xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:flex justify-center overflow-x-auto">
            <table className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-50">
              <thead className="bg-gray-200 border-b border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Software</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Size</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Last Updated</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Download</th>
                </tr>
              </thead>

              <tbody>
                {files.map((file, index) => (
                  <tr key={`${file.link}-${index}`} className={index % 2 === 0 ? "card" : "card2"}>
                    <td className="px-6 py-2">{file.title}</td>
                    <td className="px-6 py-2">{file.size}</td>
                    <td className="px-6 py-2">{file.type}</td>
                    <td className="px-6 py-2">{file.date}</td>
                    <td className="px-6 py-2">
                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center border cursor-pointer border-teal-700 px-4 py-1.5 rounded-md text-sm hover:bg-teal-700 hover:text-white transition"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {files.map((file, index) => (
              <div
                key={`${file.link}-${index}`}
                className="card border border-gray-200 rounded-xl p-4 hover:shadow-sm transition"
              >
                <h2 className="text-lg font-semibold mb-2">{file.title}</h2>

                <div className="text-sm space-y-1 mb-3">
                  <p><span className="font-medium">Size:</span> {file.size}</p>
                  <p><span className="font-medium">Type:</span> {file.type}</p>
                  <p><span className="font-medium">Last Updated:</span> {file.date}</p>
                </div>

                <a
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-teal-700 text-teal-600 bg-white px-4 py-2 rounded-sm text-sm hover:bg-teal-700 hover:text-white transition"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
