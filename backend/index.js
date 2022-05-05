const path = require('path');
const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
require('dotenv').config();
const PORT = 3004;
app.use(express.json());
app.use(
  cors({
    origin: [process.env.REACT_APP_PORT],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }))
// Route to get all posts
app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM users", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    }
    );   
});
// Route for creating the post
app.post('/api/create', (req,res)=> {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const notifications = 1;
    const timezone = 'timezone';
    const reminder_time = 'reminder_time';
    
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }

      db.query("INSERT INTO users (`first_name`, `last_name`, `email`, `phone`, `password`, `notifications`, `timezone`, `reminder_time`) VALUES ('"+firstname+"','"+lastname+"','"+email+"','"+phone+"','"+hash+"','"+notifications+"','"+timezone+"','"+reminder_time+"')", (err,result)=>{
         if(err) {
             console.log(err)
         } 
           console.log('result',result)
           res.send(result);
        }
      );
    });

});

// check login 
app.get("/api/login", (req, res) => {
  console.log('called');
  console.log('req.session.user',req.session.user);
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
// let the user log in
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "Unfortunately, your email address was not recognised by our system. Please try entering the e-mail address connected to your Satori purchase!" });
      }
    }
  );
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})