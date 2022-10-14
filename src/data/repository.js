import axios from "axios";

// Base from Week 8 example

// --- Constants ----------------------------------------------------------------------------------
const API_HOST = "http://localhost:4000";
const USER_KEY = "user";

// --- User ---------------------------------------------------------------------------------------
async function verifyUser(email, password) {
  const response = await axios.get(API_HOST + "/api/users/login", { params: { email, password } });
  return response.data;
}

async function findUser(id) {
  const response = await axios.get(API_HOST + `/api/users/select/${id}`);

  return response.data;
}

async function createUser(user) {
  const response = await axios.post(API_HOST + "/api/users", user);

  return response.data;
}

async function editUser(email, name, id) {
  const response = await axios.put(API_HOST + `/api/users/${id}`, { email, name });

  return response.data;
}

async function deleteUser(id) {
  return await axios.delete(API_HOST + `/api/users/${id}`);
};

// --- Post ---------------------------------------------------------------------------------------
async function getPosts() {
  const response = await axios.get(API_HOST + "/api/posts");

  return response.data;
}

async function createPost(post) {
  const response = await axios.post(API_HOST + "/api/posts", post);

  return response.data;
}

async function createReply(post_id, text) {
  const id = getUser().id;
  const response = await axios.post(API_HOST + `/api/replies/`, { id, post_id, text });

  return response.data;
}

// --- Helper functions to interact with local storage --------------------------------------------
function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export {
  verifyUser, 
  findUser, 
  createUser,
  getPosts, 
  createPost,
  createReply,
  getUser,
  editUser,
  deleteUser,
  removeUser
}
