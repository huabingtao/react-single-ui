import React from 'react';
import { Icon } from 'react-single-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标

library.add(fas);
export default () => {
  return (
    <>
      <div>
      <Icon icon="coffee" size="3x" />
      </div>
    </>
  );
};
