var TDev;
if (!TDev) TDev = {};

TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "\u4e00\u89f8\u5373\u52d5 \u00b7\u300c\u71df \u00b7 \u667a\u300d\u5065\u5eb7\u6d3b\u8e8d\u751f\u6d3b\u624b\u6a5f\u61c9\u7528\u7a0b\u5f0f\u000a";
cs.scriptColor = "\u0023FF0038";
cs.objectSingletons = {};
/* ACTION: menu */
function a_gUOZfOTgnhpqUJFM(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gUOZfOTgnhpqUJFM$0;
  s.name = "menu";
  s.$_ = undefined;
  s.$handler = undefined;
  s.$handler1 = undefined;
  s.$handler2 = undefined;
  s.$handler3 = undefined;
  s.$handler4 = undefined;
  s.$handler5 = undefined;
  s.$handler6 = undefined;
  s.$handler7 = undefined;
  return s;
}
cs.registerPage("menu", "gUOZfOTgnhpqUJFM", a_gUOZfOTgnhpqUJFM, false);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_gUOZfOTgnhpqUJFM$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ZoLKbWoqqZDCM00b");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xS5xjAeaqimEZGNh.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "y1762qAn8y3H4jSA");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_gUOZfOTgnhpqUJFM$3);
  var t_call_3 = (ok1(s, /* menu-21 */ s.d.$xX4TggmtEBKhT4Os) && /* menu-21 */ s.d.$xX4TggmtEBKhT4Os.clone(t_resumeCtx_2));
  return a_gUOZfOTgnhpqUJFM$3;
  } else {
  (s.pc = "wSl2Ka19tXj2rS4L");
  null;
  }
  return a_gUOZfOTgnhpqUJFM$2;
}
cs.registerStep(a_gUOZfOTgnhpqUJFM$0, 'a_gUOZfOTgnhpqUJFM$0');

function a_gUOZfOTgnhpqUJFM$3(s) {
  var t_pauseRes_4 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_4);
  (/* bgblue */ s.d.$fAVmOg9Iv81zmPMx = t_pauseRes_4);
  s.rt.logDataWrite();
  (s.pc = "Vqd4Nn0vnVSpnTBy");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_gUOZfOTgnhpqUJFM$4);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_5));
  return a_gUOZfOTgnhpqUJFM$4;
}
cs.registerStep(a_gUOZfOTgnhpqUJFM$3, 'a_gUOZfOTgnhpqUJFM$3');

function a_gUOZfOTgnhpqUJFM$2(s) {
  var t_elseIf_6 = true;
  (s.pc = "L3U4u4yFxWOxkuMe");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "Aho445HgC9PedV4m");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "CYmP2lfMZtFzOrB9");
  lib.Box.push_box(s);
  (s.pc = "xiJhLVQGUVWtf2fV");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "usOArjGnDT3NDuKb");
  lib.Box.set_margins(1, 0, 1, 0, s);
  (s.pc = "fN959A3mBiWg2kM3");
  lib.Box.push_box(s);
  (s.pc = "ONVUf5G1TRVcvprQ");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "hDi9RzWuOdZ4lq2v");
  lib.Box.set_height(10, s);
  (s.pc = "w3nvxAFf4JM52r8c");
  (ok1(s, /* Menu-09 */ s.d.$xHhpI2VeJYdwYpQD) && /* Menu-09 */ s.d.$xHhpI2VeJYdwYpQD.post_to_wall(s));
  (s.pc = "xlml9O5yJa7isH4n");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$6(t_lmbProxy_7(la0), la1) });
  (s.pc = "izwZBXu2Fhy4PQdB");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  (s.pc = "osynva47V52U09IT");
  lib.Box.push_box(s);
  (s.pc = "Ortwg8Jgj2khs2AZ");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "kN4EDOby65qrO7mJ");
  lib.Box.set_height(10, s);
  (s.pc = "gO1v7ageIn43wtTj");
  (ok1(s, /* Menu-10 */ s.d.$HwQWnuP71ej2KMOJ) && /* Menu-10 */ s.d.$HwQWnuP71ej2KMOJ.post_to_wall(s));
  (s.pc = "xeAjC4SrxrpXtw4v");
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$handler1 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$7(t_lmbProxy_8(la0), la1) });
  (s.pc = "nGXkJ6o0PWzN5GCK");
  (ok1(s, s.$handler1) && lib.Box.on_tapped(s.$handler1, s));
  lib.Box.pop_box(s);
  (s.pc = "hni25AgfX1Uzyfv3");
  lib.Box.push_box(s);
  (s.pc = "ZM2fvtZEHApXMExh");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "uY2G8nMCE4H2Z9jZ");
  lib.Box.set_height(10, s);
  (s.pc = "qRbk0t2QpHEhEy03");
  (ok1(s, /* Menu-12 */ s.d.$NwyAabazDWvuS2EM) && /* Menu-12 */ s.d.$NwyAabazDWvuS2EM.post_to_wall(s));
  (s.pc = "bAzbQzpA2kqAGuA0");
  var t_lmbProxy_9 = s.libs.mkLambdaProxy;
  (s.$handler2 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$8(t_lmbProxy_9(la0), la1) });
  (s.pc = "xb5sy6PwDeNJBiH1");
  (ok1(s, s.$handler2) && lib.Box.on_tapped(s.$handler2, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  (s.pc = "xUZ4XPNmuv6MXmvH");
  lib.Box.push_box(s);
  (s.pc = "Gba9qDU43CSnxGoV");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "iN7E014sVNVchqc6");
  lib.Box.set_margins(1, 0, 1, 0, s);
  (s.pc = "tEqvjmJ5TaLzJl2Y");
  lib.Box.push_box(s);
  (s.pc = "Obm42zx22reota3u");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "kfhla4zsB0iH2IeB");
  lib.Box.set_height(10, s);
  (s.pc = "NIyD4367I5MoKJOs");
  (ok1(s, /* Menu-plk */ s.d.$TfOcikdCb2n7sSFm) && /* Menu-plk */ s.d.$TfOcikdCb2n7sSFm.post_to_wall(s));
  (s.pc = "xbBh6OYUaDCkA26K");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$handler3 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$9(t_lmbProxy_10(la0), la1) });
  (s.pc = "xmsHoE42Bn5hCiuG");
  (ok1(s, s.$handler3) && lib.Box.on_tapped(s.$handler3, s));
  lib.Box.pop_box(s);
  (s.pc = "vzW6hSLg40PoPelF");
  lib.Box.push_box(s);
  (s.pc = "aILNAe6UTrz9lYyE");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "xBqM6CcORgfzc4uB");
  lib.Box.set_height(10, s);
  (s.pc = "ItFkT0g2ycZmlpEF");
  (ok1(s, /* Menu-herbalife */ s.d.$qAvY7R0a4qU5ecZ0) && /* Menu-herbalife */ s.d.$qAvY7R0a4qU5ecZ0.post_to_wall(s));
  (s.pc = "HrEJSy3ELYTjanHT");
  var t_lmbProxy_11 = s.libs.mkLambdaProxy;
  (s.$handler4 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$10(t_lmbProxy_11(la0), la1) });
  (s.pc = "dnkvLPUWwbTpt823");
  (ok1(s, s.$handler4) && lib.Box.on_tapped(s.$handler4, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  (s.pc = "GHKzI31AkrGES2ae");
  lib.Box.push_box(s);
  (s.pc = "tjPRGI2IldgOkHzp");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "hN1TtH9rZz9b5674");
  lib.Box.set_margins(1, 0, 1, 0, s);
  (s.pc = "Jq3PJXn9C3kvCeQo");
  lib.Box.push_box(s);
  (s.pc = "YE0C067CuQGYu3Bq");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "agB820GG2wxtJZO4");
  lib.Box.set_height(10, s);
  (s.pc = "LWBadmCS92YEn2KE");
  (ok1(s, /* Menu-15 */ s.d.$jJ5XwEzIqFfu7zzh) && /* Menu-15 */ s.d.$jJ5XwEzIqFfu7zzh.post_to_wall(s));
  (s.pc = "jLUbLfuO34Z2RV4r");
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$handler5 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$11(t_lmbProxy_12(la0), la1) });
  (s.pc = "xV2YghPNfBHVrsa1");
  (ok1(s, s.$handler5) && lib.Box.on_tapped(s.$handler5, s));
  lib.Box.pop_box(s);
  (s.pc = "jYhPPWc2qbdt3lRD");
  lib.Box.push_box(s);
  (s.pc = "Gu77xiayFUxkhR3S");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "pISceQeln94wAkWf");
  lib.Box.set_height(10, s);
  (s.pc = "r7VeWjvpwxWc3vnw");
  (ok1(s, /* Menu-16 */ s.d.$W34l9p0Y4L5m0MeF) && /* Menu-16 */ s.d.$W34l9p0Y4L5m0MeF.post_to_wall(s));
  (s.pc = "d0U0G2pDD4YJ477k");
  var t_lmbProxy_13 = s.libs.mkLambdaProxy;
  (s.$handler6 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$12(t_lmbProxy_13(la0), la1) });
  (s.pc = "FEbgNmPo7gswnkRd");
  (ok1(s, s.$handler6) && lib.Box.on_tapped(s.$handler6, s));
  lib.Box.pop_box(s);
  (s.pc = "DQInxT0JBntkaiQf");
  lib.Box.push_box(s);
  (s.pc = "QlUXewm3ySCOzQM1");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "Uu1djciVdB37Tmsb");
  lib.Box.set_height(10, s);
  (s.pc = "xwsIfnGgkWqxHJdg");
  (ok1(s, /* Menu-17 */ s.d.$xLbZ5ONNUXjJ7z8c) && /* Menu-17 */ s.d.$xLbZ5ONNUXjJ7z8c.post_to_wall(s));
  (s.pc = "xL62hXu53Zx4DcV4");
  var t_lmbProxy_14 = s.libs.mkLambdaProxy;
  (s.$handler7 = function(la0, la1) { return a_a_gUOZfOTgnhpqUJFM$13(t_lmbProxy_14(la0), la1) });
  (s.pc = "akcIn9oauQa3LUBB");
  (ok1(s, s.$handler7) && lib.Box.on_tapped(s.$handler7, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  (s.pc = "xZPM2EwUZW2ZJJ4P");
  null;
  s.rt.leave_render();
  } else {
  (s.pc = "x7jfoNSMQZ4D2IVq");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_gUOZfOTgnhpqUJFM$2, 'a_gUOZfOTgnhpqUJFM$2');

function a_gUOZfOTgnhpqUJFM$4(s) {
  (s.pc = "oxmhHTgtT2DKpvMz");
  lib.Wall.show_back_button(false, s);
  (s.pc = "qhyakLKltqxA9u1U");
  lib.Wall.show_title_bar(false, s);
  return a_gUOZfOTgnhpqUJFM$2;
}
cs.registerStep(a_gUOZfOTgnhpqUJFM$4, 'a_gUOZfOTgnhpqUJFM$4');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::6 */
function a_a_gUOZfOTgnhpqUJFM$6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$6$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a6", "a_gUOZfOTgnhpqUJFM$6", a_a_gUOZfOTgnhpqUJFM$6, true);

function a_a_gUOZfOTgnhpqUJFM$6$0(s) {
  (s.pc = "x4ienbbOz8TZwzdo");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "Step Counter");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$6$0, 'a_a_gUOZfOTgnhpqUJFM$6$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::7 */
function a_a_gUOZfOTgnhpqUJFM$7(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$7$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a7", "a_gUOZfOTgnhpqUJFM$7", a_a_gUOZfOTgnhpqUJFM$7, true);

function a_a_gUOZfOTgnhpqUJFM$7$0(s) {
  (s.pc = "DPGZXcsuNW2C5V4b");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "BMI Calculator");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$7$0, 'a_a_gUOZfOTgnhpqUJFM$7$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::8 */
function a_a_gUOZfOTgnhpqUJFM$8(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$8$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a8", "a_gUOZfOTgnhpqUJFM$8", a_a_gUOZfOTgnhpqUJFM$8, true);

function a_a_gUOZfOTgnhpqUJFM$8$0(s) {
  (s.pc = "xS41rGtEc8HdgxbW");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "QFEIKQDNFrkDeEwY");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$8$0, 'a_a_gUOZfOTgnhpqUJFM$8$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::9 */
function a_a_gUOZfOTgnhpqUJFM$9(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$9$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a9", "a_gUOZfOTgnhpqUJFM$9", a_a_gUOZfOTgnhpqUJFM$9, true);

function a_a_gUOZfOTgnhpqUJFM$9$0(s) {
  (s.pc = "d8gAiy4bZ95VfMgX");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "PoLeungKuk");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$9$0, 'a_a_gUOZfOTgnhpqUJFM$9$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::10 */
function a_a_gUOZfOTgnhpqUJFM$10(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$10$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a10", "a_gUOZfOTgnhpqUJFM$10", a_a_gUOZfOTgnhpqUJFM$10, true);

function a_a_gUOZfOTgnhpqUJFM$10$0(s) {
  (s.pc = "VD42eghz9Sc5f4Bk");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "HerbalLife");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$10$0, 'a_a_gUOZfOTgnhpqUJFM$10$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::11 */
function a_a_gUOZfOTgnhpqUJFM$11(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$11$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a11", "a_gUOZfOTgnhpqUJFM$11", a_a_gUOZfOTgnhpqUJFM$11, true);

function a_a_gUOZfOTgnhpqUJFM$11$0(s) {
  (s.pc = "g92ykzkXoFV8Jbgx");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "HBSamantha");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$11$0, 'a_a_gUOZfOTgnhpqUJFM$11$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::12 */
function a_a_gUOZfOTgnhpqUJFM$12(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$12$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a12", "a_gUOZfOTgnhpqUJFM$12", a_a_gUOZfOTgnhpqUJFM$12, true);

function a_a_gUOZfOTgnhpqUJFM$12$0(s) {
  (s.pc = "qHGmXvsQNlGlAuAQ");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "HBMilkshake");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$12$0, 'a_a_gUOZfOTgnhpqUJFM$12$0');

/* ACTION: a_gUOZfOTgnhpqUJFM::lambda::13 */
function a_a_gUOZfOTgnhpqUJFM$13(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_gUOZfOTgnhpqUJFM$13$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_gUOZfOTgnhpqUJFM\u003a\u003alambda\u003a\u003a13", "a_gUOZfOTgnhpqUJFM$13", a_a_gUOZfOTgnhpqUJFM$13, true);

function a_a_gUOZfOTgnhpqUJFM$13$0(s) {
  (s.pc = "TT8zYtpCNdyVgFfm");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "HBNutrition");
  return s.rt.leave();
}
cs.registerStep(a_a_gUOZfOTgnhpqUJFM$13$0, 'a_a_gUOZfOTgnhpqUJFM$13$0');


//Ent_xS5xjAeaqimEZGNh
function Ent_xS5xjAeaqimEZGNh(p) {
  this.parent = p;
}
Ent_xS5xjAeaqimEZGNh.prototype = new lib.ObjectEntry();
Ent_xS5xjAeaqimEZGNh.prototype.keys = [];
Ent_xS5xjAeaqimEZGNh.prototype.values = [];
Ent_xS5xjAeaqimEZGNh.prototype.fields = [];
//Tbl_xS5xjAeaqimEZGNh
function Tbl_xS5xjAeaqimEZGNh(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xS5xjAeaqimEZGNh.prototype = new lib.ObjectSingleton();
Tbl_xS5xjAeaqimEZGNh.prototype.entryCtor = Ent_xS5xjAeaqimEZGNh;
cs.objectSingletons["menu page data"] = function(d) { return d.$xS5xjAeaqimEZGNh };
Tbl_xS5xjAeaqimEZGNh.prototype.selfCtor = Tbl_xS5xjAeaqimEZGNh;
Tbl_xS5xjAeaqimEZGNh.prototype.stableName = "xS5xjAeaqimEZGNh";
Tbl_xS5xjAeaqimEZGNh.prototype.entryKindName = "menu page data";

// jsonimport
Ent_xS5xjAeaqimEZGNh.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$xS5xjAeaqimEZGNh");
/* ACTION: Step Counter */
function a_Ihl2CFTqOlBE0kYr(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Ihl2CFTqOlBE0kYr$0;
  s.name = "Step Counter";
  s.$_ = undefined;
  s.$_body_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("Step Counter", "Ihl2CFTqOlBE0kYr", a_Ihl2CFTqOlBE0kYr, false);

function a_Ihl2CFTqOlBE0kYr$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "GfU0xxawPufXpXl0");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$ryHGxrg0MdAglx0U.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xES0e4HF3GDQ6paF");
  (/* x */ s.d.$fB9F8n1JWNZx16mo = 0);
  s.rt.logDataWrite();
  (s.pc = "nSlaio4de4NmPL6e");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "VuB7SEqW8z6t8yXC");
  lib.Wall.show_back_button(false, s);
  (s.pc = "TOfvpseYTw974bLF");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "O1aKmJnzzMxoIO5Y");
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$_body_ = function(la0, la1) { return a_a_Ihl2CFTqOlBE0kYr$3(t_lmbProxy_3(la0), la1) });
  (s.pc = "xFFqtYaGFHbJ4B4p");
  var t_call_4 = (ok1(s, s.$_body_) && lib.Senses.on_shake(s.$_body_, s));
  t_call_4;
  } else {
  (s.pc = "xUBSan2iOJdACh1o");
  null;
  }
  var t_elseIf_5 = true;
  (s.pc = "xHk09UO2v61ePgne");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "Nppe1YNoPnSAygY7");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "OjcCeUQsKKYxIvZ8");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "qaXyXsy9QFnqOMIv");
  lib.Box.set_font_size(5, s);
  (s.pc = "hZEZYFhJp72CSlku");
  lib.Box.push_box(s);
  (s.pc = "IvOT3h7YO7KJoyjV");
  lib.Box.set_margins(0, 0, 0, 1, s);
  (s.pc = "ooFHhEsX4Xy1gxbS");
  var t_call_6 = lib.Colors.black(s);
  (ok1(s, t_call_6) && lib.Box.set_foreground(t_call_6, s));
  (s.pc = "H9WCJA9MHmY8FMap");
  (ok1(s, /* x */ s.d.$fB9F8n1JWNZx16mo) && lib.Number_.post_to_wall(/* x */ s.d.$fB9F8n1JWNZx16mo, s));
  lib.Box.pop_box(s);
  (s.pc = "Ri1JUGea3fYpaJ62");
  lib.Box.push_box(s);
  (s.pc = "xL5exN2kZgb0mKq3");
  lib.Box.set_margins(0, 0, 0, 1, s);
  (s.pc = "TW7iT4RvxiUhOC4P");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "ZOexgrJMSQuyJzLT");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "Q68KPPJauX4y2jwH");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "RvJXZNg9c7pbMeDG");
  lib.Box.set_height(4, s);
  (s.pc = "bq1jCavujBexMERP");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_Ihl2CFTqOlBE0kYr$5(t_lmbProxy_7(la0), la1) });
  (s.pc = "K86mvMZW6DD4XAJe");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "GkSyIBukfyr7I6Xo");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_Ihl2CFTqOlBE0kYr$0, 'a_Ihl2CFTqOlBE0kYr$0');

