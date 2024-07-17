// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/zaxh/my-project/react-single-ui/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default, require('/Users/zaxh/my-project/react-single-ui/node_modules/dumi-theme-mobile/es/layouts/demo.js').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/zaxh/my-project/react-single-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-mobile/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/zaxh/my-project/react-single-ui/node_modules/dumi-theme-mobile/es/layouts/index.js').default],
    "routes": [
      {
        "path": "/components/base/button",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/base/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/base/button/index.md",
          "updatedTime": 1630078289000,
          "componentName": "button",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮",
          "hasPreviewer": true,
          "group": {
            "path": "/components/base",
            "title": "Base"
          }
        },
        "title": "Button 按钮 - react-single-ui"
      },
      {
        "path": "/components/base/icon",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/base/icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/base/icon/index.md",
          "updatedTime": 1629046892000,
          "componentName": "icon",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Icon 图标",
              "heading": "icon-图标"
            }
          ],
          "title": "Icon 图标",
          "hasPreviewer": true,
          "group": {
            "path": "/components/base",
            "title": "Base"
          }
        },
        "title": "Icon 图标 - react-single-ui"
      },
      {
        "path": "/components/base/image",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/base/image/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/base/image/index.md",
          "updatedTime": 1630578514000,
          "componentName": "image",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Image 图片",
              "heading": "image-图片"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Image 图片",
          "hasPreviewer": true,
          "group": {
            "path": "/components/base",
            "title": "Base"
          }
        },
        "title": "Image 图片 - react-single-ui"
      },
      {
        "path": "/components/base/loading",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/base/loading/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/base/loading/index.md",
          "updatedTime": 1629046892000,
          "componentName": "loading",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Loading 加载",
              "heading": "loading-加载"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Loading 加载",
          "hasPreviewer": true,
          "group": {
            "path": "/components/base",
            "title": "Base"
          }
        },
        "title": "Loading 加载 - react-single-ui"
      },
      {
        "path": "/components/base/mask",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/base/mask/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/base/mask/index.md",
          "updatedTime": 1629995643000,
          "componentName": "mask",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Mask 遮罩层",
              "heading": "mask-遮罩层"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Mask 遮罩层",
          "hasPreviewer": true,
          "group": {
            "path": "/components/base",
            "title": "Base"
          }
        },
        "title": "Mask 遮罩层 - react-single-ui"
      },
      {
        "path": "/components/data-display/badge",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/data-display/badge/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/data-display/badge/index.md",
          "updatedTime": 1629887407000,
          "componentName": "badge",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Bagde 徽标",
              "heading": "bagde-徽标"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Bagde 徽标",
          "hasPreviewer": true,
          "group": {
            "path": "/components/data-display",
            "title": "Data-display"
          }
        },
        "title": "Bagde 徽标 - react-single-ui"
      },
      {
        "path": "/components/data-display/progress",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/data-display/progress/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/data-display/progress/index.md",
          "updatedTime": 1630078289000,
          "componentName": "progress",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Progress 进度条",
              "heading": "progress-进度条"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Progress 进度条",
          "hasPreviewer": true,
          "group": {
            "path": "/components/data-display",
            "title": "Data-display"
          }
        },
        "title": "Progress 进度条 - react-single-ui"
      },
      {
        "path": "/components/feedback/modal",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/feedback/modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/feedback/modal/index.md",
          "updatedTime": 1629046892000,
          "componentName": "modal",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Modal 模态框",
              "heading": "modal-模态框"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Modal 模态框",
          "hasPreviewer": true,
          "group": {
            "path": "/components/feedback",
            "title": "Feedback"
          }
        },
        "title": "Modal 模态框 - react-single-ui"
      },
      {
        "path": "/components/feedback/toast",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/feedback/toast/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/feedback/toast/index.md",
          "updatedTime": 1630078289000,
          "componentName": "toast",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Toast 轻提示",
              "heading": "toast-轻提示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Toast 轻提示",
          "hasPreviewer": true,
          "group": {
            "path": "/components/feedback",
            "title": "Feedback"
          }
        },
        "title": "Toast 轻提示 - react-single-ui"
      },
      {
        "path": "/components/form/input",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/form/input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/form/input/index.md",
          "updatedTime": 1631010885000,
          "componentName": "input",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Input 文本输入",
              "heading": "input-文本输入"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Input 文本输入",
          "hasPreviewer": true,
          "group": {
            "path": "/components/form",
            "title": "Form"
          }
        },
        "title": "Input 文本输入 - react-single-ui"
      },
      {
        "path": "/components/form/switch",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/form/switch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/form/switch/index.md",
          "updatedTime": 1629715058000,
          "componentName": "switch",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Switch 滑动开关",
              "heading": "switch-滑动开关"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Switch 滑动开关",
          "hasPreviewer": true,
          "group": {
            "path": "/components/form",
            "title": "Form"
          }
        },
        "title": "Switch 滑动开关 - react-single-ui"
      },
      {
        "path": "/components/form/uploader",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/form/uploader/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/form/uploader/index.md",
          "updatedTime": 1632967751000,
          "componentName": "uploader",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Uploader 文件上传",
              "heading": "uploader-文件上传"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Uploader 文件上传",
          "hasPreviewer": true,
          "group": {
            "path": "/components/form",
            "title": "Form"
          }
        },
        "title": "Uploader 文件上传 - react-single-ui"
      },
      {
        "path": "/components/navigation/breadcrmb",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/navigation/breadcrmb/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/navigation/breadcrmb/index.md",
          "updatedTime": 1630467739000,
          "componentName": "breadcrmb",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Breadcrmb 面包屑",
              "heading": "breadcrmb-面包屑"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Breadcrmb 面包屑",
          "hasPreviewer": true,
          "group": {
            "path": "/components/navigation",
            "title": "Navigation"
          }
        },
        "title": "Breadcrmb 面包屑 - react-single-ui"
      },
      {
        "path": "/components/navigation/tree-select",
        "component": require('/Users/zaxh/my-project/react-single-ui/src/components/navigation/tree-select/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/navigation/tree-select/index.md",
          "updatedTime": 1631518907000,
          "componentName": "tree-select",
          "nav": {
            "title": "组件",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "TreeSelect 分类选择",
              "heading": "treeselect-分类选择"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "TreeSelect 分类选择",
          "hasPreviewer": true,
          "group": {
            "path": "/components/navigation",
            "title": "Navigation"
          }
        },
        "title": "TreeSelect 分类选择 - react-single-ui"
      },
      {
        "path": "/",
        "component": require('/Users/zaxh/my-project/react-single-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1635933794000,
          "hero": {
            "title": "react-single-ui",
            "desc": "<div class=\"markdown\"><p>react-single-ui site example</p></div>",
            "actions": [
              {
                "text": "开始",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "Feature 1",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Feature 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Feature 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello react-single-ui!",
              "heading": "hello-react-single-ui"
            }
          ],
          "title": "Hello react-single-ui!"
        },
        "title": "Hello react-single-ui! - react-single-ui"
      },
      {
        "path": "/components/base",
        "meta": {},
        "exact": true,
        "redirect": "/components/base/button"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/base"
      },
      {
        "path": "/components/data-display",
        "meta": {},
        "exact": true,
        "redirect": "/components/data-display/badge"
      },
      {
        "path": "/components/feedback",
        "meta": {},
        "exact": true,
        "redirect": "/components/feedback/modal"
      },
      {
        "path": "/components/form",
        "meta": {},
        "exact": true,
        "redirect": "/components/form/input"
      },
      {
        "path": "/components/navigation",
        "meta": {},
        "exact": true,
        "redirect": "/components/navigation/breadcrmb"
      }
    ],
    "title": "react-single-ui",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
