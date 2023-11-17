<template>
    <head>
        <title>Jakub Borkowski - Studia</title>
        
    </head>
    <body>
            <br>
            <div class="show">
                <div class="box">
                    <img src="@/assets/prof.jpg" alt="" class="box-img">
                    <h5>Magister Inżynier Automatyki i Robotyki</h5>
                    <p>Witaj! Jestem Kuba i aktualnie zakończyłem studia magisterskie na Politechnice Poznańskiej. 
                        Kierunek, który studiuję to Automatyka i Robotyka. Poza uczelnią pracuję jako Automatyk, Robotyk, Elektryk w firmie Ster-projekt.
                        Swój wolny czas staram się spędzać aktywnie. Kocham wspinaczki górskie i jestem klientem wielu poznańskich siłowni.

                        
                        Dodatkowo lubię poprogramować. Prawdopodobnie to sprawiło, że własnie to czytasz. Jeżeli chcesz dowiedzieć się czegoś więcej o mnie skorzystaj z odnośników poniżej.
                    </p>
                    <ul>
                        <li><a href="https://www.facebook.com/jakub.borkowski.319/" target="_blank"><i class="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="https://twitter.com/betonMonster" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/kubskozak/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://github.com/JakupBorkowski" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="mailto:jakub.zdzislaw.borkowski@gmail.com" target="_blank"><i class="fa-brands fa-google"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jakub-borkowski-341a45242/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
    
    
                </div>
                

            </div>
            
            <br>
            <div class="show">
                <div class="box2">
                    <h5>POZNANE TECHNOLOGIE</h5>
                    <ul>
                        <li><a><img name = "slide1"></a></li>
                        <li><a><img name = "slide2"></a></li>
                        <li><a><img name = "slide3"></a></li>
                        <li><a><img name = "slide4"></a></li>
                        <li><a><img name = "slide5"></a></li>
                        <li><a><img name = "slide6"></a></li>
                        <li><a><img name = "slide7"></a></li>
                        <li><a><img name = "slide8"></a></li>
                    </ul>
                </div>
            </div>
            <br>
    </body>   ng
    {{ dane }}
</template>


<script>

export default {
    data(){
        return{
            dane: "String",
        }
    },
}

</script>


<style>
.box, .box2, .box-ang{
    max-width: 900px;
    background-color: rgba(0,0,0,0.4);
    padding-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 50px;;
    text-align: center;
    /*margin-top: 1%;*/
    margin:auto;
    display:block;
    color: white;

    font-family: 'Century Gothic', sans-serif;
    line-height: 1.9;
}

.box-img{
    border-radius: 50%;
    width:200px;
    height:200px;
}

.box h1,
.box2 h1,
.box-ang h1{
    font-size: 40px;
    letter-spacing: 3px;
    font-weight: 100;
}

.box h5,
.box2 h5,
.box-ang h5{
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: 100;
}

.box p,
.box2 p,
.box-ang p{
    text-align: justify;
}

.box ul,
.box2 ul,
.box-ang ul{
    margin:0;
    padding: 0;

}

.box li,
.box-ang li,
.box2 li{
    display:inline-block;
    margin: 10px;
    list-style: none;
}

.box li a i,
.box-ang li a i,
.box2 li a i{
    color: white;
    text-decoration: none;
    font-size: 60px;
}

.box li a i:hover,
.box-ang li a i:hover,
.box2 li a i:hover
{
    color: rgba(71.4,200.4,242.9,1);
}

.box li a img,
.box-ang li a img,
.box2 li a img
{
    color: white;
    width: 85px;
    height: 85px;
}

.hidden{
    opacity: 0;
    filter:blur(5px);
    transition: all 1s;
}

.show{
    opacity: 1;
    filter: blur(0);
}

</style>