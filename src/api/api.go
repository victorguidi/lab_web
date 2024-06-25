package api

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"

	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"github.com/victorguidi/ghttp/ghttp"
	"github.com/victorguidi/lab/src/sql"
)

var (
	db              = sql.NewDB()
	MIDDLEWAREROUTE string
)

func init() {
	godotenv.Load()
	MIDDLEWAREROUTE = os.Getenv("MIDDLEWAREROUTE")
}

type Server struct {
	*ghttp.Ghttp
}

func New() *Server {
	return &Server{
		ghttp.New().CORS("*"),
	}
}

func (s *Server) RegisterHandles() {
	s.GET("/projects", s.handleGetProjects)
	s.GET("/newestprojects", s.handleGetRecentProject)
	s.GET("/projectids", s.handleGetProjectIDs)
	s.GET("/projects/{id}", s.handleGetOneProject)
	s.GET("/docs", s.handleGetDocs)
	s.GET("/docs/{id}", s.handleGetOneDoc)
	s.POST(fmt.Sprintf("/%s/projects", MIDDLEWAREROUTE), s.handleAddProject)
	s.POST(fmt.Sprintf("/%s/docs", MIDDLEWAREROUTE), s.handleAddDocs)
	s.DELETE(fmt.Sprintf("/%s/projects/{id}", MIDDLEWAREROUTE), s.handleDeleteProject)
	s.DELETE(fmt.Sprintf("/%s/docs/{id}", MIDDLEWAREROUTE), s.handleDeleteDoc)
}

type Project struct {
	Id                 string `json:"id"`
	ProjectName        string `json:"projectName"`
	ProjectDescription string `json:"projectDescription"`
	ProjectText        string `json:"projectText"`
	ProjectVideoUrl    string `json:"projectVideoUrl"`
	ProjectThumbImgUrl string `json:"projectThumbImgUrl"`
	ArticleUrl         string `json:"articleUrl"`
	Created_at         string `json:"created_at"`
	Updated_at         string `json:"updated_at"`
	ProjectTags        string `json:"projectTags"`
	ProjectStack       string `json:"projectStack"`
	ProjectProgress    int    `json:"projectProgress"`
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

func (s *Server) handleGetProjectIDs(c ghttp.Context) error {
	type Ids struct {
		Id string `json:"id"`
	}
	var p []Ids

	err := db.GetAll("SELECT id FROM projects", &p)
	if err != nil {
		c.FAIL(err, 500)
	}

	return c.JSON(p)
}

func (s *Server) handleGetRecentProject(c ghttp.Context) error {
	var p Project

	err := db.Get("SELECT * FROM projects ORDER BY created_at DESC LIMIT 1;", &p)
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
	var project Project

	formData := make(map[string]string)
	err := c.ParseMultipartForm(10 << 20)
	if err != nil {
		return c.FAIL(err, http.StatusInternalServerError)
	}

	for k := range c.Form {
		formData[k] = c.FormValue(k)
	}

	if formData["username"] != os.Getenv("USERNAME") && formData["password"] != os.Getenv("PASSWORD") {
		return c.FAIL(errors.New("SOMETHING WENT WRONG"), http.StatusInternalServerError)
	}

	project.ProjectName = formData["projectName"]
	project.ProjectDescription = formData["projectDescription"]
	project.ProjectTags = formData["projectTags"]
	project.ProjectStack = formData["projectStack"]
	project.ProjectVideoUrl = formData["projectVideoUrl"]
	project.ProjectThumbImgUrl = formData["projectThumbImgUrl"]
	project.ProjectProgress, _ = strconv.Atoi(formData["projectProgress"])
	project.ArticleUrl = formData["articleUrl"]

	file, _, err := c.FormFile("file")
	if err != nil {
		return c.FAIL(err, http.StatusBadRequest)
	}

	project.Id = uuid.NewString()
	project.ProjectText, err = ProcessMD(file)
	if err != nil {
		return c.FAIL(err, http.StatusInternalServerError)
	}

	err = db.Insert(strings.ReplaceAll(`INSERT INTO projects (
        id, 
        project_name, 
        project_description,
        project_text,
        project_tags,
        project_stack,
        project_video_url,
        project_thumb_img_url,
        project_progress,
        article_url
        ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, "\n", ""), project,
		project.Id,
		project.ProjectName,
		project.ProjectDescription,
		project.ProjectText,
		project.ProjectTags,
		project.ProjectStack,
		project.ProjectVideoUrl,
		project.ProjectThumbImgUrl,
		project.ProjectProgress,
		project.ArticleUrl,
	)
	if err != nil {
		log.Println(err)
		c.FAIL(err, 500)
	}

	return c.JSON(project)
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
