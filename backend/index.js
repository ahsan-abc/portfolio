const express = require ('express')
const mongoose = require('mongoose');
const  cors = require('cors')
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.DB_KEY)

const app = express()
//<-------middleware-----------> 
app.use(bodyparser.json());
app.use(cors())
//<-------connect to mongodb-----------> 


main().catch(err => console.log(err));

async function main() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
    await mongoose.connect(process.env.DB_KEY);
    console.log("connected to mongodb")

}

//<-------Schema-----------> 
const p_Schema = new mongoose.Schema({
    name: String,
    image: String,
    date: String,
    technology: String,
     view: String
    
});

const s_Schema = new mongoose.Schema({
    name: String,
    image: String,
    about:String
});

//<-------Model-----------> 

const p_Model = mongoose.model('projects', p_Schema);
const s_Model = mongoose.model('skills', s_Schema);



//<-------send projects-----------> 


app.get('/projects', (req, res) => {

    async function hello() {
        console.log("request acepted on /projects")
        const a = await p_Model.find();
        res.json(a)
        
    }
hello()
})
//<-------send projects-----------> 


app.get('/skills', (req, res) => {

    async function hello() {
        console.log("request acepted on /skills")
        const a = await s_Model.find();
        res.json(a)
        
    }
hello()
})


//<-------admin----------->

app.post('/admin-lock', (req, res) =>
{

    console.log(req.body.user)
    var Key = [""]
    if (req.body.user == process.env.USER && req.body.password == process.env.PASSWORD)
    {
        
        console.log('pass')
 Key = ["ahsanhpc"]
        res.send(Key)
        Key = [""];
    }
    
    else
    {   res.send(Key)
        }
})

// <-----project submit------------->

app.post('/sub-project', async (req, res)=>
{
   
        const pro = new p_Model();

        pro.name = req.body.name;
        pro.image = req.body.image;
        pro.date = req.body.date;
        pro.technology = req.body.technology;
        pro.view = req.body.view;

        const re = await pro.save()
        console.log(re)
        res.status(200)
        res.send("done")
    
   
    
})


// <-----skill submit------------->

app.post('/sub-skill', async (req, res) => {
    
    const ski = new s_Model();

    ski.name = req.body.name;
    ski.image = req.body.image;
    ski.about = req.body.about;


     await ski.save()
    
    res.status(200)
    res.send("done")

    
})


//<-------listen at the port 8000-----------> 



app.listen(8000, () => {
    console.log("server is running")
})