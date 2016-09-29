var obj={
	"a":5,
	"b":10,
	"c":15,
}
str=JSON.stringify(obj);
console.log(str);

var per=7;
console.log(per.toString());

var a=[1,2,3,4,5];
var b=new Array(6,7,8,9,10);
a[5]="novii element";
b.push("i tut novii element");
console.log(a);
console.log(b);
b.pop(5);
console.log(b);
a.shift();
console.log(a);
a.unshift("dobavili element v nachale massiva");
console.log(a);
console.log("---------------------------------------------");
console.log(b.join('+'));
console.log("---------------------------------------------");
b.reverse();
console.log(b);
a.sort();
console.log(a);
console.log(b.slice(2,3));
console.log(b.splice(2,3));
a.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});
b.map(Math.sqrt);
console.log(b);
function avav(value) {
  return value >= 10;
}
var vvv = [12, 5, 8, 130, 44].filter(avav);
console.log(vvv);