export const parsedUrl = (url: string): boolean => {
  try {
    const parsedUrl: URL = new URL(url);
    const hostname: string = parsedUrl.hostname;
    const hosts: string[] = ['www.youtube.com', 'www.youtu.be', 'www.instagram.com', 'open.spotify.com'];
    return hosts.includes(hostname) ? true : false;
  } catch {
    return false;
  }
};