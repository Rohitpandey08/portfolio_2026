import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  Education,
  Experience,
  Contacts,
  // Projects,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Experience />
      {/* <Achievement />
      <Projects /> */}
      <Skills />
      {/* <Services /> */}
      <Education />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
