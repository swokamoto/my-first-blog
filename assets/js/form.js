const userName = document.getElementById('userName');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();

    if (userName.value === '' || title.value === '' || content.value === '') {
        alert('Please fill out all fields');
        return;
    } else {
    let blogPost = {
        userName: userName.value,
        title: title.value,
        content: content.value
        };
    
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = './blog.html';
    }
});