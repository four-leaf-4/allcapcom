const target = document.getElementsByClassName('goods_btn');
//console.log(target);
const box_X = 0;
const box_Y = 0;
const flag = false;
	
function getposition(evt){
	const box_X = evt.offsetX;
	const box_Y = evt.offsetY;
	//console.log("this.event offset X:" + box_X + "// this.event offset Y:" + box_Y);
	return { x: box_X, y: box_Y };
	}

function transform(evt){
	const zahyou = getposition(evt);
	//console.log("evt.target:" + evt.currentTarget);
	const targetwidth =  evt.currentTarget.offsetWidth;
	const targetheight = evt.currentTarget.offsetHeight;
	
	x = targetwidth - zahyou.x * 2,
	y = targetheight - zahyou.y * 2,
	rx = -x / 60,
	ry = y / 40;
	console.log("targetwidth:"+ this);
	//console.log("x:" + x + "  y:" + y);
	//console.log("rx:" + rx + "  ry:" + ry);
	evt.currentTarget.style.transform = "rotateY(" + rx + "deg) rotateX(" + ry + "deg)";
	}

function exe(evt){
	const flag = true;
	//console.log("座標X：" + zahyou.x + "/座標Y：" + zahyou.y);
	if(flag == true){
		transform(evt);
		}
	}

function mout(evt){
	evt.currentTarget.style.transform = "";
	const box_X = 0;
	const box_Y = 0;
	const flag = false;
	}
window.addEventListener( 'load',function(){
for(let i = 0; i < target.length; i++){
	target[i].addEventListener("mousemove",exe,false);
	target[i].addEventListener("mouseout",mout,false);
	//console.log(target[i]);
	}
}, false )