



function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, json, fnEnd) {



    clearInterval(obj.timer)

    // alert(getStyle(this, 'opacity'));
    obj.timer = setInterval(function () {

        var bStop = true;

        for (var attr in json) {
            var cur = 0;

            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

            } else {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr] - cur) / 6;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[attr]) {
                // clearInterval(obj.timer);

                // if (fnEnd) fnEnd();
                bStop = false;

            }
            
                

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
                // alert(obj.style.opacity);
            } else {
                obj.style[attr] = cur + speed + 'px';
            }


            

        }

        if(bStop){
            clearInterval(obj.timer);

            if(fnEnd)
                fnEnd();
        }

    }, 30)
}