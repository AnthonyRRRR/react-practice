import React, { useRef, useState } from 'react';
import './PhotoManager.css'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const PhotoManager = (props) => {
  const [photos, setPhotos] = useState([]);
  const fileRef = useRef();

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.dir(fileRef.current.files);
  }

  const handleSelect = async evt => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files
      .filter(file => file.type.match('image/'))
      .map(file => {
        return fileToDataUrl(file)
      }));

    urls.map(url => {
      const newPhoto = { id: nanoid(), url: url };
      setPhotos(prevPhotos => [...prevPhotos, newPhoto])
    })
  };

  return (
    <>
      <form onSubmit={ onSubmit } className="form">
        <input
          className="form-control form-control-lg"
          type="file"
          name="files"
          multiple
          onChange={ handleSelect }
          ref={ fileRef }
        />
      </form>
      <div className="photos-container">
        { photos.map(photo =>
          <div className="photo-container" key={ photo.id }>
            <img src={ photo.url } className="img-thumbnail" alt="..."/>
          </div>
        ) }
      </div>
    </>
  );
};

PhotoManager.propTypes = {};

export default PhotoManager