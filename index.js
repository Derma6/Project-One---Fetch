let citation = document.getElementById('citation')
let author = document.getElementById('author')

fetch("https://seo-fast-audit.p.rapidapi.com/scraper?url=https://www.keepinspiring.me/quote-of-the-day/&selector=blockquote>p", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "seo-fast-audit.p.rapidapi.com",
        "x-rapidapi-key": "b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c"
    }
})
.then(response => response.json())
.then(data => {
    citation.innerHTML = data.result[0]
})

fetch("https://seo-fast-audit.p.rapidapi.com/scraper?url=https://www.keepinspiring.me/quote-of-the-day/&selector=blockquote>cite", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "seo-fast-audit.p.rapidapi.com",
        "x-rapidapi-key": "b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c"
    }
})
.then(response => response.json())
.then(data => {
    author.innerHTML = `By ${data.result[0]}`
})

//////////////////////////////////////////////////////////////////////////////////////////////////////:

let d = new Date()
let day = d.getDate(), month = d.getMonth()+1, year = d.getFullYear();
let dayWeek = d.getDay();
const dayOfTheWeek = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

document.getElementById('date').textContent = `${dayOfTheWeek[dayWeek]} ${day}/${month}/${year}`;

fetch("https://seo-fast-audit.p.rapidapi.com/scraper?url=https://fetedujour.fr/&selector=.bg,h2", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "seo-fast-audit.p.rapidapi.com",
        "x-rapidapi-key": "b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c"
    }
})
.then(response => response.json())
.then(data => {
    let tabName = data.result.h2[0];
    let name = "";
    for (i=tabName.indexOf(':')+1; i<tabName.length; i++) {
        name += tabName[i];
    }
    document.getElementById('saint').innerHTML = `Aujourd'hui, nous fetons les ${name}.`
})
