const conn=require('../config/connection');
const signup=({name,email,hashedPass})=>
conn.query({
    text:'INSERT INTO users (username,email,password) VALUES ($1,$2,$3);',
    values:[name,email,hashedPass]
}
);

module.exports=signup;