"use strict" ;

/* The MIT License
 *
 * Copyright 2019 子叶ovo( 1448848683@qq.com )
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without
 * limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* 文档
 * 请注意,，若是普通的浏览器环境，所有系列的api都将存放于 window.ziyeovo 下
 * 所有系列的 api 都将以 api 为简写，使用时请带入具体名称
 * 所有标记了 * 的参数，都为必要参数
 *
 * 子叶ovo - 背景图像
 * 为您的背景图像做个自适应和快捷替换吧
 * api : image_background
 *
 * new api( *emt.图像, obj.设置 ) : 将图像转为自适应背景
 * - *emt : img标签
 * - obj {
 *     resize : true , // 响应 size 事件。默认 true
 *     type : "cut" , // 适应方式。cut : 剪裁，stretch : 拉伸，defaule : 不改变，auto : 自适应。默认 cut
 *     align : 0.5 , // 水平对齐[ 0, 1 ]。0 : 左，1 : 右。默认 0.5
 *     vertical_align: 0.5 // 垂直对齐[ 0, 1 ]。0 : 上，1 : 下。默认 0.5
 *   }
 * - return Object.control ;
 *
 * control.img : 图像元素
 * control.clean( ) : 移除其所有效果( 保留图像元素 )
 * control.remove( ) : 移除其所有效果和图像
 * control.config( obj.设置 ) : 参照上述设置，用于更改设置，或恢复被移除的效果，或刷新（适用于更换图像地址后）
 * control.$opt : 配置，最好不要修改
 */

( ( ziyeovo, api ) => {
  let n = "image_background" ;
  if ( typeof exports === "object" && typeof module !== "undefined" ) { module.exports = api( ) }
  else if ( typeof define === "function" && define.amd ) { define( api ) }
  else if ( typeof ziyeovo !== "undefined" ) { if ( typeof ziyeovo.ziyeovo !== "object" ) ziyeovo.ziyeovo = new Object ; ziyeovo.ziyeovo[ n ] = api( ) }
  else { } ; // 神仙环境
} )( this, ( ) => {

  // 核心代码

const $f = new Object ,
          $a = new Array ;
let $out ;

// 含树( 移除与计算onload事件的事，也是这个函数做 )
$f[ 0x00 ] = ( c, o ) => {
  let b , d , e , f , r , s ;
  if ( c.img instanceof Element ) { // 如果它依旧是图像
    c.$opt = {
      resize : true ,
      type : "cut" ,
      align : 0.5 ,
      vertical_align : 0.5
    } ;
    r = true ;
    e = "ziyeovo-imageBackground" ;
    s = c.img.style ;
    if ( typeof o === "object" ) for ( b in c.$opt ) if ( typeof o[ b ] === typeof c.$opt[ b ] ) c.$opt[ b ] = o[ b ] ; // 复制
    c.$opt.align = $f[ 0x11 ]( 0, c.$opt.align, 1 ) ; // 限定区间
    c.$opt.vertical_align =  $f[ 0x11 ]( 0, c.$opt.vertical_align, 1 ) ;
    switch ( c.$opt.resize ) {
      case false :
        if ( !isNaN( d = parseInt( c.img.getAttribute( e ) ) ) ) {
          if ( !delete $a[ d ] ) $a[ d ] = void 0 ;
          c.img.removeAttribute( e ) ;
        } ;
      break ;
      default : // true
        if ( isNaN( parseInt( c.img.getAttribute( e ) ) ) ) {
          d = $f[ 0x10 ]( ) ;
          c.img.setAttribute( e, d ) ;
          $a[ d ] = c ;
        } ;
      break ;
    } ;
    if ( ( f = c.img.parentNode || c.img.parentElement ) instanceof Element ) {
      switch ( c.$opt.type ) {
        case "stretch" :
          s.position = "absolute" ;
          s.width = "100%" ;
          s.height = "100%" ;
          s.left = "0px" ;
          s.top = "0px" ;
        break ;
        case "default" :
          c.img.removeAttribute( "style" ) ;
        break ;
        case "auto" :
          s.position = "absolute" ;
          if ( ( f.clientHeight / f.clientWidth ) > ( c.img.height / c.img.width ) ) {
            s.width = "100%" ;
            s.height = "auto" ;
            s.left = "0px" ;
            s.top = `${ Math.abs( f.clientHeight - ( f.clientWidth / c.img.width * c.img.height ) ) / 2 }px` ;
          } else {
            s.width = "auto" ;
            s.height = "100%" ;
            s.left = `${ Math.abs( f.clientWidth - ( f.clientHeight / c.img.height * c.img.width ) ) / 2 }px` ;
            s.top = "0px" ;
          } ;
        break ;
        default : // cut
          s.position = "absolute" ;
          if ( ( f.clientHeight / f.clientWidth ) > ( c.img.height / c.img.width ) ) {
            s.width = "auto" ;
            s.height = "100%" ;
            s.top = "0px" ;
            s.left = `-${ Math.floor( c.$opt.align * Math.abs( f.clientWidth - ( f.clientHeight / c.img.height * c.img.width ) ) ) }px` ;
          } else {
            s.width = "100%" ;
            s.height = "auto" ;
            s.left = "0px" ;
            s.top = `-${ Math.floor( c.$opt.vertical_align * Math.abs( f.clientHeight - ( f.clientWidth / c.img.width * c.img.height ) ) ) }px` ;
          } ;
        break ;
      } ;
    } ;
  } else {
    r = false ;
  } ;
  b =
  d =
  e =
  f =
  s = void 0 ;
  return r ;
} ;

// 空置查找
$f[ 0x10 ] = ( ) => {
  let i ;
  for ( i = 0 ; i < $a.length ; i++ ) if ( typeof $a[ i ] !== "object" ) break ;
  return i ;
} ;
// 区间
$f[ 0x11 ] = ( a, b, c ) => ( b < a ? a : b > c ? c : b ) ;

// 尺寸改变
$f[ 0x12 ] = ( ) => {
  let i ;
  for ( i of $a ) if ( typeof i === "object" ) if ( !$f[ 0x00 ]( i, i.$opt ) ) if ( !delete $a[ i ] ) $a[ i ] = void 0 ;
  i = null ;
} ;

$out = ( img, config ) => {
  let out ;
  if ( typeof img !== "undefined" && img instanceof Element ) {
    out = new class {
      constructor ( ) {
        this.img = img ;
      } ;
      clean ( ) {
        this.config( { type : "default" , resize : false } ) ;
      } ;
      remove ( ) {
        let f ;
        this.clean( ) ;
        if ( this.img instanceof Element ) {
          if ( f = this.img.parentNode || this.img.parentElement ) {
            if ( f instanceof Element && typeof f.removeChild === "function" ) {
              f.removeChild( this.img ) ;
            } ;
          } ;
        } ;
        f = null ;
      } ;
      config ( config ) {
        $f[ 0x00 ]( this, config ) ;
      } ;
    } ;
    $f[ 0x00 ]( out, config ) ;
  } else {
    out = false ;
  } ;
  return out ;
} ;

window.addEventListener( "resize", $f[ 0x12 ] ) ;

return $out ;

} ) ;
