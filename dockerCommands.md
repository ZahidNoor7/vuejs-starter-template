<----- Create Docker Image ------------------------------------------------------->

npm run build
docker build -t vuejs-starter-template .

<----- Docker Image Testing ------------------------------------------------------>
docker run -d -p 8080:8080 vuejs-starter-template
OR
docker run -it --rm -p 8080:8080 vuejs-starter-template
