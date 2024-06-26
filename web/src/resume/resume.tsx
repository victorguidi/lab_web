import React from 'react';

const Resume: React.FC = () => {
  const profile = `Experienced Software Engineer with 4+ years of experience in developing,
maintaining, testing, and debugging applications. Skilled in a diverse set of
technologies, like Golang, .NET, Python and Typescript, with expertise in Linux
environments, Docker containers, and DevOps pipelines. Proven track record
of deployed solutions for financial, legal, and engineering teams, as well as
projects integrating AI and IoT technologies.`

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

  return (
    <div className="flex flex-col h-full justify-center items-center text-light-text dark:text-dark-text font-bold bg-light-background dark:bg-dark-background p-4">
      <h1 className="text-4xl mb-8">Resume</h1>
      <h3 className="max-w-4xl mb-8">{profile}</h3>
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl mb-4">Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl">{job.position}</h3>
            <p className="text-xl text-gray-800 dark:text-gray-400">{job.company}</p>
            <p className="text-lg text-gray-800 dark:text-gray-400">{job.duration}</p>
            <ul className="list-disc list-inside mt-2 text-lg">
              {job.description.map((desc, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-200 p-2">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
