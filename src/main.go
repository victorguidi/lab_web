package main

import (
	"github.com/victorguidi/lab/src/api"
)

func main() {
	server := api.New()
	server.RegisterHandles()
	server.Start(":5000")
}
