
import { fail, redirect } from "@sveltejs/kit"
/** @type {import('./$types').Actions} */
export const actions = {
    default : async ({request, locals}) => {
        const data = await request.formData()
        const {name,pass} = Object.fromEntries(data)
        
        try{await locals.pb.collection('users').authWithPassword(name,pass) 
        } 
        catch(_){
            return fail(400, {invalid:true})
        }
        
        
        throw(redirect(303,'/'))
    }
} 
export const load = async ({locals}) =>{
    if(locals.pb.authStore.isValid){
        throw redirect(303,"/")
    }
}