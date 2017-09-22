var hello = functionn(){
  fetch('/hello')
  .then (res => res.json())
  .then( res => {
    console.log(res.body);
    alert(res);
  })
}
