enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title:string; 
    date:string;
    orientation:PhotoOrientation;
    readonly extra: boolean;
}

const showPicture = (picture : Picture) =>{
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

// let myPic = {
//     title: 'test title',
//     date: '12-09-2021',
//     orientation: PhotoOrientation.Landscape
// }

// showPicture(myPic);
showPicture({
    title: 'test title',
    date: '12-09-2021',
    orientation: PhotoOrientation.Panorama,
    extra: false
});


let test:Picture = {title: 'test', date: 'test', orientation: PhotoOrientation.Panorama, extra: true};

test = {title: 'test1', date: 'test2', orientation: PhotoOrientation.Panorama, extra: false};

// console.log(test.extra = true); // Solo lectura.