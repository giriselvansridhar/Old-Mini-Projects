TO DO LIST using Angular JS

Version: 16.1.6


STEPS:

1. CREATE A TODOLIST PROJECT ANGULAR FOLDERS AND FILES 


    1.1.@Terminal
    ng new todo

2. CREATE A COMPONENT

    2.1@Terminal
    ng g component todoapp

3. CONNECT THE CREATEDAPP HTML TO THE CREATEDAPP COMPONENT HTML Using selector in the typescript file.
4. CREATE A INTERFACE.

  Interface is a datatype like thing. 

   4.1.@Terminal

   ng generate interface models/appointment

   4.2 Import to the .ts component in the todolistapp

   @code@applist.component.ts


   import{Appoinment} fro '../models/appoinment'

   4.3 Create a Interface
     
     4.3.1 The required Interface elements

         1.ID: <DATATYPE>
         2.TASK:<DATATYPE>

5.ADD HTML STUFFS

   5.1.INPUT,INSERT TASK, IN THE TASKLIST THERE SHOULD BE A DELETE BUTTON


6.IMPORT THE FORMS MODULE IN THE app.module.ts

7. CONNECT THE HTML TO CODE

   6.1.
   @Code- [(ngModule)]="newTask", click="click()"

   6.2 create a array
      6.2.1 Create Var
      6.2.2 Create a array
      6.2.3 Create a Function.
      6.2.4 Add remove command
 8. Make a list of these

    8.1 *ngFor in list
    8.2 let Tasks of Tasklists  



 9.Delete Button in the list

   9.1 Adding a (click) in the list
   9.2 index as i
   9.3 splice in the function in the function
   
 



