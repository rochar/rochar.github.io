"use strict";(self.webpackChunkmypublicsite=self.webpackChunkmypublicsite||[]).push([[64,213],{213:function(e,t,i){i.r(t);i(791);var n=i(184);t.default=function(e){var t,i=e.category,a=e.date,s=e.githuburl,r=e.summary;return t=s?(0,n.jsx)("a",{href:s,target:"_blank",children:"GitHub"}):" - ",(0,n.jsxs)("div",{className:"col-lg-4",children:[(0,n.jsxs)("div",{className:"portfolio-info",children:[(0,n.jsx)("h3",{children:"Information"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Category"}),": ",i]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Publish date"}),": ",a]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Project URL"}),": ",t]})]})]}),(0,n.jsxs)("div",{className:"portfolio-description",children:[(0,n.jsx)("h2",{children:"Summary"}),(0,n.jsx)("p",{children:r})]})]})}},64:function(e,t,i){i.r(t);var n=i(791),a=i(90),s=i(213),r=i(2),o=i(98),l=i(596),c=i(748),d=i(247),h=i(361),p=i(779),u=i(184);t.default=function(){return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(a.Z,{title:"Call CUDA kernels from Managed Code (.Net C#) in a simple way"}),(0,u.jsx)("section",{id:"portfolio-details",className:"portfolio-details",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row gy-4",children:[(0,u.jsxs)("div",{className:"col-lg-8",children:[(0,u.jsx)("h2",{children:"Introduction"}),(0,u.jsx)("p",{children:"This is a small tutorial on how easily we can call a CUDA Kernel from a .Net library without relying on third party or any complex code. Its simple, direct, easy to debug and maintain, but the trade-off is you need to implement a \u201cnew entry point\u201d to each new kernel you add."}),(0,u.jsxs)("p",{children:["I assume that you already have the basic knowledge for CUDA Programming and .Net. In this tutorial we are using .Net 6.0 (Core), the steps are the same for .Net Framework. All source code can be found ",(0,u.jsx)("a",{href:"https://github.com/rochar/simplecudanet/tree/1.0",target:"_blank",children:"here"}),"."]}),(0,u.jsx)("hr",{}),(0,u.jsx)("h2",{children:"Step 1 \u2014 Install CUDA Toolkit"}),(0,u.jsxs)("p",{children:["The latest version can be found here ",(0,u.jsx)("a",{href:"https://developer.nvidia.com/cuda-downloads",target:"_blank",children:"CUDA Toolkit 11.6 Update 1 Downloads | NVIDIA Developer"}),". You can also see the ",(0,u.jsx)("a",{href:"https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html#build-customizations-for-existing-projects",children:" Installation Guide Windows :: CUDA Toolkit Documentation (nvidia.com)"})]}),(0,u.jsx)("p",{children:"When the installation is completed open the command line and type: nvcc -v"}),(0,u.jsx)("p",{children:"You should see something like this (you may need to restart the machine):"}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:o,alt:"Checking CUDA is properly installed."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Checking CUDA is properly installed."})]}),(0,u.jsx)("h2",{children:"Step 2 \u2014 Setup C++/CLI project in Visual Studio"}),(0,u.jsx)("p",{children:"I will start by creating a CLR Class Library, to be able to mix managed code and unmanaged."}),(0,u.jsxs)("p",{children:["For more details see ",(0,u.jsx)("a",{href:"https://docs.microsoft.com/en-us/cpp/dotnet/mixed-native-and-managed-assemblies?view=msvc-170",target:"_blank",children:" Mixed (Native and Managed) Assemblies | Microsoft Docs"})]}),(0,u.jsx)("p",{children:"Open Visual Studio, in languages select C++ and search by clr, you should see something like this:"}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:l,alt:"Create a new CLR class library."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Create a new CLR class library."})]}),(0,u.jsx)("p",{children:"Select CLR Class Library (<the .Net Version that you intend to target>) and create the project."}),(0,u.jsx)("p",{children:" Open the Project Properties and in Configuration Properties > Advanced > C++/CLI Properties you can confirm the .Net Version that is being targeted."}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:c,alt:"Target .Net 6.0."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Target .Net 6.0."})]}),(0,u.jsx)("p",{children:"Next add CUDA as target, in Build Dependencies > Build Customizations select CUDA:"}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:d,alt:"Add CUDA targets."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Add CUDA targets."})]}),(0,u.jsx)("p",{children:"Last step link the cudart.lib. For that open the project properties and in Configuration Properties > Linker > Input > Additional Dependencies add cudart.lib:"}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:h,alt:"Link the cudart.lib."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Link the cudart.lib."})]}),(0,u.jsx)("h2",{children:"Step 3 \u2014 Create the first CUDA Kernel"}),(0,u.jsxs)("p",{children:["In this step we will create a simple kernel to add two vector in the GPU. Lets start by adding an header ",(0,u.jsx)("i",{children:"AddVectorsKernel.cuh"})," , in this header the RunAddVectorsKernel is defined and is the C++, \u201cunmanaged entry point\u201d to call the Kernel."]}),(0,u.jsx)(r.Z,{id:"cc64b5f673b1179a921507080954b365"}),(0,u.jsxs)("p",{children:["Next, let\u2019s create the kernel ",(0,u.jsx)("i",{children:"AddVectorsKernel.cu"})]}),(0,u.jsx)(r.Z,{id:"47fab677f2774dd5d943e4dafdabf0fa"}),(0,u.jsxs)("p",{children:["Now lets add the \u201cmanaged entry point\u201d for the kernel, the header AddVectorsKernel.h and the cpp ",(0,u.jsx)("i",{children:"AddVectorsKernel.cpp"}),"."]}),(0,u.jsx)(r.Z,{id:"2ac8ecfc33af01a6b94ce9b90b372879"}),(0,u.jsx)("p",{children:"In the header I define a managed static class and a static function that will be called by the managed library. This function accepts two managed arrays and outputs the result of adding both also as managed array."}),(0,u.jsx)(r.Z,{id:"400703f3afe71387074d978cac9e6aa4"}),(0,u.jsx)("h2",{children:"Step 4\u2014 Call the Kernel from .Net Console App"}),(0,u.jsx)("p",{children:"Now Create a Console App, and reference the C++/CLI project created in Step 2. To call the Kernel just past the code:"}),(0,u.jsx)(r.Z,{id:"c9543596e2a842140a0e38e100baa4af"}),(0,u.jsx)("p",{children:"This is a simple solution, easy to maintain and evolve and can be a good solution when you just want to call CUDA Kernels and have a \u201cmanage API\u201d in top of it. In a future I will improve this solution and remove some boilerplate code an make our life easier."}),(0,u.jsx)("p",{children:"See you soon."}),(0,u.jsxs)("figure",{className:"text-center",children:[(0,u.jsx)("img",{src:p,alt:"Keep it Clean, Keep it Simple."}),(0,u.jsx)("figcaption",{className:"figure-caption",children:"Keep it Clean, Keep it Simple."})]})]}),(0,u.jsx)(s.default,{category:"C#, CUDA",date:"Apr 14, 2020",summary:"Tutorial on how to call CUDA Kernels from a .Net (C#) library without any third party dependencies, \u201csimple and direct\u201d!",githuburl:"https://github.com/rochar/simplecudanet/tree/1.0"})]})})})]})}},90:function(e,t,i){i(791);var n=i(504),a=i(184);t.Z=function(e){var t=e.title;return(0,a.jsx)("section",{id:"breadcrumbs",className:"breadcrumbs",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)("ol",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/",children:"Home"})})})]})})})}},2:function(e,t,i){var n=i(791);function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}var s=function(e){var t,i;function s(){return e.apply(this,arguments)||this}i=e,(t=s).prototype=Object.create(i.prototype),t.prototype.constructor=t,a(t,i);var r=s.prototype;return r.componentDidMount=function(){this._updateIframeContent()},r.componentDidUpdate=function(e,t){this._updateIframeContent()},r._defineUrl=function(){var e=this.props,t=e.id,i=e.file;return"https://gist.github.com/"+t+".js"+(i?"?file="+i:"")},r._updateIframeContent=function(){var e=this.props,t=e.id,i=e.file,n=this.iframeNode,a=n.document;n.contentDocument?a=n.contentDocument:n.contentWindow&&(a=n.contentWindow.document);var s='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(i?"gist-"+t+"-"+i:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(s),a.close()},r.render=function(){var e=this,t=this.props,i=t.id,a=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+i+"-"+a:"gist-"+i})},s}(n.PureComponent);t.Z=s}}]);
//# sourceMappingURL=64.4b8fdcd8.chunk.js.map