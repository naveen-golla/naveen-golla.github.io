const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {

    // console.log(window.innerHeight);
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        };
    });
};


// jQuery

// $(function() {
//     $(document).scroll(checkBoxes);
//     // checkBoxes()
//     function checkBoxes() {
//         // console.log($(window).innerHeight())
//         const triggerBottom = window.innerHeight / 5 * 4;
//         // console.log(triggerBottom);
//         $('.box').each(function() {
//             const boxTop = this.getBoundingClientRect();
//             console.log(boxTop.top);
//             if (boxTop.top < triggerBottom) {
//                 $('.box').addClass('show');
//                 console.log("in if----");
//             } else {
//                 $('.box').removeClass('show');
//                 console.log("in else----");
//             };
//         });
//     };
// });