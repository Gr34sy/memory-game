# Memory Game created with ReactJS
## The app allows to play memory game for up to four players.

#### Technologies used in the app:
<img align="left" alt="React" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style="padding-right:10px;" />
<img align="left" alt="JS" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" style="padding-right:10px;" />
<img align="left" alt="HTML" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
<img align="left" alt="CSS" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" style="padding-right:10px;" />

<br/> <br/> <br/> 

#### Next Features used in the app:
<p>-> OAuth</p>
<p>-> ServerSide Generation</p>
<p>-> Api Routes</p>
<p>-> Next Image Component</p>
<p>-> File Based Routing</p>

<br/> <br/> <br/> 

#### App User Guide:
<p>1. Creating List:</p>
<p>-> Go to ListCreator</p>
<p>-> Enter needed information and click save, app will reload and redirect you to the homepage</p>
<br/>
<p>2. List view and editing:</p>
<p>-> On homepage click on the list which you want to open</p>
<p>-> You will be redirected to specific list page</p>
<p>-> From there you can edit the title and tasks (also deadline and description if you are editing tasklist)</p>
<p> -> To discard changes, click "Discard" button then the page will be reloaded and the changes will be cancelled</p>
<p>-> To save, click "Save" button, then the page also will be reloaded, but the changes will be saved to the database</p>
<br/>
<p>3. List deleting:</p>
<p> -> Go to homepage</p>
<p> -> Click the red, trash icon of the list you want to delete</p>
<p> -> Then the popup will be displayed</p>
<p> -> If you are sure to delete the item, click "Yes" button on the popup window</p>
<br/>
<p>4. Adding Task to Tasklist</p>
<p> -> On specific tasklist page, click on the "Add Task" accordion component</p>
<p> -> Fill in the inputs, add operations and click Cancel/Add, then the page will be reloaded</p>
<br/>
<p> 5. Theme Changes:</p>
<p> -> Go to options page</p>
<p> -> Choose the theme options tab</p>
<p> -> Select preferred color motive</p>
<p> -> Discard changes or save it to the database</p>
<br/>
<p>6. Logging Out:</p>
<p> -> Go to options page</p>
<p> -> Choose the log out tab</p>
<p> -> Confirm log out</p>
<br/><br/><br/>
PS: I'know that the code is not as clean as it should be. </p>


Functionalities:

- game settings configuration
- checking if the two active fields have matching icons
- passing turn forward when the player misses the match
- increasing the player points after successfull match
- displaying game results after last pair is discovered

Game rules

Before the game is started, the configuration window is displayed. It allows to choose the icons amongst the variety of themes, set the players amount, set players names and pick the board size. After or during each game players can restart the game with previous or changed settings.

Multiplayer:

Singleplayer:
