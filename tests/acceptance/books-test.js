import { test } from 'qunit';
import moduleForAcceptance from 'book-maganger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | books');

test('visiting /books', function(assert) {
  visit('/books');
  server.create('book', { title: 'Intro to Ember', author: 'Tom Dale' });
  server.create('book', { title: 'Ember-Data Advanced', author: 'Yehuda Katz' });

  andThen(function() {
    assert.equal(currentURL(), '/books');
    assert.equal(find('.test-page-title').text().trim(), 'Book list', 'show page title');
    assert.equal(find('.test-book-item').length, 2, 'list 2 books');
    assert.equal(find('.test-book-item:eq(0)').text(), 'Intro to Ember by Tom Dale', 'show title and author from 1. book');
  });
});
