// Parent Class
class Media {
    constructor(info) {
        this.publushDate = info.publushDate;
        this.name = info.name;
    }
}

// Child Clss


class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publushDate: 1975,
});

console.log(mySong);