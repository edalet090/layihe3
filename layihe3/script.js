const rubl = document.querySelector('.rubl')
rubl.addEventListener('click', ruble)
function ruble(e) {
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}
const dollar = document.querySelector('.dollar')
dollar.addEventListener('click', dollare)
function dollare(e) {
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    rubl.classList.remove('change')
}
const gbp = document.querySelector('.gbp')
gbp.addEventListener('click', gbpe)
function gbpe(e) {
    e.target.classList.toggle('change')
    rubl.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}
const euro = document.querySelector('.euro')
euro.addEventListener('click', euroe)
function euroe(e) {
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    rubl.classList.remove('change')
    dollar.classList.remove('change')
}

const rubl2 = document.querySelector('.rubl2')
rubl2.addEventListener('click', ruble2)
function ruble2(e) {
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}
const dollar2 = document.querySelector('.dollar2')
dollar2.addEventListener('click', dollare2)
function dollare2(e) {
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    rubl2.classList.remove('change')
}
const gbp2 = document.querySelector('.gbp2')
gbp2.addEventListener('click', gbpe2)
function gbpe2(e) {
    e.target.classList.toggle('change')
    rubl2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}
const euro2 = document.querySelector('.euro2')
euro2.addEventListener('click', euroe2)
function euroe2(e) {
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    rubl2.classList.remove('change')
    dollar2.classList.remove('change')
}
const exchange1 = document.querySelector('.exchange1')
const exchange2 = document.querySelector('.exchange2')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const bottom = document.querySelector('.bottom-bottom')
const value1 = document.querySelector('.value1')
const value2 = document.querySelector('.value2')
//RUBL
bottom.addEventListener('click', exc)
function exc() {
    if (rubl.classList.contains('change') && rubl2.classList.contains('change')) {
        input2.value = input1.value
        value1.innerText = '1 RUB = 1 RUB'
        value2.innerText = '1 RUB = 1 RUB'
    }
}

bottom.addEventListener('click', exc5)
function exc5() {
    let valuee
    let valuee2
    if (rubl.classList.contains('change') && dollar2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 RUB ' + '=' + ' ' + valuee + ' USD'
                input2.value = input1.value * valuee
            })
        fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 USD ' + '=' + ' ' + valuee2 + ' RUB'
            }).catch(error => {
                console.log(`internet problem : ${error.message}`);
              });
            
    }
}

bottom.addEventListener('click', exc6)
function exc6() {
    let valuee
    let valuee2
    if (rubl.classList.contains('change') && euro2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 RUB ' + '=' + ' ' + valuee + ' EUR'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 EUR ' + '=' + ' ' + valuee2 + ' RUB'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}

bottom.addEventListener('click', exc7)
function exc7() {
    let valuee
    let valuee2
    if (rubl.classList.contains('change') && gbp2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=RUB&to=GBP')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 RUB ' + '=' + ' ' + valuee + ' GBP'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 GBP ' + '=' + ' ' + valuee2 + ' RUB'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}
//USD
bottom.addEventListener('click', exc2)
function exc2() {
    if (dollar.classList.contains('change') && dollar2.classList.contains('change')) {
        input2.value = input1.value
        console.log('duz')
        value1.innerText = '1 USD = 1 USD '
        value2.innerText = '1 USD = 1 USD'
    }
}

bottom.addEventListener('click', exc8)
function exc8() {
    let valuee
    let valuee2
    if (dollar.classList.contains('change') && rubl2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 USD ' + '=' + ' ' + valuee + ' RUB'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 RUB ' + '=' + ' ' + valuee2 + ' USD'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}

bottom.addEventListener('click', exc9)
function exc9() {
    let valuee
    let valuee2
    if (dollar.classList.contains('change') && euro2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 USD ' + '=' + ' ' + valuee + ' EUR'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 EUR ' + '=' + ' ' + valuee2 + ' USD'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}

bottom.addEventListener('click', exc10)
function exc10() {
    let valuee
    let valuee2
    if (dollar.classList.contains('change') && gbp2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 USD ' + '=' + ' ' + valuee + ' GBP'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 GBP ' + '=' + ' ' + valuee2 + ' USD'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}

//EURO
bottom.addEventListener('click', exc3)
function exc3() {
    if (euro.classList.contains('change') && euro2.classList.contains('change')) {
        input2.value = input1.value
        value1.innerText = '1 EURO = 1 EURO'
        value2.innerText = '1 EURO = 1 EURO'
    }
}

bottom.addEventListener('click', exc11)
function exc11() {
    let valuee
    let valuee2
    if (euro.classList.contains('change') && rubl2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 EURO ' + '=' + ' ' + valuee + ' RUB'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 RUB ' + '=' + ' ' + valuee2 + ' EURO'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}

bottom.addEventListener('click', exc12)
function exc12() {
    let valuee
    let valuee2
    if (euro.classList.contains('change') && dollar2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 EURO ' + '=' + ' ' + valuee + ' USD'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 USD ' + '=' + ' ' + valuee2 + ' EURO'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}
bottom.addEventListener('click', exc13)
function exc13() {
    let valuee
    let valuee2
    if (euro.classList.contains('change') && gbp2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 EURO ' + '=' + ' ' + valuee + ' GBP'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 GBP ' + '=' + ' ' + valuee2 + ' EURO'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}
//GBP
bottom.addEventListener('click', exc4)
function exc4() {
    if (gbp.classList.contains('change') && gbp2.classList.contains('change')) {
        input2.value = input1.value
        value1.innerText = '1 GBP = 1 GBP'
        value2.innerText = '1 GBP = 1 GBP'
    }
}
bottom.addEventListener('click', exc14)
function exc14() {
    let valuee
    let valuee2
    if (gbp.classList.contains('change') && rubl2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 GBP ' + '=' + ' ' + valuee + ' RUB'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 RUB ' + '=' + ' ' + valuee2 + ' GBP'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}
bottom.addEventListener('click', exc15)
function exc15() {
    let valuee
    let valuee2
    if (gbp.classList.contains('change') && dollar2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 GBP ' + '=' + ' ' + valuee + ' USD'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 USD ' + '=' + ' ' + valuee2 + ' GBP'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}
bottom.addEventListener('click', exc16)
function exc16() {
    let valuee
    let valuee2
    if (gbp.classList.contains('change') && euro2.classList.contains('change')) {
        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
            .then(res => res.json())
            .then(data => {
                valuee = data.result
                value1.innerText = '1 GBP ' + '=' + ' ' + valuee + ' EUR'
                input2.value = input1.value * valuee
            })

        fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
            .then(res => res.json())
            .then(data => {
                valuee2 = data.result
                value2.innerText = '1 EUR ' + '=' + ' ' + valuee2 + ' GBP'
            }).catch(error => {
                console.log(`problem : ${error.message}`);
              });
    }
}