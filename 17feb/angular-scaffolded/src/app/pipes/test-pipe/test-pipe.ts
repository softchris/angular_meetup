import {Pipe} from 'angular2/core';


@Pipe({
  name: 'TestPipe'
})
export class TestPipe {

  transform(value, args?) {
    return null;
  }

}
