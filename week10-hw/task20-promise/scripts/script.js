const POST_API_URL = "https://jsonplaceholder.typicode.com/posts/";
const form = document.querySelector("#form");
const inputPost = document.querySelector("#post");
const postBlock = document.querySelector("#post-block");
const commentBtn = document.querySelector("#post-comment-btn");
const commentsContainer = document.querySelector("#comments-container");

let postEntity = {};

function getPostById(id) {
  return fetch(`${POST_API_URL}${id}`).then((response) => {
    return validateResponse(response);
  });
}

form.addEventListener("submit", (event) => {
  removeCommentsList();
  event.preventDefault();

  const numericValue = Number(inputPost.value);

  if (numericValue < 1 || numericValue > 100) {
    return;
  }

  getPostById(numericValue)
    .then((post) => {
      insertPost(post);
      return post;
    })
    .then((post) => {
      postEntity = post;
    })
    .catch((error) => {
      alert(error.statusText || "Oops! Something went wrong");
    });
});

function getCommentsByPostId(postId) {
  return fetch(`${POST_API_URL}${postId}/comments`).then((response) => {
    return validateResponse(response);
  });
}

commentBtn.addEventListener("click", () => {
  removeCommentsList();

  getCommentsByPostId(postEntity.id)
    .then((comments) => {
      insertCommentsList(comments);
    })
    .catch((error) => {
      alert(error.statusText || "Oops! Something went wrong");
    });
});

function validateResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response);
}

function insertPost(post) {
  const title = document.createElement("div");
  const body = document.createElement("div");

  title.innerText = post.title;
  body.innerText = post.body;

  postBlock.appendChild(title);
  postBlock.appendChild(body);

  postBlock.style.display = "block";
  commentBtn.style.display = "inline-block";
}

function insertCommentsList(comments) {
  const list = document.createElement("ul");
  list.id = "comments-list";

  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.classList = "comment";

    const email = document.createElement("div");
    const name = document.createElement("div");
    const body = document.createElement("div");

    email.innerText = comment.email;
    name.innerText = comment.name;
    body.innerText = comment.body;

    listItem.appendChild(email);
    listItem.appendChild(name);
    listItem.appendChild(body);

    list.appendChild(listItem);
  });

  commentsContainer.appendChild(list);
}

function removeCommentsList() {
  const commentsList = document.querySelector("#comments-list");
  if (commentsList) {
    commentsList.remove();
  }
}
