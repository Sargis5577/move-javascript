const svg = document.querySelector('.image')
 const image = document.querySelector('.imageMove')
 svg.addEventListener('mousedown',function(evt){
  evt.preventDefault()
  var startCords = {
   x:evt.clientX,
   y:evt.clientY,
  }
  
  var OnMouseMove = function(moveEvt) {
   moveEvt.preventDefault()
   image.style.border = '2px dotted blue'
   var shift = {
   x:startCords.x - moveEvt.clientX,
   y:startCords.y - moveEvt.clientY,
   }
   startCords = {
   x:moveEvt.clientX,
   y:moveEvt.clientY
   };
   
   image.style.left = (image.offsetLeft - shift.x) + 'px'
   image.style.top = (image.offsetTop - shift.y) + 'px'
   svg.style.left = (svg.offsetLeft - shift.x) + 'px'
   svg.style.top = (svg.offsetTop - shift.y) + 'px'
  }
  var onMouseUp = function(remove) {
   remove.preventDefault()
   document.removeEventListener('mousemove',OnMouseMove)
   image.style.border = 'none'
   document.removeEventListener('mousemove',onMouseUp)
  
  }
   document.addEventListener('mousemove',OnMouseMove)
   document.addEventListener('mouseup',onMouseUp)
 })