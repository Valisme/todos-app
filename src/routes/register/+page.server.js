import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const { name, pass, confPass } = Object.fromEntries(data);

		const user = {
			username: name,
			password: pass,
			passwordConfirm: confPass
		};

		try {
			await locals.pb.collection('users').create(user);
			await locals.pb.collection("users").authWithPassword(name,pass)
		} catch (err) {
			console.log(err);
			return fail(400, { invalid: true, 
                                msg: `Name Must Between 3 And 150,
                                      Password Must Between 8 and 72,
                                      Password and Confirm Password Must Be Match` });
		}
		throw redirect(303,"/")
	}
};

export const load = async ({locals}) =>{
    if(locals.pb.authStore.isValid){
        throw redirect(303,"/")
    }
}