import axios from "axios"
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors())

app.get("/", async (req, res) => {
  res.send("Working")
})
app.get("/md", async (req, res) => {
  try {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
    };
    axios.get("https://api.github.com/repos/isreeks/Web101-HTML-CSS-JS-JSDOM/contents/HTML-BASICS/text-formatting.md", axiosConfig)
      .then((re)=>{
        let content = re.data.content;
        
        let bufferObj = Buffer.from(content, "base64");
        let decodedString = bufferObj.toString("utf8");
    
        axios.post('https://api.github.com/markdown', { text: decodedString }, axiosConfig)
        .then((re2)=>{
          console.log(re2.data);
    
          res.send(re2.data);
        })
      })

      
    
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});