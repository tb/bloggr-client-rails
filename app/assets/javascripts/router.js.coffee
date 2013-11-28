App.Router.map ->
  @resource "about"
  @resource "posts", ->
    @resource "post",
      path: ":post_id"
