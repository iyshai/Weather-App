const express = require("express");
const https = require("https");

const app  = express();

app.get('/',function(req,res){

    const url ="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a1673082934d8308557e6ee0060d83aa&units=metric#";

    https.get(url,function(response){

        
        // console.log(response);

        response.on("data",function(data){

            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;

            // console.log(weatherdata);
            console.log(temp);

           
            
        })
         
    })


})


app.listen(3030,function(){
    console.log("server is in progress");
})