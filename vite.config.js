// import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	// resolve: {
	// 	alias: {
	// 		'@': fileURLToPath(new URL('./src', import.meta.url))
	// 	}
	// },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import
        "./src/assets/_variables.scss";`
			}
		}
	},
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-Headset-Ecommerce/" : "/",
};

	define: {
		// Pass environment variables to the app
		'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(
			process.env.VITE_FIREBASE_API_KEY
		),
		'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(
			process.env.VITE_FIREBASE_AUTH_DOMAIN
		),
		'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(
			process.env.VITE_FIREBASE_PROJECT_ID
		),
		'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(
			process.env.VITE_FIREBASE_STORAGE_BUCKET
		),
		'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
			process.env.VITE_FIREBASE_MESSAGING_SENDER_ID
		),
		'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(
			process.env.VITE_FIREBASE_APP_ID
		)
	}
});