/* ACTION: a_Ihl2CFTqOlBE0kYr::lambda::3 */
function a_a_Ihl2CFTqOlBE0kYr$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Ihl2CFTqOlBE0kYr$3$0;
  s.name = "Step Counter";
  return s;
}
cs.registerLambda("a_Ihl2CFTqOlBE0kYr\u003a\u003alambda\u003a\u003a3", "a_Ihl2CFTqOlBE0kYr$3", a_a_Ihl2CFTqOlBE0kYr$3, true);

function a_a_Ihl2CFTqOlBE0kYr$3$0(s) {
  (s.pc = "rzxELVwc9exJi1oZ");
  var t_infix_0 = (ok1(s, /* x */ s.d.$fB9F8n1JWNZx16mo) && (/* x */ s.d.$fB9F8n1JWNZx16mo + 1));
  (/* x */ s.d.$fB9F8n1JWNZx16mo = t_infix_0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_Ihl2CFTqOlBE0kYr$3$0, 'a_a_Ihl2CFTqOlBE0kYr$3$0');

/* ACTION: a_Ihl2CFTqOlBE0kYr::lambda::5 */
function a_a_Ihl2CFTqOlBE0kYr$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_Ihl2CFTqOlBE0kYr$5$0;
  s.name = "Step Counter";
  return s;
}
cs.registerLambda("a_Ihl2CFTqOlBE0kYr\u003a\u003alambda\u003a\u003a5", "a_Ihl2CFTqOlBE0kYr$5", a_a_Ihl2CFTqOlBE0kYr$5, true);

function a_a_Ihl2CFTqOlBE0kYr$5$0(s) {
  (s.pc = "xauOw7Y27QQ14hSr");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "oV2VltX6ZYOHirqP");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_Ihl2CFTqOlBE0kYr$5$0, 'a_a_Ihl2CFTqOlBE0kYr$5$0');


//Ent_ryHGxrg0MdAglx0U
function Ent_ryHGxrg0MdAglx0U(p) {
  this.parent = p;
}
Ent_ryHGxrg0MdAglx0U.prototype = new lib.ObjectEntry();
Ent_ryHGxrg0MdAglx0U.prototype.keys = [];
Ent_ryHGxrg0MdAglx0U.prototype.values = [];
Ent_ryHGxrg0MdAglx0U.prototype.fields = [];
//Tbl_ryHGxrg0MdAglx0U
function Tbl_ryHGxrg0MdAglx0U(l) {
  this.libName = l;
  this.initParent();
}
Tbl_ryHGxrg0MdAglx0U.prototype = new lib.ObjectSingleton();
Tbl_ryHGxrg0MdAglx0U.prototype.entryCtor = Ent_ryHGxrg0MdAglx0U;
cs.objectSingletons["end page data"] = function(d) { return d.$ryHGxrg0MdAglx0U };
Tbl_ryHGxrg0MdAglx0U.prototype.selfCtor = Tbl_ryHGxrg0MdAglx0U;
Tbl_ryHGxrg0MdAglx0U.prototype.stableName = "ryHGxrg0MdAglx0U";
Tbl_ryHGxrg0MdAglx0U.prototype.entryKindName = "end page data";

// jsonimport
Ent_ryHGxrg0MdAglx0U.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$ryHGxrg0MdAglx0U");
/* ACTION: BMI Calculator */
function a_DqiNp28pDUw4ks8r(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_DqiNp28pDUw4ks8r$0;
  s.name = "BMI Calculator";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("BMI Calculator", "DqiNp28pDUw4ks8r", a_DqiNp28pDUw4ks8r, false);

function a_DqiNp28pDUw4ks8r$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "gqYX2oRyWz5cfBNk");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$ryHGxrg0MdAglx0U.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "SPzJGkcCxQIJe3yb");
  (/* weight */ s.d.$tupiaPNEY9ZasE9P = "");
  s.rt.logDataWrite();
  (s.pc = "ghbq2uxRLwUSDlMf");
  (/* height */ s.d.$vSqjhWxIQo23kgra = "");
  s.rt.logDataWrite();
  (s.pc = "xIxVKoW61MloeRAE");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "dBUEEYv5YcP4Dz0G");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_DqiNp28pDUw4ks8r$3);
  (ok1(s, /* menu-21 */ s.d.$xX4TggmtEBKhT4Os) && lib.Wall.set_background_picture(/* menu-21 */ s.d.$xX4TggmtEBKhT4Os, t_resumeCtx_3));
  return a_DqiNp28pDUw4ks8r$3;
  } else {
  (s.pc = "J3I4mwkOqVzQr0pM");
  null;
  }
  return a_DqiNp28pDUw4ks8r$2;
}
cs.registerStep(a_DqiNp28pDUw4ks8r$0, 'a_DqiNp28pDUw4ks8r$0');

function a_DqiNp28pDUw4ks8r$3(s) {
  (s.pc = "f3bfNi59fYuqItVp");
  lib.Wall.show_back_button(false, s);
  (s.pc = "MTgxFYkhAsXxZ9vV");
  lib.Wall.show_title_bar(false, s);
  return a_DqiNp28pDUw4ks8r$2;
}
cs.registerStep(a_DqiNp28pDUw4ks8r$3, 'a_DqiNp28pDUw4ks8r$3');

function a_DqiNp28pDUw4ks8r$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "cO5xRUZB4tF5GdWQ");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "FQULnQ4nP5HcLw1n");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "mLfxP4S5s2oz4p3B");
  lib.Box.push_box(s);
  (s.pc = "ArfWxb8w6OmLGRDz");
  lib.Box.set_margins(2, 0, 0, 0, s);
  (s.pc = "VdARXwharVTFauWZ");
  lib.Box.set_padding(0, 1, 0, 1, s);
  (s.pc = "Dn944146Jfst4GRd");
  lib.Box.set_font_size(1, s);
  (s.pc = "kNGwHbJvcAOOsLoF");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "xdQJJUoxgeI7LQ2y");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "CdaAbVv3NswQzyvT");
  lib.String_.post_to_wall("BMI \u8a08\u7b97\u5668", s);
  (s.pc = "irCL4SKCaVq1MqF4");
  var t_call_5 = lib.GlobalVarRef.mk(s.d, "$tupiaPNEY9ZasE9P")._ref(s);
  var t_libcall_6 = s.libs["AeHa4dIx1ntTUE2Y"]["input text line"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_DqiNp28pDUw4ks8r$5, "\u9ad4\u91cd\uff08\u516c\u65a4\uff09\u003a", t_call_5));
  } else {
  (s.pc = "xSELqixyWL20DjWu");
  null;
  }
  return a_DqiNp28pDUw4ks8r$4;
}
cs.registerStep(a_DqiNp28pDUw4ks8r$2, 'a_DqiNp28pDUw4ks8r$2');

function a_DqiNp28pDUw4ks8r$5(s) {
  (s.pc = "f4On14crLCGNjRMV");
  var t_call_7 = lib.GlobalVarRef.mk(s.d, "$vSqjhWxIQo23kgra")._ref(s);
  var t_libcall_8 = s.libs["AeHa4dIx1ntTUE2Y"]["input text line"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_DqiNp28pDUw4ks8r$6, "\u9ad8\u5ea6\uff08\u7c73\uff09\u003a", t_call_7));
}
cs.registerStep(a_DqiNp28pDUw4ks8r$5, 'a_DqiNp28pDUw4ks8r$5');

function a_DqiNp28pDUw4ks8r$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_DqiNp28pDUw4ks8r$4, 'a_DqiNp28pDUw4ks8r$4');

function a_DqiNp28pDUw4ks8r$6(s) {
  (s.pc = "Zk1LNSNXFK7UYZ0P");
  lib.Box.push_box(s);
  (s.pc = "hPuSreY0g3zXC5OJ");
  lib.Box.set_margins(1, 0, 0, 0, s);
  (s.pc = "h9pBcSgHQqE9N8uC");
  lib.Box.set_font_size(2, s);
  (s.pc = "GyX6im52CCueciEs");
  lib.String_.post_to_wall("BMI\u6578\u503c", s);
  lib.Box.pop_box(s);
  (s.pc = "xZy0ZA24pCbxNJQa");
  lib.Box.push_box(s);
  (s.pc = "AEvnnKWyquLPMpcv");
  lib.Box.set_font_size(4, s);
  var t_elseIf_9 = true;
  (s.pc = "xOKhjb24zGeIChvw");
  var t_call_10 = (ok1(s, /* weight */ s.d.$tupiaPNEY9ZasE9P) && lib.String_.is_empty(/* weight */ s.d.$tupiaPNEY9ZasE9P, s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Boolean_.not(t_call_10, s));
  ok1(s, t_call_11);
  if (t_call_11) {
  var t_elseIf_12 = true;
  (s.pc = "xr2lXVVLK8b9KgSu");
  var t_call_13 = (ok1(s, /* height */ s.d.$vSqjhWxIQo23kgra) && lib.String_.is_empty(/* height */ s.d.$vSqjhWxIQo23kgra, s));
  var t_call_14 = (ok1(s, t_call_13) && lib.Boolean_.not(t_call_13, s));
  ok1(s, t_call_14);
  if (t_call_14) {
  (s.pc = "JEj1pYsB32XfT4sS");
  var t_call_15 = (ok1(s, /* weight */ s.d.$tupiaPNEY9ZasE9P) && lib.String_.to_number(/* weight */ s.d.$tupiaPNEY9ZasE9P, s));
  var t_call_16 = (ok1(s, /* height */ s.d.$vSqjhWxIQo23kgra) && lib.String_.to_number(/* height */ s.d.$vSqjhWxIQo23kgra, s));
  var t_infix_17 = (ok2(s, t_call_15, t_call_16) && (t_call_15 / t_call_16));
  var t_call_18 = (ok1(s, /* height */ s.d.$vSqjhWxIQo23kgra) && lib.String_.to_number(/* height */ s.d.$vSqjhWxIQo23kgra, s));
  var t_infix_19 = (ok2(s, t_infix_17, t_call_18) && (t_infix_17 / t_call_18));
  var t_call_20 = (ok1(s, t_infix_19) && lib.Math_.round_with_precision(t_infix_19, 2, s));
  (ok1(s, t_call_20) && lib.Number_.post_to_wall(t_call_20, s));
  } else {
  (s.pc = "xUuFtQJFZbig7tPu");
  null;
  }
  } else {
  (s.pc = "LC2Qg4gch9lAp6Si");
  null;
  }
  lib.Box.pop_box(s);
  (s.pc = "xCyAxskB0BjvA9M8");
  lib.Box.push_box(s);
  (s.pc = "ZxNgp9GIUhhbmcZ4");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "Z1Lxs5gNbpajHFkQ");
  lib.String_.post_to_wall("\u000a\u4f60\u7684 BMI \u662f\u6839\u64da\u4f60\u7684\u9ad4\u91cd\u548c\u9ad8\u5ea6\u8a08\u7b97\u51fa\u4f86\u7684\u3002\u000a\u000a\u904e\u8f15\u003a BMI \u7b49\u65bc\u6216\u4f4e\u65bc18.5\u000a\u5065\u5eb7\u003a BMI \u4ecb\u4e4e18.5\u81f324.9\u000a\u904e\u91cd\u003a BMI \u4ecb\u4e4e25\u81f329.9\u000a\u7661\u80a5\u003a BMI \u7b49\u65bc\u6216\u9ad8\u65bc30", s);
  lib.Box.pop_box(s);
  (s.pc = "KBEmaGc3CP3TOqs9");
  lib.Box.push_box(s);
  (s.pc = "kkym4Ov0xy4UA8Uc");
  lib.Box.set_margins(1, 0, 0, 1, s);
  (s.pc = "oozGEhvAjW5rLKWg");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "qaMMlpzbKgkXR8d1");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "w8q7kD2ye4u57Dth");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "j1TiHeeO74IHhQiD");
  lib.Box.set_height(4, s);
  (s.pc = "Sk3FisXscIM5p8df");
  var t_lmbProxy_21 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_DqiNp28pDUw4ks8r$9(t_lmbProxy_21(la0), la1) });
  (s.pc = "jFZehUmrcwrASZB5");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_DqiNp28pDUw4ks8r$4;
}
cs.registerStep(a_DqiNp28pDUw4ks8r$6, 'a_DqiNp28pDUw4ks8r$6');

