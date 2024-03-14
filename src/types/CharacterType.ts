export type CharacterType = {
    created: string;
    episode: string[];
    gender: "Male" | "Female";
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: { name: string; url: string };
    species: string;
    status: string;
    type: string;
    url: string;
};
