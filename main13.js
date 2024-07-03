// /37)   Album: Create objects for music albums.
let make_Album = (artistName, albumTitle, numberOfAlbum) => {
    let Album = {
        Artist_Name: artistName,
        Album_Title: albumTitle,
        Number_Of_Album: numberOfAlbum
    };
    return Album;
};
console.log(make_Album("Taylor Swift", "Fearless", 1));
console.log(make_Album("Ed Sheeran", " ÷ (Divide)", 2));
//38) : Magicians: Display magician names from an array.
let magicianNames = ["Houdini", "Copperfield", "Penn", "Angel"];
function Names(magician) {
    magician.forEach((names) => {
        console.log(names);
    });
}
Names(magicianNames);
//39)  Great Magicians: Add "the Great" to magician names.
let magicianName = ["Houdini", "Copperfield", "Penn", "Angel"];
function show_Magician(magician) {
    magician.forEach((names) => {
        console.log(names);
    });
}
function make_Great(name) {
    return name.map((names) => (`The Great ${names}`));
}
let newArry = make_Great(magicianName);
console.log(newArry);
show_Magician(newArry);
export {};
