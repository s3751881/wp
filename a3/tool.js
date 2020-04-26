function myFunction() {
    var x = document.getElementById("navigationbar");
    if (x.className === "sticky-section") {
    x.className += " responsive";
    } else {
    x.className = "sticky-section";
    }
}
let navbar_height = document.getElementsByTagName('nav')[0].clientHeight 
/* https://www.w3schools.com/jsref/prop_element_clientheight.asp */
let aboutus_top = document.getElementById('aboutus').offsetTop
let price_top = document.getElementById('price').offsetTop
let nowshowing_top = document.getElementById('movies').offsetTop
let active_links = document.querySelectorAll('.nav-item')

document.addEventListener('scroll', () => {
    let scroll_height = window.scrollY + navbar_height

    if (aboutus_top < scroll_height && scroll_height < price_top) active_links[0].classList.add('active')
    else active_links[0].classList.remove('active')

    if (price_top < scroll_height && scroll_height < nowshowing_top) active_links[1].classList.add('active')
    else nav_links[1].classList.remove('active')

    if (nowshowing_top < scroll_height) nav_links[2].classList.add('active')
    else active_links[2].classList.remove('active')
})
