const Calculator = require('../calculator.js');

// describe -> test그룹 나누기
describe('Caculator', () => {
	let calculator;

  //beforeEach -> test케이스 실행 전에 Calculator인스턴스 초기화 역할
	beforeEach(() => {
		calculator = new Calculator();
	});

	test('set initial value to 0', () => {
		expect(calculator.value).toBe(0);
	});

	test('set value correctly', () => {
		calculator.set(5);
		expect(calculator.value).toBe(5);
	});

	test('clear value', () => {
		calculator.set(10);
		calculator.clear();
		expect(calculator.value).toBe(0);
	});

	test('add numbers', () => {
		calculator.set(7);
		calculator.add(3);
		expect(calculator.value).toBe(10);
	});

	test('substract numbers', () => {
		calculator.set(15);
		calculator.substract(5);
		expect(calculator.value).toBe(10);
	});

  test('multiply numbers', () => {
		calculator.set(4);
		calculator.multiply(3);
		expect(calculator.value).toBe(12);
	});

  test('divide numbers', () => {
		calculator.set(20);
		calculator.divide(4);
		expect(calculator.value).toBe(5);
	});

  // divide 메서드가 0으로 나누기를 처리하는지 테스트
  test('division by zero', () => {
    calculator.set(10);
    calculator.divide(0);
    expect(calculator.value).toBe(Infinity);
  });
});
