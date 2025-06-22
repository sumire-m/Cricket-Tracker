  const apiURL = "https://api.cricapi.com/v1/countries?apikey=57ee2d50-862c-4a5a-ad0a-daefc3f56b31&offset=0";

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const teams = data.data.slice(0, 5); // Take top 5 teams
      const container = document.getElementById("team-container");

      teams.forEach(team => {
        const box = document.createElement("div");
        box.classList.add("box");

        box.innerHTML = `
          <div class="box-img">
            <img src="${team.genericFlag}" alt="${team.name}">
          </div>
          <h3>${team.name}</h3>
          <span>${team.id.toUpperCase()}</span>
        `;

        container.appendChild(box);
      });
    })
    .catch(err => {
      console.error("Something went wrong:", err);
    });
