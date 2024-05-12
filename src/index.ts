import { User, red } from './User';
import color from './User';
import { Company } from './company';

console.log(color); // 'green'

type UserConstructor = new (name: string, lat: number, lng: number) => User;
const UserAlias: UserConstructor = User;

// const user = new User();
const user = new UserAlias('John', 123, 456);
console.log(user);

// const company = new Company();
// console.log(company);
type CompanyConstructor = new (CompanyName: string, catchPhrase: string, lat: number, lng: number) => Company;
const CompanyAlias: CompanyConstructor = Company;
const company = new CompanyAlias('Google', 'Google', 123, 456);
console.log(company)