import { ref } from 'vue';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
	error.value = null;
	isPending.value = true;

	const userDetails = await signInWithEmailAndPassword(auth, email, password);
	try {
		const res = userDetails.user;
		if (!res) {
			throw new Error('could not complete login');
		}
		error.value = null;
		isPending.value = false;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
		isPending.value = false;
	}
};

const useLogin = () => {
	return { error, isPending, login };
};
export default useLogin;
