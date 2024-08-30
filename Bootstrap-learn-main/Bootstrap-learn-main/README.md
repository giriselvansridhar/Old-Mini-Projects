# Bootstrap


Defination: __It is a  CSS framework used to simplify the CSS.__ 

---

### 1.SET UP

* Extension: **Live Server**


#### CDN Links: (To insert in the html to install bootstrap in the html )
```

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


```

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>


```

### 2. Container
Types:  

* fixed width


```

<div class="container">

</div>
```







* full width


```

<div class="container-fluid">

</div>
```


### 3.Typography


```
<p class="h1"></p>
<p class="h2"></p>
<p class="h3"></p>
<p class="h4"></p>
<p class="h5"></p>
<p class="h6"></p>

```
```

<p class="display-1">Display Heading</p>
```
      

### 4. Text Colors:



```
<p class="text-muted">The Text is muted</p>


```

```
tex-primary
text-success
text-info
text-warning
text-danger
text-secondary
text-white bg-dark
text-dark
text-light bg-dark
```

### 5. Background color

```
bg-primary
bg-success
bg-danger
bg-warning
```


### 6. Rows and Columns (Grid System)

Container  

* Fixed Width (fixed width)
* Full Width  (Automatically change)


Everything should be kept in container  


max_col=12

1*12,2*6,3*4  


```
<div class="conatiner">

<div class="row">
    <div class="col">
        <p>This is a simple column in row</p>
    </div>

    <div>
        <p>This is a simple column in a column</p>
    </div>


</div>
</div>

```

### 7. Blog Layout


```
<div class="row">

<div class="col"></div>
</div>

<header>

<div class="row">

<div class="col">

<h1></h1>
</div>

<div class="col">

<nav>

<ul class='list-inline'>

<li clas="list-inline-item"><a href="#"></a></li>


<ul>
</nav>

</div>
</header>




<footer>
</footer>




```

### 8. Paddling



1. Container give space between each sides.
2. So, Footer and header can be placed outside of the container.

Paddling allarunf all the element

```
p-2

```

There is paddling from p 0-5


Spacing in the x axis
```
px-5
```

Spacing in the y axis
```
py-5
```


Spacing right 
```
ps-3
```
spacing Left

```
pe-3
```

Spacing Top
```
pt-3
```

spacing botttom

```
pb-3
```

### 9.Marigin



|Paddling|Marigin|
|-----|-----|
|Inner Space|Outer Space|



Paddling allarunf all the element

```
m-2

```

There is paddling from p 0-5


Spacing in the x axis
```
mx-5
```

Spacing in the y axis
```
my-5
```


Spacing right 
```
ms-3
```
spacing Left

```
me-3
```

Spacing Top
```
mt-3
```

spacing botttom

```
mb-3
```

### 10. Responsive Website

Max col length: 12


Small Phone
```
col-12

```

Desktop Site

```
col-md-
```


Phone Protrait Mode

```

col-sm-6

```

### 11. Adding colors

background color black and text white
```
bg-black text-white



```
All these don't change in the links tags


To change in the link tag the class should be added

```
text-white
```


To remove the underline in the links

```
text-decoration-none
```


To change the color of the while body

```
bg-secondary
```


### 12. Deflex

*Start
*End
*Center

```
d-flex justify-content-end

```


```

col-12 col-md-6 mt-3 d-flex justify-content-start justify-content-md-end">
```
### 13.Images
Generate Lorem images
```

<img src="https://picsum.photos/300/200" alt="">
```
gives width=100% in css. It makes the images give a good fit. Make it reponsive
```
class="img-fluid"
```

```
rounded
```

### 14. Cards

```
card 
```
Card Body
```
card-body
```
Card Title
```
card-title
```

Card Text

```
card-text
```
### 15. Forms

```
form-group
```

```
form-control
```


```
class="btn btn-secondary"
```



```
col-lg-6
```


Reference for form


```

<div class="container mb-2 mt-2 ">

            <div class="row ">



                <div class="col-12 col-lg-6 bg-white rounded p-2">

                    <h2>Contact Form</h2>


                    <form action="">

                        <div class="form-group" >
                            <label for="">Emain Address</label>

                            <input type="email" name="" id="" class="form-control">
                        </div>

                        <div class="form-gorup">
                            <label for="">Name</label>
                            <input type="text" class="form-control">

                        </div>


                        <div class="form-group">
                            <label for="">Message</label>
                        <textarea name="" id="" cols="30" class="form-control"></textarea>

                        </div>
                        
                       
                        
                        <button class="btn btn-primary my-2">Submit</button>



                        
                    </form>


                </div>

            


        </div>         





                </div>
            </div>

        </div>




   </div>

</div>
```

### 16. Fixed Navbar

```
fixed-top
```


```
sticky-top
```


### 17.Heght and width


```
h-2
```

```
w-3
```
