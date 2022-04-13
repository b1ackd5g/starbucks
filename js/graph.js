$(function() {
                function test() {
                    $(".graph > div ").each(function (i) {
                        var $this  = $(this),
                            location = $this.data('width');
                        $this.css({'width' : location + '%'});
                    });
                }
                if($().appear) {
                    $('.graph').appear().on('appear', function() {
                        test();
                    });
                } else {
                    test();
                }
            });