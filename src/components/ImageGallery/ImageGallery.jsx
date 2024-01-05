import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem pictures={pictures} />
    </ul>
  );
};
