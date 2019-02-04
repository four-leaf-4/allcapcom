function hovereffect3d(){
	const target = document.querySelectorAll('.goods_pic img');
	const targetLength = target.length;
	console.log(target);
	const classGoodPics = document.getElementsByClassName('goods_pic');
	const classGoodPicsLength = classGoodPics.length;

	//const sections = document.getElementsByTagName("section");
	//console.log(sections[0].classList.value);
	
	//const idJyasutisu = document.getElementById("tojyasutisu");
	//console.log(idJyasutisu.getElementsByTagName('h2')[0].innerText);
	const box_X = 0;
	const box_Y = 0;
	const flag = false;

	for (let i=0;i<targetLength;i++){
		target[i].style.transformStyle = "preserve-3d";
		}
	for (let i=0;i<classGoodPicsLength;i++){
		classGoodPics[i].style.perspective = "1200px";
		}
	function getposition(evt){
		const box_X = evt.offsetX;
		const box_Y = evt.offsetY;
		//console.log("this.event offset X:" + box_X + " / this.event offset Y:" + box_Y);
		return { x: box_X, y: box_Y };
	}
	function transform(evt){
		const zahyou = getposition(evt);
		//console.log("evt.target:" + evt.currentTarget);
		console.log(evt.currentTarget);
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
		const length = target.length;
		for(let i = 0; i < length; i++){
			target[i].addEventListener("mousemove",exe,false);
			target[i].addEventListener("mouseout",mout,false);
			//console.log(target[i]);
		}
	},false)
}
//hovereffect3d();