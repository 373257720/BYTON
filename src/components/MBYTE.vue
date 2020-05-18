<template>
  <div id="car">
    <header class="header-bg hover" :class="{'on':navIsactive,'open':open,'closing':closing}"  @mouseenter="mouseover1($event)" @mouseleave="mouseLeave1($event)">
      <div class="page_nav">
        <div class="nav_logo_wrap">
          <a href="/" class="navbar-logo"></a>
          <button class="navbar-mobile-toggle"  @click="animinate">
            <span class="sr-only"></span>
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div class="nav_right">
          <a href="/" class="reserve-btn">Reserve your BYTON</a>
          <a href="/" class="newsletter-btn bytonicon biconowNewsletter-"></a>
          <a href="/" class="search-btn bytonicon biconowSearch"></a>
        </div>
        <div class="nav_main" >
          <ul class="clearfix">
            <li class="item-menu item-menu-sub">
              <a href="/m-byte">M-BYTE</a>
              <ul class="specified" style="width: 0px;">
              </ul>
            </li>
            <li class="item-menu item-menu-sub">
              <a href="/m-byte">K-BYTE</a>
              <ul class="specified" style="width: 0px;">
              </ul>
            </li>
            <li  class="item-menu item-menu-sub"  @mouseenter="mouseover($event)" @mouseleave="mouseLeave($event)"
            >
              <a href="/m-byte" class="navc">INSIGHTS</a>
              <ul class="lichild3"  v-show="MainSwitch">
                <li><a class="navc" href="/insights/moments">Moments</a></li>
                <li><a class="navc" href="/insights/byton-place">BYTON Place</a></li>
                <li><a class="navc" href="/insights/byton-app">BYTON App</a></li>
                <li><a class="navc" href="/insights/co-creation">Co-creation</a></li>
              </ul>
            </li>
            <li class="item-menu item-menu-sub" @mouseenter="mouseover($event)" @mouseleave="mouseLeave($event)">
              <a href="/m-byte"  class="navc">COMPANY</a>
              <ul class="lichild3" v-show="MainSwitch" >
                <li><a class="navc" href="/insights/moments">About us</a></li>
                <li><a  class="navc" href="/insights/byton-place">Newsroom</a></li>
                <li><a class="navc" href="/insights/byton-app">Careers</a></li>
              </ul>
            </li>
            <li class="item-menu item-menu-sub">
              <a href="/m-byte">FAQ</a>
              <ul class="specified" style="width: 0px;">
              </ul>
            </li>
          </ul>
        </div>
        <div class="seach_nav"></div>
      </div>
    </header>
    <div id="main">
      <div class="apos-area">
        <div class="apos-area-widget">
          <div class="slider slider-01 content-top  multiButton unLetterSpacing unChangeLinePc">
            <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-autoheight">
              <div class="swiper-wrapper" style="height: 937px; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-active" v-show="!vediowatch" >
                  <div class="slider-wrapper">
                    <img class="slider-img fullScreenResize" src="https://s-4zswac.byton.com/attachments/ck0d7ya4w11sj0sk70je2y5ji-homepage-kv-iaa-2x.jpg"
                         srcset="https://s-4zswac.byton.com/attachments/ck0d7ya4w11sj0sk70je2y5ji-homepage-kv-iaa-2x.jpg 2880w,
                             https://s-4zswac.byton.com/attachments/ck0d7y93511sg0sk7n82ddkr2-homepage-kv-iaa2-mobilebase-2x.jpg 750w"
                         sizes="(max-width: 767px) 250px, 100vw"
                         alt="homepage kv iaa 2x" data-imginfo="2880,1800" data-imageinfo-mobile="750,1120" style="width: auto; height: 100%;">
                    <div class="slider-content fc-white">
                      <div class="imgTitle" style="display: block;">
                        <h2><strong>BYTON M-BYTE. YOUR PLATFORM FOR LIFE.</strong><strong> </strong></h2>
                        <h5>&nbsp;</h5>
                        <h5>The first premium electric SUV with an encapsulating<br>
                          interior experience as rich as the world it travels.</h5>
                        <p>&nbsp;</p>
                      </div>
                      <div class="apos-area" data-apos-area="" data-doc-id="cjvrr5xt0000701jxje5oaa9z">
                        <div class="apos-area-widget-wrapper  " data-apos-widget-wrapper="link-default">
                          <div class="apos-area-widget">
                            <a  class="" target="" @click="openvideo">
                              Learn more<span class="bytonicon biconowChevron"></span>
                            </a>
                            <a href="https://www.byton.com/reserve" class="" target="">
                              Reserve<span class="bytonicon biconowChevron"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="close video-close" @click="closevedio"></button>
                <video
                  id="myVideo"
                  class="video-js"
                >
                  <source
                    src="../assets/3698979e9abfe424a8fb89b8644eb627.mp4"
                    type="video/mp4"
                  >
                </video>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="s s1">
        <div class="apos-area apos-area--block-level-controls">
          <div class="pure-g aos-init " :class="{'aos-animate':iactive[0]}">
            <div class="pure-u-md-1-2 pure-u-1">
              <div class="intro intro-1 fc-grey ">
                <div class="zoom">
                  <img src="https://s-4zswac.byton.com/attachments/ck2u83auv1dml0smoro0ytatr-tile-1-bg-kbyte-2.jpg" alt="">
                </div>
                <div class="content"></div>
              </div>
            </div>
            <div class="pure-u-md-1-2 pure-u-1 ">
              <div class="intro intro-1 fc-grey ">
                <div class="zoom">
                  <img src="https://s-4zswac.byton.com/attachments/ck0d7zisq11sq0sk7d8vyntdy-tile-2-bg4.jpg" alt="">
                </div>
                <div class="content"></div>
              </div>
            </div>
          </div>
          <div class="pure-g aos-init" :class="{'aos-animate':iactive[1]}" >
            <div class="pure-u-md-1-2 pure-u-1">
              <div class="intro intro-1 fc-grey ">
                <div class="zoom">
                  <img src="https://s-4zswac.byton.com/attachments/ck7bby8j26tcf13pj6zhp5dq8-home-bytonplace-en-v07-2x.jpg" alt="">
                </div>
                <div class="content"></div>
              </div>
            </div>
            <div class="pure-u-md-1-2 pure-u-1">
              <div class="intro intro-1 fc-grey ">
                <div class="zoom">
                  <img src="https://s-4zswac.byton.com/attachments/ck2u83anp1dmj0smo784nf4xn-tile-4-bg-mobile-2.png" alt="">
                </div>
                <div class="content"></div>
              </div>
            </div>
          </div>
          <div class="pure-g aos-init" :class="{'aos-animate':iactive[2]}">
            <div class="pure-u-1">
              <div class="intro intro-1 fc-white ">
                <div class="zoom">
                  <img class="img-responsive" src="https://s-4zswac.byton.com/attachments/ck57mdj3g0bh10snu1b86iuc6-landingpage-company-careers-en-v06.jpg" alt="">
                </div>
                <div class="content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="footer_container">
        <div class="row">
          <div class="col-md-12 col-lg-7 footer-logo">
            <div class="row">
              <div class="clearfix wrapper">
                <a href="/" class="logo">
                  <img src="https://s-4zswac.byton.com/attachments/cjy596rpe0gtk0sl3t2c25h2u-foot-logo.svg" alt="">
                </a>
                <div class="content-links clearfix">
                  <div class="footer-links">
                    <a href="https://www.byton.com/company/newsroom" class="">Newsroom</a>
                    <a href="/knowledge/k1" class="">Knowledge</a>
                    <a href="https://developer.byton.com" class="">Developer</a>
                    <a href="https://www.byton.com/policy" class="">Privacy</a>
                    <a href="https://www.byton.com/terms" class="">Terms</a>
                    <a href="#" class="Contact-btn">Contact</a>
                  </div>
                  <div class="language">
                    <a href="#" class="curr">International</a>
                    <a href="http://www.byton.cn" class="">中国</a>
                    <div class="footer-copyright">
                      <p>© BYTON 2020</p>
                      <!--[object Object]-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-5">
            <div class="row">
              <div class="clearfix wrapper">
                <div class="right_container clearfix">
                  <div class="social-wrap hidden-xs hidden-sm hidden-md">
                          <span class="app-wrap" id="appQrCode">
                                <b>App</b>
                                <a href="/insights/byton-app" target="_blank" class="bytonicon biconQR" rel="nofollow">
                                    <div id="biconQR" style="display: none">
                                        <img src="https://s-4zswac.byton.com/attachments/cjx18tnlb03850qpkk5bht6e4-app-qrcode.full.png" alt="">
                                    </div>
                                </a>
                          </span>
                    <a href="http://www.facebook.com/BYTONcars/" target="_blank" class="bytonicon biconFacebook" rel="nofollow">
                      <!--facebook-->
                    </a>
                    <a href="https://www.linkedin.com/company/byton-cars" target="_blank" class="bytonicon biconLinkedin" rel="nofollow">
                      <!--linkin-->
                    </a>
                    <a href="https://www.instagram.com/bytoncars/" target="_blank" class="bytonicon biconInstagram1" rel="nofollow">
                      <!--instagram-->
                    </a>
                    <a href="https://www.youtube.com/channel/UCZqDl5e7z_YOODrDLpUJpcw" target="_blank" class="bytonicon biconYouTube" rel="nofollow">
                      <!--youtube-->
                    </a>
                    <a href="https://twitter.com/bytoncars" target="_blank" class="bytonicon biconTwitter1" rel="nofollow">
                      <!--twitter-->
                    </a>
                  </div>
                  <div class="footer-copyright">
                    <p>© BYTON 2020</p>
                    <!--[object Object]-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="footer-disclaimer">
              <div class="apos-area" data-apos-area="" data-doc-id="cjvrr5xuu000c01jxzsgixal4">
                <div class="apos-area-widget-wrapper  " data-apos-widget-wrapper="apostrophe-rich-text">
                  <div class="apos-area-widget apos-area-widget--contextual   " data-apos-widget="apostrophe-rich-text" data-apos-widget-id="w48911858983462693" data="{&quot;_id&quot;:&quot;w48911858983462693&quot;,&quot;type&quot;:&quot;apostrophe-rich-text&quot;,&quot;__docId&quot;:&quot;cjvrr5xuu000c01jxzsgixal4&quot;,&quot;__dotPath&quot;:&quot;disclaimer.items.0&quot;}" data-options="{&quot;edit&quot;:false}" data-apos-played="1"><div data-rich-text="" class="apos-rich-text c-rich-text "><p>BYTON M-Byte is not yet available for sale.<br>
                    Specifications are preliminary and may change without notice. The content herein is provided for informational purposes only.&nbsp;</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var timer1;
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        navIsactive:false,
        active_lichild3:false,
        hoveractive:false,
        open:false,
        closing:false,
        vediowatch:false,
        iactive:[true,false,false],
        MainSwitch:false,

      }
    },
    created() {
        let obj={a:{b:{c:2}}}
        function parsePath (path) {
          const segments = path.split('.')
          return function (obj) {
            for (let i = 0; i < segments.length; i++) {
              if (!obj) return
              obj = obj[segments[i]]
            }
            return obj
          }
        }
     let a=   parsePath('a.b.c')
     let b=a(obj);
     console.log(b);
    },
    mounted() {
      let self = this;
      // this.lichild3 = document.querySelector('.lichild3');
      let arr_animate = document.getElementsByClassName('aos-init');
      let s1 = document.querySelector('.s1');
      let swiperslideactive = document.querySelector('#main .swiper-slide-active');
      // self.imgwidth = document.querySelector('.slider-img').clientWidth;
      // self.changeMargin();
      // this.scrollEvent(arr_animate,s1);
      window.onresize =()=> {
        swiperslideactive.style.width = self.changeMargin() + 'px';
        this.scrollEvent(arr_animate,s1);

      };
      // console.log(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
      window.onscroll = ()=>{
        this.scrollEvent(arr_animate,s1);
      }
      // this.initVideo();
      this.initVideo();
    },
    methods:{
      openvideo(){
            this.vediowatch=true;
            // this.initVideo();
      },
      closevedio(){
        this.vediowatch=false
        this.initVideo();
        // let myPlayer = this.$video(myVideo, {
        //   //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        //   controls: false,
        //   //自动播放属性,muted:静音播放
        //   autoplay: "muted",
        //   //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        //   preload: "auto",
        //
        //   //设置视频播放器的显示宽度（以像素为单位）
        //   // width: "100px",
        //   // // //设置视频播放器的显示高度（以像素为单位）
        //   // height: "100px"
        // });
      },
      initVideo() {
        //初始化视频方法
        let arr=[1,2,3,]
        let b=arr.slice();
        let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "false",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          // width: "100px",
          // // //设置视频播放器的显示高度（以像素为单位）
          // height: "100px"
        });
        console.log(myPlayer)
      },
      animinate(){
        this.open=!this.open;

      },
      scrollEvent (arr_animate,s1) {
        let self=this;
        let headerheight = document.querySelector('.header-bg').clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var cHeight = window.innerHeight || document.documentElement.clientHeight;
        if (scrollTop > headerheight) {
          self.hoveractive = true;
        } else {
          if (! self.navIsactive) {
            self.hoveractive = false;
          }
        }
        if (scrollTop > arr_animate[0].offsetTop + s1.offsetTop - cHeight) {
          this.$set( self.iactive,0, true)
        } else {
          this.$set( self.iactive,0, false)
        }
        if (scrollTop > arr_animate[1].offsetTop + s1.offsetTop - cHeight) {
          this.$set( self.iactive,1, true)
        } else {
          this.$set( self.iactive,1, false)
        }
        if (scrollTop >arr_animate[2].offsetTop + s1.offsetTop - cHeight) {
          this.$set( self.iactive,2, true)
        } else {
          this.$set(self.iactive,2, false)
        }
      },
      mouseover1(e){//移进显示
        this.hoveractive=true;
      },
      mouseLeave1(e){
        this.navIsactive=false;
        let headerheight=document.querySelector('.header-bg').clientHeight;
        if(document.documentElement.scrollTop>headerheight){
          this.hoveractive=true;
        }else{
          if(!this.navIsactive){
            this.hoveractive=false;
          }
        }
      },
      mouseover(e){//移进显示v-show="MainSwitch"
        if(this.MainSwitch){
          if(!timer1){
            e.target.getElementsByClassName('lichild3')[0].style.display='inline-flex';
            this.navIsactive=true;
            timer1= setTimeout(()=> {
              clearTimeout(timer1);
              timer1=null;
            },100)
          }
        }
      },
      mouseLeave(e){//移出不显示
        if(this.MainSwitch){
          if(timer1===null){
            e.target.getElementsByClassName('lichild3')[0].style.display='none'
          }
        }
      },
      changeMargin(){
        let docWidth=document.documentElement.clientWidth;
        if(docWidth<991){
          this.MainSwitch=false;
          // this.open=true;
        }else{
          this.MainSwitch=true;
          this.open=false;
        }
        let img=document.querySelector('.slider-img');
        if(docWidth>this.imgwidth){
          img.style.width='100%';
          img.style.height='auto';
        }else{
          img.style.width='auto';
          img.style.height='100%';
        }
        return docWidth;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style lang='scss' scoped>

  .video-js {
    width: 100%;
    height: 100%;
    position: absolute;

  }
  .swiper-wrapper{
    position: relative;
  }
  .video-close{
    position: absolute;
    right: 65px;
    top: 83px;
    opacity: 1;
    transition: ease all .6s;
    background: url(https://s-4zswac.byton.com/attachments/cjy596rpe0gtk0sl3t2c25h2u-foot-logo.svg) no-repeat !important;
    width: 48px;
    height: 48px;
    background-size: cover;
    opacity: 1;
    /*position: relative;*/
    z-index: 9999999999999;
  }
  #car{
    background: transparent;
    font-size: 100%;
    font-weight: 400;
    @keyframes showSubmenuItem
    {
      1% {
        opacity: 0;
        -webkit-transform: translateY(-75%);
        -ms-transform: translateY(-75%);
        transform: translateY(-75%);}
      20%{
        opacity: 0.25;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);}
      50% {
        opacity: 0.75;
        -webkit-transform: translateY(-25%);
        -ms-transform: translateY(-25%);
        transform: translateY(-25%);}
      100%{
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);}
    }

    @-webkit-keyframes showSubmenuItem /*Safari and Chrome*/
    {
      1% {
        opacity: 0;
        -webkit-transform: translateY(-75%);
        -ms-transform: translateY(-75%);
        transform: translateY(-75%);}
      20%{
        opacity: 0.25;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);}
      50% {
        opacity: 0.75;
        -webkit-transform: translateY(-25%);
        -ms-transform: translateY(-25%);
        transform: translateY(-25%);}
      100%{
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);}
    }
    header{
      font-weight: 300;
      /*position: fixed;*/
      z-index: 20;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 90px;
      transition: all .5s;
      background: rgba(0,0,0,.1);
      box-shadow: 0 1px 6px 0 rgba(0,0,0,.1);
      .nav_main {
        text-align: center;
        font-size: 100%;
        font-weight: 400;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        box-sizing: border-box;
        .clearfix{
          position: relative;
          z-index: 1;
          margin-bottom: 0;
          zoom: 1;
          li.item-menu{
            animation: item-searchhide .4s both;
          }
          li{
            line-height: 90px;
            position: relative;
            z-index: 44545;
            display: inline-block;
            height: 90px;
            margin: 0 15px;
            a{
              color: #fff;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 2px;
              display: block;
            }
            .lichild3 {
              line-height: 60px;
              position: absolute;
              /*z-index: 1;*/
              top: 90px;
              opacity: 0.9;
              left: 50%;
              display:none;
              height: 60px;
              -webkit-transform: translateX(-50%) translateY(0);
              -ms-transform:translateX(-50%) translateY(0);
              transform:translateX(-50%) translateY(0);

            }

          };
          li:nth-child(3) .lichild3, li:nth-child(4) .lichild3{
            /*//transform: translateX(-185px) translateY(0);*/
            li{
              line-height: 60px;
              position: relative;
              /*float: left;*/
              width: 120px;
              height: 60px;
              margin: 0;
              -webkit-transform: translateY(-100%);
              -ms-transform: translateY(-100%);
              transform: translateY(-100%);
              opacity: 0;
              -webkit-animation-name: showSubmenuItem;
              animation-name: showSubmenuItem;
              -webkit-animation-duration: .3s;
              animation-duration: .3s;
              transition: transform 0.3s;
              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
              -webkit-animation-iteration-count: 1;
              animation-iteration-count: 1;
              /*-webkit-animation-direction: normal;*/
              /*animation-direction: normal;*/
              /*filter: alpha(opacity=0);*/
              -webkit-animation-fill-mode: forwards;
              animation-fill-mode: forwards;
            }
            li:nth-child(1){
              animation-delay: .23s;
            }
            li:nth-child(2){
              animation-delay: .31s;
            }
            li:nth-child(3){
              animation-delay: .39s;
            }
            li:nth-child(4){
              animation-delay: .47s;
            }
          }
        }
        .clearfix:before{
          display: table;
          content: '';
          overflow: hidden;
          height: 0;
          box-sizing: border-box;
        }
        .clearfix:after{
          clear: both;
          display: table;
          content: ' ';
          overflow: hidden;
          height: 0;
          box-sizing: border-box;
        }
      }
      .page_nav{
        zoom: 1;
        width: 1440px;
        margin: 0 auto;
        padding: 0 50px;
        height: 100%;
        opacity:1;
        box-sizing: border-box;
        .nav_right {
          position: relative;
          z-index: 2;
          float: right;
          padding: 22px 0;
          box-sizing: border-box;
          text-align: left;
          .reserve-btn{
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 2px;
            color: #fff;
            border: 1px solid #fff;
            line-height: 34px;
            position: relative;
            display: inline-block;
            height: 34px;
            padding: 0 15px;
            cursor: pointer;
            transition: all .5s;
            text-align: center;
            vertical-align: middle;
            text-decoration: none;
            background: transparent;
          }
          .reserve-btn::before , .reserve-btn::after{
            content: '';
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: .5s;
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
            box-sizing: border-box;
          }
          .reserve-btn::before{
            transform-origin:0 100%;
            border-bottom: 1px solid rgba(255,255,255,.8);
            border-left: 1px solid rgba(255,255,255,.8);
          }
          .reserve-btn::after{
            transform-origin:100% 0;
            border-top: 1px solid rgba(255,255,255,.8);
            border-right: 1px solid rgba(255,255,255,.8);
          }
          .reserve-btn:hover::before{
            transform: scale(1);
            border-bottom:1px solid rgba(108,108,111,.8);
            border-left: 1px solid rgba(108,108,111,.8);
          }
          .reserve-btn:hover::after{
            transform: scale(1);
            border-top: 1px solid rgba(108,108,111,.8);
            border-right:1px solid rgba(108,108,111,.8);
          }
          .biconowNewsletter-{
            margin-left: 19px;
            font-size: 25px;
            display: inline-block;
            text-decoration: none;
            color: #6c6c6f;
            line-height: 36px;
            width: 36px;
            height: 36px;
            text-align: center;
            vertical-align: middle;
          }
          .biconowNewsletter-::before{
            content: "\e645";
            box-sizing: border-box;
          }
          .search-btn{
            font-size: 25px;
            display: inline-block;
            text-decoration: none;
            color: #6c6c6f;
            width: 36px;
            height: 36px;
            margin-left: 10px;
            cursor: pointer;
            text-align: center;
            vertical-align: middle;
            line-height: 36px;
            position: relative;
          }
          .search-btn::before{
            content: "\e636";
            box-sizing: border-box;
          }
        }
      }

      .nav_logo_wrap{
        position: relative;
        z-index: 2;
        float: left;
        padding: 22px 0;
        box-sizing: border-box;
        .navbar-logo{
          /*background: #58bc58;*/
          background: url("https://s-4zswac.byton.com/attachments/cjy596rpe0gtk0sl3t2c25h2u-foot-logo.svg") no-repeat;
          background-size: 100% 100%;
          display: block;
          width: 180px;
          height: 46px;
          text-decoration: none;
        }
        .navbar-mobile-toggle{
          position: absolute;
          z-index: 9;
          left: 21px;
          display: none;
          height: auto;
          margin: 0;
          padding: 23px 0;
          border: none;
          outline: none;
          background: transparent;
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            border: 0;
          }
        }


        @media (max-width: 991px){
          .navbar-logo{
            width: 100px;
            height: 56px;
            margin: auto;
            background: #58bc58;
            background: url("https://s-4zswac.byton.com/attachments/cjy596rpe0gtk0sl3t2c25h2u-foot-logo.svg") 50% 0 no-repeat;;
            background-size: 100% 100%;
          }
          .navbar-mobile-toggle{
            top: 0;
            display: block;
            border-color: #ddd;
            .icon-bar{
              display: block;
              width: 22px;
              height: 2px;
              transition: all .2s;
              -webkit-transform: rotate(0);
              -ms-transform: rotate(0);
              transform: rotate(0);
              border-radius: 1px;
              background: #7a7977;
              background-color: #888;
            }
            .icon-bar+.icon-bar{
              margin-top: 5px;
            }
          }

        }
      }
      @media (max-width: 991px){
        .nav_logo_wrap{
          position: relative;
          /*z-index: 10;*/
          z-index: 2;
          float: none;
          height: 56px;
          margin: 0;
          padding: 0;
          text-align: center;
          background: #fff;
        }
      }
    }
    .hover{
      background: #fff;
      .page_nav .nav_right .reserve-btn{
        color: #6c6c6f;
        border: 1px solid #6c6c6f;
      }
      .nav_main .clearfix li a{
        color: #6c6c6f;
      }
    }
    .on::after{
      line-height: 60px;
      position: absolute;
      z-index: 0;
      top: 90px;
      left: 0;
      width: 100vw;
      height: 60px;
      content: '';
      background: rgba(255,255,255,.9);
      /*-webkit-animation: showSubmenu .5s;*/
      /*animation: showSubmenu .5s;*/
      /*transition: all .5s;*/

    }
    .open{
      height: 100%;
      .nav_main{
        visibility: visible;
        height: 100%;
        background: #f1f1f0;
        transition: background .46s cubic-bezier(.32,.08,.24,1),height .56s cubic-bezier(.52,.16,.24,1);
      }
      .nav_logo_wrap .navbar-mobile-toggle .top-bar{
        transform: rotate(45deg);
        transform-origin: 15% 100%;
      }
      .nav_logo_wrap .navbar-mobile-toggle .bottom-bar{
        transform: rotate(-45deg);
        transform-origin: 38% 90%;
      }
    }
    /*.closing {*/
    /*  height: 0;*/
    /*  .nav_main {*/
    /*    height: 0;*/
    /*    padding-bottom: 0;*/
    /*    transition: background .56s cubic-bezier(.32,.08,.24,1),height .46s cubic-bezier(.52,.16,.24,1);*/
    /*    background: transparent;*/
    /*  }*/
    /*}*/

    @media (max-width: 991px){
      header {
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        overflow-y: hidden;
        width: 100%;
        height: 56px;
        /*background: initial;*/
        .nav_main {
          line-height: normal;
          position: fixed;
          top: 0;
          left: 0;
          visibility: hidden;
          overflow-y: hidden;
          width: 100%;
          height: 0;
          max-height: none;
          padding: 70px 60px 30px;
          background: transparent;
          .clearfix{
            margin-bottom: 50px;
            padding-bottom: 50px;
            border-bottom: 1px solid #9f9e9f;
            li.item-menu{
              animation: item-searchhide .4s both;
            }
            li{
              line-height: normal;
              display: block;
              float: none;
              width: auto;
              height: auto;
              margin: 0 0 10px;
              a{
                color: #6c6c6f;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 2px;
              }
            }
          }
        }
        .page_nav {
          padding: 0;
          a{
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 2px;
            line-height: 42px;
            display: inline-block;
            height: 42px;
            padding: 0 15px;
            transition: opacity .2s cubic-bezier(.645,.045,.355,1);
            text-align: center;
          }
          .nav_right {
            position: absolute;
            z-index: 11;
            top: 0;
            right: 18px;
            padding: 10px 0;
            .reserve-btn {
              display: none;
            }
          }
        }

      }
    }

    #footer{
      position: fixed;
      font-size: 16px;
      position: relative;
      z-index: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #fff;
      background: #383736;
      .footer_container{
        width: 1440px;
        margin: 0 auto;
        padding: 50px;
        .row{

        }
      }
      .footer-logo{
        position: relative;
        z-index: 1;

      }
    }
    @media  (max-width: 1400px){
      #footer{
        .footer_container{
          width: 100%;
        }
      }
    }
    @media  (max-width: 1200px){
      #footer{
        .footer_container{
          padding-top: 50px;
        }
      }
      .footer-logo{
        display: block;
        text-align: center;

      }

    }
    @media (min-width: 1200px) {
      .col-lg-7 {
        width: 58.33333333%;
        float: left;
      }
    }
    @media  (max-width: 991px){
      #footer {
        .footer_container {
          padding-top: 25px;
          padding: 50px 10px;
        }

      }
    }
    @media (min-width: 992px) {
      .col-md-12{
        width: 100%;
        float: left;
      }
    }

    #main{
      line-height: 1.4286;
      position: relative;
      min-height: calc(100vh - 90px - 238px);
      background: #f1f1f0;
      z-index: 19;
      .apos-area, .apos-area-widgets, .apos-area-widget{
        position: relative;
      }

      .s1{
        position: relative;
        z-index: 100;
        padding: 4px;
        transition: background .3s;
        background-color: #fff;
        .aos-init{
          /*position: absolute;*/
          /*top:50px;*/
          opacity: 0;
          transform: translate3d(0,100px,0);
          letter-spacing: -.31em;
          text-rendering: optimizespeed;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          transition-duration: .5s;
          transition-timing-function: ease;
          .pure-u-1{
            margin-bottom: 2px;
            padding: 0 1px;
            .intro {
              margin: 4px;
              position: relative;
              overflow: hidden;
              transition: box-shadow 3s;
              text-align: center;
              .zoom{
                width: 100%;
                height: 100%;
                transform: scale(1);
                transition: -webkit-transform 2s;
                transition: transform 2s;
                transition: transform 2s,-webkit-transform 2s;

              }
              img{
                width: 100%;
                display: block;
                max-width: 100%;
                height: auto;
              }
            }
          }
          .pure-u-1:hover{
            .zoom{
              transform: scale(1.1);

            }
          }
        }
        .aos-animate{
          opacity: 1;
          /*transform: translateZ(0);*/
          transform: translate3d(0,0,0);
        }
        @media screen and (min-width: 48em){
          .pure-u-md-1-2, .pure-u-md-12-24 {
            width: 50%;
          }
        }
      }
      .slider{
        position: relative;
      }
      .slider-content{
        top: 15%;
        z-index: 10;
        width: 100%;
        max-width: 900px;
        /*font-family: Facto,Facto-Regular,Facto-Light,Microsoft YaHei,'微软雅黑',Hiragino Sans GB,'冬青黑体简体中文',WenQuanYi Micro Hei,sans-serif;*/
        text-align: center;
        /*letter-spacing: 2.15px;*/
        font-family: Facto,Facto-Regular,Facto-Light,Microsoft YaHei,'微软雅黑',Hiragino Sans GB,'冬青黑体简体中文',WenQuanYi Micro Hei,sans-serif;
        letter-spacing: normal;
        padding: 0 20px;
        position: absolute;
        line-height: 1.4;
        bottom: auto;
        left: 50%;
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        transform: translate(-50%,0);
        a{
          margin: 0 10px;
          color: inherit;
          .bytonicon{
            vertical-align: middle;
            font-family: "bytonicon" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }
          .biconowChevron::before {
            content: "\e628";
          }
        }
        h2{
          font-size: 30px;
          strong{
            font-weight: 700;
          }
        }
        h5{
          font-size: 18px;

        }
        p{
          font-size: 15px;
        }
      }
      .fc-white {
        color: #fff!important;
      }
      @media (max-width: 768px) {
        .slider-content{
          bottom:20%;
          /*letter-spacing: normal;*/
          h2{
            font-size: 22px;

          }
          h5{
            font-size: 15px;
            br{
              display: none;
            }
          }
          p{
            font-size: 13px;
          }
        }
      }


      .slider-01 .slider-01 .swiper-container{
        height: 100vh;
        width: 100%;
      }
      .slider-01 .slider-wrapper {
        position: absolute;
        z-index: 13;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }
      .slider-01 .slider-wrapper .slider-img{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: none;
        height: auto;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }

      /*.apos-area-widget-wrapper{*/

      /*}*/
      /*.pure-u-1{*/
      /*  margin-bottom: 2px;*/
      /*  padding: 0 1px;*/
      /*  width: 100%;*/
      /*  .intro-1{*/
      /*    margin: 4px;*/
      /*    position: relative;*/
      /*    overflow: hidden;*/
      /*    transition: box-shadow 3s;*/
      /*    text-align: center;*/
      /*    .zoom{*/
      /*      width: 100%;*/
      /*      height: 100%;*/
      /*      transition: -webkit-transform 2s;*/
      /*      transition: transform 2s;*/
      /*      transition: transform 2s,-webkit-transform 2s;*/
      /*      .img-responsive,{*/
      /*        display: block;*/
      /*        max-width: 100%;*/
      /*        height: auto;*/
      /*        width: 100%;*/
      /*      }*/
      /*    }*/
      /*  }*/
      /*}*/
    }
    @media (max-width: 991px) {
      #main{
        min-height: calc(100vh - 56px - 470px);
      }
    }
    @media (max-width: 1200px){
      #main {
        min-height: calc(100vh - 90px - 238px);
      }
    }

  }
</style>
