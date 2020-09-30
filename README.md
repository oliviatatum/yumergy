<h1 text-align="center">Yumergy</h1>
<small>(See demo <a href="https://yumergy.herokuapp.com" title="Yumergy" target="_blank">here</a>)</small>

<p>
Yumergy is a recipe website designed for people with one or more dietary requirements. Whether it's an allergy, an intolerance, 
a lifestyle choice, or just an aversion to a certain vegetable, all dietary restrictions can make it very difficult to find 
something suitable to eat. When you have more than one of them, this problem becomes even more frustrating. Yumergy aims to 
alleviate the stress around meal times, by allowing users to filter out all the recipes that they can't (or won't) have, leaving 
them with a delicious array of recipes to freely choose from without any worries. 
Additionally, Yumergy allows users to save their favourite recipes and add their own, so they can share the yum with fellow foodies.
</p>


<h2><b>UX</b></h2>

<h3>Landing Page/Home</h3>

The first page you land on when visiting Yumergy is the "Super Search" page, as that is the main function of the site. 
The heading stands out in a soft red (which stimulates hunger), and the search bar is right underneath with the subheading 
"What Do You Fancy?", which leads the user in to enter their keyword(s) in the search bar. The form is very simple, so it is
easy to understand and use even for a first time user. It is made up of the search bar, and a selection of checkboxes underneath,
below the header "Please show me recipes that are:", so the purpose of the checkboxes is clear. The user simply enters their
search term, ticks the appropriate boxes, and then clicks the "SEARCH!" button, which is in the same bold red as the h2 heading,
and has a FontAwesome magic wand icon to add a little excitement to the search!
In case the user doesn't know what to search for, text at the bottom of the form asks "Need some inspiration? Browse all recipes",
with the latter part of the sentence being a link to the browse all page.

<h3>Browse All Recipes</h3>

The "Browse All Recipes" page has a small but easy to spot "<- Back to search" link in the top left corner, for ease of navigation. 
The title "Browse All Meals" is centered near the top of the container, in clear sans serif h2 letters. 
The recipes are displayed in categories under h5 headers; Gluten Free, Dairy Free, Vegan, Vegetarian, Nut-Free, Breakfasts, Lunches, Dinners, Snacks, and Under 400 Calories.
Each of these display a Materialize carousel which shows the image of the recipe, and beneath the image the name of the recipe is shown in bold blue letters.
The image and caption are both links which take the user to the recipe page upon clicking.

<h3>Search Results Page</h3>

After the user clicks "SEARCH!" on the landing page, they are taken to the results page. Here, there is a h2 title saying "Search Results". The "Search Results" page also 
has a small but easy to spot "<- Back to search" link in the top left corner, for ease of navigation. Under this, in a new row, they will see their search results,
displayed on individual Materialize cards, including the recipe image, name, amount of calories, and hashtags relevant to the dish, such as "#dairy-free". The image and 
title are links which will take the user to the recipe page for that particular recipe.

<h3>Recipe Page</h3>

The recipe page is generated when the user clicks on the recipe, and has two small but easy to spot "<- Back to browse" links,
one in the top left corner, and one in the bottom left corner of the container, for ease of navigation. There are two because the recipes tend to be longer than content on other pages on
the website and when the user gets to the bottom they may not be able to see the top link anymore, so having a link at the bottom as well improves the user experience.
The h2 heading on the recipe page is set to the title of the recipe selected. Underneath is text saying "by {created_by}" so the user can see which company or individual user is the author of the
recipe they are about to read. Below the heading and author, there is a large image of the meal, which draws the users eye and encourages them to read further.
There are two sections below the meal image; Ingredients and Method, which both have h3 headers to make the recipe easy to navigate. The ingredients are in an unordered list, and the method steps
are in a numbered list so the user can follow them step-by-step without losing their place. Everything is centered on the page to make it easy to read and look neat and attractive to the user.
Finally there is the calorie information, which I would like to develop into a nutrition information section (see Future Features section).

<h3>Register, Login, and Logout</h3>

