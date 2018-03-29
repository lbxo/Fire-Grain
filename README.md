# Fire&Grain - a site of wood

## Description

 This is a site built around a love for wood and a love for making. It is an exposition of design and craft forged together in a harmonious web environment.  From layout to content, I want solicit a feeling of flow and comfort, paralleling the same experience when one works with wood.

## Custom CSS Classes

``` The class(es) I created are:
 1-- .banner
This class uses a height: vh allowing the background image to be seen full screen or partial and remain fixed to the
background when the end-user loads the page.  It also uses multiple background properties to adjust positioning for the image.
```
```
 2-- .grid__first
This class utilizes flexbox in order to create a multi-column layout for text in the section.  Using the display
property to set the flexbox and the flex-flow property to set direction and wrap in the same code line.  This sets up
the ability to easily manipulate the responsive design by use of media queries.  This same class selector is used in
media queries that change the direction properties and the max-width properties of the content boxes, thus allowing a
responsive design.
 ```
 ```
 3-- .contact
This class utilizes the width and height properties to set the size for the contact form.  It also uses the border properties that give the box rounded corners and the box-shadow property to give it a 3D effect on the page.  It'subtle but helps it stand off the page a bit.
 ```

## Custom JavaScript Functions

``` The javascript functions I created are: 

1-- $(document).ready(function)
This is a jquery function that is located in the app--topscroll.js file that animates a button that appears once the page has been scrolled past 120px.  An icon with an up-arrow appears in the bottom right hand corner of the screen, that when clicked or touched, will scroll the page back to the top.
```
```
2-- function initMap ()
This is a function that when called at page load, will display a google map.  This function consists of one variable that has the coordinates for the map to display. The second variable declares the new map and utilizes the getElementById to indicate where it will be put in the html. Finally, the third varialbe adds a marker to the map and has attributes to style the marker type.  This is called by an asynchronous type script with the source of the map using an generated API key.
```
