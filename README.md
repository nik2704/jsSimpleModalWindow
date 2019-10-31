# Modal window example
____

Handling the event of pressing a button whose class is specified in the "modalSettings->buttonShow" setting:
as a result of pressing, the element specified in the "modalSettings->divToShow" setting will be displayed.

The class of the button, clicking on which closes the "window" is specified in the ""modalSettings->buttonToClose" setting.

Eample of HTML and CSS code:
######<button class="more"> Узнать больше</button>

##### CSS:
######.content .more {
######  display: block;
######  margin: 0 auto;
######  margin-top: 60px;
######  width: 250px;
######  height: 60px;
######  background-color: transparent;
######  border: 1px solid #c78030;
######  font-size: 18px;
######  color: #c78030;
######  cursor: pointer;
######}

######<div class="overlay fade">...</div>
##### CSS:
######.overlay {
######  position: fixed;
######  display: none;
######  top: 0;
######  width: 100%;
######  height: 100%;
######  background-color: rgba(0, 0, 0, 0.5);
######  z-index: 3;
######}
###### ...
######.fade {
######  -webkit-animation-name: fade;
######          animation-name: fade;
######  -webkit-animation-duration: 2.5s;
######          animation-duration: 2.5s;
######  -webkit-animation-name: fade;
######  -webkit-animation-duration: 2.5s;
######}

