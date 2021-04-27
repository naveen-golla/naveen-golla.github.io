const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');
});

// $(function() {
//     $('.form-control label').each(function() {
//         $('.label').html() == $('label').text().split('')
//             .map(function(letter, index) {
//                 `<span style="transition-delay:${index * 50}ms">${letter}</span>`
//             }).join('');
//     });
// });