export type RecipeProps = {
    id: number;
    title: string;
    slug: string;
    image: {
        large: string;
        small: string;
    };
    overview: string;
    servings: number;
    prepMinutes: number;
    cookMinutes: number;
    ingredients: string[];
    instructions: string[];
};
