import {User} from './models/User';

const user = new User({name: 'New Record', age: 0});

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');

user.save();
