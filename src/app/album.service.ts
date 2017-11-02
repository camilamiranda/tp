import {Injectable} from "@angular/core";
import {Album, ALBUMS} from "./model/album";
import {Song, SONGS} from "./model/song";

@Injectable()
export class AlbumService {
    public getAlbum(album: string): Promise<Album>
    {
        let album: Album;
        let result: Album[] = ALBUMS.filter(a => a.name  === album);
        if (result.length > 0)
        {
            album = result[0];
        }
        return Promise.resolve(album);
    }
    public getSongsOfAlbum(album: string): Promise<Album[]>
    {
        let album: Album;
        let result: Album[] = ALBUMS.filter(a => a.name  === album);
        if (result.length > 0)
        {
            album = result[0];
        }
        let songs: Song[] = SONGS.filter(s => s.album  === album.id);
        return Promise.resolve(songs);
    }
}