import { TreeSidebarProps } from '../index.d';

export const data: TreeSidebarProps[] = [
  {
    label: '江苏',
    value: 1,
    children: [
      {
        label: '淮安',
        value: 11,
      },
      {
        label: '盐城',
        value: 12,
        disabled: true,
      },
      {
        label: '扬州',
        value: 13,
      },
      {
        label: '无锡',
        value: 14,
      },
    ],
  },
  {
    label: '浙江',
    value: 2,
    children: [
      {
        label: '杭州',
        value: 21,
      },
      {
        label: '绍兴',
        value: 22,
      },
      {
        label: '嘉兴',
        value: 23,
      },
    ],
  },
  {
    label: '广东',
    value: 3,
    disabled: true,
    children: [
      {
        label: '广州',
        value: 31,
      },
      {
        label: '深圳',
        value: 32,
      },
      {
        label: '佛山',
        value: 32,
      },
    ],
  },
];

export const simpleData: TreeSidebarProps[] = [
  {
    label: '江苏',
    value: 1,
    children: [
      {
        label: '淮安',
        value: 11,
      },
      {
        label: '盐城',
        value: 12,
      },
      {
        label: '扬州',
        value: 13,
      },
      {
        label: '无锡',
        value: 14,
      },
    ],
  },
  {
    label: '浙江',
    value: 2,
    children: [
      {
        label: '杭州',
        value: 21,
      },
      {
        label: '绍兴',
        value: 22,
      },
      {
        label: '嘉兴',
        value: 23,
      },
    ],
  },
  {
    label: '广东',
    value: 3,
    children: [
      {
        label: '广州',
        value: 31,
      },
      {
        label: '深圳',
        value: 32,
      },
      {
        label: '佛山',
        value: 32,
      },
    ],
  },
];

export const disabledData: TreeSidebarProps[] = [
  {
    label: '江苏',
    value: 1,
    disabled: true,
    children: [
      {
        label: '淮安',
        value: 11,
        disabled: true,
      },
      {
        label: '盐城',
        value: 12,
        disabled: true,
      },
      {
        label: '扬州',
        value: 13,
        disabled: true,
      },
      {
        label: '无锡',
        value: 14,
        disabled: true,
      },
    ],
  },
  {
    label: '浙江',
    value: 2,
    disabled: true,
    children: [
      {
        label: '杭州',
        value: 21,
        disabled: true,
      },
      {
        label: '绍兴',
        value: 22,
        disabled: true,
      },
      {
        label: '嘉兴',
        value: 23,
        disabled: true,
      },
    ],
  },
  {
    label: '广东',
    value: 3,
    disabled: true,
    children: [
      {
        label: '广州',
        value: 31,
        disabled: true,
      },
      {
        label: '深圳',
        value: 32,
        disabled: true,
      },
      {
        label: '佛山',
        value: 32,
        disabled: true,
      },
    ],
  },
];
