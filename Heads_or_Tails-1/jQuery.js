let coinArray = ['H', 'T'];
var items = JSON.parse(localStorage.getItem('head-or-tails')) || [];
let headOrTails = JSON.parse(localStorage.getItem('selectOption')) || []
var currentBet = 0;
var currentBet1 = 0;
const betMoney = document.getElementById('bet-money');
const selectOption = document.getElementById('select');

$(function() {
    $('#spin').click(function() {
        winnerList()
        spinCoin()
        $('.progress').html('Spinning in Progress... Wait for 3 seconds')
        $('.contest-1').html('Game is in Progress....')
    })

    $('#btn-add').click(function() {
        addBet()
    })

    function spinCoin() {

        setTimeout(() => {
            let spinRes = coinArray[Math.floor(Math.random() * coinArray.length)]
            localStorage.setItem('spinRes', spinRes)
            $('#coin-spin').html(spinRes);
            winnerList()
            distibute()
            $('.progress').html('')
            $('.contest-1').html('')
        }, 3000)
    }

    function addBet() {
        let items = getBets();
        let inputBox = $('#player-name')
        let item = inputBox.value;
        let item1 = betMoney.value
        let item2 = selectOption.value

        if (item === '' && item1 === '' && item2 === '') {
            return $('#list').innerHTML = "you need to add name , bet and choice";
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
        $(items).each(item => {
            resBetUl += "<li>" + item.playerName + "," + item.betMoney + ":" + item.selectOption + "</li>"
        })
        resBetUl += "</ul>"
        $('#list').html(resBetUl);
        selectChoice()
        $('.heads-total').html(`Total bets in heads ${currentBet}`)
        $('.tails-total').html(`Total bets in tails ${currentBet1}`)

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
        $('#contest').html(resDiv)

    }

    function selectChoice() {
        if ($('#val1').selected) {
            currentBet += Number(betMoney.value)
        } else if ($('#val2').selected) {
            currentBet1 += Number(betMoney.value)
        }
    }
    let total0 = 0;
    let total1 = 0;
    let total2 = 0

    function distibute() {
        $('.heads-total-1').html(`Total Paid to Winners ${total0 = currentBet * 2}`)
        $('.tails-total-2').html(`Total amount recived ${total1 += currentBet1 + currentBet}`)

        $('.tails-total-3').html(` ${total2 = total1 - total0} is Company gain`)
    }

    $('#start--new').click(function() {
        window.localStorage.clear()
        $('.heads-total').html('')
        $('.tails-total').html('')
        $('.heads-total-1').html('')
        $('.tails-total-2').html('')
        $('.tails-total-3').html('')
        $('#list').html('No bets addes yet')
        $('#contest').html('Contest not started yet')
        $('#coin-spin').html('Heads or Tails')
    })


})