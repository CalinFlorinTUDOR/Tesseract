# Tesseract

The Goals
● Create server side api with mongodb server based on nodejs
● Writing server side rest api
● Connecting the server to the project
Architecture and technological requirements
●
●
Infrastructures
○ Nodejs(javascript) - server language
○ Modules - express
○ Mongodb - database
Tools
○ Postman - send post and get request
○ Checking server
○ Publish rest api with postman for client side
○ Testing
■
●
Security
○
●
test with postman all request
Jwt - json web token
Database
○ documents(tables)
○ The app will contain 4 schemes (classes)
○ User (_id, email, password, firstname, lastname, permission,
comments, created, updated ) // comments is array of comments
○ Shift(_id, userId, start, end, perHour, place, created, updated)
○ permission(_id, description) // admin, regular_user
○ Comments (_id, userId, description, created, updated) - userId is
the user that created the comment.
○
Each module contain 3 files:
■ Route.js
■ Controller.js
■ Module.js
