import React, {useCallback, useState} from "react";
import './AddRecipes.scss'
export function AddRecipes() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const handleSubmit = useCallback(() => {
        const savedRecipes = localStorage.getItem('recipes') || '[]';
        const formattedSavedRecipes = JSON.parse(savedRecipes);
        localStorage.setItem(
            'recipes',
            JSON.stringify([...formattedSavedRecipes, { name, value }]),
        );
    }, [name, value]);
    return(
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
                            placeholder='Введите сождержание рецепта'
                            value={value} onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSubmit} className="button-add">Добавить</button>
            </div>
        </main>
    );
}