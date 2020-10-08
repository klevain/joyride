$(document).ready(function() {

    const $randomRotSel = $("header, footer, article, aside, hr, article h2");
    const $randomHueSel = $("article");
    $randomRotSel.randomRot();
    $randomHueSel.randomHue();
    
})

jQuery.fn.extend({
    randomRot: function() {
        return this.each(function() {
            $(this).css( "transform", function( index ) {
                let randomRot = Math.random() * 1 + 0.5;
                let randomDir = (Math.random() >= 0.5)? "-" : "";
                let transformProp = "rotate(" + randomDir + randomRot + "deg)";
                return transformProp;
            });
        });
    },
    randomHue: function() {
        return this.each(function() {
            $(this).css( "background", function( index ) {
                let randomRot = Math.random() * 360;
                let filterProp = "hsl(" + randomRot + ", 58%, 70%)";
                return filterProp;
            });
        });
    }
});