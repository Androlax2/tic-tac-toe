var board = new Board(3);

var Theo = new Human('Théo', 'X');
var Mathieu = new Human('Mathieu', 'O');

var game = new TicTacToe(
	board,
	[
		Theo,
		Mathieu
	]
);

game.startGame();

game.on('boardUpdated', e => {
	console.log(e);
});