export async function load({ locals }) {
	if (locals.pb.authStore.isValid) {
		const { username }  = locals.user;
		return {name:username};
	}
}
