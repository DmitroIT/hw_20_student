class Student {
    constructor(firstname, lastname, birth,) {
        this.firstname = firstname
        this.lastname = lastname
        this.birth = birth
        this.grades = []
        this.visited = []
    }

    fullName() {
        console.log(`Имя и фамилия: ${this.firstname} ${this.lastname}`)
    }

    years() {
        const now = new Date().getFullYear()
        const ageStudent = now - this.birth
        console.log(`Возраст: ${ageStudent}`)
        return ageStudent
    }

    gpa() {
        const sum = this.grades.reduce((acc, grades) => acc + grades, 0)
        const resultSum = sum / this.grades.length
        //console.log(`Средний бал: ${resultSum}`)
        return resultSum
    }

    absent() {
        if(this.visited.length < 25) {
            this.visited.push(false)
        }
    }

    present() {
        if(this.visited.length < 25) {
            this.visited.push(true)
        }
        
    }

    summary() {
        const resultVisited = this.visited.filter(isPresent => isPresent).length / this.visited.length

        if(this.gpa() > 90 && resultVisited > 0.9) {
            return console.log('Молодец!') 
        } else if(this.gpa() > 90 || resultVisited > 0.9) {
            return console.log('Хорошо, но можно лучше!') 
        } else {
            return console.log('Редиска!') 
        }
    }
}

const student1 = new Student('Danny','Sas', 1990)
student1.fullName()
student1.grades = [100, 100, 100, 100, 100,] // массив с оценками

//посещаемость студента
student1.present()
student1.present()
student1.present()
student1.present()
//возраст студента
student1.years()
console.log(`Средний бал: ${student1.gpa()}`) 

student1.summary()
console.log('-----------------------')

const student2 = new Student('Max', 'Mayer', 2001)
student2.fullName()
student2.grades = [90, 25, 100, 80] // массив с оценками

//посещаемость студента
student2.present()
student2.present()
//возраст студента
student2.years()
console.log(`Средний бал: ${student2.gpa()}`)

student2.summary()
console.log('-----------------------')

const student3 = new Student('John', 'Smith', 1965)
student3.fullName()
student3.grades = [90, 25, 15, 10] // массив с оценками
//посещаемость студента
student3.present()
student3.present()
student3.absent()
//возраст студента
student3.years()
console.log(`Средний бал: ${student3.gpa()}`)

student3.summary()
console.log('-----------------------')







