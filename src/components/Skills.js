import React from "react";
import { FaChartLine, FaPuzzlePiece, FaRegCalendarAlt, FaUsers, FaClock } from "react-icons/fa";

const Skills = () => (
  <section id="skills" className="skills-container">
    <h2>My Skills</h2>

    {/* Analytical & Strategic Thinking */}
    <div className="skills-item left">
      <div className="skill-content">
        <FaChartLine size={60} />
      </div>
      <div className="skill-text">
          <h3>Analytical & Strategic Thinking:</h3>
          <p>
            I have a strong ability to analyze complex data and develop clear,
            actionable strategies. This skill enables me to break down problems into
            smaller, manageable parts and build solutions that align with long-term
            goals, whether in software development or business strategy.
          </p>
        </div>
    </div>

    {/* Problem Solving */}
    <div className="skills-item right">
      <div className="skill-content">
        <FaPuzzlePiece size={60} />
      </div>
      <div className="skill-text">
          <h3>Problem Solving:</h3>
          <p>
            With a background in sales management, I have honed my problem-solving
            skills by tackling diverse challenges and identifying innovative
            solutions. In software development, I apply this same approach to
            debugging code, optimizing systems, and refining user experiences to meet
            project requirements.
          </p>
        </div>
    </div>

    {/* Proficiency with Productivity Tools */}
    <div className="skills-item left">
      <div className="skill-content">
        <FaRegCalendarAlt size={60} />
      </div>
      <div className="skill-text">
          <h3>Proficiency with Productivity Tools:</h3>
          <p>
            I'm well-versed in a variety of productivity tools, such as Salesforce,
            Gmail, Google Docs, and Microsoft Office. These tools help me streamline
            communication, manage projects effectively, and collaborate seamlessly
            across teams. My adaptability to new platforms ensures I can transition
            smoothly between different software ecosystems.
          </p>
        </div>
    </div>

    {/* Leadership & Coaching */}
    <div className="skills-item right">
      <div className="skill-content">
        <FaUsers size={60} />
      </div>
      <div className="skill-text">
          <h3>Leadership & Coaching:</h3>
          <p>
            As a manager and team leader, I've developed strong leadership and
            mentoring abilities. I believe in empowering my team members by providing
            guidance and fostering a collaborative environment. These leadership
            skills have translated well into working with development teams, ensuring
            projects run smoothly and everyone achieves their objectives.
          </p>
        </div>
    </div>

    {/* Time Management & Efficiency */}
    <div className="skills-item left">
      <div className="skill-content">
        <FaClock size={60} />
      </div>
      <div className="skill-text">
          <h3>Time Management & Efficiency:</h3>
          <p>
            In my previous roles, I developed a deep understanding of how to
            prioritize tasks, allocate resources effectively, and meet deadlines
            without sacrificing quality. In software development, this translates to
            efficient project management, keeping sprint timelines on track, and
            delivering code on time while maintaining high standards of quality.
          </p>
        </div>
    </div>
  </section>
);

export default Skills;
