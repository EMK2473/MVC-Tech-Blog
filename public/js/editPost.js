// dev JS functions for editing a post
const post_id = window.location.toString().split('/')[
    window.location.toString().split("/").length - 1
]; // get post_id from endpoint by subtracting one from index

// update Post Form Handler
const updatePostFormHandler = async (event) =>{
    event.preventDefault();
    const title = document.querySelector('#title-update-post').value.trim();
    const content =  document.querySelector('#content-update-post').value.trim();
    if(title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
          });
    if (response.ok) {
        document.location.replace('/dashboard')
    }else {
        alert("Failure to update post!")
    }
    }
};

// delete Post Form Handler
const deletePostFormHandler = async (event) =>{
    event.preventDefault();
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
      });
    if(response.ok){
        document.location.replace('/dashboard')
    } else {
        alert('Failure to delete post!')
    }
}

// update post event listener
const updatePostButton = document.querySelector('#update-post')
if(updatePostButton){
    updatePostButton.addEventListener('click', updatePostFormHandler)
}
// delete post event listener
const deletePostButton = document.querySelector('#delete-post');
if(deletePostButton){
    deletePostButton.addEventListener('click', deletePostFormHandler)
}