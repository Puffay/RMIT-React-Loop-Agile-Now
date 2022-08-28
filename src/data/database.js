const USERS_KEY = "users";
const USER_KEY = "user";
const FORUMS_KEY = "forums";

//Using week3 code as base

// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {
  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  // User data is hard-coded, passwords are in plain-text.
  const users = [
    {
      id: -1,
      email: 'a@a.com',
      name: "Jason Dori",
      password: "abcd1234"
    },
    {
      id: -2,
      email: 'b@b.com',
      name: "Adan Smith",
      password: "defg4567"
    }
  ];

  // Set data into local storage.
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);

  // Convert data to objects.
  return JSON.parse(data);
}

// NOTE: In this example the login is also persistent as it is stored in local storage.
function verifyUser(email, password) {
  const users = getUsers();
  for(const user of users) {
    if(email === user.email && password === user.password)
    {
      setUser(user);
      return true;
    }
  }

  return false;
}

function existUser(email) {
  const users = getUsers();
  for(const user of users) {
    if(email === user.email)
      return true;
  }

  return false;
}

function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function addUser(email, name, password) {
  const users = getUsers();
  let increment = localStorage.getItem('increment') ?? 0;
  users.push({
    id: increment++,
    email: email,
    name: name,
    password: password,
    date: Date.now()
  });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem('increment', increment);
}

function deleteUser(email) {
  const users = getUsers().filter(user => user.email !== email);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function editUser(name, email) {
  const users = getUsers();
  const user = users.find(user => user.id === getUser().id);
  user.name = name;
  user.email = email;
  setUser(user);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return user;
}

function getUserName(id) {
  return getUsers().find(user => user.id === id).name;
}

function getForums() {
  const data = localStorage.getItem(FORUMS_KEY);
  return JSON.parse(data);
  }

function addForum(author, body, image) {
  const forums = getForums() ?? [];
  let increment = localStorage.getItem('increment') ?? 0;
  forums.unshift({
    id: increment++,
    author: author,
    body: body,
    image: image
  });
  localStorage.setItem(FORUMS_KEY, JSON.stringify(forums));
  localStorage.setItem('increment', increment);
  return forums[0];
}

function setForums(forums) {
  localStorage.setItem(FORUMS_KEY, JSON.stringify(forums));
}

function deleteForum(id) {
  const forums = getForums().filter(forum => forum.id !== id);
  localStorage.setItem(FORUMS_KEY, JSON.stringify(forums));
}

export {
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  addUser,
  existUser,
  deleteUser,
  editUser,
  getUserName,
  getForums,
  addForum,
  setForums,
  deleteForum
}
