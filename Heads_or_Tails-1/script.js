'use strict'

const startNew = document.getElementById('start--new');
const coinSpin = document.getElementById('coin-spin');
const spinBtn = document.getElementById('spin');

const playerName = document.getElementById('player-name');
const betMoney = document.getElementById('bet-money');
const selectOption = document.getElementById('select');
const btnAdd = document.getElementById('btn-add');
const listAdd = document.querySelector('.list-add')


var currentBet = 0;
var currentBet1 = 0;
var betMoneyV = Number(betMoney.value)
var totalMoney = 0;
var wonMoney = 0;
var spining = true;
// const coinSpinEl = Math.trunc(Math.random() * 2) + 1;


// 
spinBtn.addEventListener('click', () => {
    // creating a random number
    // winner()
    // spiningTime()
    let coin = ['H', 'T']
    var coinSpinEl = coin[Math.floor(Math.random() * items.length)];
    // document.querySelector('.progress').innerHTML = 'Spinning in progress...Wait for 3 seconds'

});

btnAdd.addEventListener('click', () => {
    addItem()

})


function select() {
    if (document.getElementById('val1').selected) {
        currentBet += Number(betMoney.value)
        console.log(currentBet)
    } else if (document.getElementById('val2').selected) {
        currentBet1 += Number(betMoney.value)
    }
}

var items = JSON.parse(localStorage.getItem('head-or-tails')) || [];

function addItem() {
    var inputBox = document.getElementById('player-name')
    var item = inputBox.value;
    var item1 = betMoney.value
    var item2 = selectOption.value
    winner()


    if (item === '') {
        return document.getElementById('list').innerHTML = "you need to add name and bet";
    }
    items.push({
        playerName: item,
        betMoney: item1,
        selectOption: item2
    })
    localStorage.setItem('head-or-tails', JSON.stringify(items));
    listItems()
    inputBox.value = ''
    betMoney.value = ''
    selectOption.value = ''
}

function listItems() {
    var list = ''

    for (var i = 0; i < items.length; i++) {
        list += "<li>"
        list += items[i].value + " "

    }
    document.getElementById('list').innerHTML = ''
    const add = document.createElement('li')
    add.innerHTML = `${playerName.value} , ${betMoney.value} : ${selectOption.value}`
    listAdd.appendChild(add);
    select()
    document.querySelector('.heads-total').innerHTML = `Total bets in heads ${currentBet}`
    document.querySelector('.tails-total').innerHTML = `Total bets in tails ${currentBet1}`



}

function winner() {

    const coinSpinEl = Math.trunc(Math.random() * 2) + 1;
    setTimeout(() => {
        if (coinSpinEl === 1) {
            document.getElementById('contest-body').innerHTML = ''
            document.getElementById('list').innerHTML = ''
            const add = document.createElement('li')
            add.innerHTML = `${playerName.value} , ${totalMoney += currentBet * 2} Won(${wonMoney += currentBet})`
            document.getElementById('contest-body').appendChild(add);

        } else if (coinSpinEl === 2) {
            document.getElementById('contest').innerHTML = 'no bets added yet'
        }
    }, 3)
}

startNew.addEventListener('click', () => {
    location.reload()
})






// function spiningTime() {
//     let coin = ['H', 'T']
//     var coinSpinEl = coin[Math.floor(Math.random() * items.length)];

//     console.log(coinSpinEl)
//         // setTimeout(() => {
//         //     if (coinSpinEl === 1) {
//         //         coinSpin.textContent = "H"
//         //     } else {
//         //         coinSpin.textContent = 'T'
//         //     }
//         // }, 1);
// }





// function creaateList() {

//     document.getElementById('list').innerHTML = ''
//     const add = document.createElement('li')
//     add.innerHTML = `${playerName.value} , ${betMoney.value} : ${selectOption.value}`
//     listAdd.appendChild(add);
//     select()
//     document.querySelector('.heads-total').innerHTML = `Total bets in heads ${currentBet}`
//     document.querySelector('.tails-total').innerHTML = `Total bets in tails ${currentBet1}`

// }

// function totalBets() {
//     select()


// }