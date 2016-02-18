import {Component} from 'angular2/core';


@Component({
  selector: 'cli-test-app',
  providers: [],
  templateUrl: 'app/cli-test.html',
  directives: [  ],
  pipes: []
})
export class CliTestApp {
  defaultMeaning: number = 42;
  test:string;
  items:Array<string>;

  constructor(){
  	this.items = new Array<string>();
  	this.items.push('one');
  	this.items.push('two');
  	this.items.push('three');

	this.test = 'test';
  }

  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
