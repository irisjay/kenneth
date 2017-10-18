var preloads = [
    "art/l0_xK4G5YPjzthOStfy",
    "art/tumblr_ovfn8sIKfO1wz5jh4o1_400.gif",
    "art/l0_xX4TggmtEBKhT4Os",
    "art/l0_xHhpI2VeJYdwYpQD",
    "art/l0_HwQWnuP71ej2KMOJ",
    "art/l0_NwyAabazDWvuS2EM",
    "art/l0_TfOcikdCb2n7sSFm",
    "art/l0_qAvY7R0a4qU5ecZ0",
    "art/l0_jJ5XwEzIqFfu7zzh",
    "art/l0_W34l9p0Y4L5m0MeF",
    "art/l0_xLbZ5ONNUXjJ7z8c",
    "art/l0_aaqOZJnMYs3WYZEt",
    "art/l0_jZREObk3Bykevvpp",
    "art/l0_Qhcc0che47pamzSo",
    "art/l0_xAez4VkmOvxEi5Zn",
    "art/l0_vV22Nx4P4I2C29zE",
    "art/l0_i2JV41iB27iZgoE2",
    "art/l0_x1HG4l9gyAX27GPL",
    "art/l0_yXB4q8ECawN4kXWb",
    "art/l0_v45p4xDZ0l6yqXhS",
    "art/l0_fkC87y1KWKxOOhQr",
    "art/l0_x8nHXnOWrWdr8NLP",
    "art/l0_iBK7edNk2zdAOs3r",
    "art/l0_B1bxUfcNaUtYqNCt",
    "art/l0_eRZYcl8RNAUA4XQw"
] .forEach (function (url) {
    var x = new Image ();
    x .src = url
    x .style .position = 'absolute';
    x .style .visibility = 'hidden';
    document .addEventListener ('DOMContentLoaded', function () {
        document .body .insertBefore (x, document .body .firstChild);
    })
})

document .addEventListener ('DOMContentLoaded', function () {
    var stopped = false;
    var poll = function () {
        var x = document .querySelector ('#scriptEditor');
        
        if (x)
            TDev.LayoutMgr.QueueReLayout = function () {
                var check = function () {
                    if (TDev.LayoutMgr.needrelayout) {
                        if (!TDev.LayoutMgr.renderexecutionmode && TDev.LayoutMgr.instance.rootBox) {
                            TDev.LayoutMgr.instance.CoreLayout();
            				x .style .visibility = '';
            				stopped = true; setTimeout (function () {stopped = false;}, 60);
                            TDev.LayoutMgr.needrelayout = false;
                        }
                        else
                            TDev.Util.setTimeout(100, check);
                    }
                };
                if (!TDev.LayoutMgr.needrelayout) {
                    TDev.LayoutMgr.needrelayout = true;
            		if (! stopped) x .style .visibility = 'hidden';
                    TDev.Util.setTimeout(50, check);
                }
            };
        else
            setTimeout (poll, 100);
    };
    poll ();
})