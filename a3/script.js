/* Insert your javascript here */
function myFunction() {
    var x = document.getElementById("navigationbar");
    if (x.className === "sticky-section") {
    x.className += " responsive";
    } else {
    x.className = "sticky-section";
    }
}
let nav_height = document.getElementsByTagName('nav')[0].clientHeight
console.log(document.getElementsByTagName('nav'))
let sect1_top = document.getElementById('aboutus').offsetTop
let sect2_top = document.getElementById('price').offsetTop
let sect3_top = document.getElementById('nowshowing').offsetTop
let nav_links = document.querySelectorAll('.nav-item')

document.addEventListener('scroll', () => {
    let win_y = window.scrollY + nav_height

    if (sect1_top < win_y && win_y < sect2_top) nav_links[0].classList.add('active')
    else nav_links[0].classList.remove('active')

    if (sect2_top < win_y && win_y < sect3_top) nav_links[1].classList.add('active')
    else nav_links[1].classList.remove('active')

    if (sect3_top < win_y) nav_links[2].classList.add('active')
    else nav_links[2].classList.remove('active')
})
