document.getElementById("header").innerHTML = 
"<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>"
+ "<link rel='stylesheet' href='../Header/header.css'>"
+ "<link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet'>"
+ "<script src='http://code.jquery.com/jquery-3.3.1.js'></script>"

+ "<div align='center' id='cover-logo' class='container'><img src='../coverlogo.png' alt='Cover logo'></div>"
+ "<nav>"
+   "<div>"
+       "<i class='fa fa-bars'></i>"
+   "</div>"
+   "<ul>"
+       "<li><a href='https://asv2004.github.io/'>Home</a></li>"
+       "<li><a href='#'>Chetan Bhagat<i class='fa fa-sort-desc'></i></a>"
+          "<ul>"
+              "<li><a href='../Half Girlfriend/Half Girlfriend.html' target='_parent'>Half Girlfriend</a></li>"
+              "<li><a href='../Five Point Someone/Five Point Someone.html' target='_parent'>Five point someone</a></li>"
+              "<li><a href='../The Girl in Room 105/The Girl in Room 105.html' target='_parent'>The Girl in Room 105</a></li>"
+           "</ul>"    
+       "</li>"
+       "<li><a href='#'>Sudha Murthy<i class='fa fa-sort-desc'></i></a>"
+          "<ul>"
+              "<li><a href='../Wise & Otherwise/Wise & Otherwise.html' target='_parent'> Wise and Otherwise</a></li>"
+         "</ul>"
+       "</li>"
+      "<li><a href='#'>R.K. Narayan<i class='fa fa-sort-desc'></i></a>"
+           "<ul>"
+               "<li><a href='../Waiting for the Mahatma/Waiting for the Mahatma.html' target='_parent'>Waiting for the Mahatma</a></li>"
+              "<li><a href='../The Bachelor of Arts/The Bachelor of Arts.html' target='_parent'>The Bachelor of Arts</a></li>"
+           "</ul>"
+       "</li>"
+   "</ul>"
+ "</nav>"; 

    $("nav div").click(function(){
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });

    $("ul li").click(function(){
       $("ul ul").slideUp();
       $(this).find('ul').slideToggle();

    });

    $(window).resize(function(){
       if($(window).width() >768) {
           $("ul").removeAttr('style');
       }
    });
