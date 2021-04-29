const sounds = ['applause', 'avsr', 'master_bgm', 'master_bhavani', 'victory', 'ntr'];

// sounds.forEach(sound => {
//     const btn = document.createElement('button');
//     btn.classList.add('btn');

//     btn.innerText = sound;
//     btn.addEventListener('click', () => {

//         stopSounds();
//         document.getElementById(sound).play();
//     });

//     document.getElementById('buttons').appendChild(btn);

// });

// function stopSounds() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)
//         song.pause()
//         song.currentTime = 0;
//     });
// };

$(function() {
    $(sounds).each(function(index, sound) {
        const btn = document.createElement('button');
        $(btn).addClass('btn');
        btn.innerText = sound;
        $(btn).click(function() {
            stopSounds();
            document.getElementById(sound).play();
        });
        document.getElementById('buttons').appendChild(btn);
    });

    function stopSounds() {
        $(sounds).each(function(index, sound) {
            const song = document.getElementById(sound);
            song.pause();
            song.currentTime = 0;
        });
    };


});