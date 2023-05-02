function solution(data = {}) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const res = {};

    days.forEach(day => {
        res[day] = null;
    })

    Object.keys(data).forEach(val => {
        const count = data[val];
        const d = new Date(val).getDay();
        const day = days[d];

        if (res[day] === null)
            res[day] = count;
        else
            res[day] += count;
    });

    const len = days.length;
    for (let i = 0; i < len; i++) {

        if (res[days[i]] === null) {
            let pre = i, next = i;

            while (res[days[pre]] === null) {
                pre = (len + pre - 1) % len;
            }

            while (res[days[next]] === null) {
                next = (len + next + 1) % len;
            }

            let n;

            if (pre > next) {
                n = pre - next + 2;
            } else {
                n = next - pre - 1;
            }

            const d = (res[days[next]] - res[days[pre]]) / (n + 1);

            for (let j = (pre + 1) % len, k = 1; j !== next; j = (j + 1) % len, k++) {
                res[days[j]] = res[days[pre]] + k * d;
            }
        }


    }

    return res;
}


module.exports = { solution };

if (require.main === module) {
    const testCases = [
        { '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2, },
        { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 },
    ]

    testCases.forEach(D => {
        const res = solution(D);
        console.log(res);
    })
}