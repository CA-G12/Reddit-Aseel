const conn=require('../config/connection');
const upvote=(id)=>conn.query(`update posts set votes=votes+1 where id=${id}`);
module.exports=upvote;