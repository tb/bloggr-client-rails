#= require jquery
#= require handlebars.runtime
#= require ember
#= require ember-data
#= require showdown
#= require moment
#= require_tree ./templates

@App = Ember.Application.create()

App.ApplicationAdapter = DS.FixtureAdapter.extend()

App.Router.map ->
  @resource "about"
  @resource "posts", ->
    @resource "post",
      path: ":post_id"

App.PostsRoute = Ember.Route.extend
  model: ->
    @store.find "post"

App.PostController = Ember.ObjectController.extend
  isEditing: false
  actions:
    edit: ->
      @set "isEditing", true

    doneEditing: ->
      @set "isEditing", false

attr = DS.attr

App.Post = DS.Model.extend
  title: attr "string"
  author: attr "string"
  intro: attr "string"
  extended: attr "string"
  publishedAt: attr "date"

App.Post.FIXTURES = [
  id: 1
  title: "zomg"
  author: "ebryn"
  intro: "zomg"
  extended: "ZOMG ZOMG ZOMG ZOMG"
  publishedAt: "2013-04-19"
]

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper "markdown", (input) ->
  new Handlebars.SafeString(showdown.makeHtml(input))

Ember.Handlebars.registerBoundHelper "date", (date) ->
  moment(date).fromNow()
