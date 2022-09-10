const conn=require('../config/connection');
const getVote=(id)=>conn.query(`SELECT votes FROM posts WHERE id=${id};`);
module.exports=getVote;