from turtle import *
#fist we are making the first house out of three houses
speed(30)
width(7)
color("purple")      
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)     
right(90)
forward(60)
right(90)
forward(120)
end_fill()
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
color("purple")
penup()
goto(200, 175)
pendown()
color("blue")
begin_fill()
right(59)
forward(55)
left(90)
forward(36)
left(90)
forward(55)
end_fill()
penup()
goto(0, 0)
left(90)
forward(175)
pendown()
color("blue")
begin_fill()
right(92 )
forward(55)
right(90)
forward(36)
right(90)
forward(55)
end_fill()
#we finished doing first house

#we started second house

#fist house was quadrilateral, but second house will be rectangle 


color("brown")     #first we are making rectangle
begin_fill()
penup()
goto(-60, 0)
pendown()
forward(200)
right(90)
forward(250)
right(90)
forward(200)
right(90)
forward(250)
right(180)   
end_fill()          ##right here we finished rectangle


forward(250)  #now we are going to make roof
color("dark blue")
begin_fill()
left(40)
forward(160)
left(100)
forward(156)
end_fill()    #we completed roof


left(40)      #at the moment we are going to make door

penup()
goto(-260, 0)
left(90)
forward(78)
left(90)
pendown()
color("black")
begin_fill()
forward(95)
right(90)
forward(43)
right(90)
forward(95)
end_fill()  #we finalized door


penup()         #at the present time we are going to build window N1
goto(-60, 200)
right(90)
forward(30)
pendown()
color("yellow")
begin_fill()
forward(60)
left(90)
forward(40)
left(90)
forward(60)
left(90)
forward(40)
end_fill()         #we crowned window N1


penup()         #just now we are going to build window N2
left(90)     
forward(80)
pendown()
color("yellow")
begin_fill()
forward(60)
left(90)
forward(40)
left(90)
forward(60)
left(90)
forward(40)
end_fill()  #we capped N2 window, but we also finished the house N2

penup()    #we are going to make third house now


goto(240, 0)      #fist we are going to build a quadrilateral
color("dark green")
begin_fill()
forward(220)
right(90)
forward(220)
right(90)
forward(220)
right(90)
forward(220)
end_fill()       #we finishe quadrilateral

pendown()
right(90)
forward(220)
right(30)

color("black")   #we are going to make roof now
begin_fill()
forward(200)
right(116)
forward(208)
end_fill()      #we finished roof

right(35)
penup()
goto(460, 0)
right(90)
forward(70)


pendown()    #now we are going to build door
right(90) 
color("gold")
begin_fill()
forward(100)
left(90)
forward(60)
left(90)
forward(100)
end_fill()   #we finished door


penup()
goto(240, 0)
right(180)
forward(185)
right(90)
forward(30)


#now we are going to build 2 windows


pendown()
color("cyan")
begin_fill()
forward(60)
right(90)
forward(40)
right(90)
forward(60)
right(90)
forward(40)
right(90)
end_fill()

penup()
forward(100)
pendown()

begin_fill()
forward(60)
right(90)
forward(40)
right(90)
forward(60)
right(90)
forward(40)
end_fill()

penup()
right(90)
forward(30)
right(90)
pendown()
color("brown")
begin_fill()
forward(40)
right(90)
penup()
forward(30)
right(90)
forward(20)
right(90)
pendown()
forward(60)

penup()
left(90)
forward(20)
left(90)
forward(130)
left(90)

pendown()
forward(40)
right(90)
penup()
forward(30)
right(90)
forward(20)
right(90)
pendown()
forward(60)     #we finished 2 windows and that means that we also finished third house


#now we are going to build 2 trees

penup()
goto(575, 0)
left(90)
pendown()
color("brown")
begin_fill()
forward(140)
right(90)
forward(40)
right(90)
forward(140)
end_fill()

penup()
goto(575, 140)
right(180)
pendown()

color("light green")
begin_fill()
left(90)
forward(65)
right(90)
forward(115)
right(90)
forward(170)
right(90)
forward(115)
right(90)
forward(65)
end_fill()


penup()
goto(-450, 0)
right(90)
pendown()

color("brown")
begin_fill()
forward(140)
left(90)
forward(40)
left(90)
forward(140)
end_fill()
penup()
left(180)
forward(140)
left(90)
pendown()
color("dark green")
begin_fill()
forward(65)
right(115)
forward(200)
right(125)
forward(202)
right(117)
forward(75)
end_fill()
exitonclick()