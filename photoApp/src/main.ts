import { User } from './class/user';
import { Album } from './class/album';
import { Picture } from './class/picture';
import { PhotoOrientation } from './enum/photoOrientation'

const user = new User(1, 'Esmerio55', 'Manuel', true);

const picture = new Picture(1,'Imagen 1', PhotoOrientation.Landscape);
const picture2 = new Picture(2,'Imagen 2', PhotoOrientation.Panorama);

const picture3 = new Picture(3,'Imagen 3', PhotoOrientation.Portrait);
const picture4 = new Picture(4,'Imagen 4', PhotoOrientation.Square);

const album = new Album(1, 'TypeScript');

const album2 = new Album(2, 'TypeScript Prueba');

album.addPicture(picture);
album.addPicture(picture2);

album2.addPicture(picture3);
album2.addPicture(picture4);

user.addAlbum(album);
user.addAlbum(album2);

console.log('user', user);

user.remoteAlbum(album2);
console.log('user', user);