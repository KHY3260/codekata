function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a);

    for (let i = 0; i + m <= score.length; i += m) {
        const boxMinScore = score[i + m - 1];
        answer += boxMinScore * m;
    }

    return answer;
}