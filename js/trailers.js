// Mock data for trailers (Replace with real data or fetch dynamically from a backend)
const trailers = [
    { id: 1, title: "Trailer for My Hero Academia Season 6", description: "Catch the latest action-packed trailer for MHA's new season!", date: "2024-10-12", videoUrl: "https://www.youtube.com/embed/someVideoID1" },
    { id: 2, title: "Attack on Titan Final Season Trailer", description: "The epic conclusion awaits in this intense trailer.", date: "2024-09-30", videoUrl: "https://www.youtube.com/embed/someVideoID2" },
    { id: 3, title: "Jujutsu Kaisen New Season Trailer", description: "A sneak peek into the upcoming battles and mysteries.", date: "2024-09-20", videoUrl: "https://www.youtube.com/embed/someVideoID3" },
    // Add more trailers as needed
];

// Function to render trailers sorted by date (latest first)
function renderTrailers() {
    const trailersList = document.getElementById('trailersList');
    trailersList.innerHTML = '';

    // Sort trailers by date (latest first)
    const sortedTrailers = trailers.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render each trailer item
    sortedTrailers.forEach(trailer => {
        const trailerItem = document.createElement('div');
        trailerItem.classList.add('trailer-item');
        trailerItem.innerHTML = `
            <div class="trailer-video">
                <iframe src="${trailer.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="trailer-description">
                <h3 class="trailer-title">${trailer.title}</h3>
                <p class="trailer-meta">Date: ${trailer.date}</p>
                <p>${trailer.description}</p>
            </div>
        `;
        trailersList.appendChild(trailerItem);
    });
}

// Initial render
renderTrailers();
