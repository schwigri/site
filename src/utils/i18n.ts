import { getLocaleByPath, pathHasLocale } from "astro:i18n";

export function getLocale(url: URL): string {
    const localePath = url.pathname.split("/").filter((x) => !!x)[0] ?? "";
    return pathHasLocale(localePath) ? getLocaleByPath(localePath) : "en";
}
