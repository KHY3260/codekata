function solution(s) {
    return s
        .toLowerCase()
        .split(' ')
        .map(word => {
            if (word.length > 0 && isNaN(word[0])) {
                return word[0].toUpperCase() + word.slice(1);
            }
            return word; 
        })
        .join(' '); 
}