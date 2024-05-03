document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blogContent');
    
    blogPosts.forEach(function(blogPost) {
        const blogPostCard = document.createElement('div');
        
        blogPostCard.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${blogPost.title}</h2>
            <h3 class="card-subtitle text-muted">By ${blogPost.userName}</h3>
            <p class="card-text">${blogPost.content}</p>
        </div>
        `;

        blogPostsContainer.appendChild(blogPostCard);
    }
    );
});

const back = document.getElementById('backButton');
back.addEventListener('click', function() {
    window.location.href = './index.html';
});
