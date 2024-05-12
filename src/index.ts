import { User, red } from './User';
import color from './User';

console.log(color); // 'green'

type UserConstructor = new (name: string, lat: number, lng: number) => User;
const UserAlias: UserConstructor = User;

// const user = new User();
const user = new UserAlias('John', 123, 456);
console.log(user);