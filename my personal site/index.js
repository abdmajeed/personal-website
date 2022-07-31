let div1 = document.createElement('div');div1.classList.add("divs1");
document.body.appendChild(div1);
 console.log(div1);

 let h1=document.createElement('h1');
h1.innerHTML= "ABDUL MAJEED";
div1.appendChild(h1);
 
let div2 = document.createElement('div');
div2.classList.add("ame");
div1.appendChild(div2);
let addico = document.createElement('img');
addico.src="./img/location-pin.png";
div2.appendChild(addico);
let add = document.createElement('p');
add.innerHTML="8 A,Nethaji Street,Adirampattinam";
div2.appendChild(add);

let div3 = document.createElement('div');div3.classList.add("ame");
div1.appendChild(div3);

let mobico = document.createElement('img');
mobico.src="./img/smartphone-call.png";
div3.appendChild(mobico);
let mob= document.createElement('p');
mob.innerHTML="7200130493";
div3.appendChild(mob);
 
let div4 = document.createElement('div');div4.classList.add("ame");
div1.appendChild(div4);
let mailicon = document.createElement('img');
mailicon.src="./img/gmail.png";
div4.appendChild(mailicon);
let mail= document.createElement('p');
mail.innerHTML="abdmajeed333@gmail.com";
div4.appendChild(mail);
 
let div7 = document.createElement('div');div7.classList.add("flex");
document.body.appendChild(div7);

let div5 = document.createElement('div');
div5.classList.add("body1");
let edu= document.createElement('h4');
edu.innerHTML="Education";div5.appendChild(edu);
let edu1= document.createElement('h3' );edu1.classList.add("bsc");
edu1.innerHTML="B.sc (cs)   ";div5.appendChild(edu1);
let edu2= document.createElement('h3');
edu2.innerHTML=" Jun 2012 - Apr 2015  ";
div5.appendChild(edu2);
let edu3= document.createElement('h3');
edu3.innerHTML=" Jamal Mohamed College ";
div5.appendChild(edu3);
let cert1= document.createElement('h4');
cert1.innerHTML=" Certifications ";
div5.appendChild(cert1);
let cert= document.createElement('h3');cert.classList.add("cert");
cert.innerHTML=" Full Stack Development";
div5.appendChild(cert);
let cert2= document.createElement('h3');
cert2.innerHTML="Present ";div5.appendChild(cert2);
let profile= document.createElement('h4');
profile.innerHTML="Profile ";div5.appendChild(profile);
let profile1= document.createElement('h4');profile1.classList.add("profile");
profile1.innerHTML="I am passionate to pursue career as a software/Web developer and I am eager to learn a lot while pursuing my career.So I dedicate myself for betterment of mine as well as the Employer ";div5.appendChild(profile1);
div7.appendChild(div5);

let div6 = document.createElement('div');div6.classList.add("body2");

let pinfo1= document.createElement('h4');
pinfo1.innerHTML="Personal Details" ;
div6.appendChild(pinfo1);
let pinfo2= document.createElement('h4');
pinfo2.innerHTML=" Date of Birth ";
div6.appendChild(pinfo2);
let pinfo= document.createElement('h3');
pinfo.innerHTML=" September 11 1995 ";
div6.appendChild(pinfo);
let pinfo3= document.createElement('h4');
pinfo3.innerHTML="Gender  ";div6.appendChild(pinfo3);
let gen= document.createElement('h3');
gen.innerHTML="Male  ";div6.appendChild(gen);

let nati= document.createElement('h4');
nati.innerHTML="Nationality  ";div6.appendChild(nati);
let natio= document.createElement('h3');
natio.innerHTML="Indian ";div6.appendChild(natio);

let Skills= document.createElement('h4');
Skills.innerHTML="Skills  ";div6.appendChild(Skills);
let HTML1= document.createElement('h3');
HTML1.innerHTML="HTML and CSS ";div6.appendChild(HTML1);
let js= document.createElement('h3');
js.innerHTML="Java script"  ; div6.appendChild(js);
let br= document.createElement('br');
br.innerHTML="React ";div6.appendChild(br);
let react= document.createElement('h3');
react.innerHTML="React ";div6.appendChild(react);
let br1= document.createElement('br');
br1.innerHTML="React ";div6.appendChild(br1);
let Bootstrap= document.createElement('h3');
Bootstrap.innerHTML=" Bootstrap and Sass ";div6.appendChild(Bootstrap);

 
div7.appendChild(div6); 


