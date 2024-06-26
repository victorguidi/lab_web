import React from 'react';

const Resume: React.FC = () => {
  const profile = `Experienced Software Engineer with 4+ years of experience in developing, maintaining, testing, and debugging applications. Skilled in a diverse set of technologies, like Golang, .NET, Python and Typescript, with expertise in Linux environments, Docker containers, and DevOps pipelines. Proven track record of deployed solutions for financial, legal, and engineering teams, as well as projects integrating AI and IoT technologies.`

  const workExperience = [
    {
      position: "Software Engineer II",
      company: "Scala Data Centers",
      duration: "May 2021 - May 2024",
      description: [
        "Developed and implemented software solutions for a variety of applications, including web-based, client-server, and IoT applications.",
        "Lead developer for all AI initiatives, leading a team of junior developers in the development of more complex applications.",
        "Created and maintained technical documentation such as user manuals, system designs, and installation instructions.",
        "Maintained all Linux servers on Azure, AWS and on-premise, used to run applications and databases.",
        "Performed code reviews for software developers to ensure quality assurance.",
        "Collaborated with other software developers to resolve application issues.",
        "Led DevOps initiatives across the team, implemented first Azure pipelines, Docker containers, automations, and integrated tests.",
      ],
    },
  ];

  const keyAchievements = [
    {
      project: "Supplier Proposal Validation Web Application",
      stack: "go, python, typescript, c++",
      duration: "3 months",
      description: [
        `I was in charge of developing a tool to review supplier proposals as fast as possible, cutting hourly rates and making the process less repetitive. 
        The project was really interesting. I dealt with compression problems, multithreading, and scalability across clusters.`
      ]
    },
    {
      project: "Business Intelligence Tool",
      stack: ".NET, python, typescript",
      duration: "6 months",
      description: [
        `This project was all about getting a series of small tasks and tools that 3 teams were using and combining on a easy to use Web application.
        I had to implement a custom crawler and data sheet processing only for the application, deliver precise data that was feeding a series of dashboards, implement a ML prediction model, and calculate precise distances for pinning over a map.`
      ]
    }
  ];

  const skills = [
    "Coding",
    "Problem Solving",
    "DevOps",
    "Team Work",
    "Key Career Achievements",
    "Databases",
    "Testing",
    "Debugging",
    "Design Architecture"
  ];

  const languages = [
    "Portuguese - Native",
    "English - Fluent",
    "Italian - Fluent",
    "Spanish - Advanced",
    "Japanese - Studying"
  ];

  const courses = [
    {
      title: "Docker: Creating Containers",
      description: `Certification focused on creating, managing, and deploying containerized applications. Learn to build and customize Docker images, write efficient scripts and recipes, enable seamless communication between containers, and perform cloud deployments. Provided by Docker. - Alura`
    },
    {
      title: "Git & Github",
      description: `Certification focused on mastering version control with Git and GitHub. Learn the fundamentals of version control systems, save and retrieve code across different versions, resolve merges and conflicts, and efficiently work with multiple branches. Provided by GitHub. - Alura`
    },
    {
      title: "Blockchain for Business",
      description: `Certification focused on understanding and implementing blockchain technology across various platforms. Learn how block creation and mining work, explore real-world use cases, adopt methodologies for starting blockchain projects, and understand how to implement blockchain in practical models. Provided by Blockchain. - Alura`
    }
  ];

  return (
    <div className="flex h-screen w-screen overflow-auto scrollbar-webkit-light">
      <div className="flex flex-col gap-4 p-4 w-1/6">
        <div>
          <h1 className="font-bold text-xl">Skills</h1>
          <ul className=" list-disc list-inside p-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-200">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-xl">Languages</h1>
          <ul className=" list-disc list-inside p-2">
            {languages.map((skill, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-200">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-xl">Courses</h1>
          {courses.map((course, index) => (
            <div key={index}>
              <h1>{course.title}</h1>
              <p className="text-gray-600 dark:text-gray-200 text-xs p-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-grow h-fit justify-center items-center text-light-text dark:text-dark-text font-bold bg-light-background dark:bg-dark-background p-4 gap-6">
        <h1 className="text-4xl">Victor Guidi</h1>
        <div className="flex flex-col w-full max-w-6xl gap-6 h-[80%]">
          <h3 className="max-w-6xl">{profile}</h3>
          <h2 className="text-3xl">Work Experience</h2>
          {workExperience.map((job, index) => (
            <div key={index}>
              <h3 className="text-2xl">{job.position}</h3>
              <p className="text-xl text-gray-800 dark:text-gray-400">{job.company}</p>
              <p className="text-lg text-gray-800 dark:text-gray-400">{job.duration}</p>
              <ul className="list-disc list-inside text-lg">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-200 p-2">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
          <h3 className="text-3xl">Key Achievements</h3>
          {keyAchievements.map((a, index) => (
            <div key={index}>
              <h3 className="text-2xl">{a.project}</h3>
              <p className="text-lg text-gray-800 dark:text-gray-400">{a.duration}</p>
              <p className="text-l text-gray-600 dark:text-gray-400 p-2">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
