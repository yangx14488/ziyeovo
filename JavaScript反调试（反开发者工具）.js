/*
The MIT License (MIT)
Copyright 2019 青绾( yangx14488@foxmail.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* 反开发者工具1.0a
 * by 青绾( yangx14488@foxmail.com )
 *
 * mod.n : 函数，控制台打开时触发
 * mod.f : 函数，控制台关闭时触发
 * mod.warn : 函数，控制台打开且激活了无视断点调试触发（此情况通常是在尝试破解）
 *
 * 所有的函数可能都会多次触发，因为谁也不知道破解者到底会开启多少次控制台
 */
 /* anti-developer-tools version.1.0a
  * by 青绾( yangx14488@foxmail.com )
  *
  * mod.n : funcion, Called when the console is open
  * mod.f : funcion, Called when the console is close
  * mod.warn : function, If the hacker has enabled the "deactivate breakpoints"...
  */
  ( function( ){
    function anti_developer_tools ( mod ) {
      var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q ;
      a = 5 ;
      p = console.log ;
      q = console.clear || false;
      b = "by 青绾( yangx14488@foxmail.com )\n这里写你想让调试者看到的文本，请保留作者署名好不好" ;
      c = function ( ) { return new Date } ;
      h = function ( ) { while ( g-->a>>6 ) ( function( ){ } )[ "constructor" ]( "/*\n"+b+"\n*/\ndebugger;" )( ) } ;
      e = function ( z ) { if ( typeof z !== "boolean" ) z = false ; return ( ( d = z ) || ( f = c( g = a ) , h( ) , e( c( ) - f < a+1 ) ) ) } ;
      i = function ( a ) { if ( typeof a !== "boolean" ) a = true ; return j = a } ;
      if ( !!~navigator.userAgent.toLocaleLowerCase( ).indexOf( "firefox" ) ) {
        k = /./ ;
        k.toString = i ;
      } else {
        k = new Image( ) ;
        k.__defineGetter__( "id", i ) ;
      } ;
      l = function ( a, b ) {
        typeof mod === "object" && typeof mod[ a ] === "function" && mod[ a ]( ) ;
        n = b ;
      } ;
      n = 1 ;
      o = function ( ) {
        i( false ) ;
        try {
          p( k ) ;
          q && q( ) ;
          p( b ) ;
        } catch ( e ) {
          i( ) ;
        } ;
      } ;
      m = function ( ) {
        o( ) ; // 检测控制台的开启状况
        j && n !== 0 && n!== 2 && l( "n", 0 ) ; // 判断是否需要输出
        e( ) ; // 检查断点
        o( ) ; // 再次检测控制台的开启状况
        j ? ( d && n!==2 && l( "warn", 2 ) ) : ( n!==1 && l( "f", 1 ) ) ;
      } ;
      setInterval( m, a<<6 ) ;
      m( ) ;
    } ;
    anti_developer_tools ( {
      n : function ( ) {
        // 用户打开了开发者模式时，会调用这个函数
      } ,
      f : function ( ) {
        // 用户关闭了开发者模式时，会调用这个函数
      } ,
      warn : function ( ) {
        // 如果用户尝试强制破解时，或者是IE11及以下（迷），会调用这个函数
      }
    } ) ;
  } )( ) ;
