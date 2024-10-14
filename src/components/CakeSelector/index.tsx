import React, { Dispatch, SetStateAction } from 'react';
import './style.scss';

interface ImageRadioButtonProps {
  value: string;
  imageSrc: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}

const ImageRadioButton: React.FC<ImageRadioButtonProps> = ({ value, imageSrc, isChecked, onChange }) => {
  return (
    <div className="col-sm-12 col-md-6 cakes-imgs">
        <input
          id='cake'
          key={value}
          className='cake-input'
          type="radio"
          name="cake"
          value={value}
          checked={isChecked}
          onChange={() => onChange(value)}
        />
        <img
          src={imageSrc}
          alt={`Cake option ${value}`}
        />
    </div>
  );
};

interface CakeSelectorProps {
  headerText: string;
  images: { src: string; value: string; }[];
  selectedCake: string;
  setSelectedCake: Dispatch<SetStateAction<string>>;
}

export const CakeSelector: React.FC<CakeSelectorProps> = ({ headerText, images, selectedCake, setSelectedCake }) => {

  const handleChange = (value: string) => {
    setSelectedCake(value);
  };

  return (
    <div className='row'>
      <h2 className='headerText'>{headerText}</h2>
      {images.map((image) => (
        <ImageRadioButton
          key={image.value}
          value={image.value}
          imageSrc={image.src}
          isChecked={selectedCake === image.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};