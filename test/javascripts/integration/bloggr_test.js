module("/conversations", {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    Ember.run(App, App.reset);
  }
});

test("/", function() {
  expect(1);

  visit("/").then(function() {
    ok($('.navbar').length, "The navbar is rendered");
  });
});

test("/posts", function() {
  expect(2);

  visit("/posts").then(function() {
    ok(find('th:contains(Recent Posts)').length, "Recent posts list is rendered");
    ok(find('*:contains(Please select a post)').length);
  });
});

test("/posts/:post_id", function() {
  expect(4);

  visit("/posts").then(function() {
    return click("td a:first");
  }).then(function() {
    equal(find(".span9 h1").text(), "zomg", "The post title was rendered");
    ok(find(".span9 h2:contains(by ebryn)").length, "The post author was rendered");
    equal(find(".span9 .intro").text().trim(), "zomg", "The post intro was rendered");
    equal(find(".span9 .below-the-fold").text().trim(), "ZOMG ZOMG ZOMG ZOMG", "The post intro was rendered");
  })
});
