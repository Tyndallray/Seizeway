(function(){
    function Init():void{
        console.log("Game is Initializing");
        Start();
    }

    function Start():void{
        console.log("Game is Starting");
    }

    window.onload = Init;
})();