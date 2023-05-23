function submitRating() {
   if (document.querySelector('input[name="radio"]:checked') === null) {
            alert("Please select a score")
        }

   let scoreRating = document.querySelector('input[name="radio"]:checked').value;    
   let finalScore = document.querySelector('span[id=score]');
   const tyCard  = document.getElementById('ty-card');
   console.log(tyCard);
   tyCard.style.zIndex = "0";     
   finalScore.textContent = scoreRating;
   
} 