/* ACTION: a_DqiNp28pDUw4ks8r::lambda::9 */
function a_a_DqiNp28pDUw4ks8r$9(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_DqiNp28pDUw4ks8r$9$0;
  s.name = "BMI Calculator";
  return s;
}
cs.registerLambda("a_DqiNp28pDUw4ks8r\u003a\u003alambda\u003a\u003a9", "a_DqiNp28pDUw4ks8r$9", a_a_DqiNp28pDUw4ks8r$9, true);

function a_a_DqiNp28pDUw4ks8r$9$0(s) {
  (s.pc = "PYdo3c0lgbDmrdAb");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "SBCcmQ0nP8QTkSd5");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_DqiNp28pDUw4ks8r$9$0, 'a_a_DqiNp28pDUw4ks8r$9$0');

/* ACTION: main */
function a_fSfwIBdK974ov281(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_fSfwIBdK974ov281$0;
  s.name = "main";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("main", "fSfwIBdK974ov281", a_fSfwIBdK974ov281, false);

function a_fSfwIBdK974ov281$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "VvR2A278KjwKAI2C");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xS5xjAeaqimEZGNh.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "CjplnvTfuaUq3OBW");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "ZK6cvswwnWA63pXL");
  lib.Wall.show_back_button(false, s);
  (s.pc = "MT4EfSOVNAxvaHvM");
  lib.Wall.show_title_bar(false, s);
  } else {
  (s.pc = "D2oomwfQ4Iewh9pz");
  null;
  }
  var t_elseIf_3 = true;
  (s.pc = "Gc7WfCRVXT2hm9m1");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "saqFUKa2h8y4nxII");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "xAkD1qY72EosMQoP");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "zghExc1DmNmb4kV3");
  lib.Box.push_box(s);
  (s.pc = "Rd6gtiy9prhRU7hH");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "x46KnnYUtOXDazYD");
  (ok1(s, /* mainpage */ s.d.$xK4G5YPjzthOStfy) && /* mainpage */ s.d.$xK4G5YPjzthOStfy.post_to_wall(s));
  (s.pc = "qmYXXza4UgpYAvRH");
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_fSfwIBdK974ov281$4(t_lmbProxy_4(la0), la1) });
  (s.pc = "lzdJdif8VIvnjVn5");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  (s.pc = "xj104m1zkrTmDL0z");
  null;
  s.rt.leave_render();
  } else {
  (s.pc = "g00W6T8W210NAhnz");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_fSfwIBdK974ov281$0, 'a_fSfwIBdK974ov281$0');

/* ACTION: a_fSfwIBdK974ov281::lambda::4 */
function a_a_fSfwIBdK974ov281$4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fSfwIBdK974ov281$4$0;
  s.name = "main";
  return s;
}
cs.registerLambda("a_fSfwIBdK974ov281\u003a\u003alambda\u003a\u003a4", "a_fSfwIBdK974ov281$4", a_a_fSfwIBdK974ov281$4, true);

function a_a_fSfwIBdK974ov281$4$0(s) {
  (s.pc = "YD0E8OllVCPb08Vv");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "OZ3mEXWdxMaS9Tf9");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show");
  return s.rt.leave();
}
cs.registerStep(a_a_fSfwIBdK974ov281$4$0, 'a_a_fSfwIBdK974ov281$4$0');

cs.registerArtResource("Picture", "$x8nHXnOWrWdr8NLP", ".\u002fart\u002fl0_x8nHXnOWrWdr8NLP");
/* ACTION: PoLeungKuk */
function a_xt4vySKhCJ2ogOgh(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xt4vySKhCJ2ogOgh$0;
  s.name = "PoLeungKuk";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("PoLeungKuk", "xt4vySKhCJ2ogOgh", a_xt4vySKhCJ2ogOgh, false);

function a_xt4vySKhCJ2ogOgh$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "x2j9YVTJjku3vQQ6");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$VP4saNlyqL7BzVXT.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "YaB64ZHU4HB7yVQf");
  lib.Wall.show_back_button(false, s);
  (s.pc = "mgfo1BuxZyVLTM7v");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "xrUtTe5wWf0Jgibp");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "HbnCflCckuC5SOB3");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_xt4vySKhCJ2ogOgh$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_xt4vySKhCJ2ogOgh$3;
  } else {
  (s.pc = "qJa4MUHCS8NYwCCC");
  null;
  }
  return a_xt4vySKhCJ2ogOgh$2;
}
cs.registerStep(a_xt4vySKhCJ2ogOgh$0, 'a_xt4vySKhCJ2ogOgh$0');

function a_xt4vySKhCJ2ogOgh$3(s) {
  return a_xt4vySKhCJ2ogOgh$2;
}
cs.registerStep(a_xt4vySKhCJ2ogOgh$3, 'a_xt4vySKhCJ2ogOgh$3');

function a_xt4vySKhCJ2ogOgh$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "RiK7eoYKpwkNVFjp");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "Fgoiwb2tCjNJecd2");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "mzS4yA5PlKA2WkST");
  lib.Box.push_box(s);
  (s.pc = "jjdv42jpcIjUoJwv");
  lib.Box.set_padding(2, 1, 0, 1, s);
  (s.pc = "mePKLSoC1a2gGhrz");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "BNpEA114xCr24fID");
  lib.Box.set_horizontal_align("left", s);
  (s.pc = "tmTR1NV9ftUVY1aI");
  lib.Box.set_text_wrapping(true, 10, s);
  (s.pc = "KR24QiGe3kZ1JaVS");
  (ok1(s, /* PLKlogo2 */ s.d.$x8nHXnOWrWdr8NLP) && /* PLKlogo2 */ s.d.$x8nHXnOWrWdr8NLP.post_to_wall(s));
  (s.pc = "wgxoNHNDXnr4ZrPk");
  lib.String_.post_to_wall("\u4fdd\u826f\u5c40\u5275\u7acb\u65bc1878\u5e74\uff0c\u4e00\u76f4\u79c9\u627f\u300c\u4fdd\u8d64\u5b89\u826f\u300d\u7684\u5b97\u65e8\uff0c\u76e1\u5fc3\u7aed\u529b\u8207\u6642\u4e26\u9032\uff0c\u670d\u52d9\u9999\u6e2f139\u5e74\uff0c\u70ba\u5e02\u6c11\u63d0\u4f9b\u591a\u5143\u5316\u7684\u512a\u8cea\u793e\u6703\u670d\u52d9\uff0c\u5df2\u6210\u70ba\u5168\u6e2f\u6700\u5177\u898f\u6a21\u7684\u6148\u5584\u516c\u76ca\u6a5f\u69cb\u4e4b\u4e00\u3002\u4fdd\u826f\u5c40\u8d85\u904e300\u500b\u5c6c\u4e0b\u55ae\u4f4d\u904d\u4f48\u5168\u6e2f\u5404\u5340\uff0c\u63d0\u4f9b\u9069\u5207\u7684\u793e\u6703\u798f\u5229\u3001\u6559\u80b2\u3001\u5eb7\u6a02\u53ca\u6587\u5316\u670d\u52d9\uff0c\u5c6c\u6821\u5b78\u751f\u903e 4 \u842c5\u5343\u4eba\uff0c\u6bcf\u5e74\u670d\u52d9\u8d85\u904e60\u842c\u4eba\u6b21\u3002 \u000a\u000a\u0028\u4e00\u0029 \u793e\u6703\u670d\u52d9\uff1a \u5152\u7ae5\u53ca\u9752\u5c11\u5e74\u670d\u52d9\u3001\u7d9c\u5408\u5bb6\u5ead\u670d\u52d9\u3001\u5e7c\u5152\u670d\u52d9\u3001\u5eb7\u5fa9\u670d\u52d9\u3001\u5b89\u8001\u670d\u52d9\u3001\u91ab\u7642\u53ca\u7d9c\u5408\u5065\u5eb7\u670d\u52d9\uff1b \u000a\u000a\u0028\u4e8c\u0029 \u6559\u80b2\u670d\u52d9\uff1a \u5c08\u4e0a\u6559\u80b2\u002f\u793e\u5340\u66f8\u9662\u3001\u4e2d\u5b78\u0028\u8cc7\u52a9\u002f\u76f4\u8cc7\u0029\u3001\u591c\u6821\u3001\u7368\u7acb\u512a\u8cea\u79c1\u6821\u3001\u8cc7\u52a9\u5c0f\u5b78\u002f\u76f4\u8cc7\u5c0f\u5b78\u3001\u5e7c\u7a1a\u5712\u3001\u7279\u6b8a\u5b78\u6821\u3001\u6559\u80b2\u670d\u52d9\u4e2d\u5fc3\u3001\u5176\u4ed6\u55ae\u4f4d\u0028\u6559\u80b2\u7814\u7a76\u53ca\u6e2c\u8a66\u4e2d\u5fc3\u3001\u675c\u5049\u5f37\u4e2d\u592e\u5716\u66f8\u9928\u66a8\u6559\u6848\u8cc7\u6e90\u4e2d\u5fc3\u3001\u4e2d\u592e\u96fb\u8996\u53f0\u3001\u5289\u9673\u5c0f\u5bf6\u82f1\u8a9e\u5b78\u7fd2\u4e2d\u5fc3\u0029 \u000a\u000a\u0028\u4e09\u0029 \u6587\u5eb7\u670d\u52d9\uff1a \u4fdd\u826f\u5c40\u6b77\u53f2\u535a\u7269\u9928\u3001\u5317\u6f6d\u6d8c\u6e21\u5047\u71df\u3001\u8cfd\u99ac\u6703\u5927\u68e0\u6e21\u5047\u6751", s);
  (s.pc = "e01VHNZYSLx1pgIL");
  var t_call_5 = lib.Web.link_url("\u7db2\u5740\uff1ahttp\u003a\u002f\u002fwww.poleungkuk.org.hk\u002f", "http\u003a\u002f\u002fwww.poleungkuk.org.hk\u002f", s);
  s.rt.markAllocated(t_call_5);
  (ok1(s, t_call_5) && t_call_5.post_to_wall(s));
  (s.pc = "LLWVaBVXdycpfDZZ");
  (ok1(s, /* photo1 */ s.d.$iBK7edNk2zdAOs3r) && /* photo1 */ s.d.$iBK7edNk2zdAOs3r.post_to_wall(s));
  lib.Box.pop_box(s);
  (s.pc = "ls94VuVRtagSuBpW");
  lib.Box.push_box(s);
  (s.pc = "Q1YAC90kvMkZ5ytq");
  lib.Box.set_margins(0, 1, 0, 1, s);
  (s.pc = "xJihhCh6hnuzrlVs");
  lib.Box.set_height(10, s);
  (s.pc = "wCSTH59m08Vl1cRE");
  (ok1(s, /* menu-14 */ s.d.$B1bxUfcNaUtYqNCt) && /* menu-14 */ s.d.$B1bxUfcNaUtYqNCt.post_to_wall(s));
  (s.pc = "zBizB5sqX77gs3nY");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_xt4vySKhCJ2ogOgh$5(t_lmbProxy_6(la0), la1) });
  (s.pc = "XuI2PzGhahwI4yC4");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "PYvndm3NE17n9SBS");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_xt4vySKhCJ2ogOgh$2, 'a_xt4vySKhCJ2ogOgh$2');

/* ACTION: a_xt4vySKhCJ2ogOgh::lambda::5 */
function a_a_xt4vySKhCJ2ogOgh$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xt4vySKhCJ2ogOgh$5$0;
  s.name = "PoLeungKuk";
  return s;
}
cs.registerLambda("a_xt4vySKhCJ2ogOgh\u003a\u003alambda\u003a\u003a5", "a_xt4vySKhCJ2ogOgh$5", a_a_xt4vySKhCJ2ogOgh$5, true);

function a_a_xt4vySKhCJ2ogOgh$5$0(s) {
  (s.pc = "fu2j4sW3wwKt7Ssv");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "WbtW8AdKveKcS4JY");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "PLKCH");
  return s.rt.leave();
}
cs.registerStep(a_a_xt4vySKhCJ2ogOgh$5$0, 'a_a_xt4vySKhCJ2ogOgh$5$0');


