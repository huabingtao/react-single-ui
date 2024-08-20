import React from 'react';
import { Icon } from 'react-single-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faCheck,
  faDownload,
  faImage,
  faPhone,
  faLocationDot,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'; // 全部图标
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';

library.add(
  faHouse,
  faMagnifyingGlass,
  faUser,
  faCheck,
  faDownload,
  faImage,
  faPhone,
  faLocationDot,
  faMusic,
  farUser,
);

// 定义带有 prefix 的图标数组
const icons = [
  { name: 'house', prefix: 'fas' }, // solid 图标
  { name: 'magnifying-glass', prefix: 'fas' },
  { name: 'user', prefix: 'fas' }, // solid 图标
  { name: 'check', prefix: 'fas' },
  { name: 'download', prefix: 'fas' },
  { name: 'image', prefix: 'fas' },
  { name: 'phone', prefix: 'fas' },
  { name: 'location-dot', prefix: 'fas' },
  { name: 'music', prefix: 'fas' },
  { name: 'arrow-up', prefix: 'fas' },
  { name: 'caret-up', prefix: 'fas' },
  { name: 'filter', prefix: 'fas' },
  { name: 'file', prefix: 'fas' },
  { name: 'list', prefix: 'fas' },
  { name: 'rotate-right', prefix: 'fas' },
  { name: 'lock', prefix: 'fas' },
  { name: 'plus', prefix: 'fas' },
  { name: 'minus', prefix: 'fas' },
  { name: 'user', prefix: 'far' }, // regular 图标
];

export default () => {
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-between bg-gray-100 p-1">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-[30%] mb-1 flex flex-col items-center justify-center aspect-square bg-white text-gray-800 hover:bg-yellow-200"
          >
            <Icon
              icon={[icon.prefix, icon.name]}
              size="2x"
              className="text-gray-700"
            />
            <span className="text-[12px] pt-[8px]">{icon.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};
