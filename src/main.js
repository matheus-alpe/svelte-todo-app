import './scss/index.scss';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte Todo App'
	}
});

export default app;