'use strict'

const startNew = document.getElementById('start--new');
const coinSpin = document.getElementById('coin-spin');
const spinBtn = document.getElementById('spin');

const playerName = document.getElementById('player-name');
const betMoney = document.getElementById('bet-money');
const selectOption = document.getElementById('select');
const btnAdd = document.getElementById('btn-add');
const listAdd = document.querySelector('.list-add');

let coinArray = ['H', 'T'];
var items = JSON.parse(localStorage.getItem('head-or-tails')) || [];
let headOrTails = JSON.parse(localStorage.getItem('selectOption')) || []
var currentBet = 0;
var currentBet1 = 0;
var betMoneyV = Number(betMoney.value)
var totalMoney = 0;
var wonMoney = 0;

spinBtn.addEventListener('click', () => {
    winnerlist()
    spinningCoin()
    addChoice()
        // calc()
    document.querySelector('.progress').innerHTML = 'Spinning in progress... Wait for 3 seconds'

});

btnAdd.addEventListener('click', () => {
    // winnerlist()
    addBet()
})

// Local Storage function
function addBet() {
    let inputBox = document.getElementById('player-name')
    let item = inputBox.value;
    let item1 = betMoney.value
    let item2 = selectOption.value
        // winner()

    if (item === '' && item1 === '' && item2 === '') {
        return document.getElementById('list').innerHTML = "you need to add name , bet and choice";
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
        list += "</li>";
    }
    // document.querySelector('list-add').innerHTML = list
    document.getElementById('list').innerHTML = ''
    const add = document.createElement('li')
    add.innerHTML = `${playerName.value} , ${betMoney.value} : ${selectOption.value}`
    listAdd.appendChild(add);
    selectChoice()
    document.querySelector('.heads-total').innerHTML = `Total bets in heads ${currentBet}`
    document.querySelector('.tails-total').innerHTML = `Total bets in tails ${currentBet1}`
}

// Dropdown select head or tails function
function selectChoice() {
    if (document.getElementById('val1').selected) {
        currentBet += Number(betMoney.value)
    } else if (document.getElementById('val2').selected) {
        currentBet1 += Number(betMoney.value)
    }
}
// Coin spin function
function spinningCoin() {
    setTimeout(() => {
            let coinSpinEl = coinArray[Math.floor(Math.random() * coinArray.length)]
            coinSpin.innerHTML = coinSpinEl
            document.querySelector('.progress').innerHTML = ''
        }, 3000)
        // addChoice(coinSpinEl)
}
// localStorage function 2
function addChoice() {
    let coinSpinEl = coinArray[Math.floor(Math.random() * coinArray.length)]
    let item3 = coinSpinEl
    if (item3 === '') {
        return document.getElementById('list').innerHTML = "you need to add name , bet and choice";
    }
    headOrTails.push({
        selectOption1: coinSpinEl
    })
    console.log(coinSpinEl)
    localStorage.setItem('selectedValue', JSON.stringify(headOrTails));
    list1Items()

}

function list1Items() {
    var list1 = ''
    for (var i = 0; i < headOrTails.length; i++) {
        list1 += "<li>"
        list1 += headOrTails[i].value + " "
        list1 += "<span></span></li>"
    }
}

// winnerlist FUnction  
function winnerlist() {
    addBet()
    let items = JSON.parse(localStorage.getItem('head-or-tails')) || [];
    let headOrTails = JSON.parse(localStorage.getItem('selectedValue')) || [];
    // debugger;
    for (let i = 0; i < items.length; i++) {

        if (items[i].selectOption === 'H') {

            document.getElementById('contest-body').innerHTML = ''
            document.getElementById('list').innerHTML = ''
            const add = document.createElement('li')
            add.innerHTML = `${playerName.value} , ${totalMoney += currentBet * 2} Won(${wonMoney += currentBet})`
            document.getElementById('contest-body').appendChild(add);

        } else {
            console.log('hhh')
        }
    }
}