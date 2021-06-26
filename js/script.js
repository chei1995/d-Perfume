        $(document).ready(function() {
            $('.ham-icons').click(function(e) {
                e.preventDefault();
                $('.toggerList').toggleClass('active');
                $('.bg').fadeToggle();
                // $('.bg').toggleClass('active');
            })

            $('.fa-heart').click(function() {
                $('.addLike').addClass('bgbk');
            })
            $('.addLike').click(function() {
                $('.addLike').removeClass('bgbk');
            })
            $('.fa-cart').click(function() {
                $('.addCart').addClass('bgbk');
            })
            $('.addCart').click(function() {
                $('.addCart').removeClass('bgbk');
            })
        });