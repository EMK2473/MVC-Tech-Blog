// dev JS functions for deleting a post
const deletePost =  async (event) => {
    const response = await fetch(`/api/posts/${post.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json" },
    })
if (response.ok) {
    document.location.reload()
} else {
    alert("Failure deleting post!")
}
};

const deletePostHandler = (event) =>{
    if (event.target.matches('.delete-post')) {
        const post_id = event.target.getAttribute('data-post-id');
        deletePost(post_id)
    }
}
document.addEventListener('click', deletePostHandler)