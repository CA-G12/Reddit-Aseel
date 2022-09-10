const { join } = require('path');
const compression = require('compression');
const express= require('express');
const app= express();
const port = process.env.PORT||5000;
const getVote=require('./database/queries/getVote')
const addPost=require('./database/queries/addPost')
const deletePost=require('./database/queries/deletePost')
const upvote=require('./database/queries/upvote')
const downvote=require('./database/queries/downvote')
const getPosts=require('./database/queries/getPosts')



app.listen(port, () => {
  console.log(`server in running now in  http://localhost:${port}/`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.post('/addPost',(req,res,next)=>{
    const {title,content,author_id}=req.body;
    addPost({title,content,author_id})
    .then((data)=>{
        console.log(data.rows);
        res.redirect('/')
    }).catch((err)=>res.status(500).send('something wrong happened please try again'))
})
app.delete('/deletePost',(req,res,next)=>{
    const {id}=req.body;
    deletePost({id})
    .then((data)=>{
        console.log(data.rows);
        res.redirect('/')
    }).catch((err)=>res.status(500).send('something wrong happened please try again'))
})

app.post('/upvote',(req,res,next)=>{
    const {id}=req.body;
    upvote(id)
    .then((data)=>{
        res.redirect('/')
    }).catch((err)=>res.status(502).send('something wrong happened please try again'))
})

app.post('/downvote',(req,res,next)=>{
    const id=req.body.id;
    downvote(id)
    .then((data)=>{
        res.redirect('/')
    }).catch((err)=>res.status(502).send('something wrong happened please try again'))
})

app.get('/getPosts',(req,res)=>{
    getPosts()
    .then((data)=>res.json(data.rows))
    .catch((err)=>{
        res.status(500);
        throw new Error("server error")
    })
    });

app.get('/voteCount',(req,res)=>{
    const id=req.body.id;
    getVote(id)
    .then((data)=>{
        console.log(data.rows);
        res.json(data.rows)
    })
    .catch((err)=>{
        res.status(500);
    })
});
app.post('/signup',(req,res)=>{
    const {name,email,hashedPass}=req.body;
    

})