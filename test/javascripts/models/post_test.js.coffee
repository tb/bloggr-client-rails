module "Post",
  setup: ->
    Ember.run App, App.advanceReadiness

  teardown: ->
    App.reset()

test "#title", ->
  build('post').then (post) ->
    equal post.get('title'), 'Title'

  build('post', title: 'New Title').then (post) ->
    equal post.get('title'), 'New Title'