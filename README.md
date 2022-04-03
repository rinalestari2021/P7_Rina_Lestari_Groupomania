# P7_Rina_Lestari_Groupomania

DB:
To connect as Admin please use:
use : email: admin@test.com
with password : Beta1234$

By Terminal:
First in MySQL :
mysql> CREATE DATABASE groupomania;
mysql> USE groupomania;
mysql> INSERT INTO Users (first_name, last_name, email, password, isAdmin, createdAt, updatedAt)
mysql> VALUES
mysql> ('admin', 'admin', 'admin@test.com', '$2b$06$FROc61M8cAB/kNCZmMOSTON01ncCBlNP603P43BkRoxObupekRJeC', '1', '2022-04-02 14:00:00', '2022-04-02 14:00:00');

Routes API Backend
npm install
To launch : nodemon server

POST signup : http://localhost:3000/api/auth/signup

POST login : http://localhost:3000/api/auth/login

GET all user : http://localhost:3000/api/auth/accounts

GET user : http://localhost:3000/api/auth/accounts/:id

DELETE accounts :http://localhost:3000/api/auth/accounts/:id

PUT post(image/post) : http://localhost:3000/api/auth/accounts/

POST create post : http://localhost:3000/api/posts

GET all post : http://localhost:3000/api/posts

GET 1 post : http://localhost:3000/api/posts/

DELETE post :http://localhost:3000/api/auth/:id

POST comment : http://localhost:3000/api/auth/comment

DELETE comment :http://localhost:3000/api/auth/comment/:id

ROUTES FRONT
npm install
To launch : npm run dev

App Homepage
http://localhost:8080

Signup
http://localhost:8080/signup

Login
http://localhost:8080/login

Home(Newsfeed)
http://localhost:8080/home

Profile
http://localhost:8080/profile

Admin Page
http://localhost:8080/adminpage
