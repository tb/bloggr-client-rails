App.PostController = Ember.ObjectController.extend
  isEditing: false
  actions:
    edit: ->
      @set "isEditing", true

    doneEditing: ->
      @set "isEditing", false