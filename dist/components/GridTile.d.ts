import { default as React } from 'react';
import { LayoutProps } from './layout/types';

interface GridTileProps extends LayoutProps {
    leading?: React.ReactNode;
    body: React.ReactNode;
    trailing?: React.ReactNode;
    onClick?: () => void;
}
declare const GridTile: React.FC<GridTileProps>;
export default GridTile;
