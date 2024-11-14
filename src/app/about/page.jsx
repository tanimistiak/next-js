import Link from "next/link";
import React from "react";

const About = () => {
  console.log(hello);
  return (
    <div>
      Hi i am about page
      <ul>
        <Link href="about/history">History</Link>
        <Link href="about/mission">Mission</Link>
      </ul>
    </div>
  );
};

export default About;
