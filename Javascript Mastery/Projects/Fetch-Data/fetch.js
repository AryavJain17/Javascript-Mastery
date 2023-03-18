const getPosts = () => {
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    let AllPostsTitles = '';


    fetchPosts.then((Response)=>{
        Response.json().then((jsondata) => {
          //  console.log(jsondata);

          for (let i = 0; i < jsondata.length; i++) {
            let post = jsondata[i];
         //   console.log(post.title);
         AllPostsTitles = AllPostsTitles + `<strong>Post title </strong>${post.title}  <br> <strong>Post body </strong> ${post.body}<br><hr>`;
            
          }
          document.querySelector("#allPosts").innerHTML = AllPostsTitles;
        })
    })
}