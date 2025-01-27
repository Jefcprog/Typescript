interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details{
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 180,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song'
const {song:anotherSong,
    details
} = audioPlayer

const {author} = details

//console.log('Song', anotherSong, 'Autor', author)

const [, , trunks = 'Trunks'] : string[] = ['Goku', 'Vegeta', ]
//console.log('personaje 3', dbz[2] || 'No hay personaje')

console.error('Personaje 3', trunks)

export{}