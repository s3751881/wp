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
        movieday: [ 'Wednesday : 21:00', 'Thursday : 21:00', 'Friday : 21:00', 'Saturday : 18:00 ', 'Sunday : 18:00'],
        plot: String.raw`After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...`,
        trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
    },
    'synopsisAHF': {
        name: 'The Happy Prince',
        rating: 'MA15+',
        movieday:['Wednesday : 12:00','Thursday : 12:00','Friday : 12:00 ','Saturday : 21:00','Sunday : 21:00'],      
        plot: String.raw`In a cheap Parisian hotel room Oscar Wilde lies on his death bed. The past floods back, taking him to other times and places. Was he once the most famous man in London? The artist crucified by a society that once worshipped him? Under the microscope of death he reviews the failed attempt to reconcile with his long suffering wife Constance, the ensuing reprisal of his fatal love affair with Lord Alfred Douglas and the warmth and devotion of Robbie Ross, who tried and failed to save him from himself. Travelling through Wilde's final act and journeys through England, France and Italy, the transience of lust is laid bare and the true riches of love are revealed. It is a portrait of the dark side of a genius who lived and died for love.`,
        trailer: 'https://www.youtube.com/embed/4HmN9r1Fcr8'
    },

    'synopsisRMC': {
        name: 'Top End Wedding',
        rating: 'M',
        movieday:['Monday : 18:00','Tuesday : 18:00','Saturday : 15:00','Sunday : 15:00'],
        plot: String.raw`Lauren and Ned are engaged, they are in love, and they have just ten days to find Lauren's mother who has gone AWOL somewhere in the remote far north of Australia, reunite her parents and pull off their dream wedding.`,
        trailer: 'https://www.youtube.com/embed/uoDBvGF9pPU'
    },
    'synopsisANM': {
        name: 'Dumbo',
        rating: 'PG',
        movieday:['Monday : 12:00','Tuesday : 12:00','Wednesday : 18:00 ','Thursday : 18:00','Saturday : 12:00','Sunday : 12:00'],
        plot: String.raw`Holt was once a circus star, but he went off to war and when he returned it had terribly altered him. Circus owner Max Medici (Danny DeVito) hires him to take care of Dumbo, a newborn elephant whose oversized ears make him the laughing stock of the struggling circus troupe. But when Holt's children discover that Dumbo can fly, silver-tongued entrepreneur V.A. Vandevere (Michael Keaton), and aerial artist Colette Marchant (Eva Green) swoop in to make the little elephant a star.`,
        trailer: 'https://www.youtube.com/embed/7NiYVoqBt-8'
    },

}
/* Global variable  - block scope */
let infor = document.getElementById('movie_info')
let firstchild_movie = infor.children[0]
let movie_syn_title = firstchild_movie.children[0];
let movie_syn_rating = firstchild_movie.children[1];
let movie_syn_plot = infor.children[3];
let movie_syn_input = infor.children[4];


let trailer = document.getElementsByTagName('iframe')[0]
let buttons = document.querySelectorAll(".btn")
function showContent(event){
    var movie = movies_syn[event.target.id];
    movie_syn_title.innerHTML = movie.name
    movie_syn_rating.innerHTML = '[' + movie.rating + ']';
    movie_syn_plot.innerText = movie.plot;
    trailer.src = movie.trailer;
    movie_syn_input.value = event.target.id;
    synopsis_sec.style.display = '';
    createDetailContainer(movie.movieday);
    console.log('clicked')
}



