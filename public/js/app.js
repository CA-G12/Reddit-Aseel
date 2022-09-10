const renderPost=(post)=>{
  //creating the elements
    const postContainer=document.createElement('article');
    const title=document.createElement('h2');
    const content=document.createElement('p');
    const voteSection=document.createElement('section');
    const postContent=document.createElement('section');
    const upvote=document.createElement('p');
    const downvote=document.createElement('p');
    const voteCount=document.createElement('p');
    const list=document.getElementById('show-posts');
  //setting texts
    upvote.textContent="▲";
    downvote.textContent="▼";
    title.textContent=`${post.title}`;
    content.textContent=`${post.content}`;
    voteCount.textContent=`${post.votes}`;
  //adding classes
  
    postContent.classList.add('post-content');
    postContainer.classList.add('post');
    title.classList.add('post-title');
    content.classList.add('post-content');
    voteSection.classList.add('vote-section');
    upvote.classList.add('vote');
    downvote.classList.add('vote');
  //appending children 
    voteSection.appendChild(upvote);
    voteSection.appendChild(voteCount);
    voteSection.appendChild(downvote);
    postContainer.appendChild(voteSection);
    postContent.appendChild(title);
    postContent.appendChild(content);
    postContainer.appendChild(postContent);
    list.appendChild(postContainer);
  //listeners
    upvote.addEventListener('click',()=>{
        fetch('/upvote',{method: 'POST', headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },body:JSON.stringify({id:post.id})})
       .then(()=>{
            fetch('/voteCount')
              .then((votes)=>{
                console.log(votes);
                voteCount.textContent=`${votes}`;
              }).catch((err)=>err)
       })
       .catch((err)=>err)
   })

    downvote.addEventListener('click',()=>{
         fetch('/downvote',{method: 'POST', headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },body:JSON.stringify({id:post.id})})
        .then(()=>{
          fetch('/voteCount')
            .then((votes)=>{
              console.log(votes);
              voteCount.textContent=`${votes}`;
            }).catch((err)=>err)
     })
        .catch((err)=>err)
    })
}  

fetch('/getPosts')
.then((data)=>data.json())
.then((data)=>{
    data.forEach((obj)=>{
        renderPost(obj)
    })
})
.catch(((err)=>console.log(err)));

