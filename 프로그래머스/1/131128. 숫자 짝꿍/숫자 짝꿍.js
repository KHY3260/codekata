function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    for (let digit of X) {
        countX[digit]++;
    }

    for (let digit of Y) {
        countY[digit]++;
    }

    let answer = '';

    for (let i = 9; i >= 0; i--) {
        let commonCount = Math.min(countX[i], countY[i]);
        answer += String(i).repeat(commonCount);
    }

    if (answer === '') return '-1';   
    if (answer[0] === '0') return '0'; 

    return answer;
}