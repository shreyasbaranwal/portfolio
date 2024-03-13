<script>
          $(document).ready(function () {
              $("div.site-navigation > li").click(function (e) {
               $("div.site-navigation > li").removeClass("active");
               $(this).addClass("active");
                })
            });
        </script>