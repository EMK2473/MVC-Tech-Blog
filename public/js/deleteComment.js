// dev JS functions for deleting a comment
const comment_id = window.location.toString().split('/')[
    window.location.toString().split("/").length - 1
];
const deleteComment =  async (event) => {
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json" },
    })
if (response.ok) {
    document.location.reload()
} else {
    alert("Failure deleting comment!")
}
};

const deleteCommentHandler = (event) =>{
    if (event.target.matches('.delete-comment')) {
        const comment_id = event.target.getAttribute('data-comment-id');
        deleteComment(comment_id)
    }
}
document.addEventListener('click', deleteCommentHandler)