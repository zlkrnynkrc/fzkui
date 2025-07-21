import { default as React } from 'react';
import { LayoutProps } from './types';

interface AppBarProps extends LayoutProps {
    title?: React.ReactNode;
    leading?: React.ReactNode;
    actions?: React.ReactNode;
}
declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
