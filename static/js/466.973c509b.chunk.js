"use strict";(self.webpackChunkmypublicsite=self.webpackChunkmypublicsite||[]).push([[466,213],{213:function(e,t,n){n.r(t);n(791);var o=n(184);t.default=function(e){var t,n=e.category,r=e.date,i=e.githuburl,s=e.summary;return t=i?(0,o.jsx)("a",{href:i,target:"_blank",children:"GitHub"}):" - ",(0,o.jsxs)("div",{className:"col-lg-4",children:[(0,o.jsxs)("div",{className:"portfolio-info",children:[(0,o.jsx)("h3",{children:"Information"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Category"}),": ",n]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Publish date"}),": ",r]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Project URL"}),": ",t]})]})]}),(0,o.jsxs)("div",{className:"portfolio-description",children:[(0,o.jsx)("h2",{children:"Summary"}),(0,o.jsx)("p",{children:s})]})]})}},466:function(e,t,n){n.r(t);var o=n(791),r=n(90),i=n(213),s=n(2),a=n(815),c=n(184);t.default=function(){return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(r.Z,{title:"Optimize Memory Allocation in a Producer / Consumer Pattern (C#)"}),(0,c.jsx)("section",{id:"portfolio-details",className:"portfolio-details",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row gy-4",children:[(0,c.jsxs)("div",{className:"col-lg-8",children:[(0,c.jsx)("h2",{children:"Introduction"}),(0,c.jsx)("p",{children:"Consumer / Producer Pattern is an example of a multi-thread synchronization problem: two threads, one producing data and another consuming data."}),(0,c.jsx)("p",{children:"The produced data usually comes from a external system or component and needs to be transformed into a new structure (DTO) known and designed to be used by the consumer (this allows, for example, avoid coupling between the two systems or components)."}),(0,c.jsx)("p",{children:"This transformation means creating new objects, and for large applications, where memory allocation must be optimized, to avoid Garbage Collection, if the produced data is significant this will create additional GC pressure and you will start seeing performance issues."}),(0,c.jsxs)("p",{children:["This article shows an example using an ObjectPool (a concept similar to ",(0,c.jsx)("a",{href:"https://docs.microsoft.com/en-us/dotnet/api/system.buffers.arraypool-1?view=netcore-3.0",target:"_blank",children:" ArrayPool"}),"), but uses it for holding objects, to be reused and therefore minimize object creation."]}),(0,c.jsx)("p",{children:"The Producer / Consumer classes uses System.Threading.Channels and is based in the example described in this article."}),(0,c.jsxs)("p",{children:["The full code of this example can be found in ",(0,c.jsx)("a",{href:"https://github.com/rochar/ConsumerPRoducerObjectPoolSample",target:"_blank",children:"GitHub"}),"."]}),(0,c.jsx)("h2",{children:"Object Pool Implementation"}),(0,c.jsxs)("p",{children:["The ",(0,c.jsx)("em",{children:"ObjectPool"})," is responsible to keep created objects and to Rent them to any client requiring a new one. The client is responsible to Return it to the pool if not needed."]}),(0,c.jsxs)("p",{children:["If no object is available in the pool the ",(0,c.jsx)("em",{children:"Rent"})," method will create a new object using the _objectGenerator function, otherwise, will return an object from the pool."]}),(0,c.jsxs)("p",{children:["The ",(0,c.jsx)("em",{children:" Return"})," method will add the object back to the pool."]}),(0,c.jsx)(s.Z,{id:"35c703ee434284d1e5ebec994e1e2e49"}),(0,c.jsx)("p",{children:"One important property in the maxElements that the pool can hold and this has to do with the problem you are trying to solve, it should be the minimum value that fits your problem: minimize object creation and minimize memory consumption."}),(0,c.jsx)("h2",{children:"Producer / Consumer Implementation"}),(0,c.jsx)("h3",{children:"Producer"}),(0,c.jsxs)("p",{children:["This producer simulate data being returned from a external system, it returns an ",(0,c.jsx)("em",{children:"ExternalDto"})," (not owned by the component that we are developing) and maps it to a DomainDto (owned by our component) and adds it to the channel:"]}),(0,c.jsx)(s.Z,{id:"59179a993d6d0db91e06649198010e25"}),(0,c.jsx)("h3",{children:"Consumer"}),(0,c.jsx)("p",{children:"The consumer retrieves data from the channel and processes it:"}),(0,c.jsx)(s.Z,{id:"b6ed4db5577bb8f9a0a6482f479b35dd"}),(0,c.jsx)("h3",{children:"Producer With Pool"}),(0,c.jsx)("p",{children:"Using the pool instead of creating a DomainDto, the producer rents it from the pool, so it can be a new object or an already existing one."}),(0,c.jsx)(s.Z,{id:"ed580840c6e351a27dcc5679242f7870"}),(0,c.jsx)("h3",{children:"Consumer With Pool"}),(0,c.jsx)("p",{children:"The only difference is that the Consumer returns the object to the pool after processing it:"}),(0,c.jsx)(s.Z,{id:"eb5128efb86a67a0b6df98bda165b285"}),(0,c.jsx)("h2",{children:"Benchmark"}),(0,c.jsxs)("p",{children:["The example on GitHub uses ",(0,c.jsx)("a",{href:"https://github.com/dotnet/BenchmarkDotNet",target:"_blank",children:"BenchmarkDotNet"})," to measure the allocated Memory and to compare performance. The benchmark simulates a producer / consumer with 100k, 1M and 5M objects produce and consumed:"]}),(0,c.jsxs)("figure",{className:"text-center",children:[(0,c.jsx)("img",{src:a,alt:"Benchmark Results"}),(0,c.jsx)("figcaption",{className:"figure-caption",children:"Benchmark Results"})]}),(0,c.jsx)("p",{children:"The Delta between the memory Allocated it\u2019s the exact gain of using the Pool and not creating new objects. In this case the DomainDto is a very light class, even so we can see considerable gains for 100k objects."}),(0,c.jsx)("p",{children:"For the performance: in the Mean we can not see any real difference, because DomainDto is light and so the creation of this object is not very expensive."}),(0,c.jsx)("p",{children:"The correlation that seems to exists between the different results and variables (Median, Gen 0) is related to the fact that the producer/consumer are simulated and the produce/consumed elements are done at exactly same rate in the full execution. In a real world application this will not happen."}),(0,c.jsx)("h2",{children:"Important considerations"}),(0,c.jsxs)("p",{children:["Remember the ",(0,c.jsx)("em",{children:"maxElements"}),"  parameter of ",(0,c.jsx)("em",{children:"ObjectPools"})," class, this value should be related to the difference between producer and consumer throughput, if you are producing faster than consuming this value should be higher, otherwise can be lower. maxElements can be the expected produce elements in queue + delta."]}),(0,c.jsx)("hr",{}),(0,c.jsx)("h2",{children:"Conclusion"}),(0,c.jsx)("p",{children:"If your application suffers from Garbage Collection and you are continuous creating and releasing objects consider to use ObjecPool concept. The Producer Consumer Pattern is a good place to include it."}),(0,c.jsx)("p",{children:"Do measure your application for any change."}),(0,c.jsx)("p",{children:"See you soon."})]}),(0,c.jsx)(i.default,{category:"C#",date:"Nov 10, 2019",githuburl:"https://github.com/rochar/ConsumerPRoducerObjectPoolSample",summary:"A simple technique to avoid Garbage Collector (GC) pressure for large applications where GC performance is a must."})]})})})]})}},90:function(e,t,n){n(791);var o=n(504),r=n(184);t.Z=function(e){var t=e.title;return(0,r.jsx)("section",{id:"breadcrumbs",className:"breadcrumbs",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsx)("ol",{children:(0,r.jsx)("li",{children:(0,r.jsx)(o.rU,{to:"/",children:"Home"})})})]})})})}},2:function(e,t,n){var o=n(791);function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var i=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n);var s=i.prototype;return s.componentDidMount=function(){this._updateIframeContent()},s.componentDidUpdate=function(e,t){this._updateIframeContent()},s._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},s._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,o=this.iframeNode,r=o.document;o.contentDocument?r=o.contentDocument:o.contentWindow&&(r=o.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},s.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},i}(o.PureComponent);t.Z=i}}]);
//# sourceMappingURL=466.973c509b.chunk.js.map