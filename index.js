//var result = document.getElementsByClassName('result');
let count =0;
var btns = document.querySelectorAll('.btn');
// var result = document.getElementsByClassName('result')
 var result=document.querySelector('#result');

 btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
     const styles = e.currentTarget.classList;
     if(styles.contains("reduce")){
       
        count--;
        
     }
     else if(styles.contains("reset")) {
       count=0;
     }
     else if(styles.contains("increase")) {
        count++;
    }

     result.innerHTML=count;
    });
 });