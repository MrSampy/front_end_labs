
async function fetchUsers(){
    try {
        const successText = document.getElementById("successText");
        successText.style.display = "none";
        const users = document.getElementById("users");
        while (users.firstChild) {
            users.removeChild(users.firstChild);
        }
        for(let i = 0; i < 5; ++i){
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();

            const pictureUrl = data.results[0].picture.large;
            const name = data.results[0].name.first + " " + data.results[0].name.last;
            const city = data.results[0].location.city;
            const country = data.results[0].location.country;
            const postcode = data.results[0].location.postcode;

            const user = document.createElement("div");
            const userImg = document.createElement("img");
            const userImgDiv = document.createElement("div");
            const userInfo = document.createElement("div");

            user.className = "user";
            userImgDiv.className = "user-img";
            userInfo.className = "user-info";
            userImg.src = pictureUrl;

            const userName = document.createElement("div");
            const userCity = document.createElement("div");
            const userCountry = document.createElement("div");
            const userPostcode = document.createElement("div");

            userName.textContent = `Name: ${name}`;
            userCity.textContent = `City: ${city}`;
            userCountry.textContent = `Country: ${country}`;
            userPostcode.textContent = `Postcode: ${postcode}`;

            userName.className = "user-info-block";
            userCity.className = "user-info-block";
            userCountry.className = "user-info-block";
            userPostcode.className = "user-info-block";

            userInfo.appendChild(userName);
            userInfo.appendChild(userCity);
            userInfo.appendChild(userCountry);
            userInfo.appendChild(userPostcode);

            userImgDiv.appendChild(userImg);
            user.appendChild(userImgDiv);
            user.appendChild(userInfo);
            users.appendChild(user);
        }
        successText.style.display = "block";
    } catch (error) {
        console.error('Error:', error);
    }

}