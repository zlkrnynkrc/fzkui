import { default as React } from 'react';
import { LayoutProps, BadgeType } from './layout/types';

interface BadgeProps extends LayoutProps {
    variant?: BadgeType;
}
declare const Badge: React.FC<BadgeProps>;
export { Badge };
