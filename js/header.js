const header = '<header class="header"><div class="container header_container" id="header"><div class="header_logo"><img src="/img/general/logo.svg" alt="logo"></div><div class="header_nav"><a href="#">Trading<img src="/img/general/arrow_down.svg" alt="arrow_down"></a><a href="#">Market tools<img src="/img/general/arrow_down.svg" alt="arrow_down"></a><a href="#">Swap</a><a href="#">P2P</a><a href="#">Staking</a><a href="#">News</a><a href="#">Support</a><a href="#">Assets</a></div><div class="header_auth"><button>Log in</button><button>Sign up</button></div><div class="header_burger"><button id="header_opener"><img src="/img/general/burger.svg" alt=""></button></div></div></header>';
document.getElementById('root').innerHTML = header + document.getElementById('root').innerHTML;  