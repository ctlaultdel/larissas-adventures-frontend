https://github.com/user-attachments/assets/ac48c7f8-974c-4461-aaf1-e489a688864c

# Larissa's Adventures

I am a software developer by trade and climber/traveler/adventurist by heart. The purpose of my blog to to document my adventures, share knowledge, and inspire others for their own adventures 🖤

## Project Description

- Frontend: JavaScript, React (this repository)
- Backend: Python, Flask, PostgreSQL (https://github.com/ctlaultdel/larissas-adventures-backend)

![Adventure_Frontend drawio](https://github.com/user-attachments/assets/e843f71a-feb1-4c8e-b0cb-f3420a8fcd94)

Strategy: Blog template design
1. Blog html templates and content stored in database ([Content{text, figure, caption}, Content{text, figure, caption}, ...])
3. Routing & Rendering: HTTP request provides adventure id, python converts large binary images to base64 string before routing, JavaScript parses the blog html content returned by API
