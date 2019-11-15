
const genresList =(state) => state.genresList

console.log('genresList ',genresList)
export const selectItemById = createSelector(


    [selectPosts, selectedPost],
    (genresList, genreId) =>
    {
         let result = genresList.find (genre => genre.id ==genreId)
        return result;
    }
);

