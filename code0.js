gdjs.CharacterSelectionCode = {};
gdjs.CharacterSelectionCode.GDbgObjects1= [];
gdjs.CharacterSelectionCode.GDbgObjects2= [];
gdjs.CharacterSelectionCode.GDbgObjects3= [];
gdjs.CharacterSelectionCode.GDPlayer1Objects1= [];
gdjs.CharacterSelectionCode.GDPlayer1Objects2= [];
gdjs.CharacterSelectionCode.GDPlayer1Objects3= [];
gdjs.CharacterSelectionCode.GDPlayer2Objects1= [];
gdjs.CharacterSelectionCode.GDPlayer2Objects2= [];
gdjs.CharacterSelectionCode.GDPlayer2Objects3= [];
gdjs.CharacterSelectionCode.GDMessageObjects1= [];
gdjs.CharacterSelectionCode.GDMessageObjects2= [];
gdjs.CharacterSelectionCode.GDMessageObjects3= [];
gdjs.CharacterSelectionCode.GDNewGameObjects1= [];
gdjs.CharacterSelectionCode.GDNewGameObjects2= [];
gdjs.CharacterSelectionCode.GDNewGameObjects3= [];
gdjs.CharacterSelectionCode.GDNewObjectObjects1= [];
gdjs.CharacterSelectionCode.GDNewObjectObjects2= [];
gdjs.CharacterSelectionCode.GDNewObjectObjects3= [];

gdjs.CharacterSelectionCode.conditionTrue_0 = {val:false};
gdjs.CharacterSelectionCode.condition0IsTrue_0 = {val:false};
gdjs.CharacterSelectionCode.condition1IsTrue_0 = {val:false};


gdjs.CharacterSelectionCode.mapOfGDgdjs_46CharacterSelectionCode_46GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.CharacterSelectionCode.GDPlayer1Objects2});gdjs.CharacterSelectionCode.mapOfGDgdjs_46CharacterSelectionCode_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.CharacterSelectionCode.GDPlayer2Objects2});gdjs.CharacterSelectionCode.eventsList0x801f78 = function(runtimeScene) {

{

gdjs.CharacterSelectionCode.GDPlayer1Objects2.createFrom(runtimeScene.getObjects("Player1"));

gdjs.CharacterSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectionCode.mapOfGDgdjs_46CharacterSelectionCode_46GDPlayer1Objects2Objects, runtimeScene, true, false);
}if (gdjs.CharacterSelectionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("selectedCharacter").setString("Player1");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.CharacterSelectionCode.GDPlayer2Objects2.createFrom(runtimeScene.getObjects("Player2"));

gdjs.CharacterSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectionCode.mapOfGDgdjs_46CharacterSelectionCode_46GDPlayer2Objects2Objects, runtimeScene, true, false);
}if (gdjs.CharacterSelectionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("selectedCharacter").setString("Player2");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
}

}


}; //End of gdjs.CharacterSelectionCode.eventsList0x801f78
gdjs.CharacterSelectionCode.eventsList0xb0aa8 = function(runtimeScene) {

{



}


{



}


{


gdjs.CharacterSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.CharacterSelectionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CharacterSelectionCode.eventsList0x801f78(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


}; //End of gdjs.CharacterSelectionCode.eventsList0xb0aa8


gdjs.CharacterSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CharacterSelectionCode.GDbgObjects1.length = 0;
gdjs.CharacterSelectionCode.GDbgObjects2.length = 0;
gdjs.CharacterSelectionCode.GDbgObjects3.length = 0;
gdjs.CharacterSelectionCode.GDPlayer1Objects1.length = 0;
gdjs.CharacterSelectionCode.GDPlayer1Objects2.length = 0;
gdjs.CharacterSelectionCode.GDPlayer1Objects3.length = 0;
gdjs.CharacterSelectionCode.GDPlayer2Objects1.length = 0;
gdjs.CharacterSelectionCode.GDPlayer2Objects2.length = 0;
gdjs.CharacterSelectionCode.GDPlayer2Objects3.length = 0;
gdjs.CharacterSelectionCode.GDMessageObjects1.length = 0;
gdjs.CharacterSelectionCode.GDMessageObjects2.length = 0;
gdjs.CharacterSelectionCode.GDMessageObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNewGameObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNewGameObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNewGameObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNewObjectObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNewObjectObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNewObjectObjects3.length = 0;

gdjs.CharacterSelectionCode.eventsList0xb0aa8(runtimeScene);
return;
}
gdjs['CharacterSelectionCode'] = gdjs.CharacterSelectionCode;
