import { useGallery } from './hooks/use-gallery';

const photos = [
  { url: 'gallery-1.jpg', alt: 'Gallery 1' },
  { url: 'gallery-2.jpg', alt: 'Gallery 2' },
  { url: 'gallery-3.jpg', alt: 'Gallery 3' },
  { url: 'gallery-4.jpg', alt: 'Gallery 4' },
  { url: 'gallery-5.jpg', alt: 'Gallery 5' },
];

export const Gallery = () => {
  const { currentPhoto, nextPhoto, prevPhoto } = useGallery(photos);

  return (
    <div>
      <button onClick={prevPhoto}>Previous</button>
      <img src={currentPhoto.src} alt={currentPhoto.alt} />
      <button onClick={nextPhoto}>Next</button>
    </div>
  );
};
