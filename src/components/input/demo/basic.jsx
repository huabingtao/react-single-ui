import React, { useState } from 'react';
import { Input, Toast } from 'react-single-ui';

export default () => {
  const [value1] = useState('');
  const [value2, setValue2] = useState('张三');
  const onChage1 = (value) => {
    console.log('value:', value);
    // setValue1(value);
  };
  const onChangeNumber = (value) => {
    console.log('number change:', value);
    // Toast.show(`change value:${value}`);
  };
  const handleFocus1 = (value) => {
    Toast.show(`focus value:${value}`);
  };
  const handleBlur1 = (value) => {
    Toast.show(`blur value:${value}`);
  };
  const handleClear = () => {
    setValue2('');
  };
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Input
        value={value1}
        placeholder="请输入标题"
        onChange={onChage1}
        label="标题"
      ></Input>
      <h1 className="sn-title">数字</h1>
      <Input
        placeholder="请输入数字"
        type="number"
        label="数字"
        onChange={onChangeNumber}
      ></Input>
      <h1 className="sn-title">长度限制</h1>
      <Input
        placeholder="请输入标题"
        maxLength="10"
        type="text"
        label="最大长度"
      ></Input>
      <h1 className="sn-title">密码</h1>
      <Input placeholder="密码" type="password" label="请输入密码"></Input>
      <h1 className="sn-title">手机号</h1>
      <Input placeholder="请输入手机号" type="tel" label="手机号"></Input>
      <h1 className="sn-title">显示清除按钮</h1>
      <Input
        placeholder="请输入姓名"
        onClear={handleClear}
        clearble
        value={value2}
        label="姓名"
      ></Input>
      <h1 className="sn-title">必填状态</h1>
      <Input placeholder="请输入标题" required label="标题"></Input>
      <h1 className="sn-title">禁用状态</h1>
      <Input placeholder="禁用的输入框" disabled label="标题"></Input>
      <h1 className="sn-title">只读状态</h1>
      <Input placeholder="只读的输入框" readonly label="标题"></Input>
      <h1 className="sn-title">鼠标聚焦回调</h1>
      <Input
        placeholder="鼠标聚焦后触发事件回调"
        onFocus={handleFocus1}
        label="标题"
      ></Input>
      <h1 className="sn-title">鼠标失焦回调</h1>
      <Input
        placeholder="鼠标失去焦点后触发事件回调"
        onBlur={handleBlur1}
        label="标题"
      ></Input>
    </>
  );
};
