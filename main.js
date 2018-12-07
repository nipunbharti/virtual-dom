import createElement from './vdom/createElement';
import render from './vdom/render';

const vApp = createElement('div', {
	attrs: {
		id: 'app'
	},
	children: [
		createElement('img', {
			attrs: {
				src: 'https://giphy.com/stickers/animatedtext-loser-transparent-bHELdJXl1LDG0'
			}
		}),
	]
});

const $app = render(vApp);

console.log($app);