document.getElementById('header_opener').onclick = () => {
    document.getElementById('header').classList.toggle('vh100')
    document.getElementById('body').classList.toggle('vh100')
}
var dds = document.getElementsByClassName('dd_opener')
for (let i = 0; i < dds.length; i++) {
    dds[i].onclick = () => {
        dds[i].getElementsByClassName('dd_inner_list')[0].classList.toggle('dnone')
    }
}