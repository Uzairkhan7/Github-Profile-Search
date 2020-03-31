// let fetchData=()=>{
//     return  

// }

// fetchData()
// .then(res=>{
// return res.json()
// })
// .then(res=>{
//     console.log('res: ', res);
// }).catch(res=>{
//     console.log("res.error");
// });
function renderCard(){
    let userName = document.getElementById("userName").value;
    console.log('userName: ', userName);
    
    fetch(`https://api.github.com/users/${userName}`)
    .then(res=>{
        return res.json()
    })
    .then(data =>{
        let userObj = data
        console.log('UserObj: ', userObj);
        let {avatar_url, html_url, location,  name, bio, public_repos, followers, following} = userObj
        console.log('avatar_url: ', avatar_url);
    
        let main = document.getElementById("main")

        if(avatar_url){
        main.innerHTML = `
        <div class="card">
    <div class="banner">
    <img src="${avatar_url}" alt="">
    </div>
    <div class="menu">
    </div>
    <h2 class="name">${name}</h2>
    <div class="title">From ${location}</div>
    <div class="actions">
      <div class="follow-info">
        <h2><a href="#"><span>${public_repos}</span><small>Public Repos</small></a></h2>
        <h2><a href="#"><span>${followers}</span><small>Followers</small></a></h2>
        <h2><a href="#"><span>${following}</span><small>Following</small></a></h2>
      </div>
      <div class="follow-btn">
        <button><a style="color: grey;"  href="${html_url}" >Visit Profile</a> </button>
      </div>
    </div>
    <div class="desc">${bio}</div>     
    
    </div>
 
        `
    }else{
        main.innerHTML = `
        <div id="heading">
    <h1>User Not Found !</h1>
   </div>
        `
    }
    
document.getElementById("userName").value = ""
    
})
}
