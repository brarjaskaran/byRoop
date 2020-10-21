import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Veerpal",
    email: "veerpal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Roop Gill",
    email: "roop@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
