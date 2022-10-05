
import './App.css';
import React, {useEffect, useState} from "react";
import sound1 from "./sounds/jennifer_birthday.mp3"
import sound2 from "./sounds/stevie_wonder_birthday.mp3"
import sound3 from"./sounds/anita_baker_no_one_in_the_world.mp3"
import sound4 from"./sounds/anita_baker_angel.mp3"
import sound5 from"./sounds/celine_dion_think_twice.mp3"
import sound6 from "./sounds/celine_dion_love_doesnt_ask_why.mp3"
import sound7 from"./sounds/beres_hammond_love_means.mp3"
import sound8 from "./sounds/kenny_lattimore_for_you.mp3"
import sound9 from "./sounds/beres_hammond_i_feel_good.mp3"
import img1 from "./images/sharole4.jpg"
import img2 from "./images/sharole11.jpg"
import img3 from "./images/sharole1.jpeg"
import img4 from "./images/sharole2.jpeg"
import img5 from "./images/sharole3.jpeg"
import img6 from "./images/sharole15.jpg"
import img7 from "./images/sharole14.jpg"
import img8 from "./images/sharole13.jpg"
import img9 from "./images/sharole9.jpg"
import instructions from"./documents/Instructions.docx"
import ocean from "./documents/Ocean_Appreciation_Message.docx"
import rajheem from "./documents/Rajheem_Appreciation_Message.docx"

function App() {
    function rColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color="#"+randomColor;

    }

    const [data,setData]=useState("")
    const[text,setText]=useState("")
    const [drum,setDrum]=useState("")
    let Timer
    let running= false
    let on_off=""

    function change(){

           Timer=setInterval(rColor,3500)

    }
    function stop(){
        clearInterval((Timer))
        document.body.style.backgroundColor="white";
    }

    function play(str) {


            let audio = document.getElementById(str)
            let old = document.getElementById(drum)
            let main = document.getElementById("main-control")
            let ima=document.getElementById("image")
            console.log(ima)
            console.log(audio)
            console.log(main)
            main.src = audio.src
            console.log("Data is" + data)
        if(str=="S"){
            document.body.style.backgroundImage=`url(${img1})`
        }
        else if(str=="H"){
            document.body.style.backgroundImage=`url(${img2})`
        }
        else if(str=="A"){
            document.body.style.backgroundImage=`url(${img8})`
        }
        else if(str=="R"){
            document.body.style.backgroundImage=`url(${img5})`
        }
        else if(str=="O"){
            document.body.style.backgroundImage=`url(${img4})`
        }
        else if(str=="L"){
            document.body.style.backgroundImage=`url(${img6})`
        }
        else if(str=="E"){
            document.body.style.backgroundImage=`url(${img9})`
        }
        else if(str=="OCT03"){
            document.body.style.backgroundImage=`url(${img3})`
        }
        else if(str=="2022"){
            document.body.style.backgroundImage=`url(${img7})`
        }

            if (drum === "") {
                main.play()

            }
            if (drum !== str && drum !== "") {
                main.play()
                old.pause()
                old.currentTime = 0
            }
            if (drum === str) {
                main.currentTime = 0
                main.play()

            }


        setDrum(str)
    }


    /*useEffect(
        function(){
            document.addEventListener("keydown",detectKeyDown,true)
        },[]
    );
    function detectKeyDown(e) {

        console.log(data)
            if (e.key.toUpperCase() === "Q") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://www.nawpic.com/media/2020/naruto-4k-nawpic-30.jpg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "W") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://m.gettywallpapers.com/wp-content/uploads/2021/10/Jujutsu-Kaisen-Full-HD-Wallpaper-HD-768x1365.jpg')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "E") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://m.gettywallpapers.com/wp-content/uploads/2021/08/Jujutsu-Kaisen-4k-Wallpaper-1536x864.jpeg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "A") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://www.enwallpaper.com/wp-content/uploads/2021/09/f0a37f0e11fcc2ef4eec41997ec95f67.jpg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "S") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/229851.jpg')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "D") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://images7.alphacoders.com/729/thumbbig-729209.webp')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "Z") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://coolthemestores.com/wp-content/uploads/2020/12/attack-on-titan-wallpaper-background.jpg')"
                play(key)
            }
        else    if (e.key.toUpperCase() === "X") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://wallpapers.com/images/hd/my-hero-academia-world-heroes-mission-ophg4qsse6vc3peo-ophg4qsse6vc3peo.jpg')"
                play(key)
            }
       else   if (e.key.toUpperCase() === "C") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://i.imgur.com/2gLwYeZ.png')"
                play(key)
            }
       else{
           document.body.style.background="white"
            }


    }*/

    function handleChange(e){
        setText(e.target.value)

    }

    function handleData(e){
        setData(e.target.value)

    }

  return (
      <div>

    <div className="App container-fluid">


        <div  className="grid" id="drum-machine">
            <a id="instructions" href={rajheem}>Click Here For Message From Rajheem</a>
            <div className="card" id="display">

                <h1>Sharole Duffus Music Player</h1>
                <div className="button">

                <button type="button" className="on btn btn-secondary col-4" id="turn-off" onClick={()=>{change()}}>
                    Color On
                </button>

                <button type="button" className="off btn btn-secondary col-4"  id="turn-off" onClick={()=>{stop()}}>
                    Color Off
                </button>
                </div>

                <div className="card-header">
                    {console.log("Data here is"+ data)}
                <audio controls id="main-control" src="" type="audio/mp3"/>
                </div>
                <div className="card-body">
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-1" onClick={()=>{play("S")}}>S
                    <audio  className="clip" id="S" src={sound1} type="audio/mp3"/>
                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-2" onClick={()=>{play("H")}}>H
                    <audio className="clip" id="H" src={sound2} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-3" onClick={()=>{play("A")}}>A
                    <audio className="clip" id="A" src={sound3} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-4" onClick={()=>{play("R")}}>R
                    <audio className="clip" id="R" src={sound4} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-5" onClick={()=>{play("O")}}>O
                    <audio className="clip" id="O" src={sound5} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-6" onClick={()=>{play("L")}}>L
                    <audio className="clip" id="L" src={sound6} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-7" onClick={()=>{play("E")}}>E
                    <audio className="clip" id="E" src={sound7} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-8" onClick={()=>{play("OCT03")}}>OCT03
                    <audio className="clip" id="OCT03" src={sound8} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-9" onClick={()=>{play("2022")}}>2022
                    <audio className="clip" id="2022" src={sound9} type="audio/mp3"/>
                </button>
                </div>
            </div>
        </div>
    </div>
      </div>


  );
}

export default App;
