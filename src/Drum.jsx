// // import { useState } from 'react'

// import { useEffect, useState } from "react";
// import "./App.css";

// const firstGroupSound = [
//   {
//     keyCode: 81,
//     key: "Q",
//     id: "Heater-1",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
//   },
//   {
//     key: "W",
//     keyCode: 87,
//     id: "Heater-2",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
//   },
//   {
//     key: "E",
//     keyCode: 69,
//     id: "Heater-3",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
//   },
//   {
//     key: "A",
//     keyCode: 65,
//     id: "Heater-4",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
//   },
//   {
//     key: "S",
//     keyCode: 83,
//     id: "Heater-6",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
//   },
//   {
//     key: "D",
//     keyCode: 68,
//     id: "Dsc_Oh",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
//   },
//   {
//     key: "Z",
//     keyCode: 90,
//     id: "Kick_n_Hat",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
//   },
//   {
//     key: "X",
//     keyCode: 88,
//     song: "RP4_KICK_1",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
//   },
//   {
//     key: "C",
//     keyCode: 67,
//     song: "Cev_H2",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
//   },
// ];



// const KeyboardKey = ({play, sound:{key, url, song,keyCode}}) => {


//   const handlekeyDown = (e) => {
//     if(e.keyCode===keyCode){
//       play(key)
//     }
//   }
  
//   useEffect(()=>{
//     document.addEventListener("keydown",handlekeyDown)
//   },[])


// console.log({song});
//   return(
// <button className="drum-pad" key={key} id="{song}"  onClick={()=> play(key)} >
//         <audio className="clip" id={key} src={url} key={song}></audio>
//         {key}
//       </button>
//   )
// }

// const Keyboard = ({play}) => {
//   return firstGroupSound.map((sound) => <KeyboardKey play={play} sound={sound}/>);
// };
// const DomControler = (key) =>{
  
 
    
// }

// function Drum() {
//   const [soundName, setSoundName] = useState("");
//   const play = (key) => {
//     const audio = document.getElementById(key);
//     audio.currentTime = 0;
//     audio.play();
//     setSoundName(key);
//   };

//   return (
//     <div id="drum-machine" style={{ backgroundColor: "#6600ff", padding: "20px" ,display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      
//       <Keyboard play={play} />
      
//       <div id="display" style={{ marginTop: "20px", fontSize: "24px" ,color: 'orange', display: "flex", justifyContent: ""
//     }}>
//         {/* display the name of the sound here */}
//         <h3 style={{color: 'orange',fontSize: 23}}>Drum Machine</h3> {soundName} 
//       </div>
//     </div>
//   );
// }

// export default Drum;
