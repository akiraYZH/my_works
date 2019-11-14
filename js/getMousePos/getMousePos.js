/**
 *
 *
 * @param {*} ev
 * @returns
 */
function getMousePos(ev){
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    return {x:ev.clientX + scrollLeft + 'px', y:ev.clientY + scrollTop + 'px'}
}