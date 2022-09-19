// border bottom navbar menu
let navItemHeader = document.querySelectorAll('header .nav-link');
navItemHeader.forEach((e,idx)=>{
    e.addEventListener('click',()=>{

        for(i=0 ;i < navItemHeader.length;i++){
            navItemHeader[i].classList.remove('nav-border')
        }
        e.classList.add('nav-border');
    })
});


// buttom next articles

let butao = document.querySelector('.articles-btn-next');
let butaoCount = 0;
butao.addEventListener('click', ()=>{
    butaoCount < 3? butaoCount++:butaoCount = 3;
    let scrollWidth = document.querySelector('.articles').scrollWidth;
    document.querySelector('.articles').scrollBy({top:0,left:(scrollWidth/4),behavior:'smooth'});

    for(i=0 ; i < bars.length ; i++) {
        bars[i].classList.remove('bar-active');
    }
    bars[butaoCount].classList.add('bar-active');
});

let bars = document.querySelectorAll('.bar-articles');
bars.forEach((e,idx)=>{
e.addEventListener('click',()=>{
    for(i=0 ; i < bars.length ; i++) {
        bars[i].classList.remove('bar-active');
    }
    e.classList.add('bar-active');
    let articleWidth = document.querySelector('.articles').clientWidth;
   
    document.querySelector('.articles').scrollTo({top:0,left:(articleWidth * idx),behavior:'smooth'});

})
});


// articles

let articles = document.querySelectorAll('.article');
articles.forEach((e)=>{
   e.addEventListener('click',()=>{
    for(i=0;i<articles.length;i++){
        articles[i].classList.remove('article-active')
    }
    e.classList.add('article-active')
   })
})


// nav footer

let navItemFooter = document.querySelectorAll('footer .nav-link');
navItemFooter.forEach((e,idx)=>{
    e.addEventListener('click',()=>{

        for(i=0 ;i < navItemFooter.length;i++){
            navItemFooter[i].classList.remove('nav-border')
        }
        e.classList.add('nav-border');
    })
});


