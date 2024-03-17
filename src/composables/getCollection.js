import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

const getCollection = c => {
	const products = ref(null);

	let colRef = collection(projectFirestore, c);

	const unsub = onSnapshot(colRef, snapshot => {
		let docs = [];
		snapshot.docs.forEach(doc => {
			docs.push({ ...doc.data(), id: doc.id });
		});

		products.value = docs;
	});

	watchEffect(onInvalidate => {
		onInvalidate(() => unsub());
	});
	return { products };
};

export default getCollection;
