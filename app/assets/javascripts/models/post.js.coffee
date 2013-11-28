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