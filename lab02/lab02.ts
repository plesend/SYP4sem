type Person = {
    id : number;
    name : string;
    group : number;
}
const array : Array<Person> = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

//

type CarsType = {
    manufacturer : string;
    model : string;
}

let car: CarsType = {manufacturer: "manufacturer", model : 'model'}; 

//

const car1: CarsType = {manufacturer : "manufacturer", model : 'model'}; 

const car2: CarsType = {manufacturer : "manufacturer", model : 'model'}; 

type ArrayCarsType = {
    cars : object[];
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

/////////
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = true | false;
type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type GroupFilterType = 1 | 2| 3| 4| 5| 6| 7| 8| 9| 10| 11| 12;
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

let person1 : StudentType = {
    id : 1, 
    name: "Коля", 
    group : 6, 
    marks: [
        {subject:"обж",mark:5,done:false},
        {subject:"русский язык",mark:7,done:true}
    ]
}

let person2 : StudentType = {
    id : 2, 
    name: "Даша", 
    group : 6, 
    marks: [
        {subject:"математика",mark:10,done:true},
        {subject:"физика",mark:10,done:true}
    ]
}

const group1 : GroupType = {
    students: [],
    studentsFilter: function(group : number): Array<StudentType> {
        return this.students.filter(st=>st.group === group);
    },
    marksFilter: function (mark: number) : Array<StudentType> {
        return this.students.filter(st=>st.marks.some(m=> m.mark === mark));
    },
    deleteStudent:function(id:number):void
    {
        let index:number = this.students.findIndex(st=>st.id === id);
        if(index !== -1)
        {
            this.students.splice(index, 1);
        }
    }, 
    group:1,
    mark: 0 as any
}

group1.students.push(person1);
group1.students.push(person2);

console.log(group1.marksFilter(8));
group1.deleteStudent(3);
console.log("\n");
group1.students.forEach(std => {
    console.log(std);
});