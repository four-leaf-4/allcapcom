/*a tag で#toのhrefを持つものをクリックするとスクロールアニメーションするよ*/
$(function(){
  $('a[href^="#to"]').on('click',function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#to" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

function effectScroll(){
	const documentHeight = getdocumentHeight();
	const windowHeight = window.innerHeight;
	const pageBottom = documentHeight - windowHeight;
	//console.log("documentHeight:" + documentHeight + " / windowHeight:" + windowHeight);
	console.log("documentHeight:" + documentHeight);
	//console.log("pageBottom:" + pageBottom);
	
	const toTopbtn = document.getElementById('btn_to_top');
	
	let flag = false;
	
	function getdocumentHeight(){
		const body = document.getElementById("body");
		const documentHeight = body.clientHeight;
		return documentHeight;
		}
	function getscrollTop(){
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//console.log("scrollTop1:" + scrollTop);
		return scrollTop;
		}
	function toTopbtnStyle(){
		toTopbtn.style.visibility = "hidden";
		toTopbtn.style.opacity = "0";
		}
	/*トップへ戻るボタンがスクロールすると出てくるよ*/
	function fade(){
		const scrollTop = getscrollTop();
		checkScroll(windowHeight,scrollTop);
		}
	function checkScroll(windowHeight,scrollTop){
		//console.log("windowHeight:" + windowHeight);
		if(windowHeight>scrollTop){
			toTopbtn.style.visibility = "hidden";
			toTopbtn.style.opacity = "0";
			}
		else if(windowHeight < scrollTop){
			toTopbtn.style.visibility = "visible";
			toTopbtn.style.opacity = "1";
			toTopbtn.style.transition = "opacity 3s ease 0s,bottom 0.3s ease 0s";
			}
		}
	/*ページ末までスクロールするとトップへ戻るボタンがfooterにかぶらないようにするよ*/
	function toBottom(){
		const scrollTop = getscrollTop();
		checkBottom(pageBottom,scrollTop);
		}
	function checkBottom(pageBottom,scrollTop){
		if(pageBottom <= scrollTop){
			console.log("bottom!");
			toTopbtn.style.bottom = "5rem";
			flag = true;
			}
		else if(pageBottom > scrollTop && flag == true){
			console.log("leave bottom!");
			toTopbtn.style.bottom = "1rem";
			flag = false;
			}
		}
	window.addEventListener("load",getdocumentHeight,false);
	window.addEventListener("scroll",getscrollTop,false);
	window.addEventListener("scroll",fade,false);
	window.addEventListener('DOMContentLoaded',toTopbtnStyle,false);
	window.addEventListener("scroll",toBottom,false);
}
effectScroll();