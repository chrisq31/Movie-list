import { CustomConsole } from "@jest/console"
import _ from 'lodash';

// selected from filterview
const genresData =
    [
        {
            id: 10770,
            name: 'TV Movie'
        },
        {
            id: 878,
            name: 'Science Fiction'
        },
        {
            id: 36,
            name: 'History'
        },
        {
            id: 10402,
            name: 'Music'
        },
        {
            id: 80,
            name: 'Crime'
        }

    ]



const name = (index) => {


    return genresData[index].name;
}

const getNamesFromSelectedGenres = () => {

 return  _.map(genresData, 'name');

}

const joinNamesFromSelectedGenres = () => {

    return   _.map(genresData, 'name').join(' + ');
   
   }



test('expect name 1 to be TV Movie', () => {
    expect(name(0)).toBe("TV Movie")
})

test('expect index 2 not to be Music', () => {
    expect(name(2)).not.toBe("TV Movie Science Fiction")
})

test('expect name 3 to be Music', () => {
    expect(name(3)).toBe("Music")
})

test('expect names from selected genres to be TV Movie", "Science Fiction", "History", "Music", "Crime"', () => {
    expect(getNamesFromSelectedGenres()).toEqual(["TV Movie", "Science Fiction", "History", "Music", "Crime"])
})


test('expect names from selected genres to be "TV Movie + Science Fiction + History+ Music + Crime"', () => {
    expect(joinNamesFromSelectedGenres()).toEqual("TV Movie + Science Fiction + History + Music + Crime")
})


