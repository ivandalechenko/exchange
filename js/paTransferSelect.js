var selectors = document.getElementsByClassName('paTransfer_select')

for (let i = 0; i < selectors.length; i++) {
    selectors[i].onclick = () => {
        selectors[i].parentNode.getElementsByClassName('paTransfer_select_list')[0].classList.toggle('dnone')
    }
    var elements = selectors[i].parentNode.getElementsByClassName('paTransfer_select_list')[0].getElementsByClassName('paTransfer_select_list_element')
    for (let j = 0; j < elements.length; j++) {
        elements[j].onclick = () => {
            selectors[i].getElementsByClassName('paTransfer_select_name')[0].innerHTML = elements[j].innerHTML;
            selectors[i].parentNode.getElementsByClassName('paTransfer_select_list')[0].classList.toggle('dnone')
        }
    }

}

