import time

def Opening_page():
    global inp
    print('\t\tWelcome to Contact:')
    print('Select operation:')
    print('1.Add contact')
    print('2.Delete Contact')
    print('3.Edit contact')
    print('4.View Contact')
    print('5.View all contacts')
    print('6.exit')
    inp=int(input('select the operation:(1/2/3/4/5/6):'))
   

contactDetail={}
def addContact():
    print('Add Contact')
    Name=input('\tAdd Contact Name:').lower()
    Phoneno=int(input('\tAdd Phone number:'))
    contactDetail[Name]=Phoneno
    time.sleep(2)
    print('\t\tContact saved!')
    time.sleep(1)
    

def deleteContact():
    print('Delete Contact')
    name=input('\tEnter the name to delete:').lower()
    count=0
    for key in contactDetail:
        if key==name:
            count+=1
    if count==0:
        print('\t\tRecord not found')
    else:
        del contactDetail[key]        

        
    print('\t\tContact deleted!')
    time.sleep(1)

def editContact():
    print('Edit Contact')
    count=0
    name=input('\tEnter the contact name to edit:').lower()
    for key in contactDetail:
        if key==name:
            
            
            count+=1
    if count==0:
        time.sleep(2)
        print('\t\tRecord not found')
    else:
        del contactDetail[key]
        newname=input('\tPlz enter new name:')
        newphone=int(input("\ttPlz enter new phone:"))
        time.sleep(1)
        print('\t\tContact edited!')
        contactDetail[newname]=newphone
        
    
    

def viewcontact():
    print('View Contact')
    name=input('\tEnter the number to search:').lower()
    count=0
    for key in contactDetail:
        if key==name:
            time.sleep(2)
            print('\tThe phone number:' ,contactDetail[name])
            count+=1
            time.sleep(1)

            
    if count==0:
        print('\t\tRecord not found!')        
        time.sleep(1)
            

    

def Allcontact():
    for keys in contactDetail:
        print(keys,':', contactDetail[keys])
        time.sleep(0.5)

while (True):
    Opening_page()
    if inp==1:
        addContact()
        continue
    if inp==2:
        deleteContact()
        continue
    if inp==3:
        editContact()
        continue
    if inp==4:
        viewcontact()
        continue
   
    if inp==6:
        print('Thank you for using the contact app!')
        break
    if inp==5:
        Allcontact()
    else:
        print('Invalid choice!') 
    
