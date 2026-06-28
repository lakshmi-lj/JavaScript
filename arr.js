const weeks = ["Mon", "Tue", "Wed"];
const date = [1, 2, 3, 4, 5, 5, 4];

console.log(weeks)

console.log([...weeks, ...date].join('","'))

console.log(weeks.push("Thurs"))

console.log(weeks)

console.log(weeks.pop("Thurs"))

console.log(weeks)

weeks.splice(2, 1)

console.log(weeks)

weeks.splice(1, 1, "SAT")

console.log(weeks)

console.log(weeks.indexOf("SAT"))

console.log(weeks.at(0));
console.log(weeks.reverse());
console.log(date.sort());

console.log(date.sort((prev, next) => {
    return prev > next ? -1 : 1;
}))

date.forEach((da) => {
    console.log(da);
});

const groupedBasket = date.filter((element) => {
    return element == "4"
});

console.log(groupedBasket)


const students = [
    {
        id: 1,
        name: "Keshav",
    },
    {
        id: 2,
        name: "chandan"
    },
    {
        id: 3,
        name: "jeevan"
    }
]
console.log(students);

const studentGrade = students.map((student) => {
    student.grade = "A"
    return student
});

console.log(studentGrade);

const names = students.filter((element) => {
    return element.id <= 2;
});

console.log(names)

const namess = students.map((element) => {
    return {
        name: element.name,
        grade: element.grade,
        id: element.id,
        active: true
    }
});

namess[0].active = false;

console.log(namess)

const a = namess.every((element) => {
    return element.active == true;
})

console.log(a)

const isActive = namess.some((n) => {
    return n.active === true;
})

console.log(isActive)

