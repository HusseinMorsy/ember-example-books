export default function(server) {

  server.create('book', { title: 'Intro to Ember' });
  server.create('book', { title: 'Ember-Data Advanced' });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
