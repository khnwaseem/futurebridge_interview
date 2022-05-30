const express = require("express")
const cors = require("cors")
const movie = require("./movies.json")

const app = express()
const port = 3003


app.use(express.json())
app.use(cors())

app.get("/movies",(req,res) => {
    res.send(movie)
})
app.post("/add",(req,res) => {
    if(req.body) {
        res.status(200).send(req.body)
    } else {
        res.status(400)("error")
    }
    console.log(req.body)
    
})





app.listen(port,() => {
    console.log(`port is working on ${port}`)
})
