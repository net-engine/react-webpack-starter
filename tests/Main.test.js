var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect    = require('expect');

import Main from '../src/components/Main';

describe('main', function () {
  it('renders without problems', function () {
    var main = TestUtils.renderIntoDocument(<Main/>);
    expect(main).toExist();
  });
});
