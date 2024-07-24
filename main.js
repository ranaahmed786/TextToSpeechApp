const text = document.querySelector('#text');
const btn=document.querySelector('#generate-btn');
function generateAudio(){
    const SpeachSynthesis= window.speechSynthesis;
    const enteredText = text.value;
    if (!SpeachSynthesis.speaking&&text.value.trim()!=="") {
        const newSpeach = new SpeechSynthesisUtterance(text.value);
        console.log(newSpeach);
        newSpeach.rate=0.5;
        SpeachSynthesis.speak(newSpeach);
        text.value="";
        btn.textContent ='sound is playing...';
        btn.style.color='green';
        newSpeach.onend=()=>{
            btn.textContent='Generate audio';
            btn.style.color='black';
        }
    }
   else if (text.value.trim()==="") {
        btn.textContent='Enter something!';
        btn.style.color='red';
    }
}
document.addEventListener('keydown',(event)=>{
if (event.key==='Enter') {
    generateAudio();
}
});