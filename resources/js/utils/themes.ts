export interface ITheme {
	back: string,
	body: string,
	text: string,
	outline: string,
}

export interface IThemeWrapper {
	theme: ITheme;
}

export const lightTheme: ITheme = {
	back: '#f5f5f5',
	body: '#E2E2E2',
	text: '#363537',
	outline: '#0F0F0F',
}

export const darkTheme: ITheme = {
	back: '#001F3F',
	body: '#001F3F',
	text: '#f5f5f5',
	outline: '#f5f5f5'
}