// 체육 수업에 참석할 수 있는 최대 학생 수를 계산하는 함수
function solution(n, lost, reserve) {
    // 여벌 체육복이 있으나 도난당한 학생 제외
    let actualReserve = reserve.filter(r => !lost.includes(r));
    let actualLost = lost.filter(l => !reserve.includes(l));

    // 체육복 빌려주기
    actualLost.sort((a, b) => a - b);
    actualReserve.sort((a, b) => a - b);

    for (let i = 0; i < actualReserve.length; i++) {
        let lendIndex = actualLost.findIndex(l => Math.abs(l - actualReserve[i]) === 1);
        if (lendIndex !== -1) {
            actualLost.splice(lendIndex, 1); // 체육복 빌려주기
        }
    }

    // 체육 수업에 참석 가능한 학생 수 계산
    return n - actualLost.length;
}