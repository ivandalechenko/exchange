const checkboxes = document.getElementsByClassName('checkbox');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = () => {
        checkboxes[i].classList.toggle('checkbox_active')
    }

}