const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentages = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup, index) => {

    cup.addEventListener('click', () => highlightCups(index))
});

function highlightCups(index) {
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentages.style.visibility = 'hidden';
        percentages.style.height = 0
    } else {
        percentages.style.visibility = 'visible'
        percentages.style.height = `${fullCups / totalCups * 330}px`
        percentages.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}

// $(function() {
//     $('.cup-small').each((cup) => {
//         $(this).click(() => highlightCups(cup))
//         console.log(cup)
//     });

//     function highlightCups(cup) {

//         console.log(cup)
//         $('.cup-small').each((cup2, idx2) => {
//             if (cup2 <= cup) {
//                 $(this).addClass('full')
//             } else {
//                 $(this).removeClass('full')

//             }
//         })
//     };
// });