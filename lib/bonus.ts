export const bonus = [
    {
        slug: "plus-two",
        name: "+ 2",
        rarity: "common",
        scoreModificator: (score: number) => {
            const modifiedScore = score + 2;
            return modifiedScore;
        },
    },
    {
        slug: "times-two",
        name: "* 2",
        rarity: "common",
        scoreModificator: (score: number) => {
            const modifiedScore = score * 2;
            return modifiedScore;
        },
    },
    {
        slug: "plus-random",
        name: "+ random",
        rarity: "common",
        scoreModificator: (score: number) => {
            const modifiedScore = score + getRandomInt(10);
            return modifiedScore;
        },
    },
    {
        slug: "times-random",
        name: "* random",
        rarity: "common",
        scoreModificator: (score: number) => {
            const modifiedScore = score * (1 + getRandomInt(3));
            return modifiedScore;
        },
    },
]



function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}