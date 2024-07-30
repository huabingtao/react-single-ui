import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-single-ui';
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
    const copyBreadcrumb1 = Object.assign([], breadcrmb1);
    copyBreadcrumb1.splice(index + 1, copyBreadcrumb1.length - 1);
    setBreadCrmb1(copyBreadcrumb1);
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
    const copyBreadcrumb2 = Object.assign([], breadcrmb2);
    copyBreadcrumb2.splice(index + 1, copyBreadcrumb2.length - 1);
    setBreadCrmb2(copyBreadcrumb2);
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
    const copyBreadcrumb3 = Object.assign([], breadcrmb3);
    copyBreadcrumb3.splice(index + 1, copyBreadcrumb3.length - 1);
    setBreadCrmb3(copyBreadcrumb3);
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
    const copyBreadcrumb4 = Object.assign([], breadcrmb4);
    copyBreadcrumb4.splice(index + 1, copyBreadcrumb4.length - 1);
    setBreadCrmb4(copyBreadcrumb4);
  };

  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Breadcrumb>
        {breadcrmb1.map((item) => {
          return (
            <BreadcrumbItem key={item.title} disabled={item.disabled}>
              {item.title}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
      <h1 className="sn-title">Custom color</h1>
      <Breadcrumb
        onSelect={onSelect2}
        activeColor="#0818f5"
        inactiveColor="#9193e263"
      >
        {breadcrmb2.map((item) => {
          return <BreadcrumbItem key={item.title}>{item.title}</BreadcrumbItem>;
        })}
      </Breadcrumb>
      <h1 className="sn-title">Custom separator</h1>
      <Breadcrumb separator={'-'} onSelect={onSelect3}>
        {breadcrmb3.map((item) => {
          return <BreadcrumbItem key={item.title}>{item.title}</BreadcrumbItem>;
        })}
      </Breadcrumb>
      <h1 className="sn-title">Disabled</h1>
      <Breadcrumb onSelect={onSelect4}>
        {breadcrmb4.map((item) => {
          return (
            <BreadcrumbItem disabled={item.disabled} key={item.title}>
              {item.title}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  );
};
