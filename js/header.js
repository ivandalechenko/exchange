const header = '<header class="header"><div class="container header_container" id="header"><a href="/index.html" class="header_logo"><img src="img/general/logo.svg" alt="logo"></a><div class="header_nav"><a href="#">Trading<img src="img/general/arrow_down.svg" alt="arrow_down"></a>'
    + '<a href="paDeposit.html">PA</a>'
    +
    '<a href="blog.html">Blog</a></div><div class="header_auth"><a href="login.html">Log in</a><a href="sign_up.html">Sign up</a></div><div class="header_burger"><button id="header_opener"><img src="img/general/burger.svg" alt=""></button></div></div></header>';
document.getElementById('root').innerHTML = header + document.getElementById('root').innerHTML;  