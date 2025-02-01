import { faker, fakerEN_US } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    // this.companyName = faker.company.companyName();
    // this.companyName = 'Google'; // 'Zieme, Hauck and McClure'
    this.companyName = fakerEN_US.company.name();
    // this.catchPhrase = faker.Company.catchPhrase();
    // this.catchPhrase = 'Google'; // 'Upgradable systematic flexibility'
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      // lat: parseFloat(faker.address.latitude()),
      // lat: -72.9573,
      lat: fakerEN_US.location.latitude(),
      // lng: parseFloat(faker.address.longtitude())
      // lng: 53.7776
      lng: fakerEN_US.location.longitude()
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
      `;
  }
}