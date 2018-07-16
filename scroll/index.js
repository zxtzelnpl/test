window.addEventListener('scroll',function(e){
    console.log(e)
});

var container = document.getElementById('container');

container.addEventListener('scroll',function(e){
    console.log(e);
    console.log(this.scrollTop)
});