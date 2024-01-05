import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pictures }) => {
  return (
    <>
      {pictures?.map(picture => {
        return (
          <li key={picture.id}>
            <img src={picture.webformatURL} alt="img" />
          </li>
        );
      })}
    </>
  );
};
