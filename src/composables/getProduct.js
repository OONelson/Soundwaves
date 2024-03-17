// import { ref, watchEffect } from 'vue';
// import { projectFirestore } from '../firebase/config';
// import { collection, doc } from 'firebase/firestore';

// const getProduct = (c, id) => {
// 	const product = ref(null);

// 	let productRef = collection(projectFirestore, c).doc(id);

// 	const unsub = productRef.onSnapshot(
// 		doc => {
// 			if (doc.data()) {
// 				product.value = { ...doc.data(), id: doc.id };
// error.value = null;
// }
// else {
// 	error.value = 'taht docum does not ws';
// }
// },
// err => {
// 	console.log(err.message);
// 	error.value = 'could not fectch the data';
// }
// 	);

// 	watchEffect(onInvalidate => {
// 		onInvalidate(() => unsub());
// 	});

// 	return {  product };
// };

// export default getProduct;

// const getCollection = c => {
// 	const products = ref(null);

// 	let colRef = collection(projectFirestore, c);

// 	const unsub = onSnapshot(colRef, snapshot => {
// 		let docs = [];
// 		snapshot.docs.forEach(doc => {
// 			docs.push({ ...doc.data(), id: doc.id });
// 		});

// 		products.value = docs;
// 	});

// 	watchEffect(onInvalidate => {
// 		onInvalidate(() => unsub());
// 	});
// 	return { products };
// };
