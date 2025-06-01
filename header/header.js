document.getElementById("header").innerHTML = 
"<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>"
+ "<link rel='stylesheet' href='/header/header.css'>"
+ "<link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet'>"
+ "<script src='http://code.jquery.com/jquery-3.3.1.js'></script>"

+ "<div align='center' id='cover-logo' class='container'><img src='/header/coverlogo.png' alt='Cover logo'></div>"
+ "<nav>"
+   "<div>"
+       "<i class='fa fa-bars'></i>"
+   "</div>"
+   "<ul>"
+       "<li><a href='https://criticalbookreviews.com'>Home</a></li>"
+       "<li><a href='#'>Malayalam<i class='fa fa-sort-desc'></i></a>"
+          "<ul>"
+              "<li><a href='../books/pathummayude-aadu.html' target='_parent'>പാത്തുമ്മായുടെ ആട്</a></li>"
+              "<li><a href='../books/khassakinte-ithihasam.html' target='_parent'>ഖസാക്കിന്റെ ഇതിഹാസം</a></li>"
+              "<li><a href='../books/mayyazhipuzhayude-teerangalil.html' target='_parent'>മയ്യഴിപ്പുഴയുടെ തീരങ്ങളിൽ</a></li>"
+           "</ul>"    
+       "</li>"
+       "<li><a href='#'>Autobiographies<i class='fa fa-sort-desc'></i></a>"
+          "<ul>"
+              "<li><a href='../books/when-breath-becomes-air.html' target='_parent'>When Breath becomes Air</a></li>"
+              "<li><a href='../books/iammalala' target='_parent'>I am Malala</a></li>"
+         "</ul>"
+       "</li>"
+      "<li><a href='#'>Philosophy<i class='fa fa-sort-desc'></i></a>"
+           "<ul>"
+               "<li><a href='../books/therepublic.html' target='_parent'>The Republic</a></li>"
+              "<li><a href='../books/siddhartha.html' target='_parent'>Siddhartha</a></li>"
+           "</ul>"
+       "</li>"
+       "<li><a href='#'>Harry Potter<i class='fa fa-sort-desc'></i></a>"
+           "<ul>"
+               "<li><a href='../books/hpandthechamberofsecrets.html' target='_parent'>Chamber of Secrets</a></li>"
+              "<li><a href='../books/prisoner-of-azkaban.html' target='_parent'>Prisoner of Azkaban</a></li>"
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
