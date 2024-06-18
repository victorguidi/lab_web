import ProjectComponent from '../components/ProjectsDescription';
export default function Home() {

  const defaultProject =
    `
Bud is an advanced AI Workers engine designed to streamline and manage various tasks through a unified interface. With Bud, you can control multiple workers performing different functions. 
The engine comes with two pre-installed workers:
  - **Audio Worker**: Manages audio input and output, making it easy to extend and integrate with other workers for tasks involving voice commands and audio processing.
  - **Chat Worker**: A conversational agent that waits for user inputs or questions and responds using a predefined AI model.

Bud leverages the power of Ollama to interact with AI models and embed inputs seamlessly. It also integrates Whisper.cpp bindings to convert audio to text and includes a simple text dispatcher to transform text back into audio.
`
  return (
    <div id="main" className="flex flex-col w-screen h-screen overflow-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 flex-grow max-h-[90%]">
        <div id="project" className="flex flex-col w-full md:w-[60%] h-full md:h-full border border-black rounded mb-4 md:mb-0 md:mr-4">
          <iframe
            className="flex w-full h-full"
            src="https://www.youtube.com/embed/q8WKuh1rxSw?si=VNCG3Q6vT_gNR8qV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div id="project-description" className="flex flex-col w-full md:w-[40%] h-full md:h-full">
          <ProjectComponent
            projectName="Bud: AI Task Manager"
            projectDescription={defaultProject}
            projectId="8b9f7144-3058-4fde-9ac4-f711d0596ac9"
          />
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );

}
