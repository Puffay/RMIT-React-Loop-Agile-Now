const USERS_KEY = "users";
const USER_KEY = "user";

//Using week3 code as base

// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {
  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  // User data is hard-coded, passwords are in plain-text.
  const users = [
    {
      email: 'a@a.con',
      name: "mbolger",
      password: "abc123"
    },
    {
      email: 'b@b.com',
      name: "shekhar",
      password: "def456"
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
  users.push({
    email: email,
    name: name,
    password: password
  });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export {
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  addUser
}
