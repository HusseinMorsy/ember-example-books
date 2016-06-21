import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  author: `${faker.name.firstName()} ${faker.name.lastName()}`
});
