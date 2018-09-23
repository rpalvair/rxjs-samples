import { of } from 'rxjs';
//emits any number of provided values in sequence
var source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
var subscribe = source.subscribe(function (val) { return console.log(val); });
//# sourceMappingURL=index.js.map