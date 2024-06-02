document.getElementById('fetch-posts').addEventListener('click', fetchPosts);

function fetchPosts() {
    document.getElementById("posts-container").style.display= "block";
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = '';
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

document.getElementById('remove').addEventListener('click', ()=>{
    document.getElementById("posts-container").style.display= "none";
});

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
