import { posts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('postForm');
  const titleInput = document.getElementById('postTitle');
  const storyInput = document.getElementById('postStory');
  const imgInput = document.getElementById('postImg');
  const authorNameInput = document.getElementById('postAuthor');

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get new post data
    const newPost = {
      id: Date.now(),  // Use a timestamp for unique id
      title: titleInput.value,
      story: storyInput.value,
      img: imgInput.value,
      authorName: authorNameInput.value,
    };

    // Save the new post to localStorage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    // Redirect to the homepage after saving the post
    window.location.href = 'index.html';
  });
});
