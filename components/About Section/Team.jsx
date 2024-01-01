import React from 'react';
import TeamCard from '../cards/teamCard';

const Team = () => {
  // Team members data
  const teamMembers = [
    { id: 1, name: 'Stephen De-Graft Baidu', title: 'Managing Partner', imageSrc: '/Stephen.png' },
    { id: 2, name: 'Stephen De-Graft Baidu', title: 'Managing Partner', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg' }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-10 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Team</p>
        <h2 className="text-3xl font-semibold leading-[44px] lg:text-4xl">Team behind BaidPrime</h2>

        <div className="flex flex-col mt-12 gap-[48px] sm:flex-row">
          {teamMembers.map(({ id, name, title, imageSrc }) => (
            <TeamCard key={id} name={name} title={title} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
