const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}

for (let i = 0; i < scores.length; i++) {
    let X = scores[i]
    switch (true) {
        case (X <= 60) :
            // Normally I'd set the lower end condition as well
            grades.F++;
            break;
        case (X<= 70):
            grades.D++;
            break;
        case (X<= 80):
            grades.C++;
            break;
        case (X<= 90):
            grades.B++;
            break;
        default:
            grades.A++;
    }
}


