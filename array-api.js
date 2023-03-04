// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const res = fruits.join('');
    console.log(res);
    console.log('============');
}

// Q2. make an array out of a string
{
    const fruits = 'a, b, c, d';
    const res = fruits.split(',')
    console.log(res);
    console.log('============');
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const res = array.reverse();
    console.log(res);
    console.log('============');
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const res = array.slice(2, 5);
    console.log(res);
    console.log('============');
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
    const res = students.find((student) => student.score === 90);
    console.log(res);
    console.log('============');
}

// Q6. make an array of enrolled students
{
    const res = students.filter((student) => student.enrolled);
    console.log(res);
    console.log('============');
}

// Q7. make an array containing only the students' scores -> [45, 80, 90, 66, 88]
{
    const res = students.map((student) => student.score);
    console.log(res);
    console.log('============');
}

// Q8. check if there is a student with the score lower than 50
{
    const res = students.some((student) => student.score < 50);
    console.log(res);

    const res2 = !students.every((student) => student.score >= 50);
    console.log(res2);
    console.log('============');
}

// Q9. compute students' average score
{
    // const res = students.reduceRight((prev, curr) => prev + curr.score, 0) / students.length;
    const res = students.reduce((prev, curr) => prev + curr.score, 0) / students.length;
    console.log(res);
    console.log('============');
}

// Q10. make a string containing all the scores
{
    const res = students
    .map(student => student.score)
    .join(',');
    console.log(res);
    console.log('============');
}

// Bonus! do Q10 sorted in ascending order
{
    const res = students
    .map(student => student.score)
    .sort()
    // .sort((a, b) => a - b) // 오름차순
    // .sort((a, b) => b - a) // 내림차순
    .join(',');
    console.log(res);
    console.log('============');
}