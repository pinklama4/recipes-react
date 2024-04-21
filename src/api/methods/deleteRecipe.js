import {supabase} from "../index";

export async function deleteRecipe(id){
    try {
        const {data, error, code} = await supabase.from('recipes').delete().eq('id', id)

        return data;
    } catch (e) {
        console.log(e)
        return e;
    }

}