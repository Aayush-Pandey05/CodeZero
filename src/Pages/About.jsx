import React from "react";

const About = () => {
  return (
    <section className="bg-black overflow-hidden w-full min-h-screen flex flex-col items-center justify-center pt-14 sm:pt-24 lg:pt-0">
      <div className="about flex flex-col space-y-8 items-center w-3/5 lg:w-3/5">
        <p className="text-white text-xl text-center">
          "We, the CodeZero team, are a student-initiated technical community at
          Dayananda Sagar College of Engineering and part of Anvaya, a club
          driven by the Department of Artificial Intelligence and Machine
          Learning."
        </p>
        <p className="text-white text-xl text-center lg:text-justify">
          CodeZero is a dynamic coding club committed to fostering a community
          of tech enthusiasts. Our mission is to empower individuals through
          coding workshops, collaborative projects, and innovative challenges.
          We value creativity, collaboration, and continuous learning, providing
          a platform for members to enhance their skills and showcase their
          achievements.
        </p>
      </div>

      <div className="domain w-3/4 pt-20 sm:mt-20">
        <h2 className="text-white text-2xl text-center lg:text-left">Domain</h2>
        <p className="text-gray-400 text-center lg:text-left">and more..</p>

        <div className="flex flex-wrap justify-between gap-8 mt-10 w-full">
          {/* DSA Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 w-full sm:w-1/3 lg:w-1/3">
            <h2 className="text-white text-2xl mb-2">DSA</h2>
            <p className="text-gray-400 text-sm w-48 lg:w-full">
              Optimize data organization and problem-solving, enabling efficient
              and scalable solutions in computing.
            </p>
          </div>

          {/* WebDev Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 w-full sm:w-1/3 lg:w-1/3">
            <h2 className="text-white text-2xl mb-2">WebDev</h2>
            <p className="text-gray-400 text-sm w-48 lg:w-full">
              Creation of websites and applications, combining coding, design,
              and functionality to deliver engaging online experiences.
            </p>
          </div>

          {/* Machine Learning Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 w-full sm:w-1/3 lg:w-1/3">
            <h2 className="text-white text-2xl mb-2">Machine Learning</h2>
            <p className="text-gray-400 text-sm w-48 lg:w-full">
              An exciting domain of huge datasets and training models that we
              would like to explore soon upon the growth of our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
