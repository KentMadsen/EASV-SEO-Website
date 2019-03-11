<!DOCTYPE html>
<html lang="en">
      <head>      
            <meta charset="UTF-8">

            <meta name="viewport" 
                  content="width=device-width, initial-scale=1.0">
            
            <meta http-equiv="X-UA-Compatible" 
                  content="ie=edge">

            <!-- -->
            <meta name="description" 
                  content="School assignment about seo. having to write about what SEO is, how it's used and why its important"/>

            <meta name="keywords" 
                  content="Search Engine Optimization, SEO, Backend, Frontend, Crawler, index"/>

            <meta name="robots" 
                  content="index, follow"/>

            <meta name="author" 
                  content="Kent Madsen"/>
            
            <meta name="msvalidate.01" 
                  content="A61A16D254E6847F3E8AEAF2A3B37922" />

            <!-- https://www.wordstream.com/blog/ws/2015/04/30/seo-basics -->
            <title>
                  SEO - Improving pagerank, to gain more customers attention.
            </title>

            <?php include "./generic/libraries.html"; ?>
      </head>

      <body>
            <?php include './generic/header.html'; ?>

            <!-- Content Area  -->
            <main>
                  <section>
                        <div class="cover-background-main-menu">
                              <ol class="frontpage-share-list">
                                    <!--
                                    <li>
                                          <a href="https://www.facebook.com/"
                                             class="site-link frontpage-share-list-button">
                                                <div class="frontpage-share-list-button-icon">
                                                      <i class="fab fa-facebook">
                                                      </i>
                                                </div>
                                                <div class="frontpage-share-list-button-text">
                                                      <p>
                                                            Facebook
                                                      </p>
                                                </div>
                                          </a>
                                    </li>

                                    <li>
                                          <a href="https://twitter.com/"
                                             class="site-link frontpage-share-list-button">
                                                <div class="frontpage-share-list-button-icon">
                                                      <i class="fab fa-twitter-square">
                                                      </i>
                                                </div>
                                                <div class="frontpage-share-list-button-text">
                                                      <p>
                                                            Twitter
                                                      </p>
                                                </div>
                                          </a>
                                    </li> -->

                                    
                                    <li>
                                          <a href="https://www.linkedin.com/company/designermadsen"
                                             class="site-link frontpage-share-list-button"
                                             title="Linkin Profile">
                                                <div class="frontpage-share-list-button-icon">
                                                      <i class="fab fa-linkedin-in">
                                                      </i>
                                                </div>
                                                <div class="frontpage-share-list-button-text">
                                                      <p>
                                                            Linkedin
                                                      </p>
                                                </div>
                                          </a>
                                    </li>

                                    <li>
                                          <a href="https://github.com/KentMadsen/SEO-Website"
                                             class="site-link frontpage-share-list-button" 
                                             title="Website Source Code">
                                                <div class="frontpage-share-list-button-icon">
                                                      <i class="fab fa-github-square">
                                                      </i>
                                                </div>
                                                <div class="frontpage-share-list-button-text">
                                                      <p>
                                                            Github
                                                      </p>
                                                </div>
                                          </a>
                                    </li>
                              </ol>
                        </div>
                  </section>
                  <!-- Welcome to the site -->
                  <section>

                        <!-- -->
                        <div class="page-boundary">
                          <div>
                            <!-- -->
                            <h1 class="website-title">
                                Search Engine Optimisation
                            </h1>

                            <h2 class="website-title"> 
                                  What is SEO. 
                            </h2>
                            <!-- https://www.interaction-design.org/literature/topics/search-engine-optimization -->
                            <p class="website-description">
                                Search engine optimisation (SEO.) is a set of techniques used with the intention to improve a sites visibility on the internet.
                                By making data easily accessible for search engines to parse and increase the sites rank. 
                                Which in turn will gain attention or sales for the website.

                                It's a tedious process, which require technical and business decisions on the site and might not garantee results. 
                                But is usefull for futurer use;
                            </p>

                            <h2 class="website-title"> 
                                  How it's used  
                            </h2>
                            <!-- -->
                            <p class="website-description">
                              Search engine optimisation can be done at several stages from easy to implement changes, 
                              to rewriting frontend and backend components and restructering the organisation of the information.
                            </p>
                          </div>
                        </div>

                        <div class="page-boundary">
                              <h1 class="website-title">
                                    Why it's important
                              </h1>
                              <p class="website-description">
                                    By using search engine optimisation, it'll make it easier to categorised a websites pages.
                                    When people go to a search engine like google, the pages will rank higher, if the content
                                    is a solution or closely related to the users query. 
                              </p>
                              <p class="website-description">
                                    Considering that most traffic go though search engines like google it's a way to make the 
                                    website more easy accessible.
                              </p>
                        </div>

                </section>

            </main>

            <?php include './generic/footer.html'; ?>
      </body>

      <?php include './generic/frameworks.html';
            include './generic/code.html';
      ?>

      <!-- Content Area  -->
      <script type="application/javascript">
            initialise_front();
      </script>
</html>
