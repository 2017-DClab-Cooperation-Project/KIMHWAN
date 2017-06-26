var Menu = {
    preload : function() {
        // load menu image form game object
        game.load.image('menu', './assets/images/menu.png');
    },
 
    create: function () {
        // add image
        this.add.button(0, 0, 'menu', this.startGame, this); 

    },
    
    startGame: function () {
        // Change the state to the actual game.
        this.state.start('Game');
    }

};