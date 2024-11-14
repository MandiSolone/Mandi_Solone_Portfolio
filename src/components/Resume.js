import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Mandi Solone's Resume</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Summary</h2>
        <p>
          A motivated and quick-learning developer with a solid foundation in
          both front-end and back-end technologies, including HTML,CSS,
          JavaScript, SQL, Node.js, and API integration. Eager to expand my
          expertise and confident in adapting to new technologies. Passionate
          about continuous learning, and excited to contribute to a
          collaborative team environment while further developing my technical
          skills.
        </p>
      </section>



      <section className="section">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          {/* USF */}
          <li>
            <strong>Bachelor of Science in Biology,</strong> Cum Laude
            <span> | </span>
            <a
              href="https://www.usf.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of South Florida (USF)
            </a>
            <span> | </span>
            Tampa, FL - Dec 2011
          </li>
          {/* Teachers Cert */}
          <li>
            <strong>Educator's Certificate </strong> in Math & Biology 6-12th grade  | FL
            Department of Education | 2015-2020
          </li>
          {/* TrueCoders */}
          <li>
            <strong>Full Stack Web Development </strong> 
            <span> | </span>
            <a
          href="https://app.digit.ink/en/view-credential/a3237f28-5983-44b8-8d3e-5a11d647d2e6"
          target="_blank"
          rel="noopener noreferrer"
        >
          TrueCoders Certificate
        </a>{" "}
         | June 2024 - Oct 2024
          </li>
        </ul>
        <p>
          Completed a project and lecture-based bootcamp with over 300 hours of
          training in SQL, Git, HTML, CSS, JavaScript, React.js, & Node.js.
          Developed full-stack skills through multiple JavaScript and SQL
          projects, tracked using Git and GitHub.
        </p>
        
      </section>


      {/* Technical Projects */}
      <section className="section">
        <h2 className="section-title">Technical Projects</h2>
        <h3>Book Tracker (React.js, Node.js, Express.js, MySQL, CSS, Redis)</h3>
        <ul>
          <li>
            Developed a web application to manage personal libraries by tracking
            books and their locations, incorporating user authentication and
            session management.
          </li>
          <li>
            Utilized React.js, HTML, and CSS for the frontend; Node.js and
            Express.js for the backend.
          </li>
          <li>
            Managed data with MySQL, implemented user authentication using
            Google OAuth and Passport.js, and enhanced session management with
            Redis.
          </li>
          <li>
            Used CRUD operations to allow users to input information about
            books, storing data in a MySQL database.
          </li>
          <li>Retrieved book information from the Google Books API.</li>
          <li>
            <a
              href="https://docs.google.com/document/d/1P0w70arO-9HfAucTmQ_dHR648a2Bv6aNVC6HQzobHWE/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>{" "}
            |{" "}
            <a
              href="https://drive.google.com/file/d/1BwPPIIfIcGHyNEVqaifC6AKASo_3NP1A/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Review
            </a>{" "}
            |{" "}
            <a
              href="https://book-location-tracker-5fd84feff1fd.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live App
            </a>
          </li>
        </ul>
      </section>

 

      <section className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="work-experience">
          <h3>
            KnowBe4 | Clearwater, FL |{" "}
            <a
              href="https://www.knowbe4.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              KnowBe4.com
            </a>
          </h3>
          <h4>Director of Channel Sales | 02/2021 – 03/2024</h4>
          <ul>
            <li>
              Spearheaded hands-on sales initiatives, overseeing daily team
              activities, pipeline management, and cultivating robust partner
              relationships.
            </li>
            <li>
              Aligned team objectives with company revenue strategies, ensuring
              adherence to sales processes and strategic plans to optimize
              growth and achieve revenue targets.
            </li>
            <li>
              Engaged directly with partners, establishing strategic alliances
              and supporting sales reps in negotiation and deal closure.
            </li>
          </ul>

          <h4>Channel Team Manager (CAM) | 02/2019 – 02/2021</h4>
          <ul>
            <li>
              Consistently met personal and team monthly quotas and targets.
            </li>
            <li>
              Collaborated with Channel, Direct (SMB & Enterprise), and CSM
              teams to streamline operations and maximize sales opportunities.
            </li>
          </ul>

          <h4>Channel Account Manager (CAM) | 08/2018 – 02/2019</h4>
          <ul>
            <li>
              Utilized Salesforce to maintain accurate sales forecasting and
              monitor pipeline health.
            </li>
            <li>
              Proficient in tools like Gmail, Google Docs, MS Office, and
              various browsers for efficient team coordination.
            </li>
          </ul>

          <h4>Channel Development Manager (CDM) | 01/2018 – 08/2018</h4>
          <ul>
            <li>
              Coordinated team meetings and developed shared email templates to
              enhance communication.
            </li>
            <li>
              Proactively identified, prospected, and qualified channel partners
              with growth potential.
            </li>
          </ul>
        </div>

        <div className="work-experience">
          <h3>
            Owner & Operations Manager | Knockerball Tampa Bay LLC | Largo, FL |
            08/2015 – 12/2018
          </h3>
          <ul>
            <li>
              Established and managed a profitable business from inception,
              overseeing online marketing, website design, sales, and client
              retention.
            </li>
            <li>
              Contributed to the development of Knockerball USA’s “Safety
              Policies & Procedures” and featured in the "Successful
              Knockerball" YouTube series.
            </li>
            <li>
              Implemented motivational measures for volunteers and staff through
              positive incentive programs.
            </li>
          </ul>
        </div>

        <div className="work-experience">
          <h3>
            Teacher (6th–7th Grade Science) | Pinellas Park Middle School |
            08/2013 – 09/2015
          </h3>
          <ul>
            <li>
              Consistently earned “Effective-Highly Effective” evaluations.
            </li>
            <li>
              Developed and delivered comprehensive lesson plans and assessments
              aligned with FL standards.
            </li>
            <li>
              Maintained positive classroom management and participated in
              district-wide teaching leadership.
            </li>
          </ul>
        </div>
      </section>

    

{/* Languages, Technologies, and Skills Sections */}
<section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="three-column-layout">
          <div className="column">
            <h3>Languages</h3>
            <ul>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="column">
            <h3>Technologies</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>APIs</li>
              <li>REST / RESTful APIs</li>
              <li>jQuery</li>
            </ul>
          </div>

          <div className="column">
            <h3>Skills</h3>
            <ul>
              <li>Clean Architecture</li>
              <li>Responsive Web Design</li>
              <li>Redux</li>
              <li>Version Control</li>
              <li>Test-Drive Development (TDD)</li>
              <li>Agile Method</li>
              <li>Adobe</li>
              <li>Microsoft Office</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </section>

     
      {/* Awards, Certifications, Achievements */}
      <section className="section">
        <h2 className="section-title">Awards, Certifications, Achievements</h2>
        <ul className="certifications-list">
           {/* Truecoders */}
          <li>
            <a
              href="https://app.digit.ink/en/view-credential/a3237f28-5983-44b8-8d3e-5a11d647d2e6"
              target="_blank"
              rel="noopener noreferrer"
            >
             TrueCoders Full-Stack Web Development
            </a>
          </li>
           {/* CRN */}
          <li>
            Named to the 2023 Women of the Channel List by CRN |{" "}
            <a
              href="https://www.crn.com/rankings-and-lists/wotc2023-details?c=856"
              target="_blank"
              rel="noopener noreferrer"
            >
              CRN 2023 Women of the Channel
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;