import { default as React } from 'react';
import { LayoutProps, ChipType } from './layout/types';

interface ChipProps extends LayoutProps {
    variant?: ChipType;
    onClick?: () => void;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
