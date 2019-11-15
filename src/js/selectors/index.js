export const selectItemById = createSelector(


    [selectPosts, selectedPost],
    (genreList, genreId) =>
    {
         let result = genreList.find (genre => genre.id ==genreId)
        return result;
    }
);

