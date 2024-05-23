// Galactic Explorers Lab

// The initial object is provided for you. Do not modify this object.

const galacticExplorers = {
    general: {
        title: "Galactic Explorers",
        plot: "Follow the crew of the starship Odyssey as they explore distant galaxies, encounter alien civilizations, and unravel the mysteries of the cosmos.",
        rating: "PG-13",
        seasons: 2
    },
    seasons: [
        {
            airDate: "2024-01-01",
            totalEpisodes: 5,
            episodes: [
                {
                    title: "Into the Unknown",
                    duration: "45 minutes",
                    description: "The crew embarks on their first mission beyond the edge of known space, only to encounter a strange anomaly."
                },
                {
                    title: "Alien Encounters",
                    duration: "42 minutes",
                    description: "While exploring an uncharted planet, the crew discovers an ancient alien civilization and must navigate a treacherous encounter."
                },
                {
                    title: "Lost in Time",
                    duration: "48 minutes",
                    description: "A temporal anomaly sends the Odyssey back in time to a pivotal moment in galactic history, where they must prevent a catastrophe."
                },
                {
                    title: "The Forbidden Planet",
                    duration: "50 minutes",
                    description: "Exploring a mysterious world rumored to be home to a powerful artifact, the crew encounters hostile alien creatures and ancient traps."
                },
                {
                    title: "Echoes of the Void",
                    duration: "47 minutes",
                    description: "Trapped in a nebula, the crew faces hallucinations and psychological challenges as they struggle to escape."
                }
            ]
        },
        {
            airDate: "2024-07-01",
            totalEpisodes: 6,
            episodes: [
                {
                    title: "The Dark Rift",
                    duration: "46 minutes",
                    description: "A journey into a cosmic phenomenon leads to a shocking revelation about the nature of the universe."
                },
                {
                    title: "The Ghost Ship",
                    duration: "43 minutes",
                    description: "The crew discovers an abandoned spacecraft drifting in space, but soon realize they are not alone."
                },
                {
                    title: "Rogue AI",
                    duration: "49 minutes",
                    description: "A malfunctioning AI threatens the safety of the crew and the fate of the mission."
                },
                {
                    title: "Invasion",
                    duration: "47 minutes",
                    description: "A hostile alien force launches an attack on the Odyssey, forcing the crew to defend themselves and their ship."
                },
                {
                    title: "Final Frontier",
                    duration: "52 minutes",
                    description: "In the season finale, the crew faces their greatest challenge yet as they race against time to save the galaxy from destruction."
                },
                {
                    title: "Homecoming Special",
                    duration: "15 minutes",
                    description: "In this special episode the crew reflects on their adventures and shares behind-the-scenes stories from the set of Galactic Explorers."
                }
            ]
        }
    ]
};

// Debug the following functions using console.logs and the VS Code debugger.

function findTotalDuration(seasonNumber) {
    let season = tvShow.seasons[seasonNumber];
    let totalDuration = null;

    const episodeIndex = 0;
    while (episodeIndex < season.episodes.length) {
        const duration = season.episodes[episodeIndex].duration;
        // Remove the " minutes" suffix from the duration string
        const minutes = duration.replace(" minutes", "");
        totalDuration += minutes;
    }

    totalDuration;
}

function findLongestEpisodeTitle(seasonNumber) {
    let season = tvShow.seasons[seasonNumber];
    let longestEpisode = null;

    let episodeIndex = 1;
    while (episodeIndex <= season.episodes.length) {
        const currentDuration = season.episodes[episodeIndex].duration;
        const previousDuration = longestEpisode ? longestEpisode.duration : "0 minutes";
        // Remove the " minutes" suffix from the duration string
        const currentMinutes = currentDuration.replace(" minutes", "");
        const previousMinutes = previousDuration.replace("minutes", "");

        if (currentMinutes > previousMinutes) {
            longestEpisode = season.episodes[episodeIndex];
        }
    }

    return longestEpisode;
}

function findSeasonWithMostEpisodes() {
    let maxEpisodeCount = 0;
    let seasonNumber = 0;

    let seasonIndex = 0;
    while (seasonIndex < tvShow.seasons.length) {
        let season = tvShow.seasons[seasonIndex];
        let episodeCount = 0;

        let episodeIndex = 1;
        while (episodeIndex <= season.episodes.length) {
            episodeCount++;
        }

        if (episodeCount > maxEpisodeCount) {
            episodeCount = maxEpisodeCount;
            seasonNumber = seasonIndex;
        }
    }

    return seasonNumber;
}


// If you plan on using the VSC debugger don't forget to invoke the function(s) you want to test
// If you don't invoke the function(s), the breakpoint will not be hit

// Example:
// findTotalDuration(2);