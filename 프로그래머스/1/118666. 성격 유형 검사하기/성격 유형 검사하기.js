function solution(survey, choices) {
    const scores = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    survey.forEach((question, index) => {
        const [type1, type2] = question.split("");
        const choice = choices[index];
        const score = Math.abs(choice - 4); 

        if (choice < 4) {
            scores[type1] += score;
        } else if (choice > 4) {
            scores[type2] += score;
        }
    });
    const result = [
        scores.R >= scores.T ? "R" : "T",
        scores.C >= scores.F ? "C" : "F",
        scores.J >= scores.M ? "J" : "M",
        scores.A >= scores.N ? "A" : "N"
    ];

    return result.join(""); 
}