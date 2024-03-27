package handler

import (
	"app.example.com/entities"
	"github.com/gin-gonic/gin"
)

func HelloHandler(ctx *gin.Context) {
	
	helloMessage := entities.HelloMessage{
		ID:      "1",
		Title:   "Hello",
		Message: "Hello World",
	}

	
	ctx.JSONP(200, helloMessage)
}