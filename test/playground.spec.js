var playground = require('../lib/playground')
var expect = require("chai").expect;

describe("Swift Playground", function() {

    describe("Test Template Directory", function() {
      it("varifies template directory exist", function(){
        expect(playground.templatedir).to.be.a('string');
        expect(playground.templatedir).to.have.length.above(10)
      });
    });
})
