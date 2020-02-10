/*
 * This is used to provide a global access to the theme
*/
import { lightTheme, darkTheme, ITheme } from '../utils/themes';
import { Observable } from '../utils/observable';

export interface Theme {
    readonly theme: Object; // dark, light, etc.
}

export class ThemeService {

    readonly defaultTheme: ITheme = lightTheme;
    readonly theme: Observable<ITheme> = new Observable(this.defaultTheme); // Default is light

    setTheme(label: string) {

        switch(label) {
            case 'light':
                this.theme.set(lightTheme);
                return;
            case 'dark':
                this.theme.set(darkTheme);
                return;
        }
    }

    toggleTheme() {
        if (this.theme.get() == darkTheme) {
            this.theme.set(lightTheme);
        }
        else {
            this.theme.set(darkTheme);
        }
    }

    getName(): string {
        if (this.theme.get() == darkTheme) {
            return 'dark';
        }
        else {
            return 'light';
        }
    }
}