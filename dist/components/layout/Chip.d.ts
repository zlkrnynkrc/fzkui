import { default as React } from 'react';
import { LayoutProps } from './types';

interface ChipProps extends LayoutProps {
    variant?: "default" | "secondary" | "outline" | "destructive";
    onClick?: () => void;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
