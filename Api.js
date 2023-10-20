document.addEventListener('click', function () {


    const requestUrl = 'https://api.github.com/users/Mohitpandey7797'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const cardBody = document.getElementById('previousCard');
            const profileData = document.getElementById('profileData');
            const data = JSON.parse(this.responseText)


            const profileHTML = `
            <div style="padding: 30px;">
                    <p>Name: ${data.name}</p>
                    <p>Location: ${data.location}</p>
                    <img src="https://avatars.githubusercontent.com/u/144821450?v=4" class="card-img-top" alt="profile">
                    </div>
                    <!-- Add more profile data as needed -->
            
            `;

            cardBody.style.display = 'none'; // Hide the form
            profileData.innerHTML = ''; // Clear previous content


            profileData.innerHTML = profileHTML;


        }

    }

    xhr.send()



});


