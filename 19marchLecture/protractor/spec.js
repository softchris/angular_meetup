describe('My todo app', function() {
	var baseUrl = "http://localhost:3000";

  it('should add a todo to list', function() {
    browser.get(baseUrl);
    
    element(by.model('todo')).sendKeys("todo");
    element(by.id('save')).click();

    var results = element.all(by.repeater('todo in todos'));


    expect(results.count()).toEqual(1);
  });

  it('should NOT add empty todo to list', function() {
    browser.get(baseUrl);
    
    element(by.model('todo')).sendKeys("");
    element(by.id('save')).click();

    var results = element.all(by.repeater('todo in todos'));


    expect(results.count()).toEqual(0);
  });
});