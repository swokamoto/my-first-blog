const userName = document.getElementById('userName');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

// submit button to save blog post
submit.addEventListener('click', function(event) {
    event.preventDefault();

    // check if any fields are empty
    if (userName.value === '' || title.value === '' || content.value === '') {
        alert('Please fill out all fields');
        // stop function if any fields are empty
        return;
    } else {
        let blogPost = {
            userName: userName.value.trim(),
            title: title.value.trim(),
            content: content.value.trim()
        };
    
        // get blog posts from local storage or create empty array, add new blog post, and save to local storage
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // redirect to blog page
        window.location.href = './blog.html';
    }
});