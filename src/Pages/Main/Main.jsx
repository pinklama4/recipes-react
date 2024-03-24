import React from 'react';

//Styles
import './Main.scss'

//Components
import {Header} from "../../components/header/Header";
import {AddRecipes} from "../../components/addRecipes/AddRecipes";


export function Main()  {
    return (
        <div>
            <Header/>
            <AddRecipes/>
        </div>
    );
}