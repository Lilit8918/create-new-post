import { bloggers } from './data.js';
import { getLocalStorageData } from './utils.js';  

function renderPost(post) {
  const postCard = document.createElement('div');
  postCard.className = 'post-card';

  postCard.innerHTML = `
    <img src="${post.img}" alt="${post.title}" class="post-image">
    <div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-story">${post.story}</p>
      <p class="author-name">Author: ${post.authorName}</p>
    </div>
  `;

  return postCard;
}

function renderBlogger(blogger) {
  const bloggerCard = document.createElement('div');
  bloggerCard.className = 'blogger-card';

  bloggerCard.innerHTML = `
    <img src="${blogger.avatar}" alt="${blogger.firstName}" class="avatar">
    <p class="blogger-name">${blogger.firstName} ${blogger.lastName}</p>
  `;

  return bloggerCard;
}

document.addEventListener('DOMContentLoaded', () => {
  const postsList = document.getElementById('postsList');
  const bloggersList = document.getElementById('bloggersList');

  const localPosts = JSON.parse(localStorage.getItem('posts')) || [];

  if (localPosts.length === 0) {
   
    const defaultPosts = [
      {
        id: 1,
        title: "The Adventures of Alice in Wonderland",
        story: "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do...",
        authorName: "Lewis Carroll",
        img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png",
      },
      {
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        story: "One ring to rule them all, one ring to find them, one ring to bring them all...",
        authorName: "J.R.R. Tolkien",
        img: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp",
      },
      {
        id: 3,
        title: "Pride and Prejudice",
        story: "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
        authorName: "Jane Austen",
        img: "https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp",
      },
    ];

    localPosts.push(...defaultPosts);  
    localStorage.setItem('posts', JSON.stringify(localPosts));
  }

  localPosts.forEach(post => postsList.appendChild(renderPost(post)));

  bloggers.forEach(blogger => bloggersList.appendChild(renderBlogger(blogger)));
});
