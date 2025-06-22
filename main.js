/*document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    });

    // Fetch ongoing matches from the API
    fetchOngoingMatches();

    function fetchOngoingMatches() {
        const apiKey = '4b3db21d59msha2f6583c4ca0230p12f3fbjsnf0b7b3636dfa'; // Replace with your RapidAPI key
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';

        fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            displayMatches(data.matches);
        })
        .catch(err => console.error(err));
    }

    function displayMatches(matches) {
        const matchCards = document.getElementById("match-cards");
        matchCards.innerHTML = '';

        matches.forEach(match => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${match.team1.name} vs ${match.team2.name}</h3>
                <img src="${match.team1.logo}" alt="${match.team1.name} Logo" />
                <p>Venue: ${match.venue}</p>
                <button onclick="selectMatch(${match.id})">View Details</button>
            `;
            matchCards.appendChild(card);
        });
    }
});

function selectMatch(matchId) {
    localStorage.setItem("selectedMatchId", matchId);
    window.location.href = "team.html";
}*/
var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
