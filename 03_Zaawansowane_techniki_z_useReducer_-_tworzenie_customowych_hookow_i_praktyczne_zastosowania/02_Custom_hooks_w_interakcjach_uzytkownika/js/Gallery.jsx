import { useGallery } from './hooks/use-gallery';

const photos = [
  { url: 'gallery-1.jpg', alt: 'Gallery 1' },
  { url: 'gallery-2.jpg', alt: 'Gallery 2' },
  { url: 'gallery-3.jpg', alt: 'Gallery 3' },
  { url: 'gallery-4.jpg', alt: 'Gallery 4' },
  { url: 'gallery-5.jpg', alt: 'Gallery 5' },
];

export const Gallery = () => {
  const { currentPhoto, handleNextPhoto, handlePrevPhoto } = useGallery(photos);

  return (
    <div>
      <button onClick={handlePrevPhoto}>Previous</button>
      <img src={currentPhoto.url} alt={currentPhoto.alt} />
      <button onClick={handleNextPhoto}>Next</button>
    </div>
  );
};