//Ent_VP4saNlyqL7BzVXT
function Ent_VP4saNlyqL7BzVXT(p) {
  this.parent = p;
}
Ent_VP4saNlyqL7BzVXT.prototype = new lib.ObjectEntry();
Ent_VP4saNlyqL7BzVXT.prototype.keys = [];
Ent_VP4saNlyqL7BzVXT.prototype.values = [];
Ent_VP4saNlyqL7BzVXT.prototype.fields = [];
//Tbl_VP4saNlyqL7BzVXT
function Tbl_VP4saNlyqL7BzVXT(l) {
  this.libName = l;
  this.initParent();
}
Tbl_VP4saNlyqL7BzVXT.prototype = new lib.ObjectSingleton();
Tbl_VP4saNlyqL7BzVXT.prototype.entryCtor = Ent_VP4saNlyqL7BzVXT;
cs.objectSingletons["show2 page data"] = function(d) { return d.$VP4saNlyqL7BzVXT };
Tbl_VP4saNlyqL7BzVXT.prototype.selfCtor = Tbl_VP4saNlyqL7BzVXT;
Tbl_VP4saNlyqL7BzVXT.prototype.stableName = "VP4saNlyqL7BzVXT";
Tbl_VP4saNlyqL7BzVXT.prototype.entryKindName = "show2 page data";

// jsonimport
Ent_VP4saNlyqL7BzVXT.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$VP4saNlyqL7BzVXT");
/* ACTION: HerbalLife */
function a_bl5OZubrQBRcIKJ2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bl5OZubrQBRcIKJ2$0;
  s.name = "HerbalLife";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("HerbalLife", "bl5OZubrQBRcIKJ2", a_bl5OZubrQBRcIKJ2, false);

function a_bl5OZubrQBRcIKJ2$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "EKqC8Ks4IouVJD1f");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$rsgpTQWxZptrgReD.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "gEvUDZ46tcTmssZy");
  lib.Wall.show_back_button(false, s);
  (s.pc = "a1P6UAyflFQ3hotM");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "HeL9jZOM15UcGcQT");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "x5DmN2iO94cianr1");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_bl5OZubrQBRcIKJ2$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_bl5OZubrQBRcIKJ2$3;
  } else {
  (s.pc = "xd4nLqlFwn338Qe5");
  null;
  }
  return a_bl5OZubrQBRcIKJ2$2;
}
cs.registerStep(a_bl5OZubrQBRcIKJ2$0, 'a_bl5OZubrQBRcIKJ2$0');

function a_bl5OZubrQBRcIKJ2$3(s) {
  return a_bl5OZubrQBRcIKJ2$2;
}
cs.registerStep(a_bl5OZubrQBRcIKJ2$3, 'a_bl5OZubrQBRcIKJ2$3');

function a_bl5OZubrQBRcIKJ2$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "HMSsWRxWi4RqXUDA");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "BIU9mzJq4zmZVvCi");
  lib.Box.push_box(s);
  (s.pc = "qg7pCTtnuJ2W5zam");
  lib.Box.set_padding(2, 1.5, 0, 1.5, s);
  (s.pc = "xSSWK5P2GQ3ILQpw");
  lib.Box.set_horizontal_align("left", s);
  (s.pc = "pAenini8Wu3elsff");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "xJOQbEkblD0EpB5U");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "iS274iIz08C3dr17");
  (ok1(s, /* photo3 */ s.d.$aaqOZJnMYs3WYZEt) && /* photo3 */ s.d.$aaqOZJnMYs3WYZEt.post_to_wall(s));
  (s.pc = "W6dTB3yc6CfjvX2v");
  lib.String_.post_to_wall("\u000a\u5eb7\u5bf6\u840a\u5bb6\u5ead\u57fa\u91d1\u0028HFF\u0029\u662f\u4e00\u500b\u975e\u725f\u5229\u7d44\u7e54\uff0c\u7531\u5eb7\u5bf6\u840a\u5275\u8fa6\u4eba\u99ac\u514b\uff0e\u582f\u65af\u65bc1994\u5e74\u5275\u7acb\uff0c\u81f4\u529b\u900f\u904e\u4e0d\u540c\u8a08\u5283\u53ca\u652f\u63f4\u4e0d\u540c\u6148\u5584\u7d44\u7e54\uff0c\u70ba\u6709\u9700\u8981\u7684\u5152\u7ae5\u63d0\u4f9b\u512a\u8cea\u71df\u990a\uff0c\u4ee5\u63d0\u9ad8\u5152\u7ae5\u7684\u751f\u6d3b\u8cea\u7d20\u3002 \u65bc2005\u5e74\uff0c\u5eb7\u5bf6\u840a\u5bb6\u5ead\u57fa\u91d1\u6703\u63a8\u51fa\u300c\u5eb7\u5bf6\u840a\u4e4b\u5bb6\u300d\u8a08\u5283\uff0c\u900f\u904e\u8207\u4e0d\u540c\u6148\u5584\u6a5f\u69cb\u5408\u4f5c\uff0c\u70ba\u5152\u7ae5\u63d0\u4f9b\u5065\u5eb7\u53ca\u71df\u990a\u7684\u81b3\u98df\u3002\u300c\u5eb7\u5bf6\u840a\u4e4b\u5bb6\u300d\u8a08\u5283\u6bcf\u5e74\u5411\u5168\u7403130\u591a\u500b\u6148\u5584\u6a5f\u69cb\u63d0\u4f9b\u8d85\u904e320\u842c\u7f8e\u5143\u7684\u5584\u6b3e\u53ca\u7fa9\u5de5\u652f\u63f4\uff0c\u70ba50\u591a\u500b\u570b\u5bb6\u7684\u5b64\u5152\u3001\u793e\u5340\u4e2d\u5fc3\u53ca\u91ab\u9662\u4e2d\u7684\u5152\u7ae5\u5e36\u4f86\u512a\u8cea\u71df\u990a\u3002", s);
  (s.pc = "rYfBIJ7RJLq94ZO8");
  var t_call_5 = lib.Web.link_url("\u7db2\u5740\uff1ahttps\u003a\u002f\u002fwww.herbalifefamilyfoundation.org\u002f", "https\u003a\u002f\u002fwww.herbalifefamilyfoundation.org\u002f", s);
  s.rt.markAllocated(t_call_5);
  (ok1(s, t_call_5) && t_call_5.post_to_wall(s));
  (s.pc = "fguHbK3cC4XitN1M");
  (ok1(s, /* photo4 */ s.d.$jZREObk3Bykevvpp) && /* photo4 */ s.d.$jZREObk3Bykevvpp.post_to_wall(s));
  lib.Box.pop_box(s);
  (s.pc = "xslN11VerOsFvIcY");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "QaUurho0fm6IJP7V");
  lib.Box.push_box(s);
  (s.pc = "RBoEKLnrbATI5EFu");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "xnnc22Wj405F2fpH");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "QKe2tuWbMFLb2oQC");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "NQjwCJuxszqs2xsh");
  lib.Box.set_height(4, s);
  (s.pc = "wJePT1xh0AE9tyQJ");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_bl5OZubrQBRcIKJ2$5(t_lmbProxy_6(la0), la1) });
  (s.pc = "V2u8jNNcY2KiEjwd");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "abyOkBhOZaLgaTAa");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_bl5OZubrQBRcIKJ2$2, 'a_bl5OZubrQBRcIKJ2$2');

/* ACTION: a_bl5OZubrQBRcIKJ2::lambda::5 */
function a_a_bl5OZubrQBRcIKJ2$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_bl5OZubrQBRcIKJ2$5$0;
  s.name = "HerbalLife";
  return s;
}
cs.registerLambda("a_bl5OZubrQBRcIKJ2\u003a\u003alambda\u003a\u003a5", "a_bl5OZubrQBRcIKJ2$5", a_a_bl5OZubrQBRcIKJ2$5, true);

function a_a_bl5OZubrQBRcIKJ2$5$0(s) {
  (s.pc = "y3VVmywwksuEvP3d");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "p7YQD6A4s1KZZ4iZ");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_bl5OZubrQBRcIKJ2$5$0, 'a_a_bl5OZubrQBRcIKJ2$5$0');


//Ent_rsgpTQWxZptrgReD
function Ent_rsgpTQWxZptrgReD(p) {
  this.parent = p;
}
Ent_rsgpTQWxZptrgReD.prototype = new lib.ObjectEntry();
Ent_rsgpTQWxZptrgReD.prototype.keys = [];
Ent_rsgpTQWxZptrgReD.prototype.values = [];
Ent_rsgpTQWxZptrgReD.prototype.fields = [];
//Tbl_rsgpTQWxZptrgReD
function Tbl_rsgpTQWxZptrgReD(l) {
  this.libName = l;
  this.initParent();
}
Tbl_rsgpTQWxZptrgReD.prototype = new lib.ObjectSingleton();
Tbl_rsgpTQWxZptrgReD.prototype.entryCtor = Ent_rsgpTQWxZptrgReD;
cs.objectSingletons["show2 page data2"] = function(d) { return d.$rsgpTQWxZptrgReD };
Tbl_rsgpTQWxZptrgReD.prototype.selfCtor = Tbl_rsgpTQWxZptrgReD;
Tbl_rsgpTQWxZptrgReD.prototype.stableName = "rsgpTQWxZptrgReD";
Tbl_rsgpTQWxZptrgReD.prototype.entryKindName = "show2 page data2";

// jsonimport
Ent_rsgpTQWxZptrgReD.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$rsgpTQWxZptrgReD");
cs.registerArtResource("Picture", "$i2JV41iB27iZgoE2", ".\u002fart\u002fl0_i2JV41iB27iZgoE2");
cs.registerArtResource("Picture", "$x1HG4l9gyAX27GPL", ".\u002fart\u002fl0_x1HG4l9gyAX27GPL");
cs.registerArtResource("Picture", "$yXB4q8ECawN4kXWb", ".\u002fart\u002fl0_yXB4q8ECawN4kXWb");
cs.registerArtResource("Picture", "$xAez4VkmOvxEi5Zn", ".\u002fart\u002fl0_xAez4VkmOvxEi5Zn");
/* ACTION: PLKCH */
function a_SF03SNzfJjstoknq(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_SF03SNzfJjstoknq$0;
  s.name = "PLKCH";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("PLKCH", "SF03SNzfJjstoknq", a_SF03SNzfJjstoknq, false);

function a_SF03SNzfJjstoknq$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "J1NkFEKWZll4tjEF");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xfbGgayWel5yt8Wv.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "KIINBkd2rN2mcSwV");
  lib.Wall.show_back_button(false, s);
  (s.pc = "ZGE2SC2RrOgP2Hrt");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "bTY4PrDKEo2KiD44");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "I2uC1DPtmOF2UQyb");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_SF03SNzfJjstoknq$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_SF03SNzfJjstoknq$3;
  } else {
  (s.pc = "OV8U7eWDWmBzTeix");
  null;
  }
  return a_SF03SNzfJjstoknq$2;
}
cs.registerStep(a_SF03SNzfJjstoknq$0, 'a_SF03SNzfJjstoknq$0');

function a_SF03SNzfJjstoknq$3(s) {
  return a_SF03SNzfJjstoknq$2;
}
cs.registerStep(a_SF03SNzfJjstoknq$3, 'a_SF03SNzfJjstoknq$3');

function a_SF03SNzfJjstoknq$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "x4jsqxOgYeBHEKtI");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "jReSDVEpXnEQkPfO");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "v5UXwQ0KQnArIhnh");
  lib.Box.push_box(s);
  (s.pc = "fl8UOEGm06SBJntq");
  lib.Box.set_margins(2, 0, 0, 0, s);
  (s.pc = "XFkxExx4IZu2N9qm");
  (ok1(s, /* photo2 */ s.d.$eRZYcl8RNAUA4XQw) && /* photo2 */ s.d.$eRZYcl8RNAUA4XQw.post_to_wall(s));
  lib.Box.pop_box(s);
  (s.pc = "IL7dz4ZDUNr6iRym");
  lib.Box.push_box(s);
  (s.pc = "sTAujpAK5hLmrulP");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "JaUaGZ5dw4WCwwFw");
  lib.Box.set_horizontal_align("left", s);
  (s.pc = "vRGagYVZNID1r0gS");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "RIwf293G5HHlcfjG");
  lib.Box.set_padding(0, 1, 0, 1, s);
  (s.pc = "nRRJNDRD8V3CuHSs");
  lib.String_.post_to_wall("\u4fdd\u826f\u5c40\u9577\u5eb7\u9752\u5c11\u5e74\u767c\u5c55\u4e2d\u5fc3\u4ee5\u300c\u85dd\u8853\u70ba\u8f14\u300d\u7684\u670d\u52d9\u6a21\u5f0f\uff0c\u900f\u904e\u300c\u5287\u5834\u6559\u80b2\u300d\u3001\u300c\u821e\u8e48\u53ca\u8eab\u9ad4\u5f8b\u52d5\u300d\u3001\u300c\u96fb\u5f71\u53ca\u591a\u5143\u85dd\u8853\u5a92\u9ad4\u53ca\u79d1\u6280\u5275\u4f5c\u300d\u7b49\u4e09\u5927\u6838\u5fc3\u767c\u5c55\u65b9\u5411\uff0c\u9f13\u52f5\u548c\u555f\u767c\u9752\u5c11\u5e74\u5206\u4eab\u751f\u547d\u6545\u4e8b\uff0c\u63d0\u6607\u500b\u4eba\u80fd\u529b\uff0c\u5275\u9020\u5168\u65b0\u7684\u81ea\u5df1\uff0c\u611f\u67d3\u793e\u6703\u3002 \u000a\u000a1. \u6232\u5287\u6559\u80b2 \u4ee5\u5373\u8208\u5287\u53ca\u5176\u4ed6\u5287\u5834\u624b\u6cd5\uff0c\u5efa\u7acb\u9752\u5e74\u4eba\u89e3\u6c7a\u554f\u984c\u7684\u80fd\u529b\u3001\u5275\u610f\u53ca\u81ea\u4fe1\uff1b \u000a\u000a2. \u821e\u8e48\u5b78\u7fd2\u53ca\u8eab\u9ad4\u821e\u52d5 \u900f\u904e\u821e\u8e48\u5b78\u7fd2\u3001\u8eab\u9ad4\u5f8b\u52d5\u53ca\u97f3\u6a02\u65cb\u5f8b\u7684\u914d\u5408\uff0c\u8b93\u9752\u5e74\u4eba\u5f9e\u81ea\u5df1\u7684\u8eab\u9ad4\u63a2\u7d22\u5167\u5fc3\u4e16\u754c\uff0c\u6292\u767c\u60c5\u611f\uff0c\u5efa\u7acb\u66f4\u89aa\u548c\u7684\u4eba\u969b\u95dc\u4fc2\uff1b \u000a\u000a3. \u96fb\u5f71\u53ca\u591a\u5143\u85dd\u8853\u5a92\u9ad4\u53ca\u79d1\u6280\u5275\u4f5c \u900f\u904e\u5fae\u96fb\u5f71\u3001\u5a92\u9ad4\u5275\u4f5c\u53ca\u79d1\u6280\u767c\u5c55\uff0c\u767c\u63ee\u9752\u5c11\u5e74\u7684\u5275\u610f\u3001\u4e94\u611f\u89f8\u89d2\u3001\u8a08\u7b97\u53ca\u79d1\u5b78\u539f\u7406\uff0c\u63d0\u5347\u5206\u6790\u3001\u8a2d\u8a08\u3001\u89e3\u96e3\u548c\u8207\u4eba\u4e92\u52d5\u6e9d\u901a\u7684\u80fd\u529b\u3002 \u000a\u000a\u806f\u7d61\u65b9\u6cd5 \u000a\u5730\u5740\u003a \u9752\u8863\u9752\u5eb7\u8def12\u865f\u9577\u5eb7\u5546\u5834\u4e00\u671f4\u6a13 \u000a\u96fb\u8a71\u003a 21571117 \u000a\u50b3\u771f\u003a 21571400 \u000a\u96fb\u90f5\u003a chydc\u0040poleungkuk.org.hk \u000aFacebook\u003a \u4fdd\u826f\u5c40\u9577\u5eb7\u9752\u5c11\u5e74\u767c\u5c55\u4e2d\u5fc3 \u000aInstagram\u003a plkchydc\u000a--------------", s);
  lib.Box.pop_box(s);
  (s.pc = "xSsnD1krQ50tJ9NG");
  lib.Box.push_box(s);
  (s.pc = "xMHavCOB3F9MUrHG");
  lib.Box.set_margins(0, 0, 0, 1, s);
  (s.pc = "dc0ePFJ5o0N5kefY");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "vN38egCz8QAmD5RW");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "xkjKjYWcE4SL4lVF");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "xPTpa1wn4VbDMpG9");
  lib.Box.set_height(4, s);
  (s.pc = "g0OX3W5hS8ThaCa6");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_SF03SNzfJjstoknq$5(t_lmbProxy_5(la0), la1) });
  (s.pc = "CKfDMgPAhTmdt2tw");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "flzHq3vkeN7qboSx");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_SF03SNzfJjstoknq$2, 'a_SF03SNzfJjstoknq$2');

