const fs = require('fs');
const path = require('path');
const js = `var wrapHeight = 1000;
var closedHead = 0;

$(document).ready(function(){
    $("a.closeheader").click(function(){
        $('.headline').hide(200);
        $('#footerke').hide(200);
		closedHead = 1;
		updateHeight();
    });
	$( window ).resize(function() {
		updateHeight();
	});

    $("#devices > a").click(function(){
		$("#devices > a").removeClass('active');
		$(this).addClass('active');
		$('#mainWrapper').removeClass();
    });
    $("#tablet").click(function(){		$('#mainWrapper').addClass('tablet');		});
    $("#tabletl").click(function(){		$('#mainWrapper').addClass('tabletl');		});
    $("#mobile").click(function(){		$('#mainWrapper').addClass('mobile');		});
    $("#mobilel").click(function(){		$('#mainWrapper').addClass('mobilel');		});




	updateHeight();
});


function updateHeight() {
	wrapHeight = $(window).height();
	if (closedHead == 0) {
		wrapHeight = wrapHeight - 100; //levonom a headert
	}
	$( '#mainWrapper' ).height(wrapHeight);


}
`

const html = `<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Scrolling Sticky Menu With Bootstrap</title>
    <meta name="description" content="Single page website template with a fixed menu and full width page sections that adjust to the height of the browser. The current page is highlighted">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="../styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../index.js"></script>
</head>
<body>
	<div class="headline">
		<div>
			<a href="/" id="logo">HTML5 Templates</a>
			<div class="description">
				<h1>Scrolling Sticky Menu With Bootstrap</h1>
				<p>Single page website template with a fixed menu and full width page sections that adjust to the height of the browser. The current page is highlighted in the navigation as the visitor scrools through the site and it scrolls to the selected section when the menu is clicked. "Back to top" button included.</p>
			</div>
			<div id="devices">
				<a id="desktop" class="active" title="Desktop view"> </a>
				<a id="tablet" title="Tablet view"> </a>
				<a id="tabletl" title="Tablet landscape view"> </a>
				<a id="mobile" title="Mobile view"> </a>
				<a id="mobilel" title="Mobile landscape view"> </a>
			</div>
			<a class="download" title="Zip package" href="https://html5-templates.com/download/bootstrap-scrolling-sticky-menu.zip">Download</a>
			<a class="closeheader" title="Hide header">&#10148;</a>
			<div class="clearboth">
			</div>
		</div>
	</div>
	<div id="mainWrapper">
		<div id="device">
			<div id="wrapIframe">
				<iframe id="demoFrame" src="https://html5-templates.com/demo/bootstrap-scrolling-sticky-menu/">Iframes not supported</iframe>
			</div>
		</div>
	</div>
	<div id="footerke">
		<span>&copy; This template can be downloaded and edited for free as long as you're linking back to html5-templates.com</span>
		<span class="mobileOnly">&copy; HTML5-Templates.com</span>
	</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-100718332-1', 'auto');
  ga('send', 'pageview');

</script>

</body>
</html>`

