import { environment } from 'src/environments/environment';

export function getYoutubeUrl(url: string) {
    return `${environment.youtube_url}${url}?rel=0&autoplay=0&controls=1&showinfo=0&ecver=0&enablejsapi=1`;
}

export function openLink(url: string, id: string, target: string) {
    window.open(`${url}${id}`, target);
}

export function openDirectorLink(id: string, target: string = '_blank') {
   openLink(environment.directorLink, id, target);
}
