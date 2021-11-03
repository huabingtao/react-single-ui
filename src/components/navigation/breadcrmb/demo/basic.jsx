import React, { useState } from 'react';
import { Breadcrmb, BreadcrmbItem } from 'react-single-ui';
import _ from 'lodash';

export default () => {
  const [breadcrmb1, setBreadCrmb1] = useState([
    {
      title: 'Home',
      href: 'xxx',
    },
    {
      title: 'About',
      href: 'xxx',
    },
    {
      title: 'Detail',
      href: 'xxx',
    },
  ]);
  const onSelect = (index) => {
    const copyBreadcrmb1 = Object.assign([], breadcrmb1);
    copyBreadcrmb1.splice(index + 1, copyBreadcrmb1.length - 1);
    setBreadCrmb1(copyBreadcrmb1);
  };

  const [breadcrmb2, setBreadCrmb2] = useState([
    {
      title: 'Home',
      href: 'xxx',
    },
    {
      title: 'About',
      href: 'xxx',
    },
    {
      title: 'Detail',
      href: 'xxx',
    },
  ]);
  const onSelect2 = (index) => {
    const copyBreadcrmb2 = Object.assign([], breadcrmb2);
    copyBreadcrmb2.splice(index + 1, copyBreadcrmb2.length - 1);
    setBreadCrmb2(copyBreadcrmb2);
  };

  const [breadcrmb3, setBreadCrmb3] = useState([
    {
      title: 'Home',
      href: 'xxx',
    },
    {
      title: 'About',
      href: 'xxx',
    },
    {
      title: 'Detail',
      href: 'xxx',
    },
  ]);
  const onSelect3 = (index) => {
    const copyBreadcrmb3 = Object.assign([], breadcrmb3);
    copyBreadcrmb3.splice(index + 1, copyBreadcrmb3.length - 1);
    setBreadCrmb3(copyBreadcrmb3);
  };

  const [breadcrmb4, setBreadCrmb4] = useState([
    {
      title: 'Home',
      href: 'xxx',
    },
    {
      title: 'About',
      href: 'xxx',
      disabled: true,
    },
    {
      title: 'Detail',
      href: 'xxx',
    },
  ]);
  const onSelect4 = (index) => {
    const copyBreadcrmb4 = Object.assign([], breadcrmb4);
    copyBreadcrmb4.splice(index + 1, copyBreadcrmb4.length - 1);
    setBreadCrmb4(copyBreadcrmb4);
  };

  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Breadcrmb>
        {breadcrmb1.map((item) => {
          return (
            <BreadcrmbItem key={item.title} disabled={item.disabled}>
              {item.title}
            </BreadcrmbItem>
          );
        })}
      </Breadcrmb>
      <h1 className="sn-title">Custom color</h1>
      <Breadcrmb
        onSelect={onSelect2}
        activeColor="#0818f5"
        inactiveColor="#9193e263"
      >
        {breadcrmb2.map((item) => {
          return <BreadcrmbItem key={item.title}>{item.title}</BreadcrmbItem>;
        })}
      </Breadcrmb>
      <h1 className="sn-title">Custom separator</h1>
      <Breadcrmb separator={'-'} onSelect={onSelect3}>
        {breadcrmb3.map((item) => {
          return <BreadcrmbItem key={item.title}>{item.title}</BreadcrmbItem>;
        })}
      </Breadcrmb>
      <h1 className="sn-title">Disabled</h1>
      <Breadcrmb onSelect={onSelect4}>
        {breadcrmb4.map((item) => {
          return (
            <BreadcrmbItem disabled={item.disabled} key={item.title}>
              {item.title}
            </BreadcrmbItem>
          );
        })}
      </Breadcrmb>
    </>
  );
};
