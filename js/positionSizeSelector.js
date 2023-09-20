var selectors = document.getElementsByClassName('position_size_selector')

for (let i = 0; i < selectors.length; i++) {
    var dots = selectors[i].getElementsByTagName('ellipse')
    for (let j = 0; j < dots.length; j++) {
        dots[j].onclick = () => {
            for (let k = 0; k < dots.length; k++) {
                dots[k].classList.remove('selected')
            }
            dots[j].classList.add('selected');
            console.log(j)
            // j => 0=0, 1=33, 2=66, 3=100 процентов позиции
        }
    }
}