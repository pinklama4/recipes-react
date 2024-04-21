import {supabase} from "../index";

export async function addRecipe(display_name, value){
    try {
        const {data, error, code} = await supabase.from('recipes').insert({
            display_name: name,
            value,
        })

        return data;
    } catch (e) {
        console.log(e)
        return e;
    }
}