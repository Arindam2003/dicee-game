function random(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomdiceimage="dice"+randomNumber1+".png";
    var imgsource="images/" + randomdiceimage;
    
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",imgsource);

    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomdiceimage2="dice"+randomNumber2+".png";
    var imgsource2="images/" + randomdiceimage2;
    
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",imgsource2);
    
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Motu Win"
    }
    else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="Patlu Win"
    }
    else{
        document.querySelector("h1").innerHTML="Match Draw"
    }
}


