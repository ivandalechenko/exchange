const header = '<header class="header"><div class="container header_container" id="header"><a href="/index.html" class="header_logo"><img src="img/general/logo.svg" alt="logo"></a><div class="header_nav">'


    + '<a href="chart.html">Trading<img src="img/general/arrow_down.svg" alt="arrow_down"></a>'
    + '<a href="ta.html">Market tools<img src="img/general/arrow_down.svg" alt="arrow_down"></a>'
    + '<a href="swap.html">Swap</a>'
    + '<a href="p2p.html">P2P</a>'
    + '<a href="paOverview.html">Staking</a>'
    + '<a href="blog.html">News</a>'
    + '<a href="support.html">Support</a>'
    + '<a href="ta.html">Assets</a>'

    + '</div><div class="header_auth header_logged"><a id="username">username<div class="header_logged_img"><img src="img/general/person.svg"></div></a></div><div class="header_burger"><button id="header_opener"><img src="img/general/burger.svg" alt=""></button></div></div></header><div class="username_inner_wrapper"><div class="container"><div id="username_inner" class="dnone"><div class="info"><div class="logo"><img src="img/general/person.svg" alt="avatar"></div><div class="text"><div class="name">User_name</div><div class="mail">User_name@user.com</div><div class="tarif"><img src="img/pa/clock.svg" alt="">Premium</div></div><div class="hr"></div><a href="#" class="link"><img src="img/pa/wallet.svg" alt="wallet">wallet: 100.23 USD</a><a href="#" class="link"><img src="img/pa/cog.svg" alt="wallet">Settings</a><a href="#" class="link"><img src="img/pa/logout.svg" alt="wallet">Log out</a></div></div></div></div>';
document.getElementById('root').innerHTML = header + document.getElementById('root').innerHTML;  