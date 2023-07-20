 // Smooth scroll to anchor links
 const navLinks = document.querySelectorAll('nav a');

 for (const link of navLinks) {
     link.addEventListener('click', smoothScroll);
 }

 function smoothScroll(event) {
     event.preventDefault();
     const targetId = this.getAttribute('href');
     const targetSection = document.querySelector(targetId);

     if (targetSection) {
         const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
         window.scroll({
             top: offsetTop,
             behavior: 'smooth'
         });
     }
 }