const css = `html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}
body{line-height:1}
h1{font-size: 25px;}h2{font-size: 21px;}h3{font-size: 18px;}h4{font-size: 16px;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
nav ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:none}
a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}
ins{background-color:#ff9;color:#000;text-decoration:none}
mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}
del{text-decoration:line-through}
abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}
table{border-collapse:collapse;border-spacing:0}
hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}
input,select{vertical-align:middle}
body{font-family: Verdana, Geneva, sans-serif;}


.clearboth {
	clear: both;
}
html, body {
	background: #CFD6D6;
	overflow: hidden;
}
.headline {
	border-bottom: 2px solid #FFF;
	padding: 5px;
	height: 66px;
	overflow: hidden;
	background: #eeeef6;
}
.headline > div {
	max-width: 1500px;
	margin: auto;
}
a#logo {
    background: url(_sprite.png) no-repeat -360px 0px transparent;
    display: block;
    padding: 10px 0 15px 90px;
    font-size: 20px;
    text-decoration: none;
    color: #CE5937;
    font-family: "Arial Black", Gadget, sans-serif;
    line-height: 30px;
    float: left;
    width: 214px;
    font-weight: bold;
	margin: 7px 0 0 0;
}
#devices {
	display: block;
	margin: 3px 10px 3px 50px;
	float: left;
}
#devices a {
    display: inline-block;
    border-bottom: 3px solid #eeeef6;
    background: url(_sprite.png) no-repeat 2px 2px transparent;
    height: 54px;
    width: 57px;
    vertical-align: middle;
    cursor: pointer;
}
#devices a:hover {
    border-bottom: 3px solid #DE8947;
}
#devices a#desktop {
    background-position: 6px 2px;
    width: 65px;
}
#devices a.active {
	border-bottom: 3px solid #CE5937;
}
#devices a#tablet {
    background-position: -68px 4px;
    width: 36px;
    margin-left: 20px;
}
#devices a#tabletl {
	background-position: -118px 4px;
	width: 46px;
}
#devices a#mobile {
	background-position: -179px 4px;
	width: 30px;
	margin-left: 20px;
}
#devices a#mobilel {
	background-position: -220px 4px;
	width: 36px;
}
#demoFrame {
	width: 100%;
	position: relative;
    height: 100%;
    border: 0;
}
a.download {
	background-color: #CE5937;
	font-size: 15px;
	font-weight: bold;
	color: #FFF;
	cursor: pointer;
	border-radius: 10px;
	padding: 7px 15px;
	display: block;
	float: left;
	margin: 17px 5px 2px 20px;
	text-decoration: none;
}
a.download:hover {
    background-color: #9E4927;
}
a.closeheader {
	color: #CE5937;
	-moz-transform: rotate(270deg);
	-webkit-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	transform: rotate(270deg);
	font-size: 20px;
	cursor: pointer;
	display: inline-block;
	margin: 20px 15px 2px;
}
a.closeheader:hover {
	color: #9E4927;
}
.description {
    display: block;
    width: 660px;
    float: left;
}
.description h1 {
	color: #CE5937;
	font-size: 15px;
	font-weight: bold;
	margin: 0 0 4px 0;
	line-height: 12px;
}
.description p {
	color: #333;
	font-size: 12px;
	line-height: 12px;
}
#mainWrapper {
    width: 100%;
}
#device{
	height: 100%;
	width: 100%;
}

#mainWrapper.tablet, #mainWrapper.tabletl, #mainWrapper.mobile, #mainWrapper.mobilel {
    overflow: auto;
}
.tablet #device {
	padding: 88px 44px 98px 44px;
	background: url(tablet.png) no-repeat 0px 0px transparent;
	height: 1040px;
	width: 786px;
	margin: 30px auto;
}
.tabletl #device {
	padding: 44px 98px 44px 88px;
	background: url(tabletl.png) no-repeat 0px 0px transparent;
	height: 786px;
	width: 1040px;
	margin: 30px auto;
}
.mobile #device {
    padding: 51px 10px 53px 10px;
    background: url(mobile.png) no-repeat 0px 0px transparent;
    height: 551px;
    width: 320px;
    margin: 50px auto 30px;
}
.mobilel #device {
	padding: 10px 53px 10px 51px;
	background: url(mobilel.png) no-repeat 0px 0px transparent;
	height: 320px;
	width: 551px;
	margin: 100px auto 20px;
}

#wrapIframe {
    width: 100%;
    height: 100%;
}
#footerke {
	height: 20px;
	font-size: 11px;
	line-height: 20px;
	padding: 0 10px;
	text-align: right;
	background: #eeeef6;
}
.mobileOnly{
	display: none;
}

@media screen and (max-width: 1520px) {
	.headline > div {
		max-width: 1200px;
	}
	a#logo {
		width: 90px;
		overflow: hidden;
		text-indent: -999px;
		padding: 0;
		height: 66px;
	}
	#devices {
		margin: 3px 10px 3px 10px;
	}
	#devices a#tablet, #devices a#mobile{
		margin-left: 0px;
	}
	a.download {
		margin: 17px 0px 2px 8px;
	}
}

@media screen and (max-width: 1220px) {
	.description p {
		display: none;
	}
	.description h1 {
		color: #333;
		font-size: 15px;
		line-height: 17px;
		margin: 10px 0 0 0;
	}
	.description {
		width: 300px;
	}
	.headline > div {
		max-width: 850px;
	}
}

@media screen and (max-width: 860px) {
	#devices {
		display: none;
	}
	.headline > div {
		max-width: 585px;
	}
	.mobileOnly{
		display: block;
	}
	#footerke span{
		display: none
	}
	#footerke span.mobileOnly{
		display: block;
	}
}

@media screen and (max-width: 600px) {
	.headline > div {
		max-width: 300px;
	}
	a#logo {
		width: 65px;
		background-position: -380px 0;
	}
	a.closeheader {
		display: none;
	}
	.description {
		width: 220px;
	}
	.description h1 {
		margin: 0px 0 0 0;
		font-size: 11px;
		line-height: 12px;
	}
	a.download {
		margin: 8px 0px 2px 8px;
		float: right;
		padding: 4px 10px;
		font-size: 13px;
	}

}`

exports.createFiles = (req, res) => {
  fs.mkdir('files', function (err) {
    err ? res.status(500).json({ err: err }) : res.status(200);
  });
}

exports.downloadHTML = (req, res) => {
  fs.writeFile(path.resolve('files/index.html'), html, function (err) {
    if (err) { throw res.status(500).json({ err: err }) }
    res.sendFile(path.resolve('files/index.html'));
  });
}

exports.downloadJS = (req, res) => {
  fs.writeFile(path.resolve('files/index.js'), js, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.sendFile(path.resolve('files/index.js'));
  });
}

exports.downloadCSS = (req, res) => {
  fs.writeFile(path.resolve('files/styles.css'), css, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.sendFile(path.resolve('files/styles.css'));
  });
}

