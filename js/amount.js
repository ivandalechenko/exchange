var amounts = document.getElementsByClassName('amount');

for (let i = 0; i < amounts.length; i++) {
    amounts[i].getElementsByClassName('amount_cur_selector')[0].onclick = () => {
        amounts[i].getElementsByClassName('amount_cur_list')[0].classList.toggle('dnone');
    }
    var elements = amounts[i].getElementsByClassName('amount_cur_list_element')
    for (let j = 0; j < elements.length; j++) {
        elements[j].onclick = () => {
            amounts[i].getElementsByClassName('amount_cur_selector_name')[0].innerHTML = elements[j].innerHTML
            amounts[i].getElementsByClassName('amount_cur_list')[0].classList.toggle('dnone');
        }
    }
}