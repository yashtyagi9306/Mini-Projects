const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

function createProfileCard(){
    const ProfileCard = document.createElement("div");
    ProfileCard.className = "profile-card";
    
    const profileImage = document.createElement("img");
    profileImage.src = "https://i.pravatar.cc/150"
    
    
    const profileDescription = document.createElement("p");
    profileDescription.innerText = "B.Tech Student interested in development and designing stuff. Fluent in python and js."
    
    
    const profileName = document.createElement("h2");
    profileName.textContent = "Yash Tyagi";

    ProfileCard.appendChild(profileImage);
    ProfileCard.appendChild(profileName);
    ProfileCard.appendChild(profileDescription);

    
    appContainer.appendChild(ProfileCard);
    console.log(appContainer);    
}

generateBtn.addEventListener("click",function(){
    createProfileCard();
})
