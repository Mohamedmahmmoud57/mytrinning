 let header = document.querySelector('header');              
 window.addEventListener('scroll',() => { 
                                          
     header.classList.toggle('shadow', window.scrollY > 0);                                  
 });                                                
                                                    
                                                    
 let menu = document.querySelector('#menu-icon');    
 let navigation = document.querySelector('.navigation');
                                                    
 menu.onclick = () => {                               
     menu.classList.toggle('bx-x');                  
     navigation.classList.toggle('active');                 
}                                                   