/* ACTION: a_SF03SNzfJjstoknq::lambda::5 */
function a_a_SF03SNzfJjstoknq$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_SF03SNzfJjstoknq$5$0;
  s.name = "PLKCH";
  return s;
}
cs.registerLambda("a_SF03SNzfJjstoknq\u003a\u003alambda\u003a\u003a5", "a_SF03SNzfJjstoknq$5", a_a_SF03SNzfJjstoknq$5, true);

function a_a_SF03SNzfJjstoknq$5$0(s) {
  (s.pc = "DuVPT42O1spnDJCk");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "x4FcWQlDmmK5yXO2");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_SF03SNzfJjstoknq$5$0, 'a_a_SF03SNzfJjstoknq$5$0');


//Ent_xfbGgayWel5yt8Wv
function Ent_xfbGgayWel5yt8Wv(p) {
  this.parent = p;
}
Ent_xfbGgayWel5yt8Wv.prototype = new lib.ObjectEntry();
Ent_xfbGgayWel5yt8Wv.prototype.keys = [];
Ent_xfbGgayWel5yt8Wv.prototype.values = [];
Ent_xfbGgayWel5yt8Wv.prototype.fields = [];
//Tbl_xfbGgayWel5yt8Wv
function Tbl_xfbGgayWel5yt8Wv(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xfbGgayWel5yt8Wv.prototype = new lib.ObjectSingleton();
Tbl_xfbGgayWel5yt8Wv.prototype.entryCtor = Ent_xfbGgayWel5yt8Wv;
cs.objectSingletons["show2 page data3"] = function(d) { return d.$xfbGgayWel5yt8Wv };
Tbl_xfbGgayWel5yt8Wv.prototype.selfCtor = Tbl_xfbGgayWel5yt8Wv;
Tbl_xfbGgayWel5yt8Wv.prototype.stableName = "xfbGgayWel5yt8Wv";
Tbl_xfbGgayWel5yt8Wv.prototype.entryKindName = "show2 page data3";

// jsonimport
Ent_xfbGgayWel5yt8Wv.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$xfbGgayWel5yt8Wv");
/* ACTION: HBNutrition */
function a_d3XDBiTjP4pcTfTf(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_d3XDBiTjP4pcTfTf$0;
  s.name = "HBNutrition";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("HBNutrition", "d3XDBiTjP4pcTfTf", a_d3XDBiTjP4pcTfTf, false);

function a_d3XDBiTjP4pcTfTf$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "oXURRiGseTcpLDLW");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$JWQ7M5OemStQwZLV.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "cmI03KqGB0Jo5YZA");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "xN26fPMHX8iPuB57");
  lib.Wall.show_back_button(false, s);
  (s.pc = "onEtxu5znmz0Ka9D");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "b8S79OisMtRGzxb4");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_d3XDBiTjP4pcTfTf$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_d3XDBiTjP4pcTfTf$3;
  } else {
  (s.pc = "emF5gYUcptzH6jIM");
  null;
  }
  return a_d3XDBiTjP4pcTfTf$2;
}
cs.registerStep(a_d3XDBiTjP4pcTfTf$0, 'a_d3XDBiTjP4pcTfTf$0');

function a_d3XDBiTjP4pcTfTf$3(s) {
  return a_d3XDBiTjP4pcTfTf$2;
}
cs.registerStep(a_d3XDBiTjP4pcTfTf$3, 'a_d3XDBiTjP4pcTfTf$3');

function a_d3XDBiTjP4pcTfTf$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "x4i5fAm706Dn9YNH");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "q3zLrZoF2UEpIEap");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "Qlbr9RmgZihfweIh");
  lib.Box.push_box(s);
  (s.pc = "iPGayOdeKC1BpCFB");
  lib.Box.set_margins(2, 0, 0, 0, s);
  (s.pc = "s1e74p8U0uuemw2W");
  lib.Box.set_text_wrapping(true, 8, s);
  (s.pc = "NvKQjuA5aTL7T84Z");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "g8UYEqabcRj40wwc");
  lib.Box.set_padding(0, 1, 0, 1, s);
  (s.pc = "Xmk0KX4sSm4AbxTB");
  lib.String_.post_to_wall("\u71df\u990a\u7406\u5ff5\u000a\u5747\u8861\u71df\u990a\u5747\u8861\u71df\u990a\u7531\u4e3b\u8981\u71df\u990a\u7d20\u3001\u5fae\u91cf\u71df\u990a\u7d20\u3001\u6c34\u3001\u7e96\u7dad\u7d20\u53ca\u690d\u7269\u71df\u990a\u7d20\u6240\u7d44\u6210\u3002\u651d\u53d6\u5747\u8861\u7684\u71df\u990a\u80fd\u5c0d\u808c\u819a\u3001\u95dc\u7bc0\u3001\u8166\u90e8\u53ca\u6d88\u5316\u7cfb\u7d71\u7b49\u90fd\u6709\u5e6b\u52a9\u3002\u60a8\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u98f2\u98df\u6a21\u578b\u4f86\u6aa2\u8996\u4e26\u9010\u6b65\u6539\u5584\u81ea\u5df1\u7684\u98f2\u98df\u7fd2\u6163\u3002\u4ee4\u5065\u5eb7\u7684\u98f2\u98df\u7fd2\u6163\u6210\u70ba\u60a8\u751f\u6d3b\u7684\u4e00\u90e8\u4efd\uff01", s);
  (s.pc = "X4bagpeboK3XUgl2");
  (ok1(s, /* pyramid */ s.d.$xAez4VkmOvxEi5Zn) && /* pyramid */ s.d.$xAez4VkmOvxEi5Zn.post_to_wall(s));
  (s.pc = "b1BGPKCa1SYQRTF8");
  lib.Box.push_box(s);
  (s.pc = "xYwf7JLVKsErgsv7");
  lib.Box.set_margins(1, 0, 1, 0, s);
  (s.pc = "gaaq2qFIXTgLjdAV");
  (ok1(s, /* photo5 */ s.d.$vV22Nx4P4I2C29zE) && /* photo5 */ s.d.$vV22Nx4P4I2C29zE.post_to_wall(s));
  lib.Box.pop_box(s);
  (s.pc = "JNKczxuVGwn2HkDa");
  lib.Box.push_box(s);
  (s.pc = "olt4xCt31RcIBSZD");
  lib.Box.set_horizontal_align("left", s);
  (s.pc = "xuR2oyUaY7XntBFr");
  lib.Box.set_padding(0, 1, 0, 1, s);
  (s.pc = "j3hTmq4bgzkiwjJT");
  lib.Box.set_text_wrapping(true, 8, s);
  (s.pc = "xMg5SVkZlbGEU9UM");
  lib.String_.post_to_wall("\u86cb\u767d\u8cea\u000a\u86cb\u767d\u8cea\u662f\u8eab\u9ad4\u6bcf\u5929\u6240\u9700\u7684\u91cd\u8981\u71df\u990a\u7d20\uff0c\u4e3b\u8981\u7528\u4f5c\u5efa\u7acb\u91cd\u8981\u8eab\u9ad4\u7d50\u69cb\uff0c\u5305\u62ec\u808c\u8089\uff0c\u5668\u5b98\u3001\u76ae\u819a\u548c\u982d\u9aee\u7b49\u3002\u98f2\u98df\u4e2d\u7684\u86cb\u767d\u8cea\u4e3b\u8981\u4f86\u81ea\u8089\u985e\uff0c\u9b5a\uff0c\u5bb6\u79bd\uff0c\u96de\u86cb\u3001\u725b\u5976\u3001\u8c46\u985e\u53ca\u5805\u679c\u3002\u800c\u6bcf\u5929\u7684\u86cb\u767d\u8cea\u651d\u53d6\u91cf\u53d6\u6c7a\u65bc\u5e74\u9f61\u3001\u9ad4\u578b\u53ca\u751f\u6d3b\u65b9\u5f0f\u3002\u7576\u6bd4\u8f03\u76f8\u7b49\u904b\u52d5\u91cf\u7684\u4e00\u540d\u7537\u6027\u53ca\u5973\u6027\u6642\uff0c\u9ad4\u91cd\u53ca\u8eab\u578b\u7684\u5dee\u7570\u6703\u5f71\u97ff\u86cb\u767d\u8cea\u7684\u9700\u6c42\u3002\u808c\u8089\u91cf\u6108\u591a\uff0c\u6bcf\u5929\u6240\u9700\u7684\u86cb\u767d\u8cea\u4ea6\u6703\u8f03\u591a\u3002 \u000a\u000a\u78b3\u6c34\u5316\u5408\u7269 \u000a\u78b3\u6c34\u5316\u5408\u7269\u70ba\u65e5\u5e38\u6d3b\u52d5\u63d0\u4f9b\u80fd\u91cf\u3002\u6700\u597d\u7684\u78b3\u6c34\u5316\u5408\u7269\u4f86\u6e90\u662f\u5f9e\u6c34\u679c\u3001\u852c\u83dc\u3001\u8c46\u985e\u3001\u5168\u7a40\u7269\u5168\u9ea5\uff0c\u5927\u9ea5\u53ca\u71d5\u9ea5\u4e2d\u651d\u53d6\u3002\u78b3\u6c34\u5316\u5408\u7269\u9664\u4e86\u70ba\u8eab\u9ad4\u63d0\u4f9b\u80fd\u91cf\u5916\uff0c\u9084\u6709\u7dad\u4ed6\u547d\u3001\u7926\u7269\u8cea\u53ca\u7e96\u7dad\u3002\u5efa\u8b70\u6bcf\u5929\u5927\u7d04\u4e00\u534a\u7684\u5361\u8def\u91cc\u90fd\u5f9e\u78b3\u6c34\u5316\u5408\u7269\u4e2d\u651d\u53d6\u3002 \u000a\u000a\u8102\u80aa \u000a\u8102\u80aa\u662f\u8eab\u9ad4\u7684\u80fd\u91cf\u4f86\u6e90\uff0c\u4ea6\u662f\u63d0\u4f9b\u7d30\u80de\u819c\u7d50\u69cb\u7684\u4e00\u7a2e\u91cd\u8981\u6210\u5206\u3002 \u5065\u5eb7\u7684\u8102\u80aa\u5982\u5967\u7c73\u52a0-3\u8102\u80aa\u9178\u5c0d\u5fc3\u81df\u3001\u8166\u90e8\u548c\u514d\u75ab\u7cfb\u7d71\u90fd\u975e\u5e38\u91cd\u8981\u3002 \u5065\u5eb7\u7684\u8102\u80aa\u53ef\u4ee5\u5f9e\u6a44\u6b16\u6cb9\u3001\u725b\u6cb9\u679c\u3001\u6df1\u6d77\u9b5a\u7b49\u98df\u7269\u4f86\u6e90\u651d\u53d6\u3002\u6df1\u6d77\u9b5a\u6240\u63d0\u4f9b\u7684\u5065\u5eb7\u8102\u80aa\uff0c\u66f4\u6709\u52a9\u7dad\u6301\u5fc3\u81df\u5065\u5eb7\u3002\u6bcf\u9031\u9032\u98df\u4e09\u81f3\u56db\u6b21\uff0c\u4f5c\u70ba\u5065\u5eb7\u5747\u8861\u98f2\u98df\u7684\u4e00\u90e8\u5206\u3002", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  (s.pc = "UQHI9enwmdyQU3Mn");
  lib.Box.push_box(s);
  (s.pc = "d9fy0MUvgY6HsxRj");
  lib.Box.set_margins(1, 0, 0, 1, s);
  (s.pc = "vk5WNiLC38fxznw4");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "x0KKbHXLSAcgtLBY");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "xeY3i1uYBQdaX3EQ");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "zGmchKhTGNTUZcXx");
  lib.Box.set_height(4, s);
  (s.pc = "AFMA8Wqv4EbKY3h0");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_d3XDBiTjP4pcTfTf$5(t_lmbProxy_5(la0), la1) });
  (s.pc = "ib5GswKAPSzWaIi6");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "wJx8uHyTeljyQD1g");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_d3XDBiTjP4pcTfTf$2, 'a_d3XDBiTjP4pcTfTf$2');

