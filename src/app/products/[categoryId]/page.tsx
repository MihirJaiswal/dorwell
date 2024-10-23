// app/products/[categoryId]/page.tsx
import { categories } from '../../../../constant';
import Header from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CategoryHeader from '@/components/product/CategoryHeader';
import CatalogGallery from '@/components/product/CatalogGallery';
import CarouselGallery from '@/components/product/CarouselGallery';
import Image from 'next/image';
import DownloadButton from '@/components/product/DownloadButton';

interface CategoryPageProps {
  params: { categoryId: string };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const categoryId = params.categoryId;
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-center text-2xl mt-20 text-gray-500">Category not found!</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <CategoryHeader name={category.name} description={category.description} />

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <Image
            src={category.image}
            alt={category.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Explore the Catalog</h2>
            <CatalogGallery images={category.catalogImages} />
            <DownloadButton catalogUrl={category.catalogUrl} categoryName={category.name} />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Room Inspirations</h2>
          <CarouselGallery images={category.roomImages} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryPage;
