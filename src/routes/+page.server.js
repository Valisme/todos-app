import { fail, redirect } from '@sveltejs/kit';
import { toJSON } from '../lib/convertPojo';

export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect('303', '/login');
	}

	if (locals.user) {
		try {
			const records = await locals.pb.collection('users').getOne(locals.user.id, {
				expand: 'tasks'
			});
			const notes = toJSON(records.expand.tasks)
			return { notes };
		} catch (_) {
			return null;
		}
	}
}

export const actions = {
	add: async ({ locals, request }) => {
		const req = await request.formData();
		const { title, description } = Object.fromEntries(req);

		if (title === '' && description === '') {
			return fail(400, { err: "Can't Submit Empty Value!" });
		} else if (title === '') {
			return fail(400, { err: "Can't Submit Empty Title!" });
		} else {
			const task = await locals.pb.collection('tasks').create({
				title,
				description,
				user: locals.user.id
			});
			const { tasks } = await locals.pb.collection('users').getOne(locals.user.id);
			await locals.pb.collection('users').update(locals.user.id, { tasks: [task.id, ...tasks] });
			return toJSON(task)
		}
	},
	delete:async ({request,locals}) =>{
		const req = await request.formData()
		const {id} = Object.fromEntries(req)
		await locals.pb.collection('tasks').delete(id)
		
		return {id}
	}
};
