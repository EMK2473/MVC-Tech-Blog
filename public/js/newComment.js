// dev JS functions for posting a new Comment
const newCommentFormHandler = async(event) =>{
    const post_id = parseInt(window.location.pathname.split('/').pop());
    const content =  document.querySelector('#content-new-comment').ariaValueMax.trim();
if(content){
    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text: content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
    if(response.ok){
        document.location.reload();
    } else {
        console.log('Response Status:', response.status);
        console.log('Response Text:', response.text());
        alert('Failure to create comment!')
    }
}
}

// event listener
const newCommentForm = document.querySelector('.new-comment-form');
if(newCommentForm){
    newCommentForm.addEventListener('submit', newCommentFormHandler)
}