In the navbar at the top of every page, there are links to Log In and Register. When the user clicks on Register, they are taken to the registration page with a form where they
are instructed to enter a username. Under the text box there is text to inform them of the character minimum and maximum and the characters allowed: a-z and 0-9, to help them know exactly
what they are allowed to enter as their username. This is also present under the password textbox. The Username and Password fields have recognisable Username and Password icons from FontAwesome
to help the user easily identify what to enter in each box. At the bottom of the registration page, below the button, there is text saying, "Already have an account? Log in now", with the "Log in now"
being a link to the log in page. 
Once they have entered a username and password, they click the "Register" button, which is easy to see below the entry boxes, in the same red as the navbar. If the username is already in the database,
upon clicking the "Register" button, the page is reloaded, and a flash message appears informing the user "Username already exists". Otherwise, clicking on the "Register" button 
takes the user to the Profile page, and a flash message appears at the top saying, "Registration Successful", so they know they have successfully registered an account. 

If the user has previously registered, they can click on the log in button which will take them to the log in page. This page is consistent with the Register page, featuring of the same 
Username and Password fields and FontAwesome icons, but with the username icon being that of a current user, rather than the icon to create a user. The button also says "Log In" rather than "Register".
The prompt at the bottom says, "Do you have an account yet? Register now", with a link to the registration page. 
If the user enters the username and/or password incorrectly, the page is reloaded, and a flash message is shown with the message "Incorrect Username and/or Password". It is not specified to the user whether they got the username
or the password wrong. This is to prevent anyone trying to force their way into someone else's account. If the username and password are both correct, upon clicking the "Log In" button, the user is taken to 
their profile page (currently the features on this page are not available, see Future Features), with a flash message saying "Welcome {username}", to welcome the user to the site.

Once the user has logged in, the navbar no longer shows links to the Log In or Register pages, but now shows links for Create a Recipe, and Log Out. When the user clicks Log Out, they
are redirected to the Log In page, and a flash message is shown reading "You have been Logged Out", to confirm the action has been performed. 


<h3>Create a Recipe</h3>

The Create a Recipe page contains a form which allows the user to enter the details about their dish in an easy to follow format. Each entry field has a relevant FontAwesome icon to help the user
to immediately understand what information to enter in each field. As with the Recipe page, there are links at the top and bottom of the container to take the user back to the main search page, 
for easier navigation should they choose not to enter a recipe. The colour and look of these links remain consistent across all the pages they are featured on. 
The forms entry boxes each have the 'required' attribute, so if the user attempts to move on without filling in a particular field then they are prompted to complete it before they are able to submit 
the form. The submit button is consistent in style to the other entry buttons on the site, and again uses the FontAwesome magicwand icon to add a touch of excitement!


<h3>Styles and Colour Palette</h3>

I created the colour palette for Yumergy using the <a href="coolors.co" target="_blank">Coolors</a> website. I wanted a red/orange colour as the dominant colour on the site as it is linked with 
food and is psychologically supposed to make people feel hungrier, which is ideal for a website based around food. I liked Bittersweet, the colour I chose for this purpose, because it was bold 
without being too garish and harsh for the user to look at. For the other colours, I wanted to create contrast by using blues, as they are opposite red/orange shades in the colour wheel.

The background of all the pages is an image of bread, strawberries and avocado displayed on a pale marble surface. I chose this image because it added interest and related to the website's
goals, while not being too busy and distracting for the user, as most of the image is white space. This image is consistent across all pages of the site. The translucent container keeps the text 
readable while the background image remains visible.

For fonts, I chose a handwriting-style font for the company name of Yumergy, as it looks friendlier and less formal than other fonts. For the rest of the text on the site, I used a sans serif font,
for it's clear readablity. Headings have a text-shadow effect to help them stand out and look nicer.

<pre><h4>User Stories</h4>
<b><i>Sue</i></b>

Sue has two children, Chris and Tom. Chris is lactose intolerance, Tom hates anything with nuts in, and Sue is 
trying to lose weight. Cooking dinners that suit all three of them was a NIGHTMARE until she discovered 
Yumergy. Now she can search for recipes that are low in calories as well as being dairy-free AND nut-free. 
This makes life so much easier.

<b><i>Paul</i></b>

Paul has been a vegetarian for years, but has recently developed an intolerance to both dairy and gluten. These
were both staples in his diet for years, so he has no idea what to cook anymore.
Luckily, Yumergy gives him the ability to find all his old favourites (dairy and gluten-free macaroni cheese anyone?),
as well as discovering some new meals that he loves. 

</pre>

<h4>Wire Frames</h4>


----------------------------------------
<h2><b>Features</b></h2>

