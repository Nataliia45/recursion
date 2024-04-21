function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    else {
        return num * pow(num, degree - 1);
    }
}

const num = 2;
const degree = 3;
const result = pow(num, degree);

console.log(`${num} в ступені ${degree} = ${result}`);