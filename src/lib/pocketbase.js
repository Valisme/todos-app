import {env} from "$env/dynamic/private"
import PocketBase from 'pocketbase'


const pb = new PocketBase(env.POCKETBASE_URL)

export default pb

