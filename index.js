const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");

const nav = document.querySelector("#nav").cloneNode(1);
const body = document.querySelector("#content");

burger.addEventListener("click", burgerhendler);

function burgerhendler(e){
    e.preventDefault();
    popup.classList.toggle("open")
    burger.classList.toggle("active")
    body.classList.toggle("noscroll")
    popup.appendChild(nav);
    
    const nav_links = document.querySelectorAll(".nav_link[data-goto]");
    
    nav_links.forEach(menuLink =>{
        menuLink.addEventListener("click", menuLinkClick)
    })
}


const nav_links = document.querySelectorAll(".nav_link[data-goto]");

nav_links.forEach(menuLink =>{
    menuLink.addEventListener("click", menuLinkClick)
})

function menuLinkClick(e) {
    const menuLink = e.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

        if(burger.classList.contains("active")){
            popup.classList.toggle("open")
            burger.classList.toggle("active")
            body.classList.toggle("noscroll")
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

const return_circle = document.querySelector("#return");

window.addEventListener('scroll', check);

function check(){
    if(scrollY >= document.querySelector("#intro").offsetHeight){
        return_circle.classList.add("show");
    }
    else{
        return_circle.classList.remove("show");
    }
}

return_circle.addEventListener('click', goup);

function goup(e){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    e.preventDefault();
} 