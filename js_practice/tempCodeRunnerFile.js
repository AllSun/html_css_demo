function Student(props){
    this.name = props.name || "Unnamed";
}

Student.prototype.hello = function(){
    console.log("hello"+this.name);
}


function PrimaryStudent(props){
    Student.call(this,props);
    this.grade = props.grade || 1;
}



var xiaoming  = new PrimaryStudent({name:"xiaoming",grade: 3});


console.log(xiaoming.__proto__)//undefined
console.log(PrimaryStudent.prototype)//{}
console.log(PrimaryStudent.__proto__)//{}
console.log(Student.prototype)   //{ hello: [Function (anonymous)] }
console.log(Student.__proto__) //{}

console.log("==============================建立原型继承，原型和对象")

function F(){

}

F.prototype = Student.prototype;

PrimaryStudent.prototype = new F();

PrimaryStudent.prototype.constructor = PrimaryStudent;

var xiaohong = new PrimaryStudent({name:'xiaohong',grade:5});

console.log(F.prototype); //{ hello: [Function (anonymous)] }
console.log(F.prototype.constructor); //[Function: Student]
console.log(Student.prototype.constructor); //[Function: Student]
console.log(xiaohong.__proto__)//Student { constructor: [Function: PrimaryStudent] }
console.log(PrimaryStudent.prototype)//Student { constructor: [Function: PrimaryStudent] }
console.log(PrimaryStudent.__proto__)//{}
console.log(Student.prototype)   //{ hello: [Function (anonymous)] }
console.log(Student.__proto__) //{}
console.log(xiaohong.hello()) //{}
