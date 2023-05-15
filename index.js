var isMoving = true;
function setBackgroundMoving(){
    if(isMoving == true){
    setTimeout(function(){
        //setting background berjalan
        var bg = document.getElementById('main');
        bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px','')) + 1 ) + 'px';

        // update score
        document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;

        //panggil recursive setBackgroundmoving
        setBackgroundMoving();
    },1);
}
}
//inisialisasi background
setBackgroundMoving();

// setting meteor
function setMeteorMoving() {
  var meteor = document.getElementById('meteor');
  var meteor2 = document.getElementById('meteor2');
  var plane = document.getElementById('plane');

  setTimeout(function() {
    // Periksa tabrakan dengan meteor pertama
    if (
      meteor.offsetTop + 56 >= plane.offsetTop &&
      meteor.offsetLeft + 50 >= plane.offsetLeft &&
      meteor.offsetTop + 56 <= plane.offsetTop + 100 &&
      meteor.offsetLeft <= plane.offsetLeft + 50
    ) {
      alert('Game Over, Score: ' + document.getElementById('score').innerHTML);
      isMoving = false;
      plane.setAttribute('class', 'freeze');
      meteor.setAttribute('class', 'freeze');
      meteor2.setAttribute('class', 'freeze');
      return; // Menghentikan rekursi
    }

    // Periksa tabrakan dengan meteor kedua
    if (
      meteor2.offsetTop + 56 >= plane.offsetTop &&
      meteor2.offsetLeft + 50 >= plane.offsetLeft &&
      meteor2.offsetTop + 56 <= plane.offsetTop + 100 &&
      meteor2.offsetLeft <= plane.offsetLeft + 50
    ) {
      alert('Game Over, Score: ' + document.getElementById('score').innerHTML);
      isMoving = false;
      plane.setAttribute('class', 'freeze');
      meteor.setAttribute('class', 'freeze');
      meteor2.setAttribute('class', 'freeze');
      return; // Menghentikan rekursi
    }

    meteor.style.marginTop = parseInt(meteor.style.marginTop.replace('px', '')) + 1 + 'px';
    meteor2.style.marginTop = parseInt(meteor2.style.marginTop.replace('px', '')) + 1 + 'px';

    if (parseInt(meteor.style.marginTop.replace('px', '')) > 500) {
      meteor.style.marginLeft = Math.floor(Math.random() * 250 + 50) + 'px';
      meteor.style.marginTop = '-100px';
    }

    if (parseInt(meteor2.style.marginTop.replace('px', '')) > 500) {
      meteor2.style.marginLeft = Math.floor(Math.random() * 250 + 50) + 'px';
      meteor2.style.marginTop = '-100px';
    }

    // Gerakkan lagi meteor
    setMeteorMoving();
  }, 1);
}

// Inisialisasi meteor
setMeteorMoving();


// // event listener untuk sentuhan pada layar
// window.addEventListener('touchmove', function(e){
//     // mendapatkan objek pesawat dan koordinat pesawat
//     var plane = document.getElementById('plane'),
//         planeRect = plane.getBoundingClientRect();

//     // mendapatkan koordinat sentuhan pada layar
//     var touch = e.touches[0] || e.changedTouches[0];
//     var touchX = touch.pageX;
//     var touchY = touch.pageY;

//     // menggerakan pesawat ke posisi sentuhan pada layar
//     plane.style.marginLeft = (touchX - planeRect.width/2) + 'px';
//     plane.style.marginTop = (touchY - planeRect.height/2) + 'px';
// });

window.addEventListener('keydown', function(e){
    var plane = document.getElementById('plane'),
        left  = parseInt(plane.style.marginLeft.replace('px', ''));
        top   = parseInt(plane.style.marginTop.replace('px', ''));
    console.log(e.keyCode)
    /*
    atas -> 38
    kanan -> 39
    bawah -> 40
    kiri -> 37
    w -> 87
    a -> 65
    s -> 83
    d -> 68
    */
   if(isMoving == true){
   if(e.keyCode == 37) {
    if(left > 0){
    plane.style.marginLeft = (left - 15) + 'px';
   }
    }else if(e.keyCode == 38) {
    if(top > 0){
    plane.style.marginTop = (top - 10) + 'px';
   }
    }else if(e.keyCode == 39) {
    if(left < 340){
    plane.style.marginLeft = (left + 15) + 'px';
   }
    }else if(e.keyCode == 40) {
    if(top < 400){
    plane.style.marginTop = (top + 10) + 'px';
   }
}
   }
});

// var plane = document.getElementById('plane');

// document.getElementById('move-up').addEventListener('touchstart', function(e){
//   e.preventDefault();
//   plane.style.marginTop = (parseInt(plane.style.marginTop) - 10) + 'px';
// });

// document.getElementById('move-down').addEventListener('touchstart', function(e){
//   e.preventDefault();
//   plane.style.marginTop = (parseInt(plane.style.marginTop) + 10) + 'px';
// });

// document.getElementById('move-left').addEventListener('touchstart', function(e){
//   e.preventDefault();
//   plane.style.marginLeft = (parseInt(plane.style.marginLeft) - 10) + 'px';
// });

// document.getElementById('move-right').addEventListener('touchstart', function(e){
//   e.preventDefault();
//   plane.style.marginLeft = (parseInt(plane.style.marginLeft) + 10) + 'px';
// });


// Check if the device is a mobile device
if (/Mobi/.test(navigator.userAgent)) {
  // Show the move button
  document.getElementById("moveButton").style.display = "block";
}
document.getElementById("moveButton").addEventListener("click", function() {
  var plane = document.getElementById("plane");
  var left = parseInt(plane.style.marginLeft.replace("px", ""));
  var top = parseInt(plane.style.marginTop.replace("px", ""));
  
  // Check which direction button was pressed and move the plane accordingly
  switch (this.id) {
    case "upButton":
      top -= 10;
      if (top >= 0) {
        plane.style.marginTop = top + "px";
      }
      break;
    case "downButton":
      top += 10;
      if (top <= 400) {
        plane.style.marginTop = top + "px";
      }
      break;
    case "leftButton":
      left -= 10;
      if (left >= 0) {
        plane.style.marginLeft = left + "px";
      }
      break;
    case "rightButton":
      left += 10;
      if (left <= 340) {
        plane.style.marginLeft = left + "px";
      }
      break;
    default:
      break;
  }
});













  