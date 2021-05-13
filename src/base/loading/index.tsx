/*
 * @Description: Description
 * @Version: 1.0
 * @Author: huabingtao
 * @Date: 2021-05-11 22:07:51
 * @LastEditors: huabingtao
 * @LastEditTime: 2021-05-13 15:49:40
 * @FilePath: /hero/src/base/loading/index.tsx
 */
import React from 'react';
import classnames from 'classnames'
import Icon  from '../icon/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标
import './index.less'

library.add(fas)

export type SizeProp =
  | "xs"
  | "lg"
  | "sm"

interface ILoadingProps {
    color?: string;
    type?: string;
    size?: SizeProp;
    textSize?: string;
    textColor?: string;
    /**
     * @description    自定义样式类名
    */
    className?: string;
}

const Loading:React.FC<ILoadingProps> = (props)=>{
    const { children, textSize,className,textColor,color,size } = props
    const classes = classnames('hero-loading',className)
    return (
        <div className={classes}>
            <Icon icon='spinner' color={color} size={size} spin></Icon>
            <span style={{ fontSize:textSize + 'px', color:textColor }}>{children}</span>
        </div>
    )
}

Loading.defaultProps = {
    textSize: '12'
}
export default Loading
