const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');

        const c = +counter.innerText;

        const increment = target / 100
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
});

$(function() {
    $('.closeBtn').click(function() {
        $('.modal').toggleClass('hide')
    })
    $('.fa').click(function() {
        $(this).parent().toggleClass('insta-info')
        $('.hide-1').toggleClass('hide-2 input')
    });
    $('.btn').click(function() {
        $('.btn').toggleClass('active')
    })


})

// $(function() {
//     $('.counter').each(counter => {

//         $(counter).text('0')

//         const updateCounter = function(counter) {

//             const target = +this.getAttribute('data-target');
//             const c = +this.innerText;

//             const increment = target / 100
//             console.log(increment)

//             if (c < target) {
//                 $(this).text(`${Math.ceil(c + increment)}`)

//             }
//         }
//         updateCounter()
//     });

// });