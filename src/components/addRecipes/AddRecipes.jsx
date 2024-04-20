import React, { useCallback, useMemo, useState } from "react";
import './AddRecipes.scss'
import '../../Pages/MyRecipes/MyRecipes.scss'

import { v4 as uuidv4 } from 'uuid';

export function AddRecipes() {

    const handleRemove = useCallback((id) => {
        const savedItems = JSON.parse(localStorage.getItem('recipes')) || [];
        const updatedItems = savedItems.filter(item => item.id !== id);
        localStorage.setItem('recipes', JSON.stringify(updatedItems));
    }, []);

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = useCallback(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const newId = uuidv4();
        const newRecipe = { id: newId, name, value };
        localStorage.setItem('recipes', JSON.stringify([...savedRecipes, newRecipe]));
        setName('');
        setValue('');
    }, [name, value]);

    const renderedRecipes = useMemo(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        return savedRecipes.map((item) => (
            <div key={item.id} className="all-recipes"> {}
                <div className="name">{item.name}</div>
                <div className="title">{item.value}</div>
                <form>
                    <button onClick={() => handleRemove(item.id)}>Удалить</button> {}
                </form>
                <button >Выполнено</button>
            </div>
        ));
    }, [handleRemove]);


    return (
        <main>
            <div className="new-recipes">
                <form action="">
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
                </form>
            </div>
            <div className="container-recipes">
                <h1>Ваши рецепты</h1>
                {renderedRecipes}
            </div>
        </main>
    );
}