/* ACTION: a_d3XDBiTjP4pcTfTf::lambda::5 */
function a_a_d3XDBiTjP4pcTfTf$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_d3XDBiTjP4pcTfTf$5$0;
  s.name = "HBNutrition";
  return s;
}
cs.registerLambda("a_d3XDBiTjP4pcTfTf\u003a\u003alambda\u003a\u003a5", "a_d3XDBiTjP4pcTfTf$5", a_a_d3XDBiTjP4pcTfTf$5, true);

function a_a_d3XDBiTjP4pcTfTf$5$0(s) {
  (s.pc = "ZgbbSmIWlLleYlor");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "bbAcZgmb0h0awVJY");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_d3XDBiTjP4pcTfTf$5$0, 'a_a_d3XDBiTjP4pcTfTf$5$0');


//Ent_JWQ7M5OemStQwZLV
function Ent_JWQ7M5OemStQwZLV(p) {
  this.parent = p;
}
Ent_JWQ7M5OemStQwZLV.prototype = new lib.ObjectEntry();
Ent_JWQ7M5OemStQwZLV.prototype.keys = [];
Ent_JWQ7M5OemStQwZLV.prototype.values = [];
Ent_JWQ7M5OemStQwZLV.prototype.fields = [];
//Tbl_JWQ7M5OemStQwZLV
function Tbl_JWQ7M5OemStQwZLV(l) {
  this.libName = l;
  this.initParent();
}
Tbl_JWQ7M5OemStQwZLV.prototype = new lib.ObjectSingleton();
Tbl_JWQ7M5OemStQwZLV.prototype.entryCtor = Ent_JWQ7M5OemStQwZLV;
cs.objectSingletons["show2 page data4"] = function(d) { return d.$JWQ7M5OemStQwZLV };
Tbl_JWQ7M5OemStQwZLV.prototype.selfCtor = Tbl_JWQ7M5OemStQwZLV;
Tbl_JWQ7M5OemStQwZLV.prototype.stableName = "JWQ7M5OemStQwZLV";
Tbl_JWQ7M5OemStQwZLV.prototype.entryKindName = "show2 page data4";

// jsonimport
Ent_JWQ7M5OemStQwZLV.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$JWQ7M5OemStQwZLV");
/* ACTION: HBMilkshake */
function a_bNUFvBw9qVEysEf4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bNUFvBw9qVEysEf4$0;
  s.name = "HBMilkshake";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("HBMilkshake", "bNUFvBw9qVEysEf4", a_bNUFvBw9qVEysEf4, false);

function a_bNUFvBw9qVEysEf4$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xwnRunsUhOOl4h7a");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BPJvzJyz5TU48Lz3.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "x1BvulOhZBPI18SW");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "aIkgS1DW5epxLZ8t");
  lib.Wall.show_back_button(false, s);
  (s.pc = "WSZD3s8ywENH3F94");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "s7LVmFFrcLo028Ex");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_bNUFvBw9qVEysEf4$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_bNUFvBw9qVEysEf4$3;
  } else {
  (s.pc = "Eqd0p1jmiFYgsUsn");
  null;
  }
  return a_bNUFvBw9qVEysEf4$2;
}
cs.registerStep(a_bNUFvBw9qVEysEf4$0, 'a_bNUFvBw9qVEysEf4$0');

function a_bNUFvBw9qVEysEf4$3(s) {
  return a_bNUFvBw9qVEysEf4$2;
}
cs.registerStep(a_bNUFvBw9qVEysEf4$3, 'a_bNUFvBw9qVEysEf4$3');

function a_bNUFvBw9qVEysEf4$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "f4DYJL223ui5Jhbj");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xCQpPcjKCeDaUhba");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "bJMMS8u4hQioMZa2");
  lib.Box.push_box(s);
  (s.pc = "QdaVAMN541RQV8eZ");
  lib.Box.set_margins(2, 0, 0, 0, s);
  (s.pc = "xvvUWdXUSRLz4jfz");
  lib.String_.post_to_wall("\u5404\u300c\u6614\u300d\u98df\u8b5c", s);
  lib.Box.pop_box(s);
  (s.pc = "qld4MTCI23J7krBl");
  lib.Box.push_box(s);
  (s.pc = "a64mhFSt2Jcc5L04");
  (ok1(s, /* herbal1 */ s.d.$i2JV41iB27iZgoE2) && /* herbal1 */ s.d.$i2JV41iB27iZgoE2.post_to_wall(s));
  (s.pc = "xL7C7O8Kc93YCemt");
  lib.Box.set_margins(1, 0, 0, 0, s);
  lib.Box.pop_box(s);
  (s.pc = "jIxqXqD6KkSypINx");
  lib.Box.push_box(s);
  (s.pc = "Y71LvROMLigSWI0r");
  (ok1(s, /* herbal2 */ s.d.$x1HG4l9gyAX27GPL) && /* herbal2 */ s.d.$x1HG4l9gyAX27GPL.post_to_wall(s));
  (s.pc = "SFmShaHheTxHYdO1");
  lib.Box.set_margins(1, 0, 0, 0, s);
  lib.Box.pop_box(s);
  (s.pc = "xsE9Ldbv2Ct2IPjQ");
  lib.Box.push_box(s);
  (s.pc = "xmpN4GeNPOMkPU6V");
  (ok1(s, /* herbal3 */ s.d.$yXB4q8ECawN4kXWb) && /* herbal3 */ s.d.$yXB4q8ECawN4kXWb.post_to_wall(s));
  (s.pc = "yyNBMMuIedzcaw7E");
  lib.Box.set_margins(1, 0, 0, 0, s);
  lib.Box.pop_box(s);
  (s.pc = "xBJJLqdicvZ7zk7D");
  lib.Box.push_box(s);
  (s.pc = "x8LuLs22mvnlzBAe");
  lib.Box.set_margins(1, 0, 0, 0, s);
  (s.pc = "LXWdPMf8SgDv5fYw");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "JJbaS2XEZqp4qkUg");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "U1HbuDUD7yZLICfM");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "K5M3zxv59b2QL5Tm");
  lib.Box.set_height(4, s);
  (s.pc = "V14uR0IDaFQvBZIH");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_bNUFvBw9qVEysEf4$5(t_lmbProxy_5(la0), la1) });
  (s.pc = "eDCkHqTO7i5Iu0DA");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "KSg8ezl2r21Yy2fw");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_bNUFvBw9qVEysEf4$2, 'a_bNUFvBw9qVEysEf4$2');

/* ACTION: a_bNUFvBw9qVEysEf4::lambda::5 */
function a_a_bNUFvBw9qVEysEf4$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_bNUFvBw9qVEysEf4$5$0;
  s.name = "HBMilkshake";
  return s;
}
cs.registerLambda("a_bNUFvBw9qVEysEf4\u003a\u003alambda\u003a\u003a5", "a_bNUFvBw9qVEysEf4$5", a_a_bNUFvBw9qVEysEf4$5, true);

function a_a_bNUFvBw9qVEysEf4$5$0(s) {
  (s.pc = "tDIMLzAdhgMJtxSw");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "fBM8aEFIpDlWEOGT");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_bNUFvBw9qVEysEf4$5$0, 'a_a_bNUFvBw9qVEysEf4$5$0');


//Ent_BPJvzJyz5TU48Lz3
function Ent_BPJvzJyz5TU48Lz3(p) {
  this.parent = p;
}
Ent_BPJvzJyz5TU48Lz3.prototype = new lib.ObjectEntry();
Ent_BPJvzJyz5TU48Lz3.prototype.keys = [];
Ent_BPJvzJyz5TU48Lz3.prototype.values = [];
Ent_BPJvzJyz5TU48Lz3.prototype.fields = [];
//Tbl_BPJvzJyz5TU48Lz3
function Tbl_BPJvzJyz5TU48Lz3(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BPJvzJyz5TU48Lz3.prototype = new lib.ObjectSingleton();
Tbl_BPJvzJyz5TU48Lz3.prototype.entryCtor = Ent_BPJvzJyz5TU48Lz3;
cs.objectSingletons["show2 page data5"] = function(d) { return d.$BPJvzJyz5TU48Lz3 };
Tbl_BPJvzJyz5TU48Lz3.prototype.selfCtor = Tbl_BPJvzJyz5TU48Lz3;
Tbl_BPJvzJyz5TU48Lz3.prototype.stableName = "BPJvzJyz5TU48Lz3";
Tbl_BPJvzJyz5TU48Lz3.prototype.entryKindName = "show2 page data5";

// jsonimport
Ent_BPJvzJyz5TU48Lz3.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$BPJvzJyz5TU48Lz3");
/* ACTION: HBSamantha */
function a_lv45uHRVAzi2UoAs(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_lv45uHRVAzi2UoAs$0;
  s.name = "HBSamantha";
  s.$_ = undefined;
  s.$handler = undefined;
  s.$handler1 = undefined;
  s.$handler2 = undefined;
  return s;
}
cs.registerPage("HBSamantha", "lv45uHRVAzi2UoAs", a_lv45uHRVAzi2UoAs, false);

function a_lv45uHRVAzi2UoAs$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xkAvbCoggc4bkAlI");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xNcfjIhlZxxjRQcM.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "rkogqpvDYKO4GR6Y");
  lib.Wall.show_back_button(false, s);
  (s.pc = "vgKwO35yx7WTaSoI");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "wwL10x5nB44CXS4l");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "FLtpnLntf247K1jV");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_lv45uHRVAzi2UoAs$3);
  (ok1(s, /* bgblue */ s.d.$fAVmOg9Iv81zmPMx) && lib.Wall.set_background_picture(/* bgblue */ s.d.$fAVmOg9Iv81zmPMx, t_resumeCtx_3));
  return a_lv45uHRVAzi2UoAs$3;
  } else {
  (s.pc = "xGND2SNQO830tIRZ");
  null;
  }
  return a_lv45uHRVAzi2UoAs$2;
}
cs.registerStep(a_lv45uHRVAzi2UoAs$0, 'a_lv45uHRVAzi2UoAs$0');

function a_lv45uHRVAzi2UoAs$3(s) {
  return a_lv45uHRVAzi2UoAs$2;
}
cs.registerStep(a_lv45uHRVAzi2UoAs$3, 'a_lv45uHRVAzi2UoAs$3');

function a_lv45uHRVAzi2UoAs$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "vbG2WE63sQStBbiv");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "xw4QIvfckRHdPs2d");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "Ab6f4Q7so62zncxk");
  lib.Box.push_box(s);
  (s.pc = "xrpwk6tZvTWzE5x0");
  lib.Box.set_margins(1, 1, 1, 1, s);
  (s.pc = "og2l94vADCCUFXMg");
  (ok1(s, /* sam1 */ s.d.$v45p4xDZ0l6yqXhS) && /* sam1 */ s.d.$v45p4xDZ0l6yqXhS.post_to_wall(s));
  (s.pc = "Gq2lLvic4snEfoZZ");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_lv45uHRVAzi2UoAs$5(t_lmbProxy_5(la0), la1) });
  (s.pc = "K3txG8blPUc2d6xH");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  (s.pc = "OXB5KqAOME2g4b2B");
  lib.Box.push_box(s);
  (s.pc = "UVAcNv1006JrnLZ6");
  lib.Box.set_margins(1, 1, 1, 1, s);
  (s.pc = "xFS71BxXUbWAvlxX");
  (ok1(s, /* sam2 */ s.d.$fkC87y1KWKxOOhQr) && /* sam2 */ s.d.$fkC87y1KWKxOOhQr.post_to_wall(s));
  (s.pc = "xr0jPMjttMWapUO6");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$handler1 = function(la0, la1) { return a_a_lv45uHRVAzi2UoAs$6(t_lmbProxy_6(la0), la1) });
  (s.pc = "VIt9hUR4EdkVL13F");
  (ok1(s, s.$handler1) && lib.Box.on_tapped(s.$handler1, s));
  lib.Box.pop_box(s);
  (s.pc = "waObJgjDfjl5X4Td");
  lib.Box.push_box(s);
  (s.pc = "DbVtnzEAxgM4R8KW");
  (ok1(s, /* backbutton */ s.d.$Qhcc0che47pamzSo) && /* backbutton */ s.d.$Qhcc0che47pamzSo.post_to_wall(s));
  (s.pc = "aTGv7WXAB93hGiqU");
  lib.Box.set_height(4, s);
  (s.pc = "lIP4qbpGFlALYjth");
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$handler2 = function(la0, la1) { return a_a_lv45uHRVAzi2UoAs$7(t_lmbProxy_7(la0), la1) });
  (s.pc = "J2nb1b79RrI2f04C");
  (ok1(s, s.$handler2) && lib.Box.on_tapped(s.$handler2, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "OiKzAaXTXjB805mx");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_lv45uHRVAzi2UoAs$2, 'a_lv45uHRVAzi2UoAs$2');

/* ACTION: a_lv45uHRVAzi2UoAs::lambda::5 */
function a_a_lv45uHRVAzi2UoAs$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_lv45uHRVAzi2UoAs$5$0;
  s.name = "HBSamantha";
  return s;
}
cs.registerLambda("a_lv45uHRVAzi2UoAs\u003a\u003alambda\u003a\u003a5", "a_lv45uHRVAzi2UoAs$5", a_a_lv45uHRVAzi2UoAs$5, true);

function a_a_lv45uHRVAzi2UoAs$5$0(s) {
  (s.pc = "La4YkzBdIDwuslG8");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_lv45uHRVAzi2UoAs$5$2);
  lib.Web.browse("https\u003a\u002f\u002fgoo.gl\u002fGNvFKV", t_resumeCtx_0);
  return a_a_lv45uHRVAzi2UoAs$5$2;
}
cs.registerStep(a_a_lv45uHRVAzi2UoAs$5$0, 'a_a_lv45uHRVAzi2UoAs$5$0');

function a_a_lv45uHRVAzi2UoAs$5$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_lv45uHRVAzi2UoAs$5$2, 'a_a_lv45uHRVAzi2UoAs$5$2');

/* ACTION: a_lv45uHRVAzi2UoAs::lambda::6 */
function a_a_lv45uHRVAzi2UoAs$6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_lv45uHRVAzi2UoAs$6$0;
  s.name = "HBSamantha";
  return s;
}
cs.registerLambda("a_lv45uHRVAzi2UoAs\u003a\u003alambda\u003a\u003a6", "a_lv45uHRVAzi2UoAs$6", a_a_lv45uHRVAzi2UoAs$6, true);

function a_a_lv45uHRVAzi2UoAs$6$0(s) {
  (s.pc = "Gihz7vzJ4cy1cuGd");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_lv45uHRVAzi2UoAs$6$2);
  lib.Web.browse("https\u003a\u002f\u002fgoo.gl\u002fUGq4yh", t_resumeCtx_0);
  return a_a_lv45uHRVAzi2UoAs$6$2;
}
cs.registerStep(a_a_lv45uHRVAzi2UoAs$6$0, 'a_a_lv45uHRVAzi2UoAs$6$0');

