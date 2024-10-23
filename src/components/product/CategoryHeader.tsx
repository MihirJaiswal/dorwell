interface CategoryHeaderProps {
    name: string;
    description: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ name, description }) => (
    <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{name}</h1>
        <p className="text-lg text-gray-600">{description}</p>
    </div>
);

export default CategoryHeader;
