import { faker, fakerEN_US } from '@faker-js/faker';
import type { LocaleDefinition } from '@faker-js/faker';
import { base, de, de_CH, en, Faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export default 'green';

export const red =  'red';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const customLocale: LocaleDefinition = {
  metadata: {
    title: 'My custom locale',
  },
  internet: {
    domainSuffix: ['test'],
  },
};

export const customFaker = new Faker({
  locale: [customLocale, de_CH, de, en, base],
});

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    // console.log(customFaker.location)
    // this.name = faker.name.firstName();
    // this.name = 'reza';
    this.name = faker.person.firstName();
    // console.log(this.location);
    // this.location.lat = 12;
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
    return `User name; ${this.name}`;
  }

}