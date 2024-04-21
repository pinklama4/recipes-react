import {supabase} from "../index";

export async function getRecipes(display_name, value){
    try {
        const {data, error, code} = await supabase.from('recipes').select();

        return data;
    } catch (e) {
        console.log(e)
        return e;
    }

}