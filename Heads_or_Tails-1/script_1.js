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

spinBtn.addEventListener('click', () => {
    winnerList()
    spinCoin()
    document.querySelector('.progress').innerHTML = 'Spinning in progress... Wait for 3 seconds'
    document.querySelector('.contest-1').innerHTML = 'Game is in Progess....'

});

btnAdd.addEventListener('click', () => {
    addBet()

})

function spinCoin() {
    setTimeout(() => {
        let spinRes = coinArray[Math.floor(Math.random() * coinArray.length)]
        localStorage.setItem('spinRes', spinRes)
        document.getElementById('coin-spin').innerHTML = spinRes
        winnerList()
        distibute()
        document.querySelector('.progress').innerHTML = ''
        document.querySelector('.contest-1').innerHTML = ''

    }, 3000)
}

// Local Storage function
function addBet() {
    let items = getBets();
    let inputBox = document.getElementById('player-name')
    let item = inputBox.value;
    let item1 = betMoney.value
    let item2 = selectOption.value

    if (item === '' && item1 === '' && item2 === '') {
        return document.getElementById('list').innerHTML = "you need to add name , bet and choice";
    }
    items.push({
        playerName: item,
        betMoney: item1,
        selectOption: item2
    })
    localStorage.setItem('bets', JSON.stringify(items));
    listItems()

    inputBox.value = ''
    betMoney.value = ''
    selectOption.value = ''
}

function getBets() {
    return JSON.parse(localStorage.getItem('bets')) || []
}

function getSpinResult() {
    return localStorage.getItem('spinRes') || '';
}

function listItems() {
    let items = getBets()
    let resBetUl = "<ul>"
    items.forEach(item => {
        resBetUl += "<li>" + item.playerName + "," + item.betMoney + ":" + item.selectOption + "</li>"
    })
    resBetUl += "</ul>"
    document.getElementById('list').innerHTML = resBetUl;
    selectChoice()
    document.querySelector('.heads-total').innerHTML = `Total bets in heads ${currentBet}`
    document.querySelector('.tails-total').innerHTML = `Total bets in tails ${currentBet1}`

}

function winnerList() {
    let bets = getBets()
    let spinRes = getSpinResult()
    const result = bets.filter(bet => bet.selectOption === spinRes)

    var sum = 0;
    var resDiv = "<div class='li-style'><ul>"
    result.forEach(ResVal);

    function ResVal(item, index) {
        sum = sum + Number(item.betMoney);
        resDiv += "<li>" + item.playerName + " : " + (Number(item.betMoney)) * 2 + " Won ( " + Number(item.betMoney) + " )" + "</li>";
    }
    resDiv += "</ul></div>"
    document.getElementById('contest').innerHTML = resDiv

}

// Dropdown select head or tails function
function selectChoice() {
    if (document.getElementById('val1').selected) {
        currentBet += Number(betMoney.value)
    } else if (document.getElementById('val2').selected) {
        currentBet1 += Number(betMoney.value)
    }
}
let total0 = 0;
let total1 = 0;
let total2 = 0

function distibute() {
    document.querySelector('.heads-total-1').innerHTML = `Total Paid to Winners ${total0 = currentBet * 2}`
    document.querySelector('.tails-total-2').innerHTML = `Total amount recived ${total1 += currentBet1 + currentBet}`

    document.querySelector('.tails-total-3').innerHTML = ` ${total2 = total1 - total0} is Company gain`
}

startNew.addEventListener('click', () => {
    window.localStorage.clear()
    document.querySelector('.heads-total').innerHTML = ''
    document.querySelector('.tails-total').innerHTML = ''
    document.querySelector('.heads-total-1').innerHTML = ''
    document.querySelector('.tails-total-2').innerHTML = ''
    document.querySelector('.tails-total-3').innerHTML = ''
    document.getElementById('list').innerHTML = 'No bets addes yet';
    document.getElementById('contest').innerHTML = 'Contest not started yet'
    document.getElementById('coin-spin').innerHTML = 'Heads or Tails'
})