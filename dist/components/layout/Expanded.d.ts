import { default as React } from 'react';
import { BoxProps } from './types';

interface ExpandedProps extends BoxProps {
    flexGrow?: number;
}
declare const Expanded: React.FC<ExpandedProps>;
export default Expanded;
