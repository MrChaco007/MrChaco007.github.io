/////////
/// PULL AND RENDER DATA FROM GOOGLE SHEET
////////

$.ajax("https://spreadsheets.google.com/feeds/list/1Lu0DWKUoCxALeIMeHASpKfSRJYIPl6xiKq2DjDMRERU/1/public/full?alt=json")
.then((data) => {
    //Checking my data
    console.log(data)
    //Put our projects in a variable
    const rawProjects = data.feed.entry

    //log our projects
    console.log(rawProjects)

    //prettify our projects array
    const projects = rawProjects.map((project) => {
        return {
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }

    })
    console.log(projects)
    
    //////////////
////USE JQUERY TO RENDER PROJECTS TO PAGE

for (i=0;i < projects.length; i++) {
    const $div = $(
        `<div class="card" style="width: 18rem;">
        <img src=${projects[i].img} class="card-img-top" alt="project">
        <div class="card-body">
        <h5 class="card-title">${projects[i].name}</h5>
        <p class="card-text">${projects[i].description}</p>
        <a href=${projects[i].live} class="btn">Check it out</a>
        </div>
        </div>`)

    $("#projects").append($div)
}



//////////////////////////


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

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




//////////
//// PULL DATA FROM BLOG FROM HEADLESS CMS
/////////
