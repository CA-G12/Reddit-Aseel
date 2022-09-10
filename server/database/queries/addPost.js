const conn=require('../config/connection');
const addPost=({title,content,author_id})=>
conn.query({
    text:'INSERT INTO posts (author_id,content,title) VALUES ($1,$2,$3);',
    values:[author_id,content,title]
}
);

module.exports=addPost;