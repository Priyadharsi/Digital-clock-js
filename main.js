
let __mon =document.getElementById("mon");
let weekdays=document.getElementsByClassName("days-box");



let __wwdays=["SUN","MON","TUE","WED","THUR","FRI","SAT"];
/* let __zone=["AM","PM"]; */


function digitalclock(){
	let d = new Date();
	let dd = (d.getDate());
	let mm = (d.getMonth());
	let yy = (d.getFullYear());
	
	__mon.innerText = dd +" : "+mm + " : "+yy;
	
}
digitalclock();

let __times=document.getElementById("times");

function numberformat(num){
	return num < 10 ? "0"+num : num;
}

let diffzones=document.getElementsByClassName("zone-box"); 
function digitalhrs(){
   setInterval(()=>{
	let m=new Date();
	let hh=numberformat(m.getHours());
	let mm=numberformat(m.getMinutes());
	let ss=numberformat(m.getSeconds());
	let ww=m.getDay();

	
	__times.innerText = hh +" : "+mm+ " : "+ss;
	document.getElementsByClassName("active-days")[0].classList.remove("active-days");
    document.getElementsByClassName("days-box")[ww].classList.add("active-days");
	
	if (m.getHours() >=12 && m.getHours() <=24){
		diffzones[1].classList.add("active-days");
		diffzones[0].classList.remove("active-days");
		
	}
	else{
		diffzones[0].classList.add("active-days");
		diffzones[1].classList.remove("active-days");
	}
	
   },1000);
}
digitalhrs();


