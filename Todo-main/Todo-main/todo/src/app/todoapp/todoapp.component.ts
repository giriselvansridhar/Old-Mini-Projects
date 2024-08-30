import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {


  newTasks: string='';


  Tasklists:Appointment[]=[]


  AddTask()
  {

    if(this.newTasks.trim().length)
      {
       let newTasklist:Appointment={
        id:Date.now(),
        task:this.newTasks



        }
        this.Tasklists.push(newTasklist)
        this.newTasks='';

      }


      
      this.newTasks


  }
 
delete(index: number)
{

  this.Tasklists.splice(index,1)

}


}
