require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Arman-Saini",
    "id": 144936435,
    "node_id": "U_kgDOCKON8w",
    "avatar_url": "https://avatars.githubusercontent.com/u/144936435?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Arman-Saini",
    "html_url": "https://github.com/Arman-Saini",
    "followers_url": "https://api.github.com/users/Arman-Saini/followers",
    "following_url": "https://api.github.com/users/Arman-Saini/following{/other_user}",
    "gists_url": "https://api.github.com/users/Arman-Saini/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Arman-Saini/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Arman-Saini/subscriptions",
    "organizations_url": "https://api.github.com/users/Arman-Saini/orgs",
    "repos_url": "https://api.github.com/users/Arman-Saini/repos",
    "events_url": "https://api.github.com/users/Arman-Saini/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Arman-Saini/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-13T16:01:00Z",
    "updated_at": "2024-04-19T13:19:17Z"
}

app.get('/github',(req, res) =>{
    res.json(githubData)
})

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