#= require handlebars
#= require ember
#= require ember-data
#= require ember-console-utils
#= require_self
#= require ./store
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates
#= require_tree ./routes
#= require ./router

@App = Ember.Application.create()

App.PostsRoute = Ember.Route.extend
  model: ->
    @store.find "post"
