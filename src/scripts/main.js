document.getElementById('createPostForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
   
    const title = document.getElementById('title').value.trim();
    const story = document.getElementById('story').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    const img = document.getElementById('img').value.trim();
  
    if (!title || !story || !authorName || !img) {
      alert('All fields are required!');
      return;
    }
  
 
    const post = { title, story, authorName, img };
  
    
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  
    alert('Post created successfully!');
    window.location.href = 'home.html';
  });
  