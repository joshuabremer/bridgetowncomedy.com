describe("Class Redirector", function(){
  it("will convert a hashed path to a full URL path", function() {
    var redirector = new Redirector();
    var url = 'http://example.com/#performers/01/01/01';
    expect(redirector.pushStateFromHash(url)).toEqual('http://example.com/performers/01/01/01');
  });

  it("will convert a hashed path with leading slash to a full URL path", function() {
    var redirector = new Redirector();
    var url = 'http://example.com/#/performers/01/01/01';
    expect(redirector.pushStateFromHash(url)).toEqual('http://example.com/performers/01/01/01');
  });

  it("will leave a normal URL alone", function() {
    var redirector = new Redirector();
    var url = 'http://example.com/performers/01/01/01';
    expect(redirector.pushStateFromHash(url)).toEqual('http://example.com/performers/01/01/01');
  });

  it("will convert a normal path to a hashed path", function() {
    var redirector = new Redirector();
    var url = 'http://example.com/performers/01/01/01';
    expect(redirector.hashStateFromPush(url)).toEqual('http://example.com/#/performers/01/01/01');
  });

  it("will leave a hashed URL alone", function() {
    var redirector = new Redirector();
    var url = 'http://example.com/#/performers/01/01/01';
    expect(redirector.hashStateFromPush(url)).toEqual('http://example.com/#/performers/01/01/01');
  });



});