import React, { useState } from 'react';
import { Image } from 'single-ui';
const bigImg = require('../big.jpeg');

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Image src="https://img01.yzcdn.cn/vant/cat.jpeg"></Image>
      {/* <Image showLoading fit="cover" src={img3}></Image> */}
      <h1 className="sn-title">Fit</h1>
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
      <h1 className="sn-title">Round</h1>
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
      <h1 className="sn-title">Loading</h1>
      <Image showLoading fit="cover" src=""></Image>
      <h1 className="sn-title">Error</h1>
      <Image showError fit="cover" src=""></Image>
      <h1 className="sn-title">LazyLoad</h1>
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
