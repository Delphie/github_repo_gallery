// Select the div where the profile overview information will appear
const overview = document.querySelector(".overview");

// Store GitHub username
const username = "Delphie";

// Async function to fetch GitHub profile information
async function fetchProfile() {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const profile = await response.json();

  // Log the profile data to the console
  console.log(profile);

  // Call the function to display the profile
  displayProfile(profile);
}

// Function to display the fetched GitHub profile data on the page
function displayProfile(data) {
  // Create a new div element
  const userInfo = document.createElement("div");

  // Give the div a class of "user-info"
  userInfo.className = "user-info";

  // Populate the div with user information
  userInfo.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;

  // Append the div to the overview element
  overview.appendChild(userInfo);
}

// Call the async function
fetchProfile();