const GetAdditionalData = require('./js/GetAdditionalData')
const AddFrame = require('./js/AddFrame')
class BowlingGame {

    StarGame() {
        this.score = []
        for (let i = 0; i < 10; i++) {
            this.score = [...this.score, AddFrame()]
            this.score = GetAdditionalData(this.score)


            console.log("score",this.score);
        }
        console.table(this.score)
    }
}
let newBowling = new BowlingGame();
newBowling.StarGame();

module.exports = BowlingGame;