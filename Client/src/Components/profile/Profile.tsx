import React from 'react';

interface ProfileProps {
  name: string;
  jobTilte: string;
  profileImage: string;
  bio: string;
  country: string;
  experience: string;
  certificates: string[];
  projects: string[];
  skills: string[];
  cvLink?: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  jobTilte,
  profileImage,
  bio,
  country,
  experience,
  certificates,
  projects,
  skills,
  cvLink
}) => {
  return (
    <div className="profile p-4 max-w-[1400px] md:p-10 border bg-white border-gray-200 m-4 shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 pb-4 mb-4">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="profile-image w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="name text-xl md:text-2xl font-bold mb-1">{name}</h1>
            <p className="jobTilte text-gray-700 mb-1">{jobTilte}</p>
            <p className="country text-gray-600">{country}</p>
          </div>
        </div>
        <div className="btns flex flex-col items-center md:flex-row gap-2 md:gap-4">
          <button className="px-4 py-1 border rounded-full border-slate-600 hover:bg-slate-600 hover:text-white transition duration-300">
            Message
          </button>
          <button className="px-4 py-1 border rounded-full bg-slate-600 text-white hover:bg-white hover:text-black transition duration-300 hover:border-gray-600">
            Schedule a meeting
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 border-r-2 pr-4 md:pr-6 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Experience:</h2>
          <p className="mb-4">{experience}</p>

          <div className="certificates mb-4">
            <h2 className="text-xl font-semibold mb-2">Certificates</h2>
            <ul className="list-disc pl-5">
              {certificates.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="projects mb-4">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-5">
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1 rounded-full border border-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
            {/* Recommendations content here */}
          </div>
        </div>
        <div className="w-full md:w-3/4 pl-4 md:pl-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Bio</h2>
          <p className="bio mb-4">{bio}</p>
          {cvLink && (
            <a
              href={cvLink}
              download
              className="block text-slate-500 underline text-xl font-semibold mb-2"
            >
              Download CV
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
