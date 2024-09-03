import React, { useState } from 'react';
import { Mask, Button, Image } from 'react-single-ui';
import presentImage from './present.png';
export default () => {
  const [visible, setVisible] = useState(false);
  const [visibleDark, setVisibleDark] = useState(false);
  const [visibleLight, setVisibleLight] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        打开蒙层
      </Button>
      <h1 className="sn-title">显示自定义颜色的蒙层</h1>
      <Button
        btnType="primary"
        onClick={() => setVisibleLight(true)}
        className="block mb-1"
      >
        打开更浅的蒙层
      </Button>
      <Button btnType="primary" onClick={() => setVisibleDark(true)}>
        打开更深的蒙层
      </Button>
      <h1 className="sn-title">显示插入自定义内容的蒙层</h1>
      <Button btnType="primary" onClick={() => setVisibleContent(true)}>
        打开自定义内容的蒙层
      </Button>

      <Mask visible={visible} onClick={() => setVisible(false)}></Mask>
      <Mask
        visible={visibleLight}
        backgroundColor="#00000033"
        onClick={() => setVisibleLight(false)}
      ></Mask>
      <Mask
        visible={visibleDark}
        backgroundColor="#020202cf"
        onClick={() => setVisibleDark(false)}
      ></Mask>
      <Mask visible={visibleContent} onClick={() => setVisibleContent(false)}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            fit="fill"
            width="100%"
            height="100%"
            backgroundColor="#020202cf"
            src={presentImage}
          ></Image>
        </div>
      </Mask>
    </>
  );
};
