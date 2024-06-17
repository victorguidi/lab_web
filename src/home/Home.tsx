import { useState } from 'react';
import ProjectComponent from '../components/ProjectsDescription';
export default function Home() {

  const [defaultProject, useDefautlProject] = useState(
    `
Bud is an advanced AI Workers engine designed to streamline and manage various tasks through a unified interface. With Bud, you can control multiple workers performing different functions, enhancing productivity and efficiency. 
The engine comes with two pre-installed workers:
  - **Audio Worker**: Manages audio input and output, making it easy to extend and integrate with other workers for tasks involving voice commands and audio processing.
  - **Chat Worker**: A conversational agent that waits for user inputs or questions and responds using a predefined AI model.

Bud leverages the power of Ollama to interact with AI models and embed inputs seamlessly. It also integrates Whisper.cpp bindings to convert audio to text and includes a simple text dispatcher to transform text back into audio. This robust combination allows Bud to handle complex tasks with ease, making it an indispensable tool for your AI-driven workflows.
`
  )

  return (
    <div id="main" className="flex flex-col w-screen h-screen">
      <div className="flex flex-row w-full h-full items-center justify-between p-4">
        <div id="project" className="flex flex-col w-[60%] h-[90%] border border-black rounded">
          <iframe className="flex w-full h-full"
            src="https://www.youtube.com/embed/q8WKuh1rxSw?si=VNCG3Q6vT_gNR8qV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen-true>
          </iframe>
        </div>
        <div id="project-description" className="flex flex-col w-[40%] h-[90%]">
          <ProjectComponent
            projectName="Bud: AI Task Manager"
            projectDescription={defaultProject}
          />
        </div>
      </div>
      <hr className="bg-black" />
      <div className="flex flex-row w-full h-[20%]">
      </div>
    </div>
  )

}
