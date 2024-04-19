require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('RGBMONKE')
})

app.get('/amount',(req, res)=>{
    res.send('0')
})

app.get('/amountoffriends',(req, res)=>{
    res.send('1/0')
})

app.get('/login',(req, res)=>{
    res.send('<h1>please login at krishibazaar <h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>Arman Saini<h2>")
})

app.listen(process.env.PORT , () =>{
    console.log(`Example app listening to port ${port}`)
})