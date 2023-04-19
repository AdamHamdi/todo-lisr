import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Todo } from 'src/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  name!: string;
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

//class inheritence typescrit
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