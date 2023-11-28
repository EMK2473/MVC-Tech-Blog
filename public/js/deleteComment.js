document.addEventListener("DOMContentLoaded", function () {
const deleteButtons = document.querySelectorAll('.delete-comment');
deleteButtons.forEach(buttonElement => {
 buttonElement.addEventListener('click', async function (event) {
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

// dev notes:
// requires DOMContentLoaded because delete buttons are being rendered conditionally after initial rendering
// targets delete-comment, forEach's each buttonElement
// adds eventListener to each button
// eventListener gets data-comment-id value
// then makes delete req to delete comment w/ comment_id