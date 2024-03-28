// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Midnight Baker", artist: "Cutting Jade", genre: "Rock" },
    { title: "Pata Pata", artist: "Miriam Makeba", genre: "Pop" },
    { title: "Mamela", artist: "Zahara", genre: "R&B" },
    { title: "Khona", artist: "Mafikizolo", genre: "Pop" },
    { title: "Overload", artist: "Seether", genre: "Rock" },
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Select the playlists container
    const playlistsContainer = document.getElementById("playlists");

    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        // Filter songs by genre for the current Guardian
        const genreSongs = songs.filter(song => song.genre === genre);
        // Shuffle the songs to ensure randomness
        const shuffledSongs = shuffle(genreSongs);
        // Select the first 3 songs for the playlist
        const playlistSongs = shuffledSongs.slice(0, 3);

        // Create a div for the playlist
        const playlistDiv = document.createElement("div");
        // Add 'playlist' class for styling
        playlistDiv.classList.add("playlist");
        // Add heading for the playlist
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist:</h2>`;

        // Iterate over each song in the playlist
        playlistSongs.forEach(song => {
            // Create anchor element for the song
            const songLink = document.createElement("a");
            // Add 'song-title' class for styling
            songLink.classList.add("song-title");
            // Generate YouTube search URL for the song
            songLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${song.title} ${song.artist}`)}`;
            // Open link in a new tab
            songLink.target = "_blank";
            // Set text content for the song
            songLink.textContent = song.title;

            // Create a paragraph for each song
            const songParagraph = document.createElement("p");
            // Append song link to the paragraph
            songParagraph.appendChild(songLink);
            // Add artist information
            songParagraph.innerHTML += ` - ${song.artist}`;

            // Append song paragraph to the playlist div
            playlistDiv.appendChild(songParagraph);
        });

        // Return playlist div
        return playlistDiv;
    });

    // Append each playlist to the playlists container
    playlists.forEach(playlist => {
        playlistsContainer.appendChild(playlist);
    });
}

// Shuffle function to randomize the songs
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Call generatePlaylist to generate playlists for each Guardian
generatePlaylist(guardians, songs);



