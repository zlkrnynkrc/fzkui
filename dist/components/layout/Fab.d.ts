import { default as React } from 'react';
import { LayoutProps } from './types';

interface FabProps extends LayoutProps {
    onClick?: () => void;
}
declare const Fab: React.FC<FabProps>;
export default Fab;
