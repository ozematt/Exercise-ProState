import { useEffect, useRef, Fragment } from 'react';
import { useIntersection } from '@mantine/hooks';

const fetchPhotos = async ({ pageParam }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_per_page=10`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const PhotosGrid = () => {
  const containerRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  // Użyj useInfiniteQuery do pobrania zdjęć z API

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

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
        {/* Wyświetl zdjęcia z tytułami */}
        <div ref={ref} />
      </div>
    </>
  );
};
