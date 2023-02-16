let morning = new Date().getHours()


if(morning>00 && morning<=10){
    alert("Good morning");
    document.body.style.backgroundColor = "Yellow"
}
else if(morning>10 && morning<=18){
      alert("Good evening")
      document.body.style.backgroundColor = "Orange"
}
else{
    alert("Good nigth");
    document.body.style.backgroundColor = "brown"
}


