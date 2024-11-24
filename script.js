function result(){
    let length=parseInt(document.getElementById('cm').value)
    let answe= length/100
    let meter=document.getElementById('answer')
    meter.innerHTML=`${length}CM = ${answe} Meter`
    setTimeout( function() {
       document.getElementById('cm').value=""
    },2000);
}