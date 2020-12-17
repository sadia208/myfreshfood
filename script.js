
 
const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li')
    
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
    
    
        
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                }
                else{
                    link.style.animation = 'navLinkFade .5s ease forwords $(index / 7 + 0.3)s';
                }
            });
           
            burger.classList.toggle('toggle');
        });
    }
    
    navSlide();
    
    
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled',$(this).scrollTop()>200);
    });
    
    $(document).on('click', 'ul li', function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    

        AOS.init();