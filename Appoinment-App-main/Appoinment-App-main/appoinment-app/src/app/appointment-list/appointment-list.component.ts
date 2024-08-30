import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; 
import { OnInit } from '@angular/core';

// Need to import first

@Component ({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {


ngOnInit(): void {
  let savedAppoinments=localStorage.getItem("appointments")
  this.appointments=savedAppoinments ? JSON.parse(savedAppoinments):[]
  
}

  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  







  appointments: Appointment[]=[]

  addAppointment()
  {

    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
      {
        let newAppointment: Appointment=
        {
          id:Date.now(),
          title:this.newAppointmentTitle,
          date:this.newAppointmentDate
        }

        this.appointments.push(newAppointment)
        this.newAppointmentTitle="";
        this.newAppointmentDate=new Date();
        localStorage.setItem("appointments",JSON.stringify(this.appointments))

      }

  
    
  }




  deleteAppointment(index: number)
{
  this.appointments.splice(index,1);
  localStorage.setItem("appointments",JSON.stringify(this.appointments))


} 







  






  

}
