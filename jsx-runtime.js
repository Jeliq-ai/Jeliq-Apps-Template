import React from 'react';
import { PrimitiveWrapper } from '@core';

export function jsx(type, props, key) {
  if (props['data-primitive']) {
    return React.createElement(type, { key, ...props });
  }
  // プリミティブ要素かつdata-primitiveがtrueでないならPrimitiveWrapperでラップ
  if (typeof type === 'string' && !props['data-primitive']) {
    const { children, ...rest } = props;
    return React.createElement(
      PrimitiveWrapper,
      {
        tag: type,
        key,
        ...rest,
      },
      children,
    );
  }
  // 通常コンポーネントはそのままレンダリング
  return React.createElement(type, { key, ...props });
}

export const jsxs = jsx;
