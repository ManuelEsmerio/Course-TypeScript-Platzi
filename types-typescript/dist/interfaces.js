"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const showPicture = (picture) => {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
};
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
let test = { title: 'test', date: 'test', orientation: PhotoOrientation.Panorama, extra: true };
test = { title: 'test1', date: 'test2', orientation: PhotoOrientation.Panorama, extra: false };
// console.log(test.extra = true); // Solo lectura.
