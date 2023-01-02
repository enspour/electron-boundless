import { Service, Destroyer } from ".";

export type ThemeColor = "primary" | "secondary" | "tertiary";

export const Colors: Record<ThemeColor, string> = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "var(--color-tertiary)",
};

export const HoverColors: Record<ThemeColor, string> = {
    primary: "var(--color-hover-primary)",
    secondary: "var(--color-hover-secondary)",
    tertiary: "var(--color-hover-tertiary)",
};

export const Backgrounds: Record<ThemeColor, string> = {
    primary: "var(--bg-primary)",
    secondary: "var(--bg-secondary)",
    tertiary: "var(--bg-tertiary)",
};

export const HoverBackgrounds: Record<ThemeColor, string> = {
    primary: "var(--bg-hover-primary)",
    secondary: "var(--bg-hover-secondary)",
    tertiary: "var(--bg-hover-tertiary)",
};

export const IconColors: Record<ThemeColor, string> = {
    primary: "var(--icon-primary)",
    secondary: "var(--icon-secondary)",
    tertiary: "var(--icon-tertiary)",
};

export const HoverIconColors: Record<ThemeColor, string> = {
    primary: "var(--icon-hover-primary)",
    secondary: "var(--icon-hover-secondary)",
    tertiary: "var(--icon-hover-tertiary)",
};

export const HintColors: Record<ThemeColor, string> = {
    primary: "var(--hint-primary)",
    secondary: "var(--hint-secondary)",
    tertiary: "var(--hint-tertiary)",
};

export const BorderColors: Record<ThemeColor, string> = {
    primary: "var(--border-primary)",
    secondary: "var(--border-secondary)",
    tertiary: "var(--border-tertiary)",
};

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
