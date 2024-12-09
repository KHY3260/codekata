function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let totalDays = b; 
    for (let i = 1; i < a; i++) {
        totalDays += monthDays[i]; 
    }
    
    const dayIndex = (totalDays + 4) % 7; 
    
    return days[dayIndex];
}
