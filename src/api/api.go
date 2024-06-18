package api

import (
	"log"

	"github.com/google/uuid"
	"github.com/victorguidi/ghttp/ghttp"
	"github.com/victorguidi/lab/src/sql"
)

var db = sql.NewDB()

type Server struct {
	*ghttp.Ghttp
}

func New() *Server {
	return &Server{
		ghttp.New().CORS(),
	}
}

func (s *Server) RegisterHandles() {
	s.GET("/projects", s.handleGetProjects)
	s.GET("/projects/{id}", s.handleGetOneProject)
	s.GET("/docs", s.handleGetDocs)
	s.GET("/docs/{id}", s.handleGetOneDoc)
	s.POST("/projects", s.handleAddProject)
	s.POST("/docs", s.handleAddDocs)
	s.DELETE("/projects/{id}", s.handleDeleteProject)
	s.DELETE("/docs/{id}", s.handleDeleteDoc)
}

type Project struct {
	Id                 string `json:"id"`
	ProjectName        string `json:"projectName"`
	ProjectDescription string `json:"projectDescription"`
	Created_at         string `json:"created_at"`
	Updated_at         string `json:"updated_at"`
}

type Doc struct {
	Id         string `json:"id"`
	DocName    string `json:"docName"`
	Doc        string `json:"docDescription"`
	Created_at string `json:"created_at"`
	Updated_at string `json:"updated_at"`
}

func (s *Server) handleGetProjects(c ghttp.Context) error {
	var p []Project

	err := db.GetAll("SELECT * FROM projects", &p)
	if err != nil {
		c.FAIL(err, 500)
	}

	return c.JSON(p)
}

func (s *Server) handleGetOneProject(c ghttp.Context) error {
	id := c.PathValue("id")
	var p Project

	err := db.Get("SELECT * FROM projects WHERE id = $1;", &p, id)
	if err != nil {
		log.Println(err)
		c.FAIL(err, 500)
	}

	return c.JSON(p)
}

func (s *Server) handleGetDocs(c ghttp.Context) error {
	var d Doc

	err := db.GetAll("SELECT * FROM docs;", &d)
	if err != nil {
		c.FAIL(err, 500)
	}

	return c.JSON(d)
}

func (s *Server) handleGetOneDoc(c ghttp.Context) error {
	id := c.PathValue("id")
	var d Doc

	err := db.Get("SELECT * FROM docs WHERE id = ?;", &d, id)
	if err != nil {
		c.FAIL(err, 500)
	}

	return c.JSON(d)
}

func (s *Server) handleAddProject(c ghttp.Context) error {
	p := Project{
		Id:          uuid.NewString(),
		ProjectName: "bud",
		ProjectDescription: `
Bud is an advanced AI Workers engine designed to streamline and manage various tasks through a unified interface. With Bud, you can control multiple workers performing different functions. 
The engine comes with two pre-installed workers:
  - **Audio Worker**: Manages audio input and output, making it easy to extend and integrate with other workers for tasks involving voice commands and audio processing.
  - **Chat Worker**: A conversational agent that waits for user inputs or questions and responds using a predefined AI model.
  - **RAG Worker**: A conversational agent that waits for user inputs or questions and responds using a predefined AI model.

Bud leverages the power of Ollama to interact with AI models and embed inputs seamlessly. It also integrates Whisper.cpp bindings to convert audio to text and includes a simple text dispatcher to transform text back into audio.
    `,
	}

	err := db.Insert("INSERT INTO projects (id, projectname, projectdescription) VALUES($1, $2, $3);", p, p.Id, p.ProjectName, p.ProjectDescription)
	if err != nil {
		log.Println(err)
		c.FAIL(err, 500)
	}

	return c.JSON(p)
}

func (s *Server) handleAddDocs(c ghttp.Context) error {
	return c.JSON(map[string]string{"message": "WORKING"})
}

func (s *Server) handleDeleteProject(c ghttp.Context) error {
	id := c.PathValue("id")
	log.Println(id)
	return c.JSON(map[string]string{"message": "WORKING"})
}

func (s *Server) handleDeleteDoc(c ghttp.Context) error {
	id := c.PathValue("id")
	log.Println(id)
	return c.JSON(map[string]string{"message": "WORKING"})
}
