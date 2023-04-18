import "./b";

export function testFunction() {
	console.log('test');
}

export var testVar = 123;

// This will not be exported
export const testConst = 123

// This will not be exported
export let testLet = 123;

// This will not be exported
export class testClass {};

// If export default then it exports everything correctly
// export default {}