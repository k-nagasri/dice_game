var random_no1=Math.random();
random_no1=Math.floor(random_no1*6)+1;

var random_no2=Math.random();
random_no2=Math.floor(random_no2*6)+1;

var image1,image2;

if(random_no1==1) image1="./images/dice1.png";
else if(random_no1==2) image1="./images/dice2.png";
else if(random_no1==3) image1="./images/dice3.png";
else if(random_no1==4) image1="./images/dice4.png";
else if(random_no1==5) image1="./images/dice5.png";
else if(random_no1==6) image1="./images/dice6.png";

if(random_no2==1) image2="./images/dice1.png";
else if(random_no2==2) image2="./images/dice2.png";
else if(random_no2==3) image2="./images/dice3.png";
else if(random_no2==4) image2="./images/dice4.png";
else if(random_no2==5) image2="./images/dice5.png";
else if(random_no2==6) image2="./images/dice6.png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2); 

if(random_no1>random_no2)
{
    document.querySelector(".container h1").textContent="Player1 won";
}

if(random_no1==random_no2)
{
    document.querySelector(".container h1").textContent="Draw";
}

if(random_no1<random_no2)
{
    document.querySelector(".container h1").textContent="Player2 won";
}