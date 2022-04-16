
const GenresContainer = ({ genres }) => {
    return (
        <>
            {genres.map(genre => (
                <div key={genre.id} className='genre__name'>{genre.name}</div>
            ))}
        </>
    );
}

export default GenresContainer;
