import React from "react";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h2>about</h2>
      <Link href="/">Press Here to Home Page</Link>
    </div>
  );
};

export default About;
