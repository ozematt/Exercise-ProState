import { useEffect, useRef, Fragment } from 'react';
import { useIntersection } from '@mantine/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
//async function with pageParam
const fetchPhotos = async ({ pageParam }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_per_page=10`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const PhotosGrid = () => {
  //use ref on div
  const containerRef = useRef(null);
  //use hook on div (hook is from @mantine/hooks)
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });
  //useIntersection: Hook z biblioteki @mantine/hooks,
  // który monitoruje, czy element jest widoczny w oknie przeglądarki.

  const { data, isPending, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
    initialPageParam: 1, //start page
    getNextPageParam: (lastPage, _, lastPageParam) => {
      //function for next pageParam
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
  //isFetchingNextPage: Wskazuje, czy następna strona jest aktualnie pobierana.
  //hasNextPage: Wskazuje, czy istnieje kolejna strona do pobrania.

  //initialPageParam: Określa początkową wartość pageParam dla pierwszego wywołania fetchPhotos.
  // W tym przypadku ustawiamy ją na 1, co oznacza, że zapytanie zacznie się od pobierania danych z pierwszej strony.

  //getNextPageParam: Funkcja określająca następny parametr strony.
  // W tym przypadku, jeśli lastPage.next jest null, oznacza to, że nie ma więcej stron do pobrania.

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  //useEffect: Hook używany do wywołania fetchNextPage za każdym razem,
  // gdy element z referencją ref jest widoczny i jest dostępna następna strona.

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <>
      <div style={{ marginBottom: 60 }}>
        <h2>State</h2>
        <h3>Fetching next page: {String(isFetchingNextPage)}</h3>
      </div>
      <div
        ref={containerRef}
        style={{
          maxHeight: 320,
          overflowY: 'scroll',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.map((photo) => (
              <figure key={photo.id}>
                <img src={photo.thumbnailUrl} />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </div>
    </>
  );
};
