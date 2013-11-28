#= require showdown
#= require moment

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper "markdown", (input) ->
  new Handlebars.SafeString(showdown.makeHtml(input))

Ember.Handlebars.registerBoundHelper "date", (date) ->
  moment(date).fromNow()
