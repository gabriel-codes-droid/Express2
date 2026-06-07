const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

//Get and show posts
async function showPosts(){
    const res= await fetch ('https://localhost:8000/api/posts');
    if (!res.ok){
        throw new Error('Failed to fetch posts')
    }
}