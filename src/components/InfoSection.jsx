import React from "react";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="card">
      <div className="techSec">
        <p className="text-[#1e1f1f] font-bold">
          
        <h1 className="md:text-4xl text-[#1e1f1f] sm:text-3xl text-2xl font-bold py-2">
          Technical Team
        </h1>
        <p>Safiul Alam - scrum master </p>
        <p>Dmitrii Bacherikov  - Developer / Tester </p>
        <p>Chou-Ping Ding - UI / UX designer</p>
        <p>Xiaomin Wu - Product Owner </p>
        <p>Md Fakhruddin Ferdous - Developer </p>
        <p>Fakhrul Islam - Tester </p>
        </p>
        </div>
        <div className="goalsSec">
        <h1 className="md:text-4xl text-[#1e1f1f] sm:text-3xl text-2xl font-bold py-2">
          Goals And Scope 
        </h1>
        <p className="text-[#1e1f1f] font-bold">This application is used by recruiters to quickly find interested candidates based on needs, shortening the time and energy spent by employers on recruitment.</p>
        <p className="text-[#1e1f1f] font-bold">After recruiters log in, they can select the competencies they need and the corresponding courses to find students who have completed those courses. Candidates can be contacted via email for follow-up interviews.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;