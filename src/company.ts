// import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // this.companyName = faker.company.companyName();
    this.companyName = 'Google';
    // this.catchPhrase = faker.Company.catchPhrase();
    this.catchPhrase = 'Google';
    this.location = {
      // lat: parseFloat(faker.address.latitude()),
      lat: -72.9573,
      // lng: parseFloat(faker.address.longtitude())
      lng: 53.7776
    };
  }
}