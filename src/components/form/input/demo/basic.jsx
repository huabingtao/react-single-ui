import React, { useState } from 'react';
import { Input } from 'single-ui';

export default () => {
  const [value1, setValue1] = useState('这是一段标题');
  const [value2, setValue2] = useState('张文忠');
  const [value3, setValue3] = useState('这是一段标题');
  const onChage1 = (value) => {
    console.log('value:', value);
    setValue1(value);
  };

  const onChage2 = (value) => {
    console.log('value:', value);
    setValue2(value);
  };
  const onChage3 = (value) => {};
  const onChage4 = (value) => {};
  const onChage5 = (value) => {};
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
        placeholder="请输入"
        type="number"
        onChange={onChage1}
        label="数字"
      ></Input>
      <h1 className="sn-title">MaxLength</h1>
      <Input
        placeholder="请输入标题"
        maxLength="5"
        type="text"
        label="最大长度"
      ></Input>
      <h1 className="sn-title">Show clearble</h1>
      <Input
        placeholder="请输入姓名"
        onClear={handleClear}
        value={value2}
        onChange={onChage2}
        clearble
        label="姓名"
      ></Input>
      <h1 className="sn-title">Required</h1>
      <Input
        placeholder="请输入标题"
        required
        onChange={onChage3}
        label="标题"
      ></Input>
      <h1 className="sn-title">Disabled</h1>
      <Input
        placeholder="请输入标题"
        disabled
        onChange={onChage4}
        label="标题"
      ></Input>
      <h1 className="sn-title">Readonly</h1>
      <Input
        placeholder="请输入标题"
        readonly
        onChange={onChage5}
        label="标题"
      ></Input>
      <h1 className="sn-title">onFocus</h1>
      <Input
        placeholder="请输入标题"
        onFocus={handleFocus1}
        onChange={onChage5}
        label="标题"
      ></Input>
      <h1 className="sn-title">onBlur</h1>
      <Input
        placeholder="请输入标题"
        onBlur={handleBlur1}
        onChange={onChage5}
        label="标题"
      ></Input>
    </>
  );
};
