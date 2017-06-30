var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

describe('Test input', function(){
  it('should take in 5 lists of coordinates/commands', function(){
    expect($('.plateau-coords').val().split(', ').length).to.equal(2);
    expect($('.rov1-coords').val().split(', ').length).to.equal(3);
    expect($('.rov2-coords').val().split(', ').length).to.equal(3);
    expect($('.rov1-move').val().split(', ').length).to.not.equal(0);
    expect($('.rov2-move').val().split(', ').length).to.not.equal(0);
  });

});
