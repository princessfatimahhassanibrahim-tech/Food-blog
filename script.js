const SubcribeBtn = document.getElementid("subcribeBtn");
subcribeBtn.addEventListener("click", Function(){
    alert("Thank You For Subcribing To Foodie Haven!");
});

    const readButtons = document.querySelectorAll("card button");

    readButton.forEach(function(button){
        button.addEventListener("click", function(){
            alert("Recipe coming soon! 🍽️");
        });
    });

    document.querySelectorAll('nav a').forEach(anchor =>{
        anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour;"smooth"
        });
    });
});