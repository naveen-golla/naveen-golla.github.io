const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

// $(function() {
//     $('.faq-toggle').each(toggle => {
//         $(toggle).addEventListener('click', () => {
//             $(toggle).parentNode.classList.toggle('active')
//         });
//     });
// });
socre = 20;

document.querySelectorAll('.score').textContent = score;