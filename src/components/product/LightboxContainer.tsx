// components/product/LightboxContainer.tsx
'use client';
import React, { useState } from 'react';
import Lightbox from './Lightbox';

const LightboxContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  const openLightbox = (src: string) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImageSrc('');
  };

  return (
    <>
      <Lightbox isOpen={isOpen} onClose={closeLightbox} imageSrc={imageSrc} />
    </>
  );
};

export default LightboxContainer;
