import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TestPipe} from './test-pipe';


describe('TestPipe Pipe', () => {

  beforeEachProviders(() => [TestPipe]);


  it('should transform the input', inject([TestPipe], (pipe:TestPipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
