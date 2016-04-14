class ThemerBuilder {
	constructor() {
		this.themes = [
			'red darken-1',
			'pink darken-1',
			'light-blue darken-1',
			'cyan darken-3',
			'blue-grey darken-3',
			'deep-orange',
			'grey darken-2',
			'yellow accent-4',
			'orange lighten-1',
			'lime accent-4',
			'green lighten-1'
		];
	}
	changeTheme() {
		return this.themes[Number.parseInt(Math.random()*this.themes.length-1)];
	}
}

export const Themer = new ThemerBuilder();