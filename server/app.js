const express = require("express");
var mysql = require('mysql');
const app = express();

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
console.log("!!!!!!!!!!!!!!!!!");
app.get("/api", (req, res) => {
    db.query("SELECT * FROM registeredusers", (err,result)=>{
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
  //   console.log("HIIIIIIIIIIIIIIIIIIIIIIIII")
  //   res.json({ 
  //     data: "Hello from server!1111111111111",
  //  });
  });

app.post("/api/sign-in",(req,res)=> {
    console.log("1111111111",req);
})

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));