function myOpen(){

    document.getElementById("opener").style.width = "0px";
    document.getElementById("opener").style.height = "0px";

    let id = null;
    const elem = document.getElementById("bot");   
    let pos = 250;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 500) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
      }
    }
    let id2 = null;
    const elem2 = document.getElementById("top");   
    let pos2 = 250;
    clearInterval(id2);
    id2 = setInterval(frame2, 5);
    function frame2() {
      if (pos2 == -500) {
        clearInterval(id2);
      } else {
        pos2++; 
        elem2.style.bottom = pos2 + "px"; 
      }
    }

    let id3 = null;
    const elem3 = document.getElementById("photo2");   
    let pos3 = 50;
    clearInterval(id3);
    id3 = setInterval(frame3, 5);
    function frame3() {
      if (pos3 == 1000) {
        clearInterval(id3);
        elem3.style.width = 0 + "px"; 
        elem3.style.height = 0 + "px"; 
      } else {
        pos3++; 
        elem3.style.width = pos3 + "px"; 
        elem3.style.height = pos3 + "px"; 
      }
    }
}
