const elements = document.getElementsByClassName('p2p_sidebar_switch_switch');


for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => { console.log('meow') }
}