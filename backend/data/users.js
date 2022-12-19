import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'Bahar@example.com',
    password: bcrypt.hashSync('qazwsx', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('qweasdzxc', 10),
  },
];

export default users;
