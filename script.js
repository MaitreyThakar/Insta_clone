var dark = document.getElementById("clicked");
var white = document.getElementById("white-color");
var lol = document.getElementById("white-2color");
dark.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        white.style.filter = "brightness(5)";
        lol.style.filter = "brightness(5)";
    }
    else{
        white.style.filter = "none";
        lol.style.filter = "none";
    }
}

document.querySelectorAll('.post').forEach(post => {
    const likeButton = post.querySelector('.like-button');
    const likeCount = post.querySelector('.like-count');
    const commentInput = post.querySelector('.comment-input');
    const commentButton = post.querySelector('.comment-button');
    const commentList = post.querySelector('.comment-list');

    let likes = 0;

    likeButton.addEventListener('click', () => {
        likes++;
        likeCount.textContent = likes;
    });

    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.textContent = commentText;
            commentList.appendChild(commentElement);
            commentInput.value = ''; // Clear the input after posting
        }
    });
});
//what is classList ?



