import express from "express"
import axios from "axios";

const app = express();
const port = 3003;

app.use(express.static("publics"))

app.get("/" ,async(req,res)=>{

    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/");
        res.render("index.ejs",{
            secret: result.data.secret, 
            user: result.data.username
        })
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
})
app.listen(port,()=>{
    console.log(`solving is running on port ${port}`);
})