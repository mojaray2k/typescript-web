import {User} from './models/User';

const user = new User({name: 'FirstName LastName', age: 20});

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('click', () => {
  console.log('Click #1');
});

user.trigger('click');
