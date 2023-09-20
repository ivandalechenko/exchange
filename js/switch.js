var switchers = document.getElementsByClassName('p2p_sidebar_switch_switch');

for (let i = 0; i < switchers.length; i++) {
    switchers[i].onclick = () => {
        switchers[i].classList.toggle('p2p_sidebar_switch_switch_toggled')
    }
}