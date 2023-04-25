import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate,state, keyframes, group } from '@angular/animations';
import { Guid } from 'guid-typescript';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Todo } from 'src/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('lightsOnOff',[
    state('off', style({
      backgroundColor: 'black'
    })),
    state('on', style({
      backgroundColor: 'white'
    })),
    transition('off =>on',[animate('0.1s')]),
    transition('on =>off',[animate('0.1s')])
  ])
  ]
})
export class AppComponent implements AfterViewInit {
  //animation
  roomState:string ='on'
  counter :number=0
  //todos
  @ViewChild('taskRef') taskElementRef!:ElementRef;
  todos: Todo[] = []
  task: string = '';
  taskCompleted: Todo[] = []
  isEmptyInput(): boolean {
    return this.task.trim() === ''
  }
  nbTaskCompleted: number = 0
  addTask() {
    let TodoFirst = new Todo(
      Guid.create(),
      this.task,
      false)

    this.todos.push(TodoFirst);
    this.task = ''
  }
ngAfterViewInit(): void {
  this.taskElementRef.nativeElement.focus()
}
  markAsCompleted(id: Guid) {
    // let todo = this.todos.filter(todo => todo.id === id)[0];
  let todo =this.todos.find(todo =>todo.id===id);
  if(todo)
    todo.isComplete = true;
    this.nbTaskCompleted++
  }
  markAsNotCompleted(id: Guid) {
    // let todo = this.todos.filter(todo => todo.id === id)[0];
    let todo =this.todos.find(todo =>todo.id===id);
  if(todo)
    todo.isComplete = false;
    this.nbTaskCompleted--
  }
  deleteTask(id: Guid) {
    let index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1)
    }

  }
 toggleLight(){
  this.roomState = (this.roomState =='off'?'on': 'off')
 }
incrementCounter(){
  this.counter += 1
}
}
let array1: number[]=[1,2,3,4,5,6,7,8,9];
let array2: string[]=['E','A','Z','F','T','S','Q','C','X'];
for (let index = 0; index < array1.length; index++){
  const element=array1[index]
 console.log('element', element)
}
array2.forEach(index =>{
  console.log("index",index)
})
let x;
x=25
x=5
console.log("x is", x);
//class concept 
class Student{
  name: string;
  constructor(studentName: string){
    this.name = studentName
  }
  welcome(){
    console.log(`Welcome ${this.name}`);
    
  }
}
const s1 = new Student('Adam')
console.log(s1.name);
s1.welcome()

//class inheritence typescrit -------------------------
class Teacher extends Student{
  
  constructor(teacherName: string){
    super(teacherName)
  }
  assignTask(){
    console.log('Task Assigned')
  }
}
const t1=new Teacher('Ahmed')

console.log(t1.name)
t1.welcome()
t1.assignTask()
/// Access Modifiers  : public , private , protected
// Public : Les membres déclarés public peuvent être accessibles à partir de n'importe quelle classe dans le programme. Cela signifie que les membres publics peuvent être utilisés sans restriction. 
// Private : Les membres déclarés private sont accessibles uniquement à partir de la classe où ils sont définis. Cela signifie que les membres private ne peuvent pas être utilisés à l'extérieur de la classe où ils sont définis.
//Protected : Les membres déclarés protected sont accessibles à partir de la classe où ils sont définis et à partir des sous-classes qui en héritent. Cela signifie que les membres protected peuvent être utilisés dans la classe où ils sont définis et dans toutes les sous-classes qui héritent de cette classe.

//// Arrow function
let getReturnValueNormal = function(){
return 100
}
let getReturnValueArrow = (x: number)=> 100 * x;
console.log(   getReturnValueArrow(5))
console.log( "The type of the getReturnValueArrow is a",typeof getReturnValueArrow);

// loops  on 4 type de loops
// 1 - For      loop

function forLoop() {
  let array1: number[] = [1,2,3,4,5];
   for(let index =0 ; index < array1.length; index++){
    console.log( `l'élement de l'index ${index}  est`,  array1[index]);
   }
}
forLoop()
// 2 - For-In   loop
function forIn() {
  let array1: number[] = [1,2,3,4,5];
  let array2: string[] = ['a','B','C','D','E'];
  let x = 10
   for(let key in array2){
    console.log( `l'élement de l'index ${key}  est`,  array2[key]);
   }
}
forIn()
// 3 - For-Of   loop
function forOf() {
  let array1: number[] = [1,2,3,4,5];
  let array2: string[] = ['a','B','C','D','E'];
  let x = 10
   for(let value of array2){
    console.log( `l'élement de l'index ${value}  est ${value}`   );
   }
}
forOf()
// 4 - For-Each loop ====> the most usefull loop
function forEach() {
  let array1: number[] = [1,2,3,4,5];
  let array2: string[] = ['Z','B','C','D','E'];
  let x = 10
  array1.forEach(element =>{
    console.log( `l'élement de l'index ${element} est ${array1[element]}`   );
   })
}
forEach()

//Operators

//Arithmetic operators
function arithmeticOperator(){
  let x = 100;
  let y = 150;
  let z = x+y;
  console.log(`the value of z est ${z}`)
   let w = z % y;
   console.log(`the modulo (reste) of w est ${w}`)
}
arithmeticOperator()

//Assignment operators
//Relational operators
//Logical operators
//Ternary operators
//Type Operators

