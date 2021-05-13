import React from 'react';
import { Icon } from 'hero';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标

library.add(fas)


export default () => {
    return (
        <>
         <Icon icon='spinner' size='2x' theme='primary' spin />
         <Icon icon='coffee' size='2x' theme='primary' swapOpacity  />
         <Icon icon='circle-notch' size='2x' theme='primary' spin  />
        </>
    )
};