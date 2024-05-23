// Galactic Explorers Lab

// The initial object is provided for you. Do not modify this object.

const tvShow = {
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
    // Remember that the season number is 1-based
    let season = tvShow.seasons[seasonNumber - 1];

    // Using 0 as the initial value for totalDuration is better than using null
    // because we are adding numbers to it
    let totalDuration = 0;

    // episodeIndex should use let instead of const
    let episodeIndex = 0;

    // The loop should run while the episode index is less than the total number of episodes in the season
    while (episodeIndex < season.episodes.length) {
        const duration = season.episodes[episodeIndex].duration;
        // Remove the " minutes" suffix from the duration string
        const minutes = duration.replace(" minutes", "");

        // Convert the minutes string to a number and add it to the total duration
        const minutesInt = parseInt(minutes);

        totalDuration += minutesInt;

        // Increment the episode index
        episodeIndex++;
    }

    // don't forget the return statement
    return totalDuration;
}

function findTitleOfLongestEpisode(seasonNumber) {
    // Remember that the season number is 1-based
    let season = tvShow.seasons[seasonNumber - 1];

    // Using the first episode as the initial value for longestEpisode is better than using null
    let longestEpisode = season.episodes[0];

    // now starting from 1 makes more sense!
    let episodeIndex = 1;

    // The loop should run while the episode index is less than the total number of episodes in the season
    while (episodeIndex < season.episodes.length) {
        const currentDuration = season.episodes[episodeIndex].duration;
        const previousDuration = longestEpisode.duration;

        // Remove the " minutes" suffix from the duration string
        // AND convert the minutes string to a number
        const currentMinutesInt = parseInt(currentDuration.replace(" minutes", ""));
        const previousMinutesInt = parseInt(previousDuration.replace("minutes", ""));

        if (currentMinutesInt > previousMinutesInt) {
            longestEpisode = season.episodes[episodeIndex];
        }

        // Increment the episode index or you'll be stuck in an infinite loop
        episodeIndex++;
    }

    // we only want the title of the longest episode not the entire object
    return longestEpisode.title;
}

function findSeasonWithMostEpisodes() {
    let maxEpisodeCount = 0;
    let seasonNumber = 0;

    let seasonIndex = 0;
    // The loop should run while the season index is less than the total number of seasons
    while (seasonIndex < tvShow.seasons.length) {
        let season = tvShow.seasons[seasonIndex];

        // Corrected but still unnecessary code
        // let episodeCount = 0;

        // let episodeIndex = 0;

        // // The loop should run while the episode index is less than the total number of episodes in the season
        // while (episodeIndex < season.episodes.length) {
        //     episodeCount++;

        //     // Increment the episode index or you'll be stuck in an infinite loop
        //     episodeIndex++;
        // }

        // REFACTOR
        // The episode count should be the length of the episodes array
        let episodeCount = season.episodes.length;

        if (episodeCount > maxEpisodeCount) {
            episodeCount = maxEpisodeCount;

            // Remember that the season number is 1-based
            seasonNumber = seasonIndex + 1;
        }

        // Increment the season index or you'll be stuck in an infinite loop
        seasonIndex++;
    }

    return seasonNumber;
}


// If you plan on using the VSC debugger don't forget to invoke the function(s) you want to test
// If you don't invoke the function(s), the breakpoint will not be hit

// Example:
// findTotalDuration(2);