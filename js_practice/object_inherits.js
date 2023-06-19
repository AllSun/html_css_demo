function Student(name){
    this.name = name;
    this.hello = function(){
        console.log('hello,'+this.name);
    };
}

function PrimaryStudent(props){
    Student.call(this,props);
    this.grade = props.grade || 1;
}

function F() {
}

F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();


PrimaryStudent.prototype.consturctor = PrimaryStudent;

var sun = new PrimaryStudent('孙墨衍',2);
console.log(sun.__proto__);
console.log(sun.__proto__);

