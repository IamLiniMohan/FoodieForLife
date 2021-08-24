/*show menu*/
const showMenu=(toggleId,navId) =>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId)
    //validation of variables that exist
    if(toggle&&nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })

    }
}
showMenu('nav-toggle','nav-menu')


/*remove menu on mobile*/
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))




/*scroll sction active link*/
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight
        const sectionTop= current.offsetTop-50;
        sectionId = current.getAttribute('id')

        if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.remove('active-link')
        }
        
    })
}
window.addEventListener('scroll',scrollActive)

//change backgrond header
function scrollHeader(){
    const nav= document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY>=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

//show scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //when the scroll is higher than 560 viewport height,add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY>=560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)


//dark light theme
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='bx-sun'
//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const sectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme= () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon= () =>themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if(selectedTheme){
    //if validation is fulfilled, we ask what the issue if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
//active/deactivate with the button
themeButton.addEventListener('click' , () =>{
    //add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
/*scroll reveal animation*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
.about__data, .about__img,
.services__content, .menu__content,
.app__data, .app__img,
.contact__data, .contact__button,
.footer__content`,
{
    interval: 200
} )