package server

import (
	"net/http"

	handler "app.example.com/handler"
	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/gin-gonic/gin"
)



func ginHTTP(w http.ResponseWriter, r *http.Request) {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World",
		})
	})

	router.POST("/hello", handler.HelloHandler) // Use the fully qualified name of the HelloHandler function

	router.ServeHTTP(w, r)
}

func init() {
	functions.HTTP("ginHTTP", ginHTTP)
}