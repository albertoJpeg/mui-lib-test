import { useContext } from 'react';
import { LayoutContext } from '../providers/LayoutProvider';

export const useLayout = () => useContext(LayoutContext);
