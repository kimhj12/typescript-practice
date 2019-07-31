
//undefined, null, string, number, object, function

/*const myNumber: number = 5;

console.log(myNumber);

function add(a: number, b: number) {
    return a+b;
}

add(5, 10);
*/
const myAnyValue: any = () => {}; //어떤 타입도 가능

const myNumber: number = 5;

const myString: string = "12345";

const myArray: number[] = [1, 2, 3];

const myTuple: [number, number | string] = [10, 20];

const myObject: { a:number } = { a: 10 }; //a에 값을 줘야 에러 X
const myObject: { a:number | b: string } = { b: "aas" }; 
const myObject: { a:number} & {b: string } = { a: 10, b: "aas" }; 

const myFunction: (a: number) => number = (a) => a.toString();
myFunction(10).charAt(1);