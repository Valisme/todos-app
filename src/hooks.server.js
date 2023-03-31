import PocketBase from "pocketbase"
import {env} from "$env/dynamic/private"


export const handle = async ({event,resolve})=>{

    event.locals.pb = new PocketBase(env.POCKETBASE_URL)
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || "")
    if (event.locals.pb.authStore.isValid){
        event.locals.user = event.locals.pb.authStore.model
    }
    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie())

    return response
}
