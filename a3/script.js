/* Insert your javascript here */
// Navigation Bar 
let navbar_height = document.getElementsByTagName('nav')[0].clientHeight
console.log(document.getElementsByTagName('nav'))
const aboutus_sec = document.getElementById('aboutus').offsetTop - 30
const price_sec = document.getElementById('price').offsetTop - 100
const nowshowing_sec = document.getElementById('nowshowing').offsetTop
const active_links = document.querySelectorAll('.nav-item')
console.log(document.querySelectorAll('.nav-item'))
function comparesectionFunction(){
    var scroll_win = window.scrollY + navbar_height
    if (scroll_win > aboutus_sec && price_sec > scroll_win)active_links[0].classList.add('active')
    else active_links[0].classList.remove('active')
    if (scroll_win > price_sec && nowshowing_sec>scroll_win)active_links[1].classList.add('active')
    else active_links[1].classList.remove('active')
    if (scroll_win> nowshowing_sec)active_links[2].classList.add('active')
    else active_links[2].classList.remove('active')
}
document.addEventListener('scroll',comparesectionFunction)

// Synopsis
const synopsis = document.getElementById('synopsis_sec')
synopsis.style.display = 'none'
let movies_syn = {
    'synopsisACT': {
        name: 'Avengers: Endgame',
        rating: 'M',
        time: ['21:00', '21:00', '21:00', '18:00', '18:00'],
        plot: String.raw`After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...`,
        trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
    },
    'synopsisAHF': {
        name: 'The Happy Prince',
        rating: 'MA15+',
        time: ['12:00', '12:00', '12:00', '21:00', '21:00'],
        plot: String.raw`In a cheap Parisian hotel room Oscar Wilde lies on his death bed. The past floods back, taking him to other times and places. Was he once the most famous man in London? The artist crucified by a society that once worshipped him? Under the microscope of death he reviews the failed attempt to reconcile with his long suffering wife Constance, the ensuing reprisal of his fatal love affair with Lord Alfred Douglas and the warmth and devotion of Robbie Ross, who tried and failed to save him from himself. Travelling through Wilde's final act and journeys through England, France and Italy, the transience of lust is laid bare and the true riches of love are revealed. It is a portrait of the dark side of a genius who lived and died for love.`,
        trailer: 'https://www.youtube.com/embed/4HmN9r1Fcr8'
    },

    'synopsisRMC': {
        name: 'Top End Wedding',
        rating: 'M',
        time: ['18:00', '18:00', '15:00', '15:00'],
        plot: String.raw`Lauren and Ned are engaged, they are in love, and they have just ten days to find Lauren's mother who has gone AWOL somewhere in the remote far north of Australia, reunite her parents and pull off their dream wedding.`,
        trailer: 'https://www.youtube.com/embed/uoDBvGF9pPU'
    },
    'synopsisANM': {
        name: 'Dumbo',
        rating: 'PG',
        time: ['12:00', '12:00', '18:00', '18:00', '18:00', '12:00', '12:00'],
        plot: String.raw`Holt was once a circus star, but he went off to war and when he returned it had terribly altered him. Circus owner Max Medici (Danny DeVito) hires him to take care of Dumbo, a newborn elephant whose oversized ears make him the laughing stock of the struggling circus troupe. But when Holt's children discover that Dumbo can fly, silver-tongued entrepreneur V.A. Vandevere (Michael Keaton), and aerial artist Colette Marchant (Eva Green) swoop in to make the little elephant a star.`,
        trailer: 'https://www.youtube.com/embed/7NiYVoqBt-8'
    },

}
/* Global variable  - block scope */
let infor = document.getElementById('movie_info')
let firstchild_movie = infor.children[0]
let movie_syn_title = firstchild_movie.children[0]
let movie_syn_rating = firstchild_movie.children[1]
let movie_syn_plot = infor.children[3]
let movie_syn_input = infor.children[4]


let trailer = document.getElementsByTagName('iframe')[0]
let buttons = document.querySelectorAll(".btn")
function showContent(event){
    var movie = movies_syn[event.target.id]
    movie_syn_title.innerHTML = movie.name
    movie_syn_rating.innerHTML = '[' + movie.rating + ']'
    movie_syn_plot.innerText = movie.plot
    trailer.src = movie.trailer
    movie_syn_input.value = event.target.id
    synopsis_sec.style.display = ''
}
buttons.forEach(button => {button.addEventListener('click',(event)=>showContent(event))})


