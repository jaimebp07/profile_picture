import React, { lazy, Suspense } from 'react';

const LazyPhoto = lazy(() => import('./Photo'));

const Photo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPhoto {...props} />
  </Suspense>
);

export default Photo;
