// const pannels = document.querySelectorAll('.pannel');

// pannels.forEach(function(pannel) {
//     pannel.addEventListener('click', function() {
//         removeActiveClasses()
//         pannel.classList.add('active');
//     })
// })

// function removeActiveClasses() {
//     pannels.forEach(function(pannel) {
//         pannel.classList.remove('active')
//     })
// }

$(function() {
    $('.pannel').click(function() {
        $('.pannel').removeClass('active');
        $(this).addClass('active');
    })
})