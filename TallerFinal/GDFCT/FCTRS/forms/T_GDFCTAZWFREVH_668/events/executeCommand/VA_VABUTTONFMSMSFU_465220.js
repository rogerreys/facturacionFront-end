

//Entity: Cliente
//Cliente. (Button) View: ClienteForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFMSMSFU_465220 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Cliente = true;

};