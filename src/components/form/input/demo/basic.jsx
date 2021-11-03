import React, { useState } from 'react';
import { Input } from 'react-single-ui';

export default () => {
  const [value1, setValue1] = useState('都是受控组件');
  const [value2, setValue2] = useState('张文忠');
  const [value3, setValue3] = useState('这是一段标题');
  const [number, setNumber] = useState(1);
  const onChage1 = (value) => {
    console.log('value:', value);
    // setValue1(value);
  };
  const onChangeNumber = (value) => {
    console.log('number:', value);
  };
  const handleFocus1 = (value) => {
    console.log('focus value:', value);
  };
  const handleBlur1 = (value) => {
    console.log('blur value:', value);
  };
  const handleClear = () => {
    setValue2('');
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Input
        value={value1}
        placeholder="请输入标题"
        onChange={onChage1}
        label="标题"
      ></Input>
      <h1 className="sn-title">Number</h1>
      <Input
        placeholder="请输入数字"
        type="number"
        label="数字"
        onChange={onChangeNumber}
      ></Input>
      <h1 className="sn-title">MaxLength</h1>
      <Input
        placeholder="请输入标题"
        maxLength="5"
        type="text"
        label="最大长度"
      ></Input>
      <h1 className="sn-title">Password</h1>
      <Input placeholder="密码" type="password" label="请输入密码"></Input>
      <h1 className="sn-title">Phone</h1>
      <Input placeholder="请输入手机号" type="phone" label="手机号"></Input>
      <h1 className="sn-title">Show clear</h1>
      <Input
        placeholder="请输入姓名"
        onClear={handleClear}
        clearble
        label="姓名"
      ></Input>
      <h1 className="sn-title">Required</h1>
      <Input placeholder="请输入标题" required label="标题"></Input>
      <h1 className="sn-title">Disabled</h1>
      <Input placeholder="禁用的输入框" disabled label="标题"></Input>
      <h1 className="sn-title">Readonly</h1>
      <Input placeholder="只读的输入框" readonly label="标题"></Input>
      <h1 className="sn-title">onFocus</h1>
      <Input
        placeholder="鼠标聚焦后触发事件回调"
        onFocus={handleFocus1}
        label="标题"
      ></Input>
      <h1 className="sn-title">onBlur</h1>
      <Input
        placeholder="鼠标失去焦点后触发事件回调"
        onBlur={handleBlur1}
        label="标题"
      ></Input>
    </>
  );
};
