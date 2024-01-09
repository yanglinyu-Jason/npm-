; (function (window, document) {
  // 判断IE10以下加载OCX控件
  var bIE = false
  var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
  var parentTitle = '' // 父页面标题
  var iframePos = {} // iframe相对文档的位置
  var iframeClientPos = null // iframe相对视窗的位置
  var iframeParentShowSize = null // 视窗大小 width height
  // var videoID="playVideoWnd";
  var videoID = ''
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion < 10) {
      bIE = true
    } else {
      bIE = false
    }
  }
  // 声明公用变量
  var initCount = 0
  var pubKey = ''

  // 显示回调信息
  function showCBInfo(szInfo, type) {
    if (!bIE) {
      console.log(szInfo)
    }
  }

  // RSA加密
  function setEncrypt(value) {
    var encrypt = new JSEncrypt()
    encrypt.setPublicKey(pubKey)
    return encrypt.encrypt(value)
  }

  function downloadExe() {
    window.location.href = '/static/UnifiedMonitoringVideo/VideoWebPlugin.exe'
  }

  // demodemo 1
  var initPlugin = function (options) {
    if (!(this instanceof initPlugin)) return new initPlugin(options)

    // 参数合并
    this.options = this.extend(
      {
        el: 'body',
        playMode: 0 // 默认预览
      },
      options
    )
    console.log("wei只", this.options.el)
    this.$dom = $(this.options.el)

    this.oWebControl = null
    this.listCopy = null

    // 父页面title
    // this.parentTitle = window.parent.document.title;
    // console.log(this.$dom.el);
    if (bIE) {
      console.log(bIE, 78)
      this.$dom.append('<div id="playOcxWnd" class="playWnd"><object classid="clsid:fd63e60f-026a-4990-8383-1f9845789fd1" id="OCXVideoPlugin" name="ocx" ></object></div>')
      this.OcxInit()
    } else {
      /*if(this.$dom[0]&&this.$dom[0].id){
        if(this.$dom[0].id==="videoWindow"){
          videoID="playVideoWnd";
        }else{
          videoID="playVideoAUtoWnd"
        }
      }*/
      if (this.$dom[0] && this.$dom[0].id) {
        if (this.$dom[0].id === 'videoWindow') {
          //视频
          videoID = 'playVideoWnd'
        } else if (this.$dom[0].id === 'video') {
          //设备一览
          videoID = 'playVideoAUtoWnd'
        } else if (this.$dom[0].id === 'videoGroupBy') {
          //分组轮播
          videoID = 'playVideoGroupWnd'
        } else if (this.$dom[0].id === 'videoAllBy') {
          //全部轮播
          videoID = 'playVideoAllByWnd'
        }
      }
      this.$dom.append('<div id=' + '"' + videoID + '"' + 'class="playWnd"></div>')
      this.initWebPlugin()
    }
    window.parent.document.iframeDom = this.$dom
    // console.log(window.parent.document.iframeDom,"ww")
  }
  //iframe_视频web插件子页面开始
  // 步骤1：监听父页面的消息

  if (window.addEventListener) {
    window.addEventListener('message', videoListener, false)
  } else {
    window.attachEvent('message', videoListener)
  }
  function videoListener(event) {
    this.oWebControl = window.parent.document.videoWebControl
    this.dom = window.parent.document.iframeDom
    var e = event || window.event
    if (e && e.data) {
      switch (e.data.action) {
        case 'sendTitle': // 父页面将其标题发送过来，子页面保存该标题，以便创建插件窗口成功后将标题设置回给父页面
          parentTitle = e.data.info
          break
        case 'updatePos': // 更新插件位置：JS_CreateWnd时需要父页面计算滚动条偏移量，偏移量叠加该偏移量作为iframe的偏移量，防止插件窗口与DIV窗口不贴合情况
          var scrollValue = e.data.scrollValue // 滚动条滚动偏移量
          this.oWebControl.JS_SetDocOffset({
            left: 201,
            top: 96
          }) // 更新插件窗口位置
          this.oWebControl.JS_Resize(this.dom[0].offsetWidth, this.dom[0].offsetHeight)
          setWndCover()
          break
        case 'updateInitParam':
          iframePos = e.data.iframeOffset // iframe与文档的偏移量
          iframeClientPos = e.data.iframeClientPos // iframe相对视窗的位置
          iframeParentShowSize = e.data.showSize // 视窗大小
          break
        case 'resize':
          iframeParentShowSize = e.data.showSize // 视窗大小
          iframePos = e.data.iframeOffset // iframe与文档的偏移量
          iframeClientPos = e.data.iframeClientPos // iframe相对视窗的位置
          setWndCover()
          break
        case 'scroll':
          iframeParentShowSize = e.data.showSize // 视窗大小
          iframePos = e.data.iframeOffset // iframe与文档的偏移量
          iframeClientPos = e.data.iframeClientPos // iframe相对视窗的位置
          var scrollValue = e.data.scrollValue // 滚动条滚动偏移量
          if (this.oWebControl) {
            this.oWebControl.JS_SetDocOffset({
              left: iframePos.left + scrollValue.left,
              top: iframePos.top + scrollValue.top
            }) // 更新插件窗口位置
            this.oWebControl.JS_Resize(this.dom[0].offsetWidth, this.dom[0].offsetHeight)
            setWndCover()
          }
          break
        default:
          break
      }
    }
  }
  function setWndCover() {
    if (this.oWebControl) {
      // 准备要用到的一些数据
      var iframeWndHeight = $(window).height() // iframe窗口高度
      var iframeWndWidth = $(window).width() // iframe窗口宽度
      if ($('#' + videoID).get(0) == undefined) {
        return
      }

      var divLeft = $('#' + videoID)
        .get(0)
        .getBoundingClientRect().left
      var divTop = $('#' + videoID)
        .get(0)
        .getBoundingClientRect().top
      var divRight = $('#' + videoID)
        .get(0)
        .getBoundingClientRect().right
      var divBottom = $('#' + videoID)
        .get(0)
        .getBoundingClientRect().bottom
      var divWidth = $('#' + videoID).width()
      var divHeight = $('#' + videoID).height()

      this.oWebControl.JS_RepairPartWindow(0, 0, this.dom[0].offsetWidth + 1, this.dom[0].offsetHeight + 1) // 多1个像素点防止还原后边界缺失一个像素条

      if (iframeClientPos == null) {
        return
      }
      // 判断剪切矩形的上边距
      if (iframeClientPos.top < 0 && Math.abs(iframeClientPos.top) > divTop) {
        var deltaTop = Math.abs(iframeClientPos.top) - divTop
        this.oWebControl.JS_CuttingPartWindow(0, 0, this.dom[0].offsetWidth + 1, deltaTop + 1)
        //console.log({deltaTop: deltaTop});
      }

      // 判断剪切矩形的左边距
      if (iframeClientPos.left < 0 && Math.abs(iframeClientPos.left) > divLeft) {
        var deltaLeft = Math.abs(iframeClientPos.left) - divLeft
        //console.log({deltaLeft: deltaLeft});
        this.oWebControl.JS_CuttingPartWindow(0, 0, deltaLeft, this.dom[0].offsetHeight + 1) // 多剪掉一个像素条，防止出现剪掉一部分窗口后出现一个像素条
      }

      // 判断剪切矩形的右边距
      var W1 = iframeWndWidth - divRight
      var W2 = iframeParentShowSize.width - iframeClientPos.left
      if (W2 < divWidth) {
        var deltaRight = iframeWndWidth - W2 - W1
        if (deltaRight > 0) {
          this.oWebControl.JS_CuttingPartWindow(this.dom[0].offsetWidth - deltaRight, 0, deltaRight + 1, this.dom[0].offsetHeight + 1)
        }
      }

      // 判断剪切矩形的下边距
      var H1 = iframeClientPos.bottom - iframeParentShowSize.height
      var H2 = iframeWndHeight - divBottom
      var deltaBottom = H1 - H2
      //console.log({deltaBottom: deltaBottom});
      if (deltaBottom > 0) {
        this.oWebControl.JS_CuttingPartWindow(0, this.dom[0].offsetHeight - deltaBottom, this.dom[0].offsetWidth + 1, deltaBottom + 1)
      }
    }
  }
  //iframe_视频web插件子页面结束
  initPlugin.prototype = {
    // 窗口创建时的UUID
    cbGetUUID: function (data) {
      // 赋值给父页面
      // window.parent.document.title = data.substr(1,data.length-2);
    },
    // demodemo2
    // 创建播放实例
    initWebPlugin: function () {
      var _this = this
      _this.oWebControl = new WebControl({
        szPluginContainer: videoID, // 指定容器id
        iServicePortStart: 15900, // 指定起止端口号，建议使用该值
        iServicePortEnd: 15909,
        szClassId: '23BF3B0A-2C56-4D97-9C03-0CB103AA8F11', // 用于IE10使用ActiveX的clsid
        cbConnectSuccess: function () {
          // 创建WebControl实例成功
          _this.oWebControl
            .JS_StartService('window', {
              // WebControl实例创建成功后需要启动服务
              dllPath: './VideoPluginConnect.dll' // 值"./VideoPluginConnect.dll"写死
            })
            .then(
              function () {
                // 启动插件服务成功
                console.log('JS_CreateWnd success')
                _this.setCallbacks()
                //JS_CreateWnd创建视频播放窗口，宽高可设定
                // 步骤2：JS_CreateWnd时指定cbSetDocTitle回调，并在回调中向父页面发送更新标题消息，标题为回调出来的uuid
                _this.oWebControl
                  .JS_CreateWnd(
                    videoID,
                    _this.$dom.width(),
                    _this.$dom.height(),
                    { bEmbed: false },
                    {
                      cbSetDocTitle: function (uuid) {
                        oWebControl._pendBg = false
                        window.parent.postMessage(
                          {
                            action: 'updateTitle',
                            msg: '子页面通知父页面修改title',
                            info: uuid
                          },
                          '*'
                        ) // '\*'表示跨域参数，请结合自身业务合理设置
                      }
                    }
                  )
                  .then(function () {
                    // 步骤3：JS_CreateWnd成功后通知父页面将其标题修改回去
                    // console.log("JS_CreateWnd success");
                    window.parent.postMessage(
                      {
                        action: 'updateTitle',
                        msg: '子页面通知父页面更新title',
                        info: parentTitle
                      },
                      '*'
                    )

                    // 步骤4：发消息更新插件窗口位置：这里不直接更新的原因是，父页面默认可能就存在滚动条，此时有滚动量
                    window.parent.postMessage(
                      {
                        action: 'updatePos',
                        msg: '更新Pos'
                      },
                      '*'
                    )
                    _this.webInit() // 创建播放实例成功后初始化
                  })
                _this.oWebControl.JS_SetDocOffset({ left: 0, top: 100 }) //设置容器偏移量
              },
              function () {
                // 启动插件服务失败
              }
            )
        },
        cbConnectError: function () {
          // 创建WebControl实例失败
          _this.oWebControl = null
          $('#' + videoID).html('插件未启动，正在尝试启动，请稍候...')
          WebControl.JS_WakeUp('VideoWebPlugin://') // 程序未启动时执行error函数，采用wakeup来启动程序
          initCount++
          if (initCount < 3) {
            setTimeout(function () {
              _this.initWebPlugin()
            }, 3000)
          } else {
            $('#' + videoID).html("<p style='margin-bottom: 10px;font-size: 14px;color: #FFF;'>插件启动失败，请点击下载按钮，下载并安装该插件！</p>")
            $('#' + videoID).append(
              '<button type="button" id="cbdownloadBtn" class="btn darkBlue ButtControl" data-bizCode="delete" onclick="downloadExe();">' + '<i class="icon-download"></i>&nbsp;下载' + '</button>'
            )
          }
        },
        cbConnectClose: function (bNormalClose) {
          // 异常断开：bNormalClose = false
          // JS_Disconnect正常断开：bNormalClose = true
          // console.log("cbConnectClose");
          _this.oWebControl = null
        }
      })
      window.parent.document.videoWebControl = _this.oWebControl
    },
    // 初始化
    webInit: function () {
      var _this = this
      this.getWebPubKey(function () {
        ////////////////////////////////// 请自行修改以下变量值	////////////////////////////////////
        var playMode = _this.options.playMode // 初始播放模式：0-预览，1-回放
        var snapDir = 'SnapDir' // 抓图存储路径
        var videoDir = 'VideoDir' // 紧急录像或录像剪辑存储路径
        var layout = _this.options.layout || '1x1' // playMode指定模式的布局
        var enableHTTPS = 1 // 是否启用HTTPS协议与综合安防管理平台交互，是为1，否为0
        var encryptedFields = 'secret' // 加密字段，默认加密领域为secret
        var showToolbar = 1 // 是否显示工具栏，0-不显示，非0-显示
        var showSmart = 0 // 是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
        var buttonIDs = '0,16,256,257,258,259,260,512,513,514,516,517,768,769' //自定义工具条按钮
        //515:子码流 513:3D
        ////////////////////////////////// 请自行修改以上变量值	////////////////////////////////////
        _this.oWebControl
          .JS_RequestInterface({
            funcName: 'init',
            argument: JSON.stringify({
              playMode: playMode, // 播放模式（决定显示预览还是回放界面）
              snapDir: snapDir, // 抓图存储路径
              videoDir: videoDir, // 紧急录像或录像剪辑存储路径
              layout: layout, // 布局
              enableHTTPS: enableHTTPS, // 是否启用HTTPS协议
              encryptedFields: encryptedFields, // 加密字段
              showToolbar: showToolbar, // 是否显示工具栏
              showSmart: showSmart, // 是否显示智能信息
              buttonIDs: buttonIDs // 自定义工具条按钮
            })
          })
          .then(function (oData) {
            // 初始化后resize一次，规避firefox下首次显示窗口后插件窗口未与DIV窗口重合问题
            _this.oWebControl.JS_Resize(_this.$dom.width(), _this.$dom.height())
            _this.event()
          })
        _this.oWebControl.JS_SetDocOffset({ left: 0, top: 0 }) //设置容器偏移量
      })
    },
    // IE下初始化
    OcxInit: function () {
      var _this = this
      this.getOcxPubKey(function () {
        var snapDir = 'SnapDir' // 抓图存储路径
        var videoDir = 'VideoDir' // 紧急录像或录像剪辑存储路径
        var layout = '1x1' // playMode指定模式的布局
        var encryptedFields = 'secret' // 加密字段，默认加密领域为secret
        var showToolbar = 1 // 是否显示工具栏，0-不显示，非0-显示
        var showSmart = 0 // 是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
        var btIds = '0,16,256,257,258,259,260,512,513,514,516,517,768,769' //自定义工具条按钮
        //515:子码流 513:3D
        var enableHTTPS = 1 // 是否启用HTTPS协议与综合安防管理平台交互，是为1，否为0

        var param = JSON.stringify({
          funcName: 'init',
          argument: JSON.stringify({
            playMode: _this.options.playMode, // 初始播放模式：0-预览，1-回放
            snapDir: snapDir,
            videoDir: videoDir,
            layout: layout,
            enableHTTPS: enableHTTPS,
            showToolbar: showToolbar,
            showSmart: showSmart,
            buttonIDs: btIds,
            encryptedFields: encryptedFields
          })
        })

        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(param)
        if (null == ret || '' == ret) {
            console.log("showCBInfo2");
          showCBInfo('插件接口调用失败', '')
        } else {
            console.log("showCBInfo3");
          showCBInfo(ret, '')
        }
      })
    },
    // 预览
    startPreview: function (params) {
      //123
      var _this = this;
      this.listCopy = params
      var argument = { list: params }
      if (bIE) {
        var param = JSON.stringify({
          funcName: 'startMultiPreview',
          argument: JSON.stringify(argument)
        })

        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(param)
        if (null == ret || '' == ret) {
            console.log("showCBInfo4");
          showCBInfo('插件接口调用失败', '')
        } else {
            console.log("showCBInfo5");
          showCBInfo(ret, '')
        }
      } else {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'startMultiPreview',
            argument: JSON.stringify(argument)
          })
          .then(function (oData) {
              console.log("showCBInfo6", oData);
            showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
              if (oData?.responseMsg?.code != 0){
                  _this.startPreview(params);
              }
          })
      }
    },
    // 停止预览
    stopPreview: function (wnd) {
      if (bIE) {
        var param = {
          funcName: 'stopAllPreview'
        }
        if (wnd && wnd !== 'all') {
          param.funcName = 'stopPreview'
          param['argument'] = JSON.stringify({
            wndId: wnd
          })
        }
        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(JSON.stringify(param))
        if (null == ret || '' == ret) {
          alert('插件接口调用失败')
        } else {
            console.log("showCBInfo7");
          showCBInfo(ret, '')
        }
      } else {
        var params = {
          funcName: 'stopAllPreview'
        }
        if (wnd && wnd !== 'all') {
          params.funcName = 'stopPreview'
          params['argument'] = JSON.stringify({
            wndId: wnd
          })
        }
        this.oWebControl.JS_RequestInterface(params).then(function (oData) {
            console.log("showCBInfo8");
          showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
        })
      }
    },
    // 设置布局
    setLayout: function (layout) {
      if (this.oWebControl) {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'setLayout',
            argument: JSON.stringify({
              layout: layout // 值为‘1*1’，‘2*2’
            })
          })
          .then(function (oData) {
              console.log("showCBInfo9");
            showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
          })
      }
    },
    // 获得布局
    getLayout: function () {
      if (this.oWebControl) {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'getLayout'
          })
          .then(function (oData) {
            var res = JSON.stringify(oData ? oData.responseMsg : '')
            nowLayout = res.layout
            wndNum = res.wndNum
              console.log("showCBInfo10");
            showCBInfo(res)
          })
      }
    },
    // 抓图
    snapPic: function (param) {
      if (bIE) {
        var params = JSON.stringify({
          funcName: 'snapShot',
          argument: JSON.stringify({
            name: param.name,
            wndId: param.wndId
          })
        })

        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(params)
        if (null == ret || '' == ret) {
          alert('插件接口调用失败')
        } else {
            console.log("showCBInfo11");
          showCBInfo(ret, '')
        }
      } else {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'snapShot',
            argument: JSON.stringify(param)
          })
          .then(function (oData) {
              console.log("showCBInfo12");
            showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
          })
      }
    },
    // 语音对讲
    startTalk: function (param) {
      if (bIE) {
        var param = JSON.stringify({
          funcName: 'startTalk',
          argument: JSON.stringify({
            wndId: param.wndID,
            url: param.url
          })
        })

        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(param)
        if (null == ret || '' == ret) {
          alert('插件接口调用失败')
        } else {
            console.log("showCBInfo13");
          showCBInfo(ret, '')
        }
      } else {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'startTalk',
            argument: JSON.stringify({
              wndId: param.wndID,
              url: param.url
            })
          })
          .then(function (oData) {
              console.log("showCBInfo14");
            showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
          })
      }
    },
    // 下载录像
    downloadRecord: function (param) {
      // todo
    },
    // 获取ocx公钥
    getOcxPubKey: function (callback) {
      var ocxObj = document.getElementById('OCXVideoPlugin')
      var param = JSON.stringify({
        funcName: 'getRSAPubKey',
        argument: JSON.stringify({
          keyLength: 1024
        })
      })

      var ret = ocxObj.GerneralRequest(param)
      if (null == ret || '' == ret) {
        alert('插件接口调用失败')
      } else {
        var keyParam = JSON.parse(ret)
        pubKey = keyParam.data
        callback()
      }
    },
    // 设置窗口控制回调
    setCallbacks: function () {
      var _this = this
      this.oWebControl.JS_SetWindowControlCallback({
        cbIntegrationCallBack: function (oData) {
          var szInfo = oData.responseMsg
          if (szInfo && szInfo.type) {
            if (szInfo.type === 104) {
              //录像下载
              var param = {
                url: ' ',
                cameraIndexCode: deviceCode,
                downloadType: 1,
                list: []
              }
              if (playbackDownloadParam) {
                param.url = playbackDownloadParam.url
                param.list = playbackDownloadParam.recordSegments
              }
              _this.playbackDownload(param)
            } else if (szInfo.type === 102) {
              var param = {
                wndID: isWndId, // 窗口ID
                url: '' // 地址URL
              }
              var query = { sbid: deviceCode }
              $ajax({
                url: zuulPath + serverName + 'innerApi/talkURLs',
                data: query,
                type: 'get',
                success: function (res) {
                  if (!res || !res.talkUrl) {
                    return
                  }
                  param.url = res.talkUrl
                  _this.startTalk(param)
                }
              })
            } else if (szInfo.type === 1) {
              //选中窗口消息
              var msg = szInfo.msg
              if (typeof msg === 'string') {
                msg = JSON.parse(szInfo.msg)
              }
              isWndId = msg.wndId
              _this.getLayout()
            } else if (szInfo.type === 101) {
              //云台操作
              var ptzType = ''
              var msg = szInfo.msg
              if (typeof msg === 'string') {
                msg = JSON.parse(szInfo.msg)
              }
              isWndId = msg.wndId
              if (msg.ptzControl === 'LEFT') {
                ptzType = 'l'
              }
              if (msg.ptzControl === 'RIGHT') {
                ptzType = 'r'
              }
              if (msg.ptzControl === 'UP') {
                ptzType = 'u'
              }
              if (msg.ptzControl === 'DOWN') {
                ptzType = 'd'
              }
              if (msg.ptzControl === 'LEFT_UP') {
                ptzType = 'lu'
              }
              if (msg.ptzControl === 'LEFT_DOWN') {
                ptzType = 'ld'
              }
              if (msg.ptzControl === 'RIGHT_UP') {
                ptzType = 'ru'
              }
              if (msg.ptzControl === 'RIGHT_DOWN') {
                ptzType = 'rd'
              }
              if (msg.action == 0) {
                return
              }
              ptzOperate(ptzType)
            } else if (szInfo.type === 103) {
              //3d控球
              var msg = szInfo.msg
              if (typeof msg === 'string') {
                msg = JSON.parse(szInfo.msg)
              }
              var startX = msg.startX
              var startY = msg.startY
              var endX = msg.endX
              var endY = msg.endY
              var requestHead = { deviceCode: deviceCode }
              var requestBody = { deviceCode: deviceCode, START_X: startX, START_Y: startY, X: endX, Y: endY }
              // var query = {"requestHead": requestHead, "requestBody": requestBody};
              var query = {
                deviceCode: deviceCode || deviceCodeQ,
                START_X: startX,
                START_Y: startY,
                X: endX,
                Y: endY,
                method: '3D_POINT_GUARD',
                url: '/vdt-web/deviceForCollectApi/standardInterfaceApi'
              }
              $ajax({
                // url: zuulPath + serverName + "innerApi/tDAction",
                url: zuulPath + serverName + 'sendToVdt/send3dAction',
                type: 'get',
                // contentType: "application/json",
                data: query,
                dataType: 'json',
                success: function (res) {
                  console.log(res)
                }
              })
            }
          }
            console.log("showCBInfo15");
          showCBInfo(JSON.stringify(oData.responseMsg))
        }
      })
    },
    // 获取web公钥
    getWebPubKey: function (callback) {
      this.oWebControl
        .JS_RequestInterface({
          funcName: 'getRSAPubKey',
          argument: JSON.stringify({
            keyLength: 1024
          })
        })
        .then(function (oData) {
          if (oData.responseMsg.data) {
            pubKey = oData.responseMsg.data
            callback()
          }
        })
    },
    extend: function (obj, obj2) {
      for (var k in obj2) {
        obj[k] = obj2[k]
      }
      return obj
    },
    event: function () {
      var _this = this
      $(window).unload(function () {
        alert(1233)
        if (_this.oWebControl != null) {
          alert(999)
          _this.oWebControl.JS_HideWnd() // 先让窗口隐藏，规避插件窗口滞后于浏览器消失问题
          _this.oWebControl.JS_Disconnect().then(
            function () { },
            function () { }
          )
        }
      })

      // 监听resize事件，使插件窗口尺寸跟随DIV窗口变化
      $(window).resize(function () {
        if (_this.oWebControl != null) {
          _this.oWebControl.JS_Resize(_this.$dom.width(), _this.$dom.height())
          // _this.setWndCover();
        }
      })

      // 监听滚动条scroll事件，使插件窗口跟随浏览器滚动而移动
      $(window).scroll(function () {
        if (_this.oWebControl != null) {
          _this.oWebControl.JS_Resize(_this.$dom.width(), _this.$dom.height())
          // _this.setWndCover();
        }
      })
    },
    // 设置偏移量
    setDocOffset: function (left, top) {
      var _this = this
      if (!bIE) {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'uninit'
          })
          .then(function (oData) {
            _this.oWebControl.JS_SetDocOffset({ left: left, top: top })
            _this.webInit()
            setTimeout(function () {
              if (_this.options.playMode) {
                _this.startPlayback(_this.listCopy)
              } else {
                _this.startPreview(_this.listCopy)
              }
            }, 500)
          })
      }
    },
    // 开始回放
    startPlayback: function (params) {
      this.listCopy = params
      var argument = { list: params }
      if (bIE) {
        var param = JSON.stringify({
          funcName: 'startMultiPlayback',
          argument: JSON.stringify(argument)
        })

        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(param)
        if (null == ret || '' == ret) {
            console.log("showCBInfo16");
          showCBInfo('插件接口调用失败', '')
        } else {
            console.log("showCBInfo17");
          showCBInfo(ret, '')
        }
      } else {
        this.oWebControl
          .JS_RequestInterface({
            funcName: 'startMultiPlayback',
            argument: JSON.stringify(argument)
          })
          .then(function (oData) {
              console.log("showCBInfo18");
            showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
          })
      }
    },
    // 停止回放
    stopPlayback: function (wnd) {
      if (bIE) {
        var param = {
          funcName: 'stopAllPlayback'
        }
        if (wnd && wnd !== 'all') {
          param.funcName = 'stopPlayback'
          param['argument'] = JSON.stringify({
            wndId: wnd
          })
        }
        var ocxObj = document.getElementById('OCXVideoPlugin')
        var ret = ocxObj.GerneralRequest(JSON.stringify(param))
        if (null == ret || '' == ret) {
          alert('插件接口调用失败')
        } else {
            console.log("showCBInfo19");
          showCBInfo(ret, '')
        }
      } else {
        var params = {
          funcName: 'stopAllPlayback'
        }
        if (wnd && wnd !== 'all') {
          params.funcName = 'stopPlayback'
          params['argument'] = JSON.stringify({
            wndId: wnd
          })
        }
        this.oWebControl.JS_RequestInterface(params).then(function (oData) {
            console.log("showCBInfo20");
          showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
        })
      }
    },
    // 回放录像下载
    playbackDownload: function (param) {
      this.oWebControl
        .JS_RequestInterface({
          funcName: 'downloadRecord',
          argument: JSON.stringify(param)
        })
        .then(function (oData) {
            console.log("showCBInfo21");
          showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''))
        })
    },
    // 扣除插件窗口,解决视频始终置顶导致页面弹出看不到的情况
    CuttingPartWindow: function (iLeft, iTop, iWidth, iHeight) {
      if (!bIE) {
        this.oWebControl.JS_CuttingPartWindow(iLeft, iTop, iWidth, iHeight)
      }
    },
    // 扣除插件窗口还原
    RepairPartWindow: function (iLeft, iTop, iWidth, iHeight) {
      if (!bIE) {
        this.oWebControl.JS_RepairPartWindow(iLeft, iTop, iWidth, iHeight)
      }
    },
    Disconnect: function () {
      if (this.oWebControl != null) {
        this.oWebControl.JS_HideWnd() // 先让窗口隐藏，规避插件窗口滞后于浏览器消失问题
        this.oWebControl.JS_Disconnect().then(
          function () { },
          function () { }
        )
      }
    },
    HideWnd: function () {
      if (this.oWebControl != null) {
        this.oWebControl.JS_HideWnd()
      }
    },
    ShowWnd: function () {
      if (this.oWebControl != null) {
        this.oWebControl.JS_ShowWnd()
      }
    }
  }
  // 暴露方法
  window.initPlugin = initPlugin
})(window, document)
