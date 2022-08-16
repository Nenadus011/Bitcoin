
$(document).ready(function () {


    if ($('.team-slider').length > 0){
        $('.team-slider').owlCarousel({
            items: 2,
            margin: 20,
            autoplay:true,
            autoplayTimeout:3000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                850: {
                    items: 2,
                    margin: 25
                }
            }



        });
        
    }








});









