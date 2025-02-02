import { ANSI } from "@prozilla-os/shared";

export const USERNAME = "user";
export const HOSTNAME = "code-os";
export const MAX_WIDTH = 50;

export const WELCOME_MESSAGE = `${ANSI.fg.cyan + ANSI.decoration.dim}$APP_NAME - Made by CodeOS${ANSI.reset}`
	+ `\n${ANSI.decoration.dim}Type 'help' for a list of commands.${ANSI.reset}\n`;

export const ASCII_LOGO = `
              :.           
             -==.          
           .=====:         
   ---::..:=======-.       
   :===+=----------::..    
    =+=---------------:..  
    --------------------:. 
.:-+=----*###*--*####=---. 
:==+----#%+-+%#-##%*+----:.
  .=----#%+-+%#-*+-%#+---:.
   ==----*###*--*###*----. 
  ==+-------------------:. 
  ...::---------------:.   
       .::---------::..    
          ....::...        `;

export const ANSI_LOGO_COLOR = ANSI.fg.cyan;
export const ANSI_ASCII_LOGO = `
              :.           
             -==.          
           .=====:         
   ---::..:=======-.       
   :===+=----------::..    
    =+=---------------:..  
    --------------------:. 
.:-+=----${ANSI.fg.white}*###*${ANSI_LOGO_COLOR}--${ANSI.fg.white}*####=${ANSI_LOGO_COLOR}---. 
:==+----${ANSI.fg.white}#%+${ANSI_LOGO_COLOR}-${ANSI.fg.white}+%#${ANSI_LOGO_COLOR}-${ANSI.fg.white}##%*+${ANSI_LOGO_COLOR}----:.
  .=----${ANSI.fg.white}#%+${ANSI_LOGO_COLOR}-${ANSI.fg.white}+%#${ANSI_LOGO_COLOR}-${ANSI.fg.white}*+${ANSI_LOGO_COLOR}-${ANSI.fg.white}%#+${ANSI_LOGO_COLOR}---:.
   ==----${ANSI.fg.white}*###*${ANSI_LOGO_COLOR}--${ANSI.fg.white}*###*${ANSI_LOGO_COLOR}----. 
  ==+-------------------:. 
  ...::---------------:.   
       .::---------::..    
          ....::...        `;
