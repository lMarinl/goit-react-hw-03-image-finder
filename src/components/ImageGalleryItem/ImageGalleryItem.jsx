import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pictures, handleShowModalWindow }) => {
  return (
    <>
      {pictures?.map(picture => {
        return (
          <li
            className={css.ImageGalleryItem}
            key={picture.id}
            onClick={() => {
              handleShowModalWindow(pictures.largeImageURL);
            }}
          >
            <img
              className={css.ImageGalleryItemImage}
              src={picture.webformatURL}
              alt="img"
            />
          </li>
        );
      })}
    </>
  );
};
