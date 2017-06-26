var balpanColor, balpanHeigth, balpanSpeed, balpan,
	updateDelay,
	scoreA, chanceA, lifeA, buttonA,
	scoreB, chanceB, lifeB, buttonB,
	scoreATextValue, scoreBTextValue, 
	textStyle_A, textStyle_B, textStyle_Value;

var Game = {

	preload : function() {
		game.load.image('board', './assets/images/board.png')
		game.load.image('balpan', './assets/images/balpan.png')
		game.load.image('balpanA', './assets/images/balpanA.png')
		game.load.image('balpanB', './assets/images/balpanB.png')
		game.load.image('buttonA', './assets/images/buttonA.png')
		game.load.image('buttonB', './assets/images/buttonB.png')

	},

	create : function() {

		balpan = {};
		balpanColor = 0;
		balpanHeigth = 20;
		balpanSpeed = 3;
		updateDelay = 0;
		scoreA = 0;
		scoreB = 0;
		chanceA = 3;
		chanceB = 3;
		lifeA = [];
		lifeB = [];

		game.stage.backgroundColor = '#FFFFFF';
		this.add.sprite(0, 0, 'board');

		// Button A, B
        this.add.button(50, 270, 'buttonA', this.buttonAPushed, this); 
        this.add.button(500, 270, 'buttonB', this.buttonBPushed, this); 

        // Chance A, B
        lifeA[0] = this.add.sprite(50, 340, 'balpanA');
        lifeA[1] = this.add.sprite(70, 340, 'balpanA');
        lifeA[2] = this.add.sprite(90, 340, 'balpanA');

        lifeB[0] = this.add.sprite(500, 340, 'balpanB');
        lifeB[1] = this.add.sprite(520, 340, 'balpanB');
        lifeB[2] = this.add.sprite(540, 340, 'balpanB');

		this.makeBalpan();

		// About score A, B
        textStyle_A = { font: "bold 14px sans-serif", fill: "#8AA9FF", align: "center" };
        textStyle_B = { font: "bold 14px sans-serif", fill: "#193685", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#000000", align: "center" };

        // Score A, B       
        game.add.text(30, 20, "SCORE", textStyle_A);
       	scoreATextValue = game.add.text(90, 18, scoreA.toString(), textStyle_Value);
        game.add.text(500, 20, "SCORE", textStyle_B);
       	scoreBTextValue = game.add.text(560, 18, scoreB.toString(), textStyle_Value);



	},

	update : function() {

		balpan.destroy();
		this.makeBalpan();
		balpanHeigth+=balpanSpeed;

		if(balpanHeigth > 320)
			this.collision();
		
	},

	makeBalpan : function() {
		
		if(balpanColor == 0)
			balpan = game.add.sprite(300, balpanHeigth, 'balpan');
		else if(balpanColor == 1)
			balpan = game.add.sprite(300, balpanHeigth, 'balpanA');
		else 
			balpan = game.add.sprite(300, balpanHeigth, 'balpanB');

	},

	buttonAPushed : function() {
		if(chanceA == 0)
			return;

		chanceA--;
		lifeA[chanceA].destroy();

		balpanColor = 1;
		balpan.destroy();
	},

	buttonBPushed : function() {
		if(chanceB == 0)
			return;

		chanceB--;
		lifeB[chanceB].destroy();

		balpanColor = 2;
		balpan.destroy();
	},

	collision : function() {

		// increase winner's score
		if(balpanColor == 1)
			scoreA += 10;
		else if(balpanColor == 2)
			scoreB += 10;

		// refresh scoreboard A, B
		scoreATextValue.text = scoreA.toString();
		scoreBTextValue.text = scoreB.toString();

		if(scoreA == 100 || scoreB == 100)
			game.state.start('Game_Over');

		balpanColor = 0
		balpanHeigth = 20;
		balpanSpeed = (Math.floor(Math.random() * 3) + 4);
		chanceA = 3;
		chanceB = 3;


        // Chance A, B
        for(var i = 0 ; i < 3 ; i++) {
        	lifeA[i].destroy();
        	lifeB[i].destroy();
        }

        lifeA[0] = this.add.sprite(50, 340, 'balpanA');
        lifeA[1] = this.add.sprite(70, 340, 'balpanA');
        lifeA[2] = this.add.sprite(90, 340, 'balpanA');

        lifeB[0] = this.add.sprite(500, 340, 'balpanB');
        lifeB[1] = this.add.sprite(520, 340, 'balpanB');
        lifeB[2] = this.add.sprite(540, 340, 'balpanB');

	}

};