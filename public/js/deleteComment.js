// const comment_id = window.location.toString().split('/')[
//     window.location.toString().split("/").length - 1
// ];
 // need new way to get value of comment id being itterated over
// extract the last segment of the path from the current URL (-1 for array obj to get last segment of url split)

// deleteComment.js
const deleteComment = async (comment_id) => {
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failure deleting comment!");
    }
};

const deleteCommentHandler = (event) => {
    const deleteButton = event.target.closest('.delete-comment');
    
    if (deleteButton) {
        const comment_id = deleteButton.getAttribute('data-comment-id');
        deleteComment(comment_id);
    }
};

document.addEventListener('click', deleteCommentHandler);