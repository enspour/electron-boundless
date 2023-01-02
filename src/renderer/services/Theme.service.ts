import { Service, Destroyer } from ".";

class ThemeService implements Service {
    private theme: string;

    constructor() {
        this.theme = "dark";
    }

    initialize(): Destroyer {
        this.setTheme(this.theme);

        return () => {};
    }

    private setTheme(theme: string) {
        if (document.body.classList.contains(this.theme)) {
            document.body.classList.remove(this.theme);
        }

        document.body.classList.add(theme);

        this.theme = theme;
    }
}

export default ThemeService;
