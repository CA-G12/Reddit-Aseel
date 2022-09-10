const conn=require('../config/connection');
const getPosts=()=>conn.query('SELECT * FROM posts ORDER BY votes DESC;');
module.exports=getPosts;