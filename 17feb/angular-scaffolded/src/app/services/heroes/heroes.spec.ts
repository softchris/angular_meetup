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
import {Heroes} from './heroes';


describe('Heroes Service', () => {

  beforeEachProviders(() => [Heroes]);


  it('should ...', inject([Heroes], (service:Heroes) => {

  }));

});
