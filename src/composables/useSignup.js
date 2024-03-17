import { ref } from 'vue';
import { doc, getFirestore, setDoc, collection } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config'; // Import your Firebase configuration
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

const signup = async (userName, email, password) => {
	error.value = null;
	isPending.value = true;

	createUserWithEmailAndPassword(auth, email, password);

	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;

		const userDocRef = doc(projectFirestore, 'users', user.uid);
		const userDocSnapshot = await getDoc(userDocRef);

		if (!userDocSnapshot.exists()) {
			await setDoc(userDocRef, {
				email: user.email,
				cartItems: []
			});
		}
		console.log('user logged in');
		error.value = null;
		isPending.value = false;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
		isPending.value = false;
	}
};

const useSignup = () => {
	return { error, isPending, signup };
};
export default useSignup;