<h3><b>Existing Features</b></h3>
<ul>
    <li>The "Super Search" search function which searches the database for the keyword(s) entered by the user, and produces the results on the Search Results page.</li>
    <li>The "Browse All Recipes" page allows users to look at all the recipes in the database, organised into catergories.</li>
    <li>The Registration, Log In, and Log Out functionality, which allow the user to create an account, and log in and out of that account. Being logged in allows the 
    user to access the additional feature of adding their own recipes, plus more in future developments (see future features).</li>
    <li>The Add a Recipe page allows the user to submit their own recipes to the database using a form.</li>
    <li>The Recipe Page generates a recipe page for whichever recipe link the user clicks on, using Flask templating.</li>

</ul>


<h3><b>Future Features</b></h3>

<ul>
    <h5>Landing Page/Home</h5>
    <li>I want to make the search include the checkboxes below the search bar, so the results are filtered based on the boxes checked.  </li>
    <li>I also would like to expand the selection of checkboxes to include more allergies, intolerances, and lifestyle preferences, such as keto-friendly and sugar-free.</li>
    <h5>User Authentication</h5>
    <li>Allow users to create their profile with a bio and have their profile public or private.</li>
    <li>Facilitate users to "favourite" recipes they like, which would be stored in a list reachable through a link on their profile page. </li>
    <li>Allow users to have their preferences "set" on the search bar, so the checkboxes they require are preclicked. This would also influence the next point.</li>
    <li>Have a section of recommended recipes based on users current favourites list and their preferences.</li>
    <li>Have functionality to "Verify" users such as businesses who would pay to be verified and have their recipes on the site.</li>
    <h5>Recipes</h5>
    <li>Expand the nutritional information stored on recipes and display below the method on the recipe page.</li>


</ul>
<h3><b>Technologies Used</b></h3>
<ul>
<li><h4>Mongodb</h4></li>I used MongoDB to create my database.
<li><h4>html5</h4></li> I used html to write the content of the site.
<li><h4>css3</h4></li> I used css to format and style most elements on Yumergy.
<li><a href="https://jquery.com/"title="jQuery" target="_blank"><h4>JavaScript and jQuery</h4></a></li>I used jQuery to initiate the following Materialize elements; sidenav, select dropdown, and carousels. I also used it to create the add field button on the ingredients and meal method entry boxes.
<li><h4>Python, Flask, PyMongo</h4></li>I used Python to write all the functionality of Yumergy, and Flask for the templating.
<li><a href="https://materializecss.com/">Materializecss</a>I used Materialize for the navbar and side nav, carousels on the browse page, the grid system, and some other styles.
<li><a href="https://fontawesome.com/" title="FontAwesome" target="_blank"><h4>Font Awesome</h4></a>Font Awesome icons are used on all the forms on the site, for ease of use. 
</ul>

<h2><b>Testing</b></h2>

<a href="https://github.com/oliviatatum/yumergy/blob/b005477cf7cd6cc33f48f68e7a6ba9276095b1b3/Yumergy%20Manual%20Test.pdf">Manual testing documentation</a> 

<h2><b>Deployment</b></h2>

I deployed Yumergy on Heroku, which was linked to my repository on GitHub. First in my Gitpod project,
I created a .gitignore file so as not to push any confidential information to the repository. I then 
added requirements.txt to tell Heroku whichapplications and dependencies Yumergy requires to run, and 
then the Procfile to tell Heroku which file runs Yumergy and how to run it, in this case it is run using 
"web: python" and the file is called  "app.py". I then created the Yumergy app in Heroku and set up 
automatic deployment from GitHub (under the Deploy header on Heroku, in the section called Deployment 
Method). As I contained my environment variables with env.py, and told Git to ignore it, Heroku would not 
be able to read these files, so I added config vars of IP, MONGO_DBNAME, MONGO_URI, PORT, and a SECRET_KEY 
under the Settings tab of my app on Heroku. Then I pushed the new files to the repository before enabling 
automatic deploys on Heroku, and clicking Deploy Branch to allow Heroku to build the app.
Throughout my project, I used git to add, commit, and push additions and alterations to GitHub. I used all 
these commands in the terminal. After initialising my repository using <b>git init</b>, I would first check 
what was needing to be added by entering<b>git status</b>. Then I would add it by entering <b>git add .</b>, 
then commit it with a message <b>git commit -m "<i>description of change/addition that I am commiting</i>"</b>. 
Finally I would push it to my github repository. 


<h2><b>Credits</b></h2>
