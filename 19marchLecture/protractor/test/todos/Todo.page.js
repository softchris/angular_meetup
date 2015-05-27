var TodoHomepage = function() {
  var baseUrl = "http://localhost:3000";

  this.todoInput = element(by.model('todo'));
  this.todos = element.all(by.repeater('todo in todos'));
  this.saveButton = element(by.id('save'));

  this.get = function() {
    browser.get(baseUrl);
  };

  this.saveTodo = function(todoText) {
    this.todoInput.sendKeys(todoText);
    this.saveButton.click();
  };

  this.getResultCount = function(){
  	return this.todos.count();
  }
};

module.exports = TodoHomepage;