// Tests for the index.js file

describe('index.js', () => {
    describe('findTotalDuration', function () {
        it('should return the total duration of the season', function () {
            expect(findTotalDuration(1)).to.equal(232);
            expect(findTotalDuration(2)).to.equal(252);
        });
    });

    describe('findLongestEpisodeTitle', function () {
        it('should return the title of the longest episode', function () {
            expect(findLongestEpisodeTitle(1)).to.equal("The Forbidden Planet");
            expect(findLongestEpisodeTitle(2)).to.equal("Homecoming Special");
        });
    });

    describe('findSeasonWithMostEpisodes', function () {
        it('should return the season number with the most episodes', function () {
            expect(findSeasonWithMostEpisodes()).to.equal(2);
        });
    });

});
