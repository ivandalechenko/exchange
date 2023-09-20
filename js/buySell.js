var buySells = document.getElementsByClassName('buy_sell')

for (let i = 0; i < buySells.length; i++) {
    buySells[i].getElementsByClassName('buy')[0].onclick = () => {
        buySells[i].getElementsByClassName('buy')[0].classList.add('buy_sell_active')
        buySells[i].getElementsByClassName('sell')[0].classList.remove('buy_sell_active')
    }
    buySells[i].getElementsByClassName('sell')[0].onclick = () => {
        buySells[i].getElementsByClassName('buy')[0].classList.remove('buy_sell_active')
        buySells[i].getElementsByClassName('sell')[0].classList.add('buy_sell_active')
    }
}