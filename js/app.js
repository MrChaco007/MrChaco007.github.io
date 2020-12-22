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
    const $div=$(`<div class="card" style="width: 18rem;">
    <img src=${projects[i].img} class="card-img-top" alt="project">
    <div class="card-body">
      <h5 class="card-title">${projects[i].name}</h5>
      <p class="card-text">${projects[i].description}</p>
      <a href=${projects[i].live} class="btn btn-primary">Check it out</a>
    </div>
    </div>`)
$("#projects").append($div)

}

//////////////////////////

})






//////////
//// PULL DATA FROM BLOG FROM HEADLESS CMS
/////////
