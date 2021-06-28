//Article Data
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('data'));
const AnotherComponent = React.lazy(() => import('data'));
export const  articleData =[]
