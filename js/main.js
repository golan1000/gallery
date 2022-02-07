console.log("Starting up");

var gProjs = [];


$(init())

function init() {
    console.log("blaaaa")
    createProjs();

    renderCards()
}
function createProjs() {

    gProjs = [
        createProj("1","mine sweeper","mine sweeper game","mine sweeper game","https://golan1000.github.io/minesweeper/"),
        createProj("2","nums","nums game","nums game","http://bla.bla.com"),
        createProj("3","bingo","bingo game","bingo game","http://bla.bla.com"),
        createProj("4","select picutre","select picutre game","select picutre game","http://bla.bla.com"),
        createProj("5","pacman","pacman game","pacman game","https://golan1000.github.io/pacmangame/"),
        createProj("6","todos","todo missions management ","todo missions management ","http://bla.bla.com"),

    ]



}

function createProj(id, name,title, desc, url, labels) {
  var proj = {
    id: id,
    name: name,
    title: title,
    desc: desc,
    url: url,
    publishedAt: new Date(),
    labels: getLabels(desc)
  };
  return proj;
} 

function getLabels(desc) {

    return ["bla","bla","bla"];

}

function renderCards() {


    var htmlStr = ``

    htmlStr += `
                <div class="row">
                <div class="col-lg-12 text-center">
                <h2 class="section-heading">Portfolio</h2>
                <h3 class="section-subheading text-muted">Few examples of my work</h3>
                </div>
                </div>
    
                `

    htmlStr += getCardsData();

    var $protfolioEl = $(".portfoliocon")

    $protfolioEl.html(htmlStr)
}

function getCardsData() {

    // <div class="row">

    var cardsHtmlStr = '<div class="row">'
    var cardsHtmlArr = gProjs.map((proj) => {

        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/0${proj.id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>
      `
    })


    cardsHtmlStr += cardsHtmlArr.join("")
    cardsHtmlStr += '</div>'


    return cardsHtmlStr;
}

function renderModal(projId) {
    var foundProj = gProjs.find((proj) => { return proj.id === projId })

    if (!foundProj) return

    var modalHtml = createHtmlModal(foundProj)
    var modalDialogEl = document.querySelector(".modal-content")


    console.log("modalHtml",modalHtml)
    modalDialogEl.innerHTML = modalHtml

    console.log("modalDialogEl.innerHTML",modalDialogEl.innerHTML)

    console.log(modalDialogEl)
}

function createHtmlModal(proj) {

    var htmlStr = `
                    <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>${proj.name}</h2>
                            <p class="item-intro text-muted">${proj.title}</p>
                            <img class="img-fluid d-block mx-auto" src="img/portfolio/0${proj.id}-full.jpg" alt="${proj.labels.join(" ")}">
                            <p>${proj.desc}</p>
                            <ul class="list-inline">
                            <li>Date: ${proj.date}</li>
                            <li>Labels: ${proj.labels.join(" ")}</li>
                            <li>
                                <button class="btn btn-success mt-4" type="button">
                                <i class="fa fa-check"></i>
                                <a href="${proj.url}" target="_blank">Try Me</a>
                                    
                                </button></li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    `
        return htmlStr;
}

function submitContactForm() {
  var email = $('#email').val()
  var subject = $('#subject').val()
  var body = $('#body').val()


  var body = email + " " + body;
  url=`https://mail.google.com/mail/?view=cm&fs=1&to=golanabc10100@gmail.com&su=${subject}&b
  ody=${body}`;  

  console.log("url=",url)
  window.open(url,'_blank');


}