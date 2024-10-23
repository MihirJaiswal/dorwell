
import Image from 'next/image';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, imageSrc }) => (
    <div
        className={`fixed inset-0 bg-black/80 flex justify-center items-center transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onClick={onClose}
    >
        <span
            className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer"
            onClick={onClose}
        >
            &times;
        </span>
        <Image src={imageSrc} alt="Lightbox" width={1000} height={1000} className="rounded-lg shadow-lg" />
    </div>
);

export default Lightbox;
