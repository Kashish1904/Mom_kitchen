
const express=require("express");
const bodyParser=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin:admin@cluster0-etblv.mongodb.net/test?retryWrites=true&w=majority/momkitchenDB", {useNewUrlParser: true});

const commentsSchema = {
  name: String,
  email: String,
  phone: Number,
  message: String
}

const Message = mongoose.model("Message", commentsSchema);

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.get("/index.html", function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.get("/Veggies.html", function(req, res){
  res.sendFile(__dirname+"/Veggies.html")
});

app.get("/Salads.html", function(req, res){
  res.sendFile(__dirname+"/Salads.html")
});

app.get("/Snacks.html", function(req, res){
  res.sendFile(__dirname+"/Snacks.html")
});

app.get("/Desserts.html", function(req, res){
  res.sendFile(__dirname+"/Desserts.html")
});

app.get("/sugg.html", function(resq, res){
  res.sendFile(__dirname+"/sugg.html")
});

app.post("/index.html", function(req, res){
  Message.insertMany(req.body);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Started on 3000");
});
