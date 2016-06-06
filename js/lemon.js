/**
 * Created by 15031493 on 2016/3/16.
 */

var lemon = {};

lemon.tooltip = function(){
    $('[data-toggle="tooltip"]').tooltip();
}
lemon.animations = function(){
    $(document).on('click','[data-animate]', function () {
        var tar = $(this).data("target");
        if($(tar).hasClass("animated")){
            return false;
        }
        var tar = $(this).data("target");
        var play = $(this).data("play");
        $(tar).addClass("animated "+play);
         setTimeout(function () {
            $(tar).removeClass("animated "+play);
        },1000);
        return false;
    });
}
lemon.panelCollapse = function(){
    var open = '[data-tool="panel-collapse"]'
        $(open).each(function () {
            var _this  = $(this),
                p = _this.closest(".panel"),
                body = p.find(".panel-wrapper"),
                em = _this.find("em");
            body.on('hide.bs.collapse', function () {
                em.removeClass("fa-minus").addClass("fa-plus")
            })
            .on('show.bs.collapse', function () {
                em.removeClass("fa-plus").addClass("fa-minus")
            })
        });
    $(document).on("click",open, function () {
        var   p = $(this).closest(".panel"),
            body = p.find(".panel-wrapper");

            body.collapse("toggle")
    })
}
lemon.panelClose = function(){
    var close = '[data-tool="panel-dismiss"]'
        $(document).on('click',close,function () {
            var _this  = $(this),
                p = _this.closest(".panel"),
                val = _this.attr("data-tool-val");

            var wait = function () {
                var dfd = $.Deferred();
                p.parent().addClass(val);
                setTimeout(function () {
                    dfd.resolve();
                },1000)
                return dfd;
            }
            $.when(wait()).done(function () {
                p.parent().remove();
            })
        });
}

lemon.getPos = function ($tar) {
    var h = document.body.offsetHeight;
    var w = document.body.offsetWidth;
    var top = h/2 - $($tar).height()/2;
    var left = w/2 - $($tar).width()/2;
    if(top<0)top = 0;
    return {'top':top+"px",'left':left+"px"};
}
$(function(){
    lemon.animations();
    lemon.tooltip();
    lemon.panelCollapse();
    lemon.panelClose();
})