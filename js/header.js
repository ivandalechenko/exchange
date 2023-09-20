const header = '<header class="header"><div class="container header_container" id="header"><a href="index.html" class="header_logo"><img src="img/general/logo.svg" alt="logo"></a><div class="header_nav">'

    + '<a href="chart.html">Trading</a>'
    + '<button class="dd_opener"><img src="img/general/arrow_down.svg" alt="arrow_down"><div class="dd_inner_list dnone"><a href="chart.html">Trading</a><a href="chart.html">Trading</a></div></button>'
    + '<a href="ta.html">Market tools</a>'
    + '<button class="dd_opener"><img src="img/general/arrow_down.svg" alt="arrow_down"><div class="dd_inner_list dnone"><a href="ta.html">Market tools</a><a href="ta.html">Market tools</a><a href="ta.html">Market tools</a><a href="ta.html">Market tools</a></div></button>'
    + '<a href="swap.html">Swap</a>'
    + '<a href="p2p.html">P2P</a>'
    + '<a href="paOverview.html">Staking</a>'
    + '<a href="blog.html">News</a>'
    + '<a href="support.html">Support</a>'
    + '<a href="ta.html">Assets</a>'

    + '</div><div class="header_auth"><a href="login.html">Log in</a><a href="sign_up.html">Sign up</a></div><div class="header_burger"><button id="header_opener"><img src="img/general/burger.svg" alt=""></button></div></div></header>';
document.getElementById('root').innerHTML = header + document.getElementById('root').innerHTML;  