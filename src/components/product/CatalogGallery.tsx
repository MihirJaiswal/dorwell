import Image from 'next/image';

interface CatalogGalleryProps {
  images: string[];
}

const CatalogGallery = ({ images }: CatalogGalleryProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
      >
        <Image
          src={image}
          alt={`Catalog ${index + 1}`}
          width={300}
          height={300}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
);

export default CatalogGallery;
