Template.registerHelper(
  'price', function() {
    return Array(this.price_level + 1).join('$');
  }
);
