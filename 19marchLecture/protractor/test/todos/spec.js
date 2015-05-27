describe('My todo app', function() {
  var TodoHomepage = require('./Todo.page.js');
  var homepageInstance;

  beforeEach(function(){
    homepageInstance = new TodoHomepage();
  })

  it('should add a todo to list', function() {
    homepageInstance.get();
    homepageInstance.saveTodo("todo");
    
    expect(homepageInstance.getResultCount()).toEqual(1);
  });

  it('should NOT add empty todo to list', function() {
    homepageInstance.get();
    homepageInstance.saveTodo("");
    
    expect(homepageInstance.getResultCount()).toEqual(0);
  });
});