function a_a_lv45uHRVAzi2UoAs$6$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_lv45uHRVAzi2UoAs$6$2, 'a_a_lv45uHRVAzi2UoAs$6$2');

/* ACTION: a_lv45uHRVAzi2UoAs::lambda::7 */
function a_a_lv45uHRVAzi2UoAs$7(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_lv45uHRVAzi2UoAs$7$0;
  s.name = "HBSamantha";
  return s;
}
cs.registerLambda("a_lv45uHRVAzi2UoAs\u003a\u003alambda\u003a\u003a7", "a_lv45uHRVAzi2UoAs$7", a_a_lv45uHRVAzi2UoAs$7, true);

function a_a_lv45uHRVAzi2UoAs$7$0(s) {
  (s.pc = "AIsEncZb0C2QHOVu");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "g23jchMxX1CdXXKR");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_lv45uHRVAzi2UoAs$7$0, 'a_a_lv45uHRVAzi2UoAs$7$0');


//Ent_xNcfjIhlZxxjRQcM
function Ent_xNcfjIhlZxxjRQcM(p) {
  this.parent = p;
}
Ent_xNcfjIhlZxxjRQcM.prototype = new lib.ObjectEntry();
Ent_xNcfjIhlZxxjRQcM.prototype.keys = [];
Ent_xNcfjIhlZxxjRQcM.prototype.values = [];
Ent_xNcfjIhlZxxjRQcM.prototype.fields = [];
//Tbl_xNcfjIhlZxxjRQcM
function Tbl_xNcfjIhlZxxjRQcM(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xNcfjIhlZxxjRQcM.prototype = new lib.ObjectSingleton();
Tbl_xNcfjIhlZxxjRQcM.prototype.entryCtor = Ent_xNcfjIhlZxxjRQcM;
cs.objectSingletons["show2 page data6"] = function(d) { return d.$xNcfjIhlZxxjRQcM };
Tbl_xNcfjIhlZxxjRQcM.prototype.selfCtor = Tbl_xNcfjIhlZxxjRQcM;
Tbl_xNcfjIhlZxxjRQcM.prototype.stableName = "xNcfjIhlZxxjRQcM";
Tbl_xNcfjIhlZxxjRQcM.prototype.entryKindName = "show2 page data6";

// jsonimport
Ent_xNcfjIhlZxxjRQcM.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$xNcfjIhlZxxjRQcM");
cs.registerArtResource("Picture", "$iBK7edNk2zdAOs3r", ".\u002fart\u002fl0_iBK7edNk2zdAOs3r");
cs.registerArtResource("Picture", "$eRZYcl8RNAUA4XQw", ".\u002fart\u002fl0_eRZYcl8RNAUA4XQw");
cs.registerArtResource("Picture", "$jZREObk3Bykevvpp", ".\u002fart\u002fl0_jZREObk3Bykevvpp");
cs.registerArtResource("Picture", "$vV22Nx4P4I2C29zE", ".\u002fart\u002fl0_vV22Nx4P4I2C29zE");
cs.registerArtResource("Picture", "$aaqOZJnMYs3WYZEt", ".\u002fart\u002fl0_aaqOZJnMYs3WYZEt");
cs.registerArtResource("Picture", "$B1bxUfcNaUtYqNCt", ".\u002fart\u002fl0_B1bxUfcNaUtYqNCt");
cs.registerArtResource("Picture", "$xX4TggmtEBKhT4Os", ".\u002fart\u002fl0_xX4TggmtEBKhT4Os");
cs.registerArtResource("Picture", "$xHhpI2VeJYdwYpQD", ".\u002fart\u002fl0_xHhpI2VeJYdwYpQD");
cs.registerArtResource("Picture", "$HwQWnuP71ej2KMOJ", ".\u002fart\u002fl0_HwQWnuP71ej2KMOJ");
cs.registerArtResource("Picture", "$jJ5XwEzIqFfu7zzh", ".\u002fart\u002fl0_jJ5XwEzIqFfu7zzh");
cs.registerArtResource("Picture", "$W34l9p0Y4L5m0MeF", ".\u002fart\u002fl0_W34l9p0Y4L5m0MeF");
cs.registerArtResource("Picture", "$xLbZ5ONNUXjJ7z8c", ".\u002fart\u002fl0_xLbZ5ONNUXjJ7z8c");
cs.registerArtResource("Picture", "$NwyAabazDWvuS2EM", ".\u002fart\u002fl0_NwyAabazDWvuS2EM");
cs.registerArtResource("Picture", "$qAvY7R0a4qU5ecZ0", ".\u002fart\u002fl0_qAvY7R0a4qU5ecZ0");
cs.registerArtResource("Picture", "$TfOcikdCb2n7sSFm", ".\u002fart\u002fl0_TfOcikdCb2n7sSFm");
cs.registerArtResource("Picture", "$v45p4xDZ0l6yqXhS", ".\u002fart\u002fl0_v45p4xDZ0l6yqXhS");
cs.registerArtResource("Picture", "$fkC87y1KWKxOOhQr", ".\u002fart\u002fl0_fkC87y1KWKxOOhQr");
/* ACTION: show */
function a_tZwdLT72w4H0rniV(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tZwdLT72w4H0rniV$0;
  s.name = "show";
  s.$_ = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("show", "tZwdLT72w4H0rniV", a_tZwdLT72w4H0rniV, false);

function a_tZwdLT72w4H0rniV$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "o52VGOsAa27MnoJA");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$xj4b7aSVOttfMICG.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "To4p5HIWadhbLzYm");
  lib.Wall.show_title_bar(false, s);
  (s.pc = "ZqjIxB0M4acbrcg7");
  lib.Wall.show_back_button(false, s);
  (s.pc = "ZbJbkULNw2Qrb5hA");
  var t_call_2 = lib.Colors.from_rgb(0.53, 0.78, 0.81, s);
  (ok1(s, t_call_2) && lib.Wall.set_background(t_call_2, s));
  (s.pc = "V4cAyu6WjXEtblFH");
  var t_call_3 = lib.Web.picture("https\u003a\u002f\u002f68.media.tumblr.com\u002f4b82ec2f2d4a451472a0775039e8c5f9\u002ftumblr_ovfn8sIKfO1wz5jh4o1_400.gif", s);
  (/* pic6 */ s.d.$OUCxmlEJR2nOASYz = t_call_3);
  s.rt.logDataWrite();
  } else {
  (s.pc = "d22NvBkCIocP5aJ6");
  null;
  }
  var t_elseIf_4 = true;
  (s.pc = "w7aoMzNVjqSoRzw1");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "hvacz1fRaXxf2E9k");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "gUWXXR080UXY02Ak");
  lib.Box.push_box(s);
  (s.pc = "xdWTpFqBHX4zW3x6");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "pWMQZYnLp4AfILlC");
  (ok1(s, /* pic6 */ s.d.$OUCxmlEJR2nOASYz) && /* pic6 */ s.d.$OUCxmlEJR2nOASYz.post_to_wall(s));
  (s.pc = "xsoWy89xQkdewls3");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "XaNpTBZIcADpfYEJ");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_tZwdLT72w4H0rniV$4(t_lmbProxy_5(la0), la1) });
  (s.pc = "Swd6jM9Jux5b47Ix");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  lib.Box.pop_box(s);
  s.rt.leave_render();
  } else {
  (s.pc = "Fpjxxy7Wxov1X5Tr");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_tZwdLT72w4H0rniV$0, 'a_tZwdLT72w4H0rniV$0');

/* ACTION: a_tZwdLT72w4H0rniV::lambda::4 */
function a_a_tZwdLT72w4H0rniV$4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tZwdLT72w4H0rniV$4$0;
  s.name = "show";
  return s;
}
cs.registerLambda("a_tZwdLT72w4H0rniV\u003a\u003alambda\u003a\u003a4", "a_tZwdLT72w4H0rniV$4", a_a_tZwdLT72w4H0rniV$4, true);

function a_a_tZwdLT72w4H0rniV$4$0(s) {
  (s.pc = "oVRkCWqc1RN47LHW");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "x5Zggf418QzvgzZA");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "menu");
  return s.rt.leave();
}
cs.registerStep(a_a_tZwdLT72w4H0rniV$4$0, 'a_a_tZwdLT72w4H0rniV$4$0');


//Ent_xj4b7aSVOttfMICG
function Ent_xj4b7aSVOttfMICG(p) {
  this.parent = p;
}
Ent_xj4b7aSVOttfMICG.prototype = new lib.ObjectEntry();
Ent_xj4b7aSVOttfMICG.prototype.keys = [];
Ent_xj4b7aSVOttfMICG.prototype.values = [];
Ent_xj4b7aSVOttfMICG.prototype.fields = [];
//Tbl_xj4b7aSVOttfMICG
function Tbl_xj4b7aSVOttfMICG(l) {
  this.libName = l;
  this.initParent();
}
Tbl_xj4b7aSVOttfMICG.prototype = new lib.ObjectSingleton();
Tbl_xj4b7aSVOttfMICG.prototype.entryCtor = Ent_xj4b7aSVOttfMICG;
cs.objectSingletons["show page data2"] = function(d) { return d.$xj4b7aSVOttfMICG };
Tbl_xj4b7aSVOttfMICG.prototype.selfCtor = Tbl_xj4b7aSVOttfMICG;
Tbl_xj4b7aSVOttfMICG.prototype.stableName = "xj4b7aSVOttfMICG";
Tbl_xj4b7aSVOttfMICG.prototype.entryKindName = "show page data2";

// jsonimport
Ent_xj4b7aSVOttfMICG.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$xj4b7aSVOttfMICG");
cs.registerArtResource("Picture", "$Qhcc0che47pamzSo", ".\u002fart\u002fl0_Qhcc0che47pamzSo");
cs.registerArtResource("Picture", "$xK4G5YPjzthOStfy", ".\u002fart\u002fl0_xK4G5YPjzthOStfy");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["AeHa4dIx1ntTUE2Y"] = {};
  bnd = bnds["AeHa4dIx1ntTUE2Y"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "AeHa4dIx1ntTUE2Y");
    lib["input text line"] = cs.mkLibProxyFactory(bnd, "AeHa4dIx1ntTUE2Y", "input text line");
  lib = libs["RaGSpKHuPxEkohsB"] = {};
  bnd = bnds["RaGSpKHuPxEkohsB"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "RaGSpKHuPxEkohsB");
  bnd = bnds["AeHa4dIx1ntTUE2Y"];
  bnd["this$lib"] = "AeHa4dIx1ntTUE2Y";
  bnd = bnds["RaGSpKHuPxEkohsB"];
  bnd["this$lib"] = "RaGSpKHuPxEkohsB";
}());
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {
  if(!d.hasOwnProperty("$xS5xjAeaqimEZGNh") || !d["$xS5xjAeaqimEZGNh"]) d.$xS5xjAeaqimEZGNh = new Tbl_xS5xjAeaqimEZGNh(d.libName);
  if(!d.hasOwnProperty("$ryHGxrg0MdAglx0U") || !d["$ryHGxrg0MdAglx0U"]) d.$ryHGxrg0MdAglx0U = new Tbl_ryHGxrg0MdAglx0U(d.libName);
  if(!d.hasOwnProperty("$tupiaPNEY9ZasE9P")) d.$tupiaPNEY9ZasE9P = "";
  if(!d.hasOwnProperty("$vSqjhWxIQo23kgra")) d.$vSqjhWxIQo23kgra = "";
  if(!d.hasOwnProperty("$VP4saNlyqL7BzVXT") || !d["$VP4saNlyqL7BzVXT"]) d.$VP4saNlyqL7BzVXT = new Tbl_VP4saNlyqL7BzVXT(d.libName);
  if(!d.hasOwnProperty("$rsgpTQWxZptrgReD") || !d["$rsgpTQWxZptrgReD"]) d.$rsgpTQWxZptrgReD = new Tbl_rsgpTQWxZptrgReD(d.libName);
  if(!d.hasOwnProperty("$xfbGgayWel5yt8Wv") || !d["$xfbGgayWel5yt8Wv"]) d.$xfbGgayWel5yt8Wv = new Tbl_xfbGgayWel5yt8Wv(d.libName);
  if(!d.hasOwnProperty("$JWQ7M5OemStQwZLV") || !d["$JWQ7M5OemStQwZLV"]) d.$JWQ7M5OemStQwZLV = new Tbl_JWQ7M5OemStQwZLV(d.libName);
  if(!d.hasOwnProperty("$BPJvzJyz5TU48Lz3") || !d["$BPJvzJyz5TU48Lz3"]) d.$BPJvzJyz5TU48Lz3 = new Tbl_BPJvzJyz5TU48Lz3(d.libName);
  if(!d.hasOwnProperty("$xNcfjIhlZxxjRQcM") || !d["$xNcfjIhlZxxjRQcM"]) d.$xNcfjIhlZxxjRQcM = new Tbl_xNcfjIhlZxxjRQcM(d.libName);
  if(!d.hasOwnProperty("$fB9F8n1JWNZx16mo")) d.$fB9F8n1JWNZx16mo = 0;
  if(!d.hasOwnProperty("$xj4b7aSVOttfMICG") || !d["$xj4b7aSVOttfMICG"]) d.$xj4b7aSVOttfMICG = new Tbl_xj4b7aSVOttfMICG(d.libName);

};

cs._initGlobals2 = function(d) {
d.$xS5xjAeaqimEZGNh.name = "menu page data";d.$ryHGxrg0MdAglx0U.name = "end page data";d.$VP4saNlyqL7BzVXT.name = "show2 page data";d.$rsgpTQWxZptrgReD.name = "show2 page data2";d.$xfbGgayWel5yt8Wv.name = "show2 page data3";d.$JWQ7M5OemStQwZLV.name = "show2 page data4";d.$BPJvzJyz5TU48Lz3.name = "show2 page data5";d.$xNcfjIhlZxxjRQcM.name = "show2 page data6";d.$xj4b7aSVOttfMICG.name = "show page data2";};

