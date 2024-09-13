/// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Water", artist: "Tyla", genre: "Pop" },
    { title: "Vampire", artist: "Olivia Rodrigo", genre: "Pop" },
    { title: "Paint the town red", artist: "Doja cat", genre: "Pop" },
    { title: "When the party is over", artist: "Billie Eillish", genre: "Pop" },
    { title: "Killing me softly", artist: "Lauren Hill", genre: "RnB" },
    { title: "Stressed out", artist: "Twenty one pilots", genre: "Rap" },
    { title: "Don't you worry ", artist: "Swedish House Mafia", genre: "EDM" },
    { title: "We dance again", artist: "Black coffee", genre: "EDM" },
    { title: "WAP", artist: "Cardi B", genre: "Rap" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "Highschool", artist: "Nicki Minaj", genre: "Rap" },
    { title: "How you remind me", artist: "Nickelback", genre: "Rock" },
    { title: "Hey Mama", artist: "David Guetta", genre: "EDM" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "RnB" },
    { title: "Crash", artist: "Kelani", genre: "RnB" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "Kill Bill", artist: "SZA", genre: "Pop" },
    { title: "Sex on fire", artist: "Kings of Leon", genre: "Rock" },
    { title: "Not like us", artist: "Kendrick Lamar", genre: "Rap" },
    // Feel free to add even more songs
];
// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rap",
    "Rocket": "EDM",
    "Groot": "RnB",
    // Add preferences for Drax, Rocket, and Groot
};
// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Define guardianPlaylists as equal to map function array of objects
    const guardiansPlaylists = Object.entries(guardians).map(([guardian, genre]) => ({
        guardian, playlist: songs.filter(song => song.genre === genre)
    }));
    // Grab the playlists div for appending playlists later
    const playlistsDivEl = document.getElementById("playlists");

    guardiansPlaylists.forEach(arr => {
        // Create the div to hold the playlist, and the heading element
        const guardianPlaylistDivEl = document.createElement("div");
        const guardianPlaylistHeadingEl = document.createElement("h2");

        // Add playlist class to div, set heading to be equal to respective guardians name + " Playlist"
        guardianPlaylistDivEl.classList.add("playlist");
        guardianPlaylistHeadingEl.textContent = `${arr.guardian}'s Playlist`;

        // Append heading to playlist div
        guardianPlaylistDivEl.append(guardianPlaylistHeadingEl);

        arr.playlist.forEach(song => {
            // Define the paragraph and anchor tags for each song
            const guardianPlaylistParagraphEl = document.createElement("p");
            const guardianPlaylistAnchorEl = document.createElement("a");

          //Expand Down
  
            // Add classes to anchor and paragraph
            guardianPlaylistAnchorEl.classList.add("song-title");
            guardianPlaylistParagraphEl.classList.add("song");
            // Set text of anchor and paragraph elements
            guardianPlaylistAnchorEl.textContent = `${song.title}`;
            guardianPlaylistParagraphEl.textContent = ` by ${song.artist}`;
            // Prepend anchor to paragraph element, append paragraph element to playlist div
            guardianPlaylistParagraphEl.prepend(guardianPlaylistAnchorEl);
            guardianPlaylistDivEl.append(guardianPlaylistParagraphEl);
        })
        // Append completed guardian playlist to the playlists div
        playlistsDivEl.append(guardianPlaylistDivEl);
    });
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
