import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "./Button";
import Col from "./layout/Col";
import Box from "./layout/Box";
import { ShoppingCart } from "lucide-react";
import { ButtonType, Height, Width } from "./layout/types"; // Import ButtonType, Height, Width

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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <Card width={Width["280px"]} className="flex flex-col">
      {" "}
      {/* Use Width enum */}
      <CardHeader className="p-0">
        <Box
          height={Height.h40}
          width={Width.Full}
          className="overflow-hidden rounded-t-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
        >
          {" "}
          {/* Use Height and Width enums */}
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 dark:text-gray-400">No Image</span>
          )}
        </Box>
      </CardHeader>
      <CardContent className="p-4 flex-grow overflow-hidden">
        <Col gap="gap-2">
          <CardTitle className="text-lg truncate">{product.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </CardDescription>
          <p className="text-xl font-bold text-primary mt-2">
            ${product.price.toFixed(2)}
          </p>
        </Col>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button
          variant={ButtonType.Outline}
          onClick={() => onViewDetails(product.id)}
          className="flex-grow mr-2"
        >
          Details
        </Button>
        <Button
          onClick={() => onAddToCart(product.id)}
          className="flex-shrink-0"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
