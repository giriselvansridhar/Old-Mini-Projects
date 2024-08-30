Angular 6 Days Course


![image](https://github.com/giriselvansridhar/Appoinment-App/assets/131362593/7eb58798-8c23-40a9-b360-e436ddbcd98a)


Day 1:

1.1.Structure of the angular project, SPAs Application, needs npm and angular

Inside Browser---> inside Angular Application----> Component,Services,Module



1.2 What We will build? Appoinment Management system
1.3 Angular projects can be done using: Online: StackBlitz
1.4


node in website ( install  in browser)
node -version {check the node version}
vs code {IDE}

1.5. Angular CLI(Command Line Interface)16 Version

-c


npm-node package manager

Clean cmd:cls
check angular verion: ng - version

src imp > 

Start server-ng serve -o




1.6.   Create a angular Application: 



1.create new appointment application:  ng new (projectname)

roouting---> No
Style:CSS

2.cd (projectname)  

3. code.

4.ng serve




1.7

![IMG20240609195211](https://github.com/giriselvansridhar/Appoinment-App/assets/131362593/c6a192e5-be0f-4db1-a336-f923de978933)







app.component.ts


export class AppComponent {
  title = 'appoinment-app';
}



#This is the compoent. It can be bided to the template using {{ }}.




1.8. Generate a component

ng  g component appoinment-list

in Appmodules.ts in root directory 


selector in the component should be used the root html




1.9 Into to Typescript


i.The extenstion of the file will be : app-component.ts


ii.All the properties go inside the @component

iii. export class Appcomponent
{
title:string=""
Variable:<variable_type>=""

items: string[]=['item1','item2']
}


#Method in the typescript
log(text:string):void
{



var message='Message'+text;


}

private log(text:string)
{
sum(a:number,b:number)
{

}
}


this. (This is mandatory)

1.10: .ts


variable inside a class is property.

.ts properties will be used in the .html using the {{}}

1.11. Creating a interface.


ng generate interface models/appointment


1.Create a interface
2.Import into the models.ts
3.Use any variable to the interface.

Interface array

appoinments: interfaceVariable[]=[]


1.12 Two way binding

1.create the html tags
2.Create a new varibles in components to the inputs
3.Import Forms modules
4.[(ngModule)] to the allthe variables


1.13. 

[(ngModule)]
(click)

when click the click is pressed. The function Addappoinmnet is initialized 


1. if loop
2. add them to a new variable
3. Push that to the appoinmnet array
4. make the input variable emty again


1.14.

displaying

1.make a list in html
2.use *ngFor='' in the html
3."let i of <array>"
4.{{i.<array elements>}}
5.{{i.date | date: 'dd.MM.yyyy'}}



1.15 Removing the list:
1.create a funcrion]
2.in loop take the index
3.pass the index into to the function
4.splice the array with the index


1.15. 
Stroring the dats in local storage

1.localStorage.setItem("appointments", JSON.strinify(this.apooinments)) in the add delete 




Intilizing the data:

1.Import OnInit
2. In the header of the export class

export class AppoinmentListComponent Implements OnIninit
{ngOnInit(): void {
  let savedAppoinments=localStorage.getItem("appointments")
  this.appointments=savedAppoinments ? JSON.parse(savedAppoinments):[]

  Comment: when it doesnot have lists give a empty list
  
}

}




1.16: Adding Boootstrap

npm i bootstrap@5.3.3 

In style.css in the app

@import "~bootstrap/dist/css/bootstrap.min.css"









   











































Code Sheets:

Install Angular CLI: npm i @angular/cli@16.1.6 --location=global
ng new my-app --no-standalone

Clean cmd:cls
check angular verion: ng - version
 ng new (projectname)
ng serve


