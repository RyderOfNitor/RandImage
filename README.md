# RandImage
NodeJS Docker to return random image

# To Use
Bind image folder to /app/images \
(optional) Specify PORT environment variable

# Example Docker Run
docker run -d \\ \
-v /images:/app/images \\ \
-p 3000:3000 \\ \
-e PORT=3000 \\ \
ryderofnitor/randimage:latest

