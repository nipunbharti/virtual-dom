import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';

let count = 0;
let text = 'Hello';
const createVApp = (count) => createElement('div', {
	attrs: {
		id: 'app',
		dataCount: count
	},
	children: [
		String(text),
		createElement('img', {
			attrs: {
				src: 'https://media.giphy.com/media/bHELdJXl1LDG0/giphy.gif'
			}
		}),
	]
});

const vApp = createVApp(count);
const $app = render(vApp);
mount($app, document.getElementById('app'));

console.log($app);