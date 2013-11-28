module "Post",
  setup: ->
    Ember.run App, App.advanceReadiness

  teardown: ->
    App.reset()

test "#title", ->
  build('post').then (post) ->
    equal post.get('title'), 'zomg'

  build('post', title: 'zonk').then (post) ->
    equal post.get('title'), 'zonk'