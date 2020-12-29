# Project Overview
## Project Schedule
I will be working on this project over the course of 10 weekdays, at a rate of 4 incredibly focused hours a day. 
|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 6| MVP & Bug Fixes | Complete
|Day 8| Final Touches | Complete
|Day 10| Record walk-through of website | Complete

## Project Description
My project portfolio will mirror the style of a minimalist, Scandinavian interior design that mainly prioritizes function,utility, and key stylings over flare and extravagance. Each section will have a clear emphasis on what truly defines the makeup of that particular section, without adding irrelevant material or intrusive deadweight. The point of my portfolio will be to inform and enlighten, not overwhelm or distract.

## Google Sheet
https://docs.google.com/spreadsheets/d/1Lu0DWKUoCxALeIMeHASpKfSRJYIPl6xiKq2DjDMRERU/edit?usp=sharing

## Portfolio I want to Emulate
Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [samcasey.info](https://samcasey.info/) | social media icons, color scheme/theme, competencies list
| [eloise-ress-barrow.surge.sh](eloise-ress-barrow.surge.sh/) | simplicity, sticky navbar |
| [mattfarley.ca](http://mattfarley.ca/) |  simplicity, icons, color scheme
---

## Wireframes
 
- [Mobile](https://res.cloudinary.com/dvnl2s9um/image/upload/v1608583433/PROJECT_1_Mobile_Tablet_Mockup_mr3aol.png)
- [Tablet/Desktop](https://res.cloudinary.com/dvnl2s9um/image/upload/v1608513483/PROJECT_1_Desktop_Mockup_okimjb.png)


## Time/Priority Matrix 
[Project Matrix](https://res.cloudinary.com/dvnl2s9um/image/upload/v1608582874/Priority_Matrix_hfzcii.jpg)

 

#### MVP
- Pull data using Google JSON API 
- Render data on page's carousel
- Carousel
- Navbar
- Competencies icons
- Contact form
- Avatar
- Color scheme & fonts

#### PostMVP 
- When competencies icons are clicked on in a Desktop, the frameworks/libraries I know show up in a popover
- Smooth-scrolling for navigation clicks

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | 1hr |
| Project Previews | H | 3hr | 1hr |
| Regular Nav | H | 1hr | 3hr |  
| Adding contact form | H | 1.5hr|  2hr | 
| Other sections and flex| H | 3hr | 3hr|
| Working with API | H | 6hr |  3hr | 
| Responsive | H | 4hr | 5hr |
| CSS Grid | H | 2.5hr | 2hr | 
| About me & social media icons | H | 1hr |  2hr |
| Carousel web component | M | 5hr |  4hr |
| Total | H | 28hrs | 26hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Competencies Popover | M | 6hr | 2hr |
| Smooth-scrolling for navigation clicks | M | 2hr | 0.5hr |
| Contact form responsive swap | L | 4hr | 1hr |
| Total | M | 12hrs| 3.5hrs |

## Additional Libraries
 jQuery - mainly used this when rendering API data to my Bootstrap project cards and carousel. 

 Bootstrap framework - used this for my navbar, project cards, carousel, and image thumbnail.
 
## Code Snippet
With the help of Kenny, figured out how to fetch API data via AJAX and render the data to display in a Bootstrap carousel. Since Bootstrap carousels require only the first carousel item to have an active class, I had to assign it its own div containing the first value of the project data array and then use a for loop for the remaining carousel items in an additional div. 
```
 //create first slide from projects[0]
    const $div1 = $(`
    <div class="carousel-item active">
        <a href=${projects[0].live}><img src="${projects[0].img}" class="d-block w-100" alt="Project"></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>${projects[0].name}</h5>
            <p>${projects[0].description}</p>
        </div>
    </div>`)
    //prepend the first slide
    $(".carousel-inner").prepend($div1)
    //then run loop from projects [1] until end of array
   
    for (i=1;i <projects.length; i++) {

        const $div2 = $(`
    <div class="carousel-item">
    <a href=${projects[i].live}><img src="${projects[i].img}" class="d-block w-100" alt="Project"></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>${projects[i].name}</h5>
            <p>${projects[i].description}</p>
         </div>
    </div>`)
     //prepend each additional slide 
      $(".carousel-inner").prepend($div2)
        
    }
```
## Issues and Resolutions
 Always make sure to check if your stylesheets and script tags are accurate and up-to-date. For some reason, the project boilerplate had the incorrect Bootstrap stylesheets and script tags, which I didn't realize after 2+ hours of troubleshooting my navbar's functionality. 

 I had trouble remembering all the flexbox and grid stylings. When using flexbox or grid in CSS, be sure to reference
 [css-tricks.com] (css-tricks.com). It's super helpful when you need a refresher on what exactly each of the two CSS properties are capable of. 