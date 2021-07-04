document.addEventListener("mousemove", parallax);
function parallax(event){
    document.querySelectorAll('.move').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')
        

        const x = (window.innerWidth - event.pageX*speed)/100
        const y= (window.innerHeight - event.pageY*speed)/100

        

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    const cursor = document.querySelector('.cursor')
        cursor.style.top = event.pageY + 'px';
        cursor.style.left = event.pageX + 'px';
    
}