// import React, {useCallback, useMemo} from 'react';
// import './MyRecipes.scss'
// import {Header} from "../../components/header/Header";
// export function MyRecipes()  {
//
//     const removeRecipes = useCallback((id) => {
//         const getRecipes = localStorage.getItem('recipes') || '[]';
//
//     }, [])
//     const renderedRecipes = useMemo(() => {
//         const savedRecipes = localStorage.getItem('recipes') || '[]';
//         const formattedSavedRecipes = JSON.parse(savedRecipes);
//
//         if (Array.isArray(formattedSavedRecipes)) {
//             return formattedSavedRecipes.map((item) => (
//                 <div key={item.name} className="all-recipes">
//                     <div className="name">{item.name}</div>
//                     <div className="title">{item.value}</div>
//                     <button>Удалить</button>
//                 </div>
//             ));
//         }
//     }, []);
//         return (
//             <div>
//                 <Header/>
//                 <div className="container-recipes">
//                     <h1>Ваши рецепты</h1>
//                     {renderedRecipes}
//                 </div>
//             </div>
//         );
//
// }
