'use client';
import React from 'react';

export default function IsRender() {
  const windowSize = window.innerWidth;
  console.log(windowSize);
  return <div>렌더 테스팅</div>;
}
