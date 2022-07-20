import './style/reset.css';
import './style/style.css';

console.log('online');
const num = 150;

const user = {
  name: 'John',
  age: 34,
};

const userTown = {
  ...user,
  town: 'Londe',
};

console.log('user ===', user);
console.log('userTown ===', userTown);
