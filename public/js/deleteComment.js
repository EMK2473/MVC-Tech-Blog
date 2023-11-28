// const comment_id = window.location.toString().split('/')[
//     window.location.toString().split("/").length - 1
// ];
 // need new way to get value of comment id being itterated over
// extract the last segment of the path from the current URL (-1 for array obj to get last segment of url split)

// deleteComment.js
// document.addEventListener("DOMContentLoaded", function () {
//     console.log('DOMContentLoaded event fired!');
//     document.body.addEventListener('click', deleteCommentHandler);
// });
// const deleteComment = async (comment_id) => {
//     try{
//         console.log(comment_id)
//     const response = await fetch(`/api/comments/${comment_id}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//         const commentElement = document.querySelector(`[data-comment-id="${comment_id}"]`);
//             commentElement.remove();
//     } else {
//         alert("Failure deleting comment!");
//     }
// }catch (err){
//     alert("Failure deleting comment!");
//     console.log(err)
// }
// };

// const deleteCommentHandler = (event) => {
//     console.log('Delete comment button clicked!');
//     if (event.target.matches('.delete-comment')) {
//         const comment_id = event.target.getAttribute('data-comment-id');
//         deleteComment(comment_id);
//     }
// };


document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll('.delete-comment');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async function (event) {
            const comment_id = this.getAttribute('data-comment-id');
            console.log('Deleting comment with ID:', comment_id);

            try {
                const response = await fetch(`/api/comments/${comment_id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                });

                if (response.ok) {
                    document.location.reload()
                } else {
                    alert("Failure deleting comment!");
                }
            } catch (err) {
                alert("Failure deleting comment!");
                console.log(err);
            }
        });
    });
});
