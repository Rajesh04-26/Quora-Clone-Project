const express = require("express");
const path    = require("path");
const app     = express();
const port    = 8000;

//Create ID for posts
const { v4: uuidv4 } = require("uuid");

//method-override require
const methodOverride = require('method-override');

// override with POST having ?_method=PATCH,DELETE
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//static middleware
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { 
    id: uuidv4(),
    username: "Rajesh", 
    content: "I love coding!" },
  { 
    id: uuidv4(), 
    username: "Ritika", 
    content: "Hard work is important to achieve success!" },
  { 
    id: uuidv4(), 
    username: "apnacollege", 
    content: "Make study easy!" },
  { 
    id: uuidv4(), 
    username: "Aman", 
    content: "I am a python developer!" }
];

// handle the post
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//CREATE a new post
app.get("/posts/new" , (req , res) => {
    res.render("new.ejs");
});

app.post("/posts" , (req , res) => {
    let { username , content } = req.body;
    let id = uuidv4();
    posts.push({ id , username , content });
    res.redirect("/posts");
});

//READ-GET post by ID
app.get("/posts/:id" , (req , res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs" , { post });
});

//UPDATE the post (PATCH)
app.patch("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit" , (req , res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , { post });
});

//DELETE a post 
app.delete("/posts/:id" , (req , res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
