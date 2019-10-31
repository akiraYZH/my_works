onload = function () {


    imgRotateY(1);

    function imgRotateY(speed) {
        var aImg = document.querySelectorAll("img");
        var n = new Array(aImg.length);
        var v = speed;

        for (i = 0; i < aImg.length; i++) {
            aImg[i].index = i;
            n[i] = 0;
        }


        for (i = 0; i < aImg.length; i++) {



            aImg[i].onmouseover = function () {
                var ro = this;
                
                //The if statement is for preventing the repeat of the animation
                if (n[ro.index] == 0 ||n[ro.index] == 180) {
                    // alert(n);
                    var timer;


                    timer = setInterval(function () {
                        ro.style.transform = "rotateY(" + n[ro.index] + "deg)";

                        n[ro.index] += v;

                        //Rotation stops when it is 180 or 360 degree
                        if (n[ro.index] == 180||n[ro.index] ==360) {
                            clearInterval(timer);
                        }
                        if (n[ro.index] == 360){
                            n[ro.index] = 0;
                        }

                    }, 1);
                }
            }
        }
    }
}





