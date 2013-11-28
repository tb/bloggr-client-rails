module "/conversations",
  setup: ->
    Ember.run App, App.advanceReadiness

  teardown: ->
    App.reset()

test "/", ->
  expect 1

  visit("/").then ->
    ok exists(".navbar"), "The navbar was rendered"

test "/posts", ->
  expect 2

  visit("/posts").then ->
    ok exists("th:contains(Recent Posts)"), "Recent posts list is rendered"
    ok exists("*:contains(Please select a post)")

test "/posts/:post_id", ->
  expect 4

  visit("/posts").then(->
    click "td a:first"
  ).then ->
    equal find(".span9 h1").text(), "zomg", "The post title was rendered"
    ok exists(".span9 h2:contains(by ebryn)"), "The post author was rendered"
    equal find(".span9 .intro").text().trim(), "zomg", "The post intro was rendered"
    equal find(".span9 .below-the-fold").text().trim(), "ZOMG ZOMG ZOMG ZOMG", "The post intro was rendered"
