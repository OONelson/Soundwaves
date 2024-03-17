import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';
import { ref } from 'vue';
// Fetch cart items from Firestore
const getCart = () => {
	const cartItems = ref([]);

	// CLEARING CART

	const clearCart = () => {
		cartItems.value = [];
	};

	// GETTING CART ITEMS

	const cartRef = collection(projectFirestore, 'cartItems');
	onSnapshot(cartRef, snapshot => {
		cartItems.value = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
	});

	// DELETING CARTITEMS
	// const dataColllectionRef = collection(projectFirestore, 'cartItems');
	// const removeFromCart = cartItem => {
	// 	console.log(cartItem);
	// 	deleteDoc(doc(dataColllectionRef, cartItem.id));
	// };

	const removeFromCart = cartItem => {
		console.log(cartItem);
		const selectedItem = doc(projectFirestore, 'cartItems', cartItem.id);
		deleteDoc(selectedItem);
	};
	return { cartItems, clearCart, removeFromCart };
};
export default getCart;
