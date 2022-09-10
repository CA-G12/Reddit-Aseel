const conn=require('../config/connection');
const deletePost=({id})=>conn.query({
    text:`DELETE FROM posts WHERE id=$1 RETURNING *;`,
    values:[id]

});
module.exports=deletePost;