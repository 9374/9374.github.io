(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{448:function(t,a,r){"use strict";r.r(a);var e=r(2),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://post.smzdm.com/p/arqoorlx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[t._v("#")]),t._v(" 安装步骤")]),t._v(" "),a("ol",[a("li",[t._v("、打开Docker，点击注册表，搜索"),a("code",[t._v("alist")]),t._v("，找到"),a("code",[t._v("xhofe/alist")]),t._v("，右键下载此映像，选择"),a("code",[t._v("latest")]),t._v("版本即可，然后等待下载完成")]),t._v(" "),a("li",[t._v("点击Docker左边的映像，然后找到下载完成的alist映像，点击左上角的启动进入创建容器窗口")]),t._v(" "),a("li",[t._v("在创建容器窗口中点击高级设置")]),t._v(" "),a("li",[t._v("点击上方储存空间，点击添加文件夹，选择一个本地alist数据储存位置，装载路径填"),a("code",[t._v("/opt/alist/data")])]),t._v(" "),a("li",[t._v("点击端口设置，默认容器端口是5244，而群晖Docker会自动设置端口，所以这里最好自己设置端口，将本地端口中的内容改为自己想要的端口例如5200，然后点击应用即可")]),t._v(" "),a("li",[t._v("、然后点击下一步，点击完成即可")])]),t._v(" "),a("h3",{attrs:{id:"获取密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取密码"}},[t._v("#")]),t._v(" 获取密码")]),t._v(" "),a("p",[t._v("点击Docker左侧的容器，右键运行中的alist容器，点击详情，然后点击日志，即可看到初始化的密码")]),t._v(" "),a("blockquote",[a("p",[t._v("默认账号为 admin\n密码注意区分大小写，比如大写I小些L 以及0和O")])]),t._v(" "),a("h3",{attrs:{id:"其他设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他设置"}},[t._v("#")]),t._v(" 其他设置")]),t._v(" "),a("p",[t._v("PS：其他相关设置可以查看 "),a("a",{attrs:{href:"https://alist-doc.nn.ci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明文档"),a("OutboundLink")],1),t._v("，")]),t._v(" "),a("h2",{attrs:{id:"添加网盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加网盘"}},[t._v("#")]),t._v(" 添加网盘")]),t._v(" "),a("p",[t._v("alist支持的网盘非常多，官方文档介绍的也比较详细，这里以最近比较火的阿里网盘为例，其他网盘参考官方文档设置。首先按图示点击“账号”再点击“添加”会弹出添加账号界面。")]),t._v(" "),a("h3",{attrs:{id:"阿里云盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云盘"}},[t._v("#")]),t._v(" 阿里云盘")]),t._v(" "),a("ol",[a("li",[t._v("在主页中点击下方管理，左侧菜单中选择储存。")]),t._v(" "),a("li",[t._v("点击添加，驱动选择"),a("code",[t._v("阿里云盘open")])]),t._v(" "),a("li",[t._v("挂载路径 "),a("code",[t._v("必填")]),t._v(" alist中显示的文件夹名称 一般为"),a("code",[t._v("阿里云盘")]),t._v("或"),a("code",[t._v("aliyun")]),t._v(" 可以自定义")]),t._v(" "),a("li",[t._v("根文件夹ID "),a("code",[t._v("必填")]),t._v(" 默认root 也可以登录阿里云盘后进入指定文件夹，复制浏览器地址栏后"),a("code",[t._v("https://www.aliyundrive.com/drive/folder/xxxx")]),t._v("folder/后的xxx为文件夹id")]),t._v(" "),a("li",[t._v("刷新令牌  "),a("code",[t._v("必填")]),t._v(" "),a("a",{attrs:{href:"https://alist.nn.ci/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("alist官网"),a("OutboundLink")],1),t._v(" "),a("ol",[a("li",[t._v("点击头部的"),a("code",[t._v("使用指南")])]),t._v(" "),a("li",[t._v("点击添加储存中的"),a("code",[t._v("阿里云盘open")])]),t._v(" "),a("li",[t._v("获取刷新令牌 "),a("a",{attrs:{href:"https://alist.nn.ci/tool/aliyundrive/request",target:"_blank",rel:"noopener noreferrer"}},[t._v("前往"),a("OutboundLink")],1),t._v(" 建议查看官网最新文档，官方的才是最好的；")]),t._v(" "),a("li",[t._v("选择登录方式后 选择已经登录，获取到 refresh_token 填入即可")])])]),t._v(" "),a("li",[t._v("保存后就可以回主页看到挂在的文件夹了")])]),t._v(" "),a("h2",{attrs:{id:"挂载到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载到本地"}},[t._v("#")]),t._v(" 挂载到本地")]),t._v(" "),a("h3",{attrs:{id:"mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[t._v("#")]),t._v(" mac")]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" windows")])])}),[],!1,null,null,null);a.default=_.exports}}]);