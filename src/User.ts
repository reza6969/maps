// import faker from 'faker';
// const faker = require('faker');

export default 'green';

export const red =  'red';
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, lat: number, lng: number) {
    // this.name = faker.name.firstName();
    this.name = 'reza';
    // console.log(this.location);
    // this.location.lat = 12;
    this.location = {
      // lat: parseFloat(faker.address.latitude()),
      lat: -72.9573,
      // lng: parseFloat(faker.address.longtitude())
      lng: 53.7776
    };
  }
}