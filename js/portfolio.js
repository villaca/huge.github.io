$(function(){
    /*$('portfolio-list').filterable({
        useHash: true,
        animationSpeed: 1000,
        show: { width: 'show', opacity: 'show' },
        hide: { width: 'hide', opacity: 'hide' },
        useTags: true,
        tagSelector: '#portfolio-filter a',
        selectedTagClass: 'current',
        allTag: 'all'
    });
    */

    $('#portfolio-filter').children().click(function(){
        var $tipo = $(this).data("type");

        var $portfolio = $("#portfolio-list").children();

        if( $tipo === "all"){
            $portfolio.show();
        }
        else {
            $portfolio.each(function(){
                if($(this).data("type") !== $tipo){
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
        }

    });

});
