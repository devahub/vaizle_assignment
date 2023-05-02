const { solution } = require("./main");

const testCases = [
    {
        input: { '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2, },
        output: { Sun: 2, Mon: -6, Tues: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8 },
    },
    {
        input: { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 },
        output: { Sun: 14, Mon: 2, Tues: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12 },
    }
]




test('run all testcases', () => {
    testCases.forEach(D => {
        const res = solution(D.input);
        expect(res).toEqual(D.output);
    })
});