const createTimeButton = (time, index) => {
    let button = document.createElement('Button');
    button.setAttribute('class', 'btn btn-secondary movie_hour');
    button.setAttribute('style', 'margin: 2% 2% 2% 0;',"font-family: 'Oswald', sans-serif;");
    button.setAttribute('id', 'movie_hour_' + index);
    button.onclick = (e) => e.preventDefault();
//    create span
    let information= document.createElement('SPAN');
    information.innerText = time;
    information.setAttribute('class', 'day');
    button.appendChild(information)
    return button
}
const createDetailContainer = (time)=>{
    let index = 0;
    let detailContainer = document.getElementById('timetable');
    detailContainer.innerHTML = '';
    detailContainer.setAttribute('class', 'col-sm-9');
    detailContainer.setAttribute('style', 'color:black; display:block');
    detailContainer.setAttribute('id', 'timetable');
    for (let item of time) {
        const detailButton = createTimeButton(item, index);
        index++;
        detailContainer.append(detailButton);
    }
}
let buttons_time = document.querySelectorAll('#movie_hour_','.btn')
function showContent_time(event){
    var movie_time = movies_syn[event.target.id]
    movie_dt = movie_time.movieday
    console.log('clicked')

} // cái hàm này em làm để khi click vào thì dữ liệu truyền vào hàm home ở dưới nè 
buttons_time.forEach(button => {button.addEventListener('click',(event)=>showContent_time(event))})
buttons.forEach(button => {button.addEventListener('click',(event)=>showContent(event))})

function hour(obj) {
    x = obj.children[0].innerHTML
    y = obj.children[1].innerHTML
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    if (x == "Monday" || x == "Wednesday" || (Number(y) == 12 && weekdays.includes(x) == true)) {
        return document.getElementById('results').innerHTML = 'Sale';
    }
    else {
        return document.getElementById('results').innerHTML = 'Non_sale';
    }
}

function seat_id_value(seat_id) {
    var seat_price = document.getElementById('seat[' + seat_id + ']')
    return document.getElementById('value_results_' + seat_id).innerHTML = seat_price.value   
}

function total() {
    var seat_price_array = {
        STA: {
            Sale: 14.00,
            Non_sale: 19.80
        },
        STP: {
            Sale: 12.50,
            Non_sale: 17.50
        },
        STC: {
            Sale: 11.00,
            Non_sale: 15.30
        },
        FCA: {
            Sale: 22.50,
            Non_sale: 27.00
        },
        FCP: {
            Sale: 24.00,
            Non_sale: 30.00
        },
        FCC: {
            Sale: 21.00,
            Non_sale: 24.00
        },

    };
    var sale_or_non_sale = document.getElementById('results').innerHTML
    var seat_value_STA = document.getElementById('value_results_STA').innerHTML
    var seat_value_STP = document.getElementById('value_results_STP').innerHTML
    var seat_value_STC = document.getElementById('value_results_STC').innerHTML
    var seat_value_FCA = document.getElementById('value_results_FCA').innerHTML
    var seat_value_FCP = document.getElementById('value_results_FCP').innerHTML
    var seat_value_FCC = document.getElementById('value_results_FCC').innerHTML
   
    price_STA = seat_price_array['STA'][sale_or_non_sale] * seat_value_STA
    price_STP = seat_price_array['STP'][sale_or_non_sale] * seat_value_STP
    price_STC = seat_price_array['STC'][sale_or_non_sale] * seat_value_STC
    price_FCA = seat_price_array['FCA'][sale_or_non_sale] * seat_value_FCA
    price_FCP = seat_price_array['FCP'][sale_or_non_sale] * seat_value_FCP
    price_FCC = seat_price_array['FCC'][sale_or_non_sale] * seat_value_FCC
   

    total_price = (typeof (price_STA) != 'undefined' ? price_STA : 0) + (typeof (price_STP) != 'undefined' ? price_STP : 0) + (typeof (price_STC) != 'undefined' ? price_STC : 0) + (typeof (price_FCA) != 'undefined' ? price_FCA : 0) + (typeof (price_FCP) != 'undefined' ? price_FCP : 0) + (typeof (price_FCC) != 'undefined' ? price_FCC : 0);
    document.getElementById('total').innerHTML = total_price
}
function checkDate() {
    var today = new Date()
    var today_year = today.getFullYear()
    var today_month = today.getMonth() + 1
    if (today_month < 10) {
        min_expiry = today_year + "-0" + today_month 
    }
    else {
        min_expiry = today_year + "-" + today_month
    }
    document.getElementById('cust_expiry').min = min_expiry
}