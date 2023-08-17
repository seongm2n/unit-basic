const Calculator = require('../calculator.js');

// describe -> test그룹 나누기
describe('Calculator', () => {
	let cal;

	//beforeEach -> test케이스 실행 전에 Calculator인스턴스 초기화 역할
	beforeEach(() => {
		cal = new Calculator();
	});

	// it은 Calculator를 가르키는 3인칭 주어
	it('inits with 0', () => {
		expect(cal.value).toBe(0);
	});

	it('sets', () => {
		cal.set(5);
		expect(cal.value).toBe(5);
	});

	it('clear', () => {
		cal.set(10);
		cal.clear();
		expect(cal.value).toBe(0);
	});

	it('adds', () => {
		cal.set(7);
		cal.add(3);
		expect(cal.value).toBe(10);
	});

	it('adds should throw an error if value is greater then 100', () => {
		// 에러를 예상하는 코드
		expect(() => {
			cal.add(101);
		}).toThrow('Value can not be greater than 100');
	});

	it('substracts', () => {
		cal.set(15);
		cal.substract(5);
		expect(cal.value).toBe(10);
	});

	it('multiplies', () => {
		cal.set(4);
		cal.multiply(3);
		expect(cal.value).toBe(12);
	});

	// 나누는 것은 까다롭기 때문에 그룹으로 묶어서 test
	describe('divides', () => {
		it('0 / 0 === NaN ', () => {
			cal.divide(0);
			expect(cal.value).toBe(NaN);
		});

		it('1 / 0 === Infinity ', () => {
			cal.set(1);
			cal.divide(0);
			expect(cal.value).toBe(Infinity);
		});

		it('4 / 4 === 1 ', () => {
			cal.set(4);
			cal.divide(4);
			expect(cal.value).toBe(1);
		});
	});
});
