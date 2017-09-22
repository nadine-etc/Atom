var hello = functionn(){
  fetch('/hello')
  .then (res => res.json())
  .then( function(data){
    console.log(data);
    alert(data.data);
    document.getElementById('example').style.backgroundColor="green"; 
  })
}
