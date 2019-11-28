import _ from 'lodash';
const movieList= [
    {
      popularity: 352.867,
      vote_count: 5688,
      video: false,
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      id: 475557,
      adult: false,
      backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
      original_language: 'en',
      original_title: 'Joker',
      genre_ids: [
        80,
        18,
        53
      ],
      title: 'Joker',
      vote_average: 8.4,
      overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      release_date: '2019-10-02'
    },
    {
      popularity: 221.789,
      vote_count: 608,
      video: false,
      poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
      id: 290859,
      adult: false,
      backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
      original_language: 'en',
      original_title: 'Terminator: Dark Fate',
      genre_ids: [
        28,
        878
      ],
      title: 'Terminator: Dark Fate',
      vote_average: 6.4,
      overview: 'More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani\'s survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.',
      release_date: '2019-10-23'
    },
    {
      popularity: 169.408,
      vote_count: 578,
      video: false,
      poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
      id: 423204,
      adult: false,
      backdrop_path: '/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',
      original_language: 'en',
      original_title: 'Angel Has Fallen',
      genre_ids: [
        28
      ],
      title: 'Angel Has Fallen',
      vote_average: 5.8,
      overview: 'After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.',
      release_date: '2019-08-21'
    },
    {
      popularity: 159.919,
      vote_count: 65,
      video: false,
      poster_path: '/36YiDLw3IWkQyhfJnCjG2GCNgg9.jpg',
      id: 458897,
      adult: false,
      backdrop_path: '/P7QwQE8HJaB5bIIACyRdXVV7gO.jpg',
      original_language: 'en',
      original_title: 'Charlie\'s Angels',
      genre_ids: [
        28,
        12,
        35
      ],
      title: 'Charlie\'s Angels',
      vote_average: 6.9,
      overview: 'When a systems engineer blows the whistle on a dangerous technology, Charlie\'s Angels from across the globe are called into action, putting their lives on the line to protect society.',
      release_date: '2019-11-14'
    },
    {
      popularity: 155.556,
      vote_count: 591,
      video: false,
      poster_path: '/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg',
      id: 453405,
      adult: false,
      backdrop_path: '/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg',
      original_language: 'en',
      original_title: 'Gemini Man',
      genre_ids: [
        28,
        53
      ],
      title: 'Gemini Man',
      vote_average: 5.6,
      overview: 'Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.',
      release_date: '2019-10-02'
    },
    {
      popularity: 136.105,
      vote_count: 87,
      video: false,
      poster_path: '/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg',
      id: 568012,
      adult: false,
      backdrop_path: '/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg',
      original_language: 'ja',
      original_title: 'ワンピーススタンピード',
      genre_ids: [
        28,
        12,
        16
      ],
      title: 'One Piece: Stampede',
      vote_average: 7.3,
      overview: 'One Piece: Stampede is a stand-alone film that celebrates the anime\'s 20th Anniversary and takes place outside the canon of the "One Piece" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger\'s treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger\'s crew.',
      release_date: '2019-08-09'
    },
    {
      popularity: 110.183,
      vote_count: 203,
      video: false,
      poster_path: '/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
      id: 359724,
      adult: false,
      backdrop_path: '/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
      original_language: 'en',
      original_title: 'Ford v Ferrari',
      genre_ids: [
        28,
        18,
        36
      ],
      title: 'Ford v Ferrari',
      vote_average: 8,
      overview: 'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
      release_date: '2019-10-10'
    },
    {
      popularity: 85.749,
      vote_count: 128,
      video: false,
      poster_path: '/q125RHUDgR4gjwh1QkfYuJLYkL.jpg',
      id: 508965,
      adult: false,
      backdrop_path: '/mlxKite1x1PgmIhJgAxNS9eHmH8.jpg',
      original_language: 'en',
      original_title: 'Klaus',
      genre_ids: [
        12,
        16,
        35,
        10751
      ],
      title: 'Klaus',
      vote_average: 8.7,
      overview: 'When Jesper distinguishes himself as the Postal Academy\'s worst student, he is sent to Smeerensburg, a small village located on a icy island above the Arctic Circle, where grumpy inhabitants barely exchange words, let alone letters. Jesper is about to give up and abandon his duty as a postman when he meets local teacher Alva and Klaus, a mysterious carpenter who lives alone in a cabin full of handmade toys.',
      release_date: '2019-11-08'
    },
    {
      popularity: 84.61,
      vote_count: 905,
      video: false,
      poster_path: '/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      id: 420809,
      adult: false,
      backdrop_path: '/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
      original_language: 'en',
      original_title: 'Maleficent: Mistress of Evil',
      genre_ids: [
        12,
        14,
        10751
      ],
      title: 'Maleficent: Mistress of Evil',
      vote_average: 7.2,
      overview: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      release_date: '2019-10-16'
    },
    {
      popularity: 82.837,
      vote_count: 1995,
      video: false,
      poster_path: '/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
      id: 474350,
      adult: false,
      backdrop_path: '/8moTOzunF7p40oR5XhlDvJckOSW.jpg',
      original_language: 'en',
      original_title: 'It Chapter Two',
      genre_ids: [
        27
      ],
      title: 'It Chapter Two',
      vote_average: 6.9,
      overview: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.',
      release_date: '2019-09-04'
    },
    {
      popularity: 71.968,
      vote_count: 431,
      video: false,
      poster_path: '/p69QzIBbN06aTYqRRiCOY1emNBh.jpg',
      id: 501170,
      adult: false,
      backdrop_path: '/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg',
      original_language: 'en',
      original_title: 'Doctor Sleep',
      genre_ids: [
        18,
        14,
        27
      ],
      title: 'Doctor Sleep',
      vote_average: 7.1,
      overview: 'A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult whose goal is to feed off of people like them in order to remain immortal.',
      release_date: '2019-10-30'
    }

]

// selected from filterview
const genresData1 =
    [
       
        {
            id: 878,
            name: 'Science Fiction'
        }

    ]

    const genresData2 =
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

    const genresData3 =
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

const getGenreIdArray = (index) => {
     return movieList[index].genre_ids;
}

test('expect genreIds ids of movielist[1] to be genre_ids: [28,878],', () => {
    expect(getGenreIdArray(1)).toEqual([28,878])
})

test('expect genreIds ids of movielist[3] to be genre_ids: [28,12,35],', () => {
    expect(getGenreIdArray(3)).toEqual([28,12,35])
})




// test intersection

const getIntersection =(arr1,arr2)=>{

    return _.intersection(arr1, arr2);
}

const genreSubmitArr =[2,3,878];
const moviesGenreArr =[878,6];

test('test lodash intersection, expect to return 878 from [2,3,878] and [878,6]', () => {
     expect(getIntersection(genreSubmitArr,moviesGenreArr)).toEqual([878])
 })

 const getIntersectionForMovies =(genreSelectedArr)=>{

     movieList.forEach(element => {

        let genreIds = element.genre_ids

        let result = getIntersection(genreSelectedArr,genreIds)
        
  
        if (result.length > 0){
            console.log ('element parent ', element.title)
        }

 });

}

 let genresArr1 =  _.map(genresData3, 'id')




 //console.log ('test genreSubmitArr for intersections in moviesGenreArr ', getIntersectionForMovies(genresArr1))













