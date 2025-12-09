import { Link } from "react-router";
import { DATA_URL } from "../../../libs/constants";
import { useFetch } from "../../../libs/hooks";
import type { RecipeProps } from "../../../libs/types";
import css from "./index.module.scss";

export default function RecipesIndex() {
    const { data: recipes, isLoading } = useFetch<RecipeProps[]>(DATA_URL);

    return (
        <div>
            RecipesIndex
            {recipes &&
                recipes.map(({ id, title }) => (
                    <div key={id}>
                        <Link to={`/recipes/${id}`}>{title}</Link>
                    </div>
                ))}
        </div>
    );
}
