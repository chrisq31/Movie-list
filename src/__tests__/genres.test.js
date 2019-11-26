import { CustomConsole } from "@jest/console"
import _ from 'lodash';

// selected from filterview
const genresData =
    [
        {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
    ]

const getGenreObjFromId =(id) =>{

    return genresData.find(element => element.id === id)

   console.log("result : ", genresData.find(element => element.id === id)) 
}



const name = (index) => {

return genresData[index].name;
}

const getNamesFromSelectedGenres = () => {

    return _.map(genresData, 'name');

}

const joinNamesFromSelectedGenres = () => {

    return _.map(genresData, 'name').join(' + ');

}

// test('expect id  16 to return Animation', () => {
//     expect(name(0)).toBe("TV Movie")
// })

test('expect name 1 to be TV Movie', () => {
    expect(name(0)).toBe("Action")
})

test('expect index 2 not to be Music', () => {
    expect(name(2)).not.toBe("TV Movie Science Fiction")
})

test('expect name 3 to be Music', () => {
    expect(name(3)).toBe("Comedy")
})

test('expect names from selected genres to be Action", "Adventure", "Animation", "Comedy","Crime", "Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"', () => {
    expect(getNamesFromSelectedGenres()).toEqual(["Action", "Adventure", "Animation", "Comedy","Crime", "Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"])
})



test("expect id 16 to return { id: 16, name: 'Animation' } ", () => {
    getGenreObjFromId(16).toBe({ id: 16, name: 'Animation' } )
})


// test('expect names with separator from selected genres to be "TV Movie + Science Fiction + History+ Music + Crime"', () => {
//     expect(joinNamesFromSelectedGenres()).toEqual("TV Movie + Science Fiction + History + Music + Crime")
// })




