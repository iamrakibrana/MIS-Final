function Meal() {
    var searchText = document.getElementById("search").value ; 
    
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
  // clearing search box and previous content 
     document.getElementById("search").value = " "; 
     document.getElementById("container").textContent = " ";
  
  }
  
  function display (data){
  
   var oldContent = document.getElementById("container")
   var userLimit = document.getElementById("limit").value ;
    userLimit=parseInt(userLimit);

    // clearing search box and previous content 
    document.getElementById("limit").value = " "; 
     document.getElementById("container").textContent = " ";


   for (var a=0; a<userLimit; a++){
    
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="..."> </br>
    <div class="card-body">
      <h3 class="card-title"><b>${data.meals[a].strMeal}</h3></b>
      <p class="card-text">
      <h4><i>Cooking Instructions:<i></h4>
      ${data.meals[a].strInstructions}
      </p>
      <a href="https://www.themealdb.com/" class="btn btn-primary">Visit Site</a>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   }
  
  }