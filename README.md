# Panton99.github.io

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="Hello, I am Jisoo" />
    <link href="style.css" rel="stylesheet" />
    <title>Jisoo Kim - Website</title>
  </head>
  <body>
    <div class="container">
    <!-- menu (mobile size: menu icon shows up, checkbox) -->
     <nav class="side-menu">
      <label class="menu-icon" aria-label="open menu" for="menu-toggle"
        >&#9776;
      </label>
      <input type="checkbox" id="menu-toggle" />

        <div class="menu-links">
          <a href="Jisoo-home.html" class="active">Home</a>
          <a href="Jisoo-about.html">About Jisoo</a>
          <a href="Jisoo-projects.html">Projects and Publications</a>
          <a href="Jisoo-resume.html">Resume</a>
        </div>
      </nav>
    </div>
    <!-- main body -->
    <main>
      <!-- dark mode checkbox -->
      <input id="dark-mode" type="checkbox" name="dark-mode">
      <label for="dark-mode">
        <span class="dark-mode">&#9789;<a> click for dark mode</a></span>
        
      </label> 
      <div class="Home-main">
        
        
        <div class="textBody">
        <div class="text">
          <!-- brief introduction -->
          <img
            class="Jisoo-img"
            src="./JKim.JPG"
            alt="A smiling photo of Jisoo, has a long, black and curly hair"
            style="width: 200px; height: 200px; margin-top: 60px"
          />
          <h1 class="Home-main-introduction">Jisoo Kim</h1>
          <!-- list of summary -->
          <p>
            <li>
              Computer Science graduate student at Boston University MET
              <br /><br />
            </li>
            <li>Belmont, MA <br /><br /></li>
            <li>She/Her/Hers <br /><br /></li>
            <li>
              If you want to find more about me click 'About Jisoo' &#128512;
            </li>
          </p>
        </div>
       </div>
      </div>
    </main>
  </body>
</html>
