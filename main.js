let arrayOfPosts;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()
}


// this function will be passed in as the "checker" function in the first .then method. Will return results if request successful, otherwise will throw an error.
const checkFetch = (res) => {
    // error handling included 
    if(!res.ok) {
      throw Error(res.statusText)
    } 
    console.log('okay')
    return res.json()
  }


// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(checkFetch)
  .then(posts => arrayOfPosts = posts)
  // error handling "catcher" - this needs to be there even error throwing function is in another variable
  .catch(err => console.log(`Error,  ${err}`))
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/

const fetch5Posts = () => {
  const fivePosts = document.getElementById('five-posts')
  for(let index =0; index < arrayOfPosts.length/20;index++) {
    let post = arrayOfPosts[index]
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    fivePosts.append(li)
  }
}

const fetchComments = () => {
  const comments = document.getElementById('comments')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Comment: ${post.body}`)
    li.appendChild(text)
    comments.append(li)
  })
}

const fetchUsers = () => {
  const users = document.getElementById('users')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, User: ${post.userId}`)
    li.appendChild(text)
    users.append(li)
  })
}

// using the docs, PUT (edit) a post

const editPost = () => {
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'John',
    body: 'Henry',
    userId: 1,
    favoriteFood: 'Tacos'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}