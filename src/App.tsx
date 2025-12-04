import { DATA_URL } from "./libs/constants";
import { useFetch } from "./libs/hooks";
import type { RecipeProps } from "./libs/types";

export default function App() {
    const { data: recipes, isLoading } = useFetch<RecipeProps[]>(DATA_URL);

    return (
        <div data-textPreset="6">
            {recipes &&
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <div>{recipe.title}</div>
                    </div>
                ))}
        </div>
    );
}
