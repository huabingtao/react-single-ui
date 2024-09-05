import React from 'react';
import { Image } from 'react-single-ui';
import bigImg from '../big.jpeg';

export default () => {
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Image src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
      <h1 className="sn-title">自定义宽高</h1>
      <Image
        width="200px"
        height="200px"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      ></Image>
      <h1 className="sn-title">剪切方式</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
        <div>
          {/* 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' */}
          <Image
            fit="contain"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>contain</p>
        </div>
        <div style={{ margin: '0 4px' }}>
          <Image fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
          <p>cover</p>
        </div>
        <div>
          <Image fit="fill" src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
          <p>fill</p>
        </div>
        <div style={{ margin: '0 4px' }}>
          <Image fit="none" src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
          <p>none</p>
        </div>
        <div>
          <Image
            fit="scale-down"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>scale-down</p>
        </div>
      </div>
      <h1 className="sn-title">圆角图片</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
        <div>
          <Image
            round
            fit="contain"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>contain</p>
        </div>
        <div style={{ margin: '0 4px' }}>
          <Image
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>cover</p>
        </div>
        <div>
          <Image
            round
            fit="fill"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>fill</p>
        </div>
        <div style={{ margin: '0 4px' }}>
          <Image
            round
            fit="none"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>none</p>
        </div>
        <div>
          <Image
            round
            fit="scale-down"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></Image>
          <p>scale-down</p>
        </div>
      </div>
      <h1 className="sn-title">自定义圆角</h1>
      <Image radius={20} src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
      <h1 className="sn-title">加载中</h1>
      <Image showLoading fit="cover" src=""></Image>
      <h1 className="sn-title">加载错误</h1>
      <Image showError fit="cover" src=""></Image>
      <h1 className="sn-title">图片懒加载</h1>
      <Image
        lazyLoad
        width="100%"
        height="200"
        fit="cover"
        src={bigImg}
      ></Image>
      <div style={{ marginBottom: '10px' }}></div>
      <Image
        lazyLoad
        width="100%"
        height="200"
        fit="cover"
        src={bigImg}
      ></Image>
      <div style={{ marginBottom: '10px' }}></div>
      <Image
        lazyLoad
        width="100%"
        height="200"
        fit="cover"
        src={bigImg}
      ></Image>
      <div style={{ marginBottom: '10px' }}></div>
      <Image
        lazyLoad
        width="100%"
        height="200"
        fit="cover"
        src={bigImg}
      ></Image>
      <div style={{ marginBottom: '10px' }}></div>
      <Image
        lazyLoad
        width="100%"
        height="200"
        fit="cover"
        src={bigImg}
      ></Image>
      <div></div>
    </>
  );
};