cs._resetGlobals = function(d) {
  d.$xS5xjAeaqimEZGNh = undefined;
  d.$ryHGxrg0MdAglx0U = undefined;
  d.$x8nHXnOWrWdr8NLP = undefined;
  d.$tupiaPNEY9ZasE9P = "";
  d.$vSqjhWxIQo23kgra = "";
  d.$VP4saNlyqL7BzVXT = undefined;
  d.$rsgpTQWxZptrgReD = undefined;
  d.$i2JV41iB27iZgoE2 = undefined;
  d.$x1HG4l9gyAX27GPL = undefined;
  d.$yXB4q8ECawN4kXWb = undefined;
  d.$xAez4VkmOvxEi5Zn = undefined;
  d.$xfbGgayWel5yt8Wv = undefined;
  d.$JWQ7M5OemStQwZLV = undefined;
  d.$BPJvzJyz5TU48Lz3 = undefined;
  d.$xNcfjIhlZxxjRQcM = undefined;
  d.$iBK7edNk2zdAOs3r = undefined;
  d.$eRZYcl8RNAUA4XQw = undefined;
  d.$jZREObk3Bykevvpp = undefined;
  d.$vV22Nx4P4I2C29zE = undefined;
  d.$aaqOZJnMYs3WYZEt = undefined;
  d.$B1bxUfcNaUtYqNCt = undefined;
  d.$xX4TggmtEBKhT4Os = undefined;
  d.$fAVmOg9Iv81zmPMx = undefined;
  d.$xHhpI2VeJYdwYpQD = undefined;
  d.$HwQWnuP71ej2KMOJ = undefined;
  d.$jJ5XwEzIqFfu7zzh = undefined;
  d.$W34l9p0Y4L5m0MeF = undefined;
  d.$xLbZ5ONNUXjJ7z8c = undefined;
  d.$NwyAabazDWvuS2EM = undefined;
  d.$fB9F8n1JWNZx16mo = 0;
  d.$qAvY7R0a4qU5ecZ0 = undefined;
  d.$TfOcikdCb2n7sSFm = undefined;
  d.$v45p4xDZ0l6yqXhS = undefined;
  d.$fkC87y1KWKxOOhQr = undefined;
  d.$xj4b7aSVOttfMICG = undefined;
  d.$Qhcc0che47pamzSo = undefined;
  d.$xK4G5YPjzthOStfy = undefined;
  d.$OUCxmlEJR2nOASYz = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "vmxjm";
cs.scriptGuid = "4e619268-d252-4987-d2ee-2d7d32645ade";
}),

// **************************************************************
"AeHa4dIx1ntTUE2Y": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "forms";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: indentation */
function a_indentation(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_indentation$0;
  s.name = "indentation";
  s.result = undefined;
  return s;
}
cs.registerAction("indentation", "indentation", a_indentation, false);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_indentation$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "MlYnlJMVLG2RLagf");
  return s.rt.enter(a_narrowscreen(s, a_indentation$2));
}
cs.registerStep(a_indentation$0, 'a_indentation$0');

function a_indentation$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_1);
  if (t_actRes_1) {
  (s.pc = "fvUQIztqcBz1gYQv");
  (s.result = 0);
  } else {
  (s.pc = "dt0YYXQ04btlJrZQ");
  var t_call_2 = lib.Box.page_width(s);
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 - 40));
  var t_infix_4 = (ok1(s, t_infix_3) && (t_infix_3 * 0.2));
  var t_infix_5 = (ok1(s, t_infix_4) && (10 + t_infix_4));
  (s.result = t_infix_5);
  }
  return s.rt.leave();
}
cs.registerStep(a_indentation$2, 'a_indentation$2');

/* ACTION: input text line */
function a_inputtextline(previous, returnAddr, $label, $text) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_inputtextline$0;
  s.name = "input text line";
  s.$label = $label;
  s.$text = $text;
  s.$content = undefined;
  s.$changehandler = undefined;
  s.$t = undefined;
  return s;
}
cs.registerAction("input text line", "inputtextline", a_inputtextline, false);

function a_inputtextline$0(s) {
  (s.pc = "ISy3UZlVfS2ZnhEg");
  var t_lmbv_0 = s.$text;
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$content = function(la0, la1) { return a_a_inputtextline$2(t_lmbProxy_1(la0), la1, t_lmbv_0) });
  (s.pc = "rQMlU9juUOBnSPIM");
  return s.rt.enter(a_labeledcontent(s, a_inputtextline$3, s.$label, s.$content));
}
cs.registerStep(a_inputtextline$0, 'a_inputtextline$0');

function a_inputtextline$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_inputtextline$3, 'a_inputtextline$3');

/* ACTION: a_inputtextline::lambda::2 */
function a_a_inputtextline$2(previous, returnAddr, $text) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_inputtextline$2$0;
  s.name = "input text line";
  s.$changehandler = undefined;
  s.$text = $text;
  return s;
}
cs.registerLambda("a_inputtextline\u003a\u003alambda\u003a\u003a2", "a_inputtextline$2", a_a_inputtextline$2, true);

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_a_inputtextline$2$0(s) {
  (s.pc = "vrU98EyH2kTspRIE");
  lib.Box.push_box(s);
  (s.pc = "DUOG5YkbvBoo7ftX");
  var t_call_0 = lib.Colors.foreground(s);
  (ok1(s, t_call_0) && lib.Box.set_border(t_call_0, 0.1, s));
  (s.pc = "YIpAHVVv6bGkqVxY");
  var t_lmbv_1 = s.$text;
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$changehandler = function(la0, la1, la2) { return a_a_a_inputtextline$2$2(t_lmbProxy_2(la0), la1, la2, t_lmbv_1) });
  (s.pc = "t4KwEg41WKXyCDTj");
  var t_call_3 = (ok1(s, s.$text) && s.$text._get(s));
  (ok2(s, t_call_3, s.$changehandler) && lib.Box.edit("textline", t_call_3, s.$changehandler, s));
  (s.pc = "LthSFfpSwy2mKuIX");
  lib.Box.set_margins(0.2, 0.5, 0.2, 0, s);
  (s.pc = "W3C0472c4Iru7Mgo");
  lib.Box.set_horizontal_stretch(1, s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_a_inputtextline$2$0, 'a_a_inputtextline$2$0');

/* ACTION: a_a_inputtextline$2::lambda::2 */
function a_a_a_inputtextline$2$2(previous, returnAddr, $t, $text) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_inputtextline$2$2$0;
  s.name = "a_inputtextline\u003a\u003alambda\u003a\u003a2";
  s.$t = $t;
  s.$text = $text;
  return s;
}
cs.registerLambda("a_a_inputtextline$2\u003a\u003alambda\u003a\u003a2", "a_a_inputtextline$2$2", a_a_a_inputtextline$2$2, true);

function a_a_a_inputtextline$2$2$0(s) {
  (s.pc = "xm4oLLaN18HmqFkR");
  (ok2(s, s.$text, s.$t) && s.$text._set(s.$t, s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_inputtextline$2$2$0, 'a_a_a_inputtextline$2$2$0');

/* ACTION: narrow screen */
function a_narrowscreen(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_narrowscreen$0;
  s.name = "narrow screen";
  s.result = undefined;
  return s;
}
cs.registerAction("narrow screen", "narrowscreen", a_narrowscreen, false);

function a_narrowscreen$0(s) {
  (s.pc = "xhsJ4s70sFRqW9JL");
  var t_call_0 = lib.Box.page_width(s);
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 < 35));
  (s.result = t_infix_1);
  return s.rt.leave();
}
cs.registerStep(a_narrowscreen$0, 'a_narrowscreen$0');

/* ACTION: labeled content */
function a_labeledcontent(previous, returnAddr, $label, $content) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_labeledcontent$0;
  s.name = "labeled content";
  s.$label = $label;
  s.$content = $content;
  s.$indent = undefined;
  s.$pw = undefined;
  return s;
}
cs.registerAction("labeled content", "labeledcontent", a_labeledcontent, false);

function a_labeledcontent$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "x57fXUa20kusWpQR");
  var t_call_1 = lib.Boolean_.not((s.$label == undefined), s);
  var t_lazy_2 = t_call_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_call_3 = (ok1(s, s.$label) && lib.String_.equals(s.$label, "", s));
  var t_call_4 = (ok1(s, t_call_3) && lib.Boolean_.not(t_call_3, s));
  (t_lazy_2 = t_call_4);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "x1QPNytuF6aVimtI");
  lib.Box.push_box(s);
  (s.pc = "W3cfgIbzJtpKQu58");
  lib.Box.set_horizontal_stretch(1, s);
  (s.pc = "N3V9zJqTiYOZ09Y4");
  lib.Box.set_horizontal_align("left", s);
  var t_elseIf_5 = true;
  (s.pc = "MIXwy0Lrg4byv7v2");
  return s.rt.enter(a_narrowscreen(s, a_labeledcontent$4));
  } else {
  (s.pc = "CLcBNraLBuLvz6WE");
  return s.rt.enter(a_normalcontent(s, a_labeledcontent$9, s.$content));
  }
  return a_labeledcontent$3;
}
cs.registerStep(a_labeledcontent$0, 'a_labeledcontent$0');

function a_labeledcontent$4(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_6);
  if (t_actRes_6) {
  (s.pc = "iLdCmyES0H44sYXl");
  lib.Box.use_vertical_layout(s);
  (s.pc = "x5C1zDmnt0g59AKK");
  lib.Box.set_margins(0.35, 0, 0, 0, s);
  } else {
  (s.pc = "JG4RsN69pDFxkHCs");
  lib.Box.use_horizontal_layout(s);
  }
  (s.pc = "jpuLtmhurwi9PgQH");
  return s.rt.enter(a_indentation(s, a_labeledcontent$6));
}
cs.registerStep(a_labeledcontent$4, 'a_labeledcontent$4');

function a_labeledcontent$9(s) {
  return a_labeledcontent$3;
}
cs.registerStep(a_labeledcontent$9, 'a_labeledcontent$9');

function a_labeledcontent$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_labeledcontent$3, 'a_labeledcontent$3');

function a_labeledcontent$6(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  (s.$indent = t_actRes_7);
  (s.pc = "qIj8HVwd4WzOBmo0");
  lib.Box.push_box(s);
  (s.pc = "RpI2slWOhKGTeFzx");
  (ok1(s, s.$label) && lib.String_.post_to_wall(s.$label, s));
  (s.pc = "bQyiflPFSe4LG1PF");
  var t_call_8 = lib.Box.page_width(s);
  (s.$pw = t_call_8);
  (s.pc = "do30F2oLngCTQahg");
  var t_infix_9 = (ok1(s, s.$pw) && (s.$pw - 0.7));
  var t_infix_10 = (ok2(s, s.$indent, t_infix_9) && (s.$indent / t_infix_9));
  (ok1(s, t_infix_10) && lib.Box.set_horizontal_stretch(t_infix_10, s));
  (s.pc = "ZSt80PJbtHzVC9Xc");
  lib.Box.set_horizontal_align("right", s);
  (s.pc = "rwpwvOMJSurVrxXm");
  lib.Box.set_margins(0.2, 0, 0.2, 0.5, s);
  lib.Box.pop_box(s);
  (s.pc = "PcMSXcdzHFpXVs0c");
  lib.Box.push_box(s);
  var t_elseIf_11 = true;
  (s.pc = "PMVSXaDMx2Byxb4q");
  var t_call_12 = lib.Box.page_width(s);
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 < 40));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "S08jbByW69nHCSvh");
  var t_call_14 = lib.Box.page_width(s);
  var t_infix_15 = (ok2(s, t_call_14, s.$indent) && (t_call_14 - s.$indent));
  (ok1(s, t_infix_15) && lib.Box.set_width_range(10, t_infix_15, s));
  (s.pc = "v6d9cE4Xn6LJLsIP");
  lib.Box.set_horizontal_stretch(1, s);
  } else {
  (s.pc = "r5cfsPE3NVyPphiI");
  lib.Box.set_horizontal_stretch(0, s);
  (s.pc = "xyhKvW904uX4eTbV");
  var t_call_16 = lib.Box.page_width(s);
  var t_infix_17 = (ok2(s, t_call_16, s.$indent) && (t_call_16 - s.$indent));
  (ok1(s, t_infix_17) && lib.Box.set_width_range(20, t_infix_17, s));
  }
  (s.pc = "d4tjdbWzbshKmjAb");
  lib.Box.push_box(s);
  (s.pc = "Bc2pIO5JfYnlxvd5");
  lib.Box.set_padding(0, 0.5, 0, 0.5, s);
  (s.pc = "Il02dBjaLo20CMA7");
  return s.rt.enter((ok1(s, s.$content) && s.$content(s, a_labeledcontent$8)));
}
cs.registerStep(a_labeledcontent$6, 'a_labeledcontent$6');

function a_labeledcontent$8(s) {
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_labeledcontent$3;
}
cs.registerStep(a_labeledcontent$8, 'a_labeledcontent$8');

/* ACTION: normal content */
function a_normalcontent(previous, returnAddr, $content) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_normalcontent$0;
  s.name = "normal content";
  s.$content = $content;
  return s;
}
cs.registerAction("normal content", "normalcontent", a_normalcontent, false);

function a_normalcontent$0(s) {
  (s.pc = "muK7qjocorEy5bFp");
  lib.Box.push_box(s);
  var t_elseIf_0 = true;
  (s.pc = "PGjY9ijaM2Dqkz6u");
  var t_call_1 = lib.Box.page_width(s);
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 40));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "HOwt6al4pB0a4b77");
  var t_call_3 = lib.Box.page_width(s);
  (ok1(s, t_call_3) && lib.Box.set_width_range(10, t_call_3, s));
  (s.pc = "JmPANVSMlr2ok7XQ");
  lib.Box.set_horizontal_stretch(1, s);
  } else {
  (s.pc = "xjNSS8T2YkmlTDA1");
  lib.Box.set_horizontal_stretch(0, s);
  (s.pc = "drzpEKoWynG0Wxut");
  var t_call_4 = lib.Box.page_width(s);
  (ok1(s, t_call_4) && lib.Box.set_width_range(20, t_call_4, s));
  }
  (s.pc = "sL9WHWbDfK264y7q");
  lib.Box.push_box(s);
  (s.pc = "xwjgvLJt7CmHAqYx");
  lib.Box.set_padding(0, 0.5, 0, 0.5, s);
  (s.pc = "WjbACCskO8bfp0L4");
  return s.rt.enter((ok1(s, s.$content) && s.$content(s, a_normalcontent$3)));
}
cs.registerStep(a_normalcontent$0, 'a_normalcontent$0');

function a_normalcontent$3(s) {
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_normalcontent$3, 'a_normalcontent$3');

cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.authorId = "vmxjm";
cs.scriptGuid = "4e619268-d252-4987-d2ee-2d7d32645ade";
}),

// **************************************************************
"RaGSpKHuPxEkohsB": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "game";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Media.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Media.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set score";
cs.authorId = "vmxjm";
cs.scriptGuid = "4e619268-d252-4987-d2ee-2d7d32645ade";
})}
