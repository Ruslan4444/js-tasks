import shortId from "shortid";
// export default

// const fetchAllUsers = () => {
//   console.log("fetchAllUsers");
// };

// const fetchUserById = (id) => {
//   console.log("fetchUserById");
// };

// const updateUserById = (id) => {
//   console.log("updateUserById");
// };

// export default { fetchAllUsers, fetchUserById, updateUserById };

// named export
export const fetchAllUsers = () => {
  console.log("fetchAllUsers");
};

export const fetchUserById = (id) => {
  console.log("fetchUserById");
};

export const updateUserById = (id) => {
  console.log("updateUserById");
};

export const x = 5;

export const y = "mango";

export const addUser = (name) => {
  const user = {
    id: shortId.generate(),
    name,
  };
  console.log(user);
};
