//= require jquery
//= require handlebars.runtime
//= require ember
//= require ember-data
//= require showdown
//= require moment
//= require_tree ./templates

App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.FixtureAdapter.create()
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});

var attr = DS.attr;

App.Post = DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  intro: attr('string'),
  extended: attr('string'),
  publishedAt: attr('date')
});

App.Post.FIXTURES = [
  {id: 1, title: 'zomg', author: 'ebryn', intro: 'zomg', extended: 'ZOMG ZOMG ZOMG ZOMG', publishedAt: "2013-04-19"}
];

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});