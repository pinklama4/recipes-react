import React, {useCallback, useEffect, useMemo, useState} from "react";
import './AddRecipes.scss'
import '../../Pages/MyRecipes/MyRecipes.scss'


import {supabase} from "../../api";
import {getRecipes} from "../../api/methods/getRecipes";
import {deleteRecipe} from "../../api/methods/deleteRecipe";

export function AddRecipes() {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = useCallback(async () => {
        const data = await getRecipes();
        setRecipes(data)
    }, [])

    useEffect(() => {
        updateRecipes();
    }, [])

    const handleRemove = useCallback(async (id) => {
        await deleteRecipe(id);

        updateRecipes();
    }, []);

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = useCallback(async () => {
        try {
            const {data, error} = await supabase.from('recipes').insert({
                display_name: name,
                value,
            })

           updateRecipes();
        }
        catch (e) {
            console.log(e)
        }
    }, [name, value]);

    const renderedRecipes = useMemo(() => {
        return recipes.map((item) => (
            <div key={item.id} className="all-recipes"> {}
                <div className="name">{item.display_name}</div>
                <div className="title">{item.value}</div>
                    <button onClick={() => handleRemove(item.id)}>Удалить</button> {}
            </div>
        ));
    }, [handleRemove, recipes]);


    return (
        <main>
            <div className="new-recipes">
                    <div className="header-recipes">
                        <p>Название:</p>
                        <input
                            type="text"
                            className="name-recipes"
                            placeholder='Введите название рецепта'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="title-recipes">
                        <p>Содержание рецепта:</p>
                        <input
                            type="text"
                            className="text-recipes"
                            placeholder='Введите содержание рецепта'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSubmit} className="button-add">Добавить</button>
            </div>
            <div className="container-recipes">
                <h1>Ваши рецепты</h1>
                {recipes.length ? renderedRecipes : 'У вас еще нет рецептов'}
            </div>
        </main>
    );
}