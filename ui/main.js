//Counter
var button = document.getElementById('counter');
button.onclick = function() {
    
    //Create Request object
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200){
              var counter = request.responseText;
               var span = document.getElementById('count');
                span.innerHTML = count.toString();
          }
      }  
      //Not yet
      
    };
    //Make Request
    request.open('GET','http://prafulmishra0203.imad.hasura-app.io/counter', true);
    request.send(null);
};