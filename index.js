import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = "3000";

app.use(express.static("public"));
app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
app.use('/js', express.static('node_modules/jquery/dist'));

app.use(bodyParser.urlencoded({extended: true}));

var post = [];

app.get("/",(req,res)=>{

res.render("index.ejs",{name:post});

})
app.get("/create",(req,res)=>{
    res.render("create.ejs");
    
})

app.post("/submit",(req,res)=>{
    post.push(req.body["text1"]);
    res.render("create.ejs")

})
app.get("/reading",(req,res)=>{
console.log("let try this");
})



app.listen(port,()=>{
    console.log(`server working at ${port}`);
})

