"use strict";(self.webpackChunkreact_single_ui=self.webpackChunkreact_single_ui||[]).push([[9],{71166:function(L,u,e){e.r(u),e.d(u,{default:function(){return E}});var o=e(90232),n=e(75271),g=e(7493),D=function(){var O=(0,o.UO)(),t=O.id,a=(0,o.FO)(t),R=(0,g.m)({id:t,component:a.component,renderOpts:a.renderOpts}),h=R.canvasRef,v=a||{},m=v.component,d=v.renderOpts,r=(0,o.kw)(t),i=r.node,c=r.setSource,s=r.error,l=r.loading,w=i||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:h}):m&&(0,n.createElement)(m));return(0,n.useEffect)(function(){var f=function(p){p.data.type==="dumi.liveDemo.setSource"&&c(p.data.value)};return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}},[c]),(0,n.useEffect)(function(){!l&&(s||i)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:s}})},[s,i,l]),w},E=D}}]);
