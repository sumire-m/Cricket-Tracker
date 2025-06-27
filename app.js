fetch('https://api.cricapi.com/v1/currentMatches?apikey=57ee2d50-862c-4a5a-ad0a-daefc3f56b31&offset=0')
  .then(res => res.json())
  .then(data => displayLiveMatches(data.data))
  .catch(err => console.error(err));

  function displayLiveMatches(matches) {
  const container = document.getElementById('match-info');

  // Clear existing content
  container.innerHTML = '';

  matches.forEach(match => {
    // Sample fallback image
    const image = match.teamInfo?.[0]?.img || "Bangladesh-vs-Sri-Lanka.jpg";

    const matchCard = `
      <div class="match-card">
        <div>
          <h3 class="match-title">${match.name || 'Match Title'}</h3>
          <p class="match-info">${match.venue || 'Venue Not Available'}</p>
          <a href="matches.html" class="select-btn">Select Match</a>
        </div>
      </div>
    `;

    container.innerHTML += matchCard;
  });
}

