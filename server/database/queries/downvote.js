const conn=require('../config/connection');
const downvote=(id)=>conn.query(`update posts set votes=votes-1 where id=${id}`);
module.exports=downvote;