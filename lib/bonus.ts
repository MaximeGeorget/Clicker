type BonusScoreModificatorParam = {
    score: number;
    clicks: number;
}

export const bonus = [
    /*{
        slug: "plus-two",
        name: "+ 2",
        rarity: "common",
        scoreModificator: (params: BonusScoreModificatorParam) => {
            const modifiedScore = params.score + 2;
            return modifiedScore;
        },
    },
    {
        slug: "times-two",
        name: "* 2",
        rarity: "common",
        scoreModificator: (params: BonusScoreModificatorParam) => {
            const modifiedScore = params.score * 2;
            return modifiedScore;
        },
    },
    {
        slug: "plus-random",
        name: "+ random",
        rarity: "common",
        scoreModificator: (params: BonusScoreModificatorParam) => {
            const modifiedScore = params.score + getRandomInt(10);
            return modifiedScore;
        },
    },
    {
        slug: "times-random",
        name: "* random",
        rarity: "common",
        scoreModificator: (params: BonusScoreModificatorParam) => {
            const modifiedScore = params.score * (1 + getRandomInt(3));
            return modifiedScore;
        },
    }, */
    {
        slug: "clicks-percentage",
        name: "% clicks",
        rarity: "rare",
        scoreModificator: (params: BonusScoreModificatorParam) => {
            const modifiedScore = params.score + params.clicks * 0.01;
            return modifiedScore;
        },
    },
]




function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}