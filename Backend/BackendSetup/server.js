//Backend Rules to write code

//step 1 : IMPORTING ALL REQUIRED MODULES WHATEVER NEEDED FOR BACKEND SETUP - express(API) , mongoose(Backend-Database) , cors(Frontend-Backend) , bcrypt - (Hash the Sensitive Data)
//We need to import all required Modules

//how to import Modules in nodes
//by using required('module-name') function can import modules in node js

//ex.          required ('express') or import express

const express = require('express')
//Note : every modules it is Prewritten logical set of code will has its own Features own build methods/function we can perform tasks

//Step2 : Create Express Function/Application by using express() function which is a part of express module

const app =   express()

//Security Layer - Middleware
app.use(express.json())




//Step 3 : Defined Routes - path - API Endpoint for communication between Backend and Frontend

//Syntax : app.methodName('path/Address' , function(req,res){} )

app.get('/', function(req,res){
  res.send('Good Evening : Backend API Running')
})

app.get('/login' , function(req,res){
  res.send('Good Morning Please login to proceed')
})

app.get('/Register' , function(req,res){
  res.send('Good Morning Please Register')
})


//post : Send the Data to Server From Frontend - Login/Register - Place Order
app.post('/order', (req, res) => {
  res.send(`Order Placed Successfully. Order Details: ${JSON.stringify(req.body)}`)
})




//Step 4 : Start the Backend Server By using app.listen()
// syntax app.listen(portNumber, function(){})

//portNumber : It is a Number which is used to identify the backend server in network
//Example : 3000,5000,8000,9000 etc.

app.listen(3000, function(){
  console.log('Backend Server Running on port http://localhost:3000')
})