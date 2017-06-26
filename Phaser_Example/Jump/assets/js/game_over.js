var Game_Over = {

	preload : function() {
        // load game over image form game object
        game.load.image('game_overA', './assets/images/gameoverA.png');
        game.load.image('game_overB', './assets/images/gameoverB.png');

	},

	create : function() {
        // add image
        if (scoreA == 100)
       		this.add.button(0, 0, 'game_overA', this.startGame, this); 
       	else
       		this.add.button(0, 0, 'game_overB', this.startGame, this); 
	},

	startGame : function() {
        // Change the state to the actual game.
        this.state.start('Game');
	}
};