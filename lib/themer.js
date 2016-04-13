class ThemerBuilder {
	constructor() {
		this.themes = [
			'red darken-1',
			'pink darken-1',
			'light-blue darken-1',
			'cyan darken-3'
		];
	}
	changeTheme() {
		return this.themes[Number.parseInt(Math.random()*this.themes.length)];
	}
}

export const Themer = new ThemerBuilder();