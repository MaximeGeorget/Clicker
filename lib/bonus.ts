export const bonus = [
    {
        slug: "le-prems",
        name: "Le prems",
        rarity: "common",
        scoreModificator: (score: number) => {
            const modifiedScore = score + 2;
            return modifiedScore;
        },
    },
]
