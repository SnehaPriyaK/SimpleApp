const express = require("express");
const bodyparser = require('body-parser');
var mysql = require('mysql');
const app = express();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Omega@2021$",
    database : "userdata"
});

//Connecting to database
db.connect(function(err) {
    if(err){
      console.log("Error in the connection")
      console.log(err)
    }
    else{
      console.log(`Database Connected`)
      db.query(`SHOW DATABASES`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }
});

app.get("/api", (req, res) => {
    db.query("SELECT * FROM resgisteredUser", (err,result)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log("#########",result)
        result.forEach(element => {
          console.log("33333333333",element.id)
        });
        res.send(result);
      }
    })
  });

app.post("/api/sign-in",(request,res)=> {
    console.log("1111111111",request.body.resgisteredUser.email);
    const user =request.body.resgisteredUser;
    //db.query("INSERT INTO resgisteredUser VALUES()")
    db.query(
      "INSERT INTO resgisteredUser (firstName, lastName, mobileNo, emailID, password) VALUES (?,?,?,?,?)",
      [user.fname, user.lname, user.mobileno, user.email, user.pswd],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
    //res.send(request);
})

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));