window.onload = function() {
    var box = document.getElementById('animateBox');
    var position = 0;
    var direction = 1;
    
    function moveBox() {
        position += direction;
        if (position >= 300 || position <= 0) {
            direction *= -1;
        }
        box.style.left = position + 'px';
        requestAnimationFrame(moveBox);
    }
    
    moveBox();
};