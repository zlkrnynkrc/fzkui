import { default as React } from 'react';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
        description: string;
    };
    onAddToCart: (productId: string) => void;
    onViewDetails: (productId: string) => void;
}
declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
