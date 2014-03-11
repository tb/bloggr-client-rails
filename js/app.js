App = Ember.Application.create({});
// 1. add the adpater
// 2. create the models
// 3. create the server/fixtures
// 4. connect code

App.ApplicationAdapter = DS.FixtureAdapter.extend({})

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  body: DS.attr()
})

App.Post.FIXTURES = [{
  id: '1',
  title: "Taco Tuesday",
  author: "President Business",
  date: new Date('2-8-2014'),
  body: "Hi, I'm President Business, president of the Octan corporation and the world. Let's take extra care to follow the instructions or you'll be *put to sleep*, and don't forget Taco Tuesday's coming next week."
}, {
  id: '2',
  title: "Top 3 reasons why Everything is Awesome",
  author: "President Business",
  date: new Date('2-7-2014'),
  body: "1. You're part of a team\n\n2. We're living our dream\n\n3. Gonna win forever, party forever"}];

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});