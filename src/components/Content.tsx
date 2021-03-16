import MovieList from "./MovieList";

interface ContentProps {
  selectedGenreId: number;
  selectedGenreTitle: string;
}

export function Content({ selectedGenreId, selectedGenreTitle }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>

      <main>
        <MovieList genreId={selectedGenreId} />
      </main>
    </div>
  )
}