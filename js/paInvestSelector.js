var dds = document.getElementsByClassName('paInvest_select_selector')

for (let i = 0; i < dds.length; i++) {
    dds[i].onclick = () => {
        dds[i].parentNode.getElementsByClassName('paInvest_select_list')[0].classList.toggle('dnone')
    }
}
