const newCommentFormHandler = async(event) =>{
    event.preventDefault();
    const post_id = parseInt(window.location.pathname.split('/').pop());
    // parseInt() to convert the last segment of url to an integer
    // .split('/') to create an array of path segments
    // .pop() to retrieve the last element of that array
    const content =  document.querySelector('#content-new-comment').value.trim();
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


const newCommentForm = document.querySelector('.new-comment-form');
if(newCommentForm){
    newCommentForm.addEventListener('submit', newCommentFormHandler)
}