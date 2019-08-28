export const joinUrl = (...urls: string[]): string => encodeURI(urls.join('/'));
