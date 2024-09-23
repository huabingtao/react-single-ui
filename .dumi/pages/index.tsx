import React from 'react';
import { usePrefersColor } from 'dumi';
const HomePage = () => {
  const [
    // 当前生效的主题色，dark or light
    color,
  ] = usePrefersColor();

  return (
    <div
      className={`${color} max-w-md mx-auto md:max-w-2xl h-[640px] flex flex-col items-center justify-center gap-y-10 z-10`}
    >
      <article className="dark:text-white flex flex-col items-center !flex-initial">
        <h1 className="text-6xl font-black leading-[60px] mb-6 text-center">
          React Single Ui
        </h1>
        <p>轻量，开源的移动端 React 组件库</p>
      </article>
      <div className="flex items-center">
        <a
          className="h-10 leading-10 bg-blue-600 rounded-md text-white text-lg font-bold px-4 no-underline hover:no-underline hover:text-white"
          href="/react-single-ui/components/button"
        >
          开始使用
        </a>
      </div>
    </div>
  );
};

export default HomePage;
