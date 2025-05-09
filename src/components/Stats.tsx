
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark text-center mb-4">
        I Turned <span className="text-accent dark:text-accent-dark">400+ Hours</span> of Learning into Real-World Dashboards —<br className="hidden sm:inline" /> and Shared it with <span className="text-accent dark:text-accent-dark">20,000+ LinkedIn Followers</span>
      </h2>
      <p className="text-center text-muted-foreground dark:text-muted-foreground-dark mb-10">
        My journey of continuous learning through online platforms and YouTube resources
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="p-6 bg-surface dark:bg-[#1A1A1A] rounded-xl shadow-md border border-secondary/30 hover:shadow-lg transition-shadow duration-300">
          <p className="text-3xl font-bold text-primary dark:text-primary-dark">
            <CountUp end={400} duration={2.5} suffix="+" />
          </p>
          <p className="text-sm text-muted-foreground mt-1">Learning Hours</p>
        </div>
        <div className="p-6 bg-surface dark:bg-[#1A1A1A] rounded-xl shadow-md border border-secondary/30 hover:shadow-lg transition-shadow duration-300">
          <p className="text-3xl font-bold text-primary dark:text-primary-dark">
            <CountUp end={35} duration={2.5} suffix="+" />
          </p>
          <p className="text-sm text-muted-foreground mt-1">Completed Courses</p>
        </div>
        <div className="p-6 bg-surface dark:bg-[#1A1A1A] rounded-xl shadow-md border border-secondary/30 hover:shadow-lg transition-shadow duration-300">
          <p className="text-3xl font-bold text-primary dark:text-primary-dark">
            <CountUp end={20000} duration={2.5} suffix="+" />
          </p>
          <p className="text-sm text-muted-foreground mt-1">LinkedIn Followers</p>
        </div>
        <div className="p-6 bg-surface dark:bg-[#1A1A1A] rounded-xl shadow-md border border-secondary/30 hover:shadow-lg transition-shadow duration-300">
          <p className="text-3xl font-bold text-primary dark:text-primary-dark">
            <CountUp end={5} duration={2.5} prefix="Top " />
          </p>
          <p className="text-sm text-muted-foreground mt-1">Data Creators in Egypt (Favikon)</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
