import { default as React } from 'react';
import { LayoutProps } from './layout/types';

interface ListTileProps extends LayoutProps {
    leading?: React.ReactNode;
    body: React.ReactNode;
    trailing?: React.ReactNode;
    onClick?: () => void;
}
declare const ListTile: React.FC<ListTileProps>;
export default ListTile;
