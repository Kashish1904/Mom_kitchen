
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

app.get("/home", function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.get("/Veggies", function(req, res){
  res.sendFile(__dirname+"/Veggies.html")
});

app.get("/Salads", function(req, res){
  res.sendFile(__dirname+"/Salads.html")
});

app.get("/Snacks", function(req, res){
  res.sendFile(__dirname+"/Snacks.html")
});

app.get("/Desserts", function(req, res){
  res.sendFile(__dirname+"/Desserts.html")
});

app.get("/sugg", function(resq, res){
  res.sendFile(__dirname+"/sugg.html")
});

app.get("/vegsand", function(resq, res){
  res.sendFile(__dirname+"/vegsand.html")
});

app.get("/pasta-salad", function(resq, res){
  res.sendFile(__dirname+"/pasta-salad.html")
});

app.get("/ice-cream", function(resq, res){
  res.sendFile(__dirname+"/ice-cream.html")
});

app.get("/momos", function(resq, res){
  res.sendFile(__dirname+"/momos.html")
});

app.get("/fruit-salad", function(resq, res){
  res.sendFile(__dirname+"/fruit-salad.html")
});

app.get("/kadhai-paneer", function(resq, res){
  res.sendFile(__dirname+"/kadhai-paneer.html")
});

app.post("/home", function(req, res){
  Message.insertMany(req.body);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Started on 3000");
});
