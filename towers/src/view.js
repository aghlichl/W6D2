const game = require('./game')

class View {

    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
    }

    setupTowers() {
        for (let ul = 0; ul < 3; ul++) {
            let $ul = $(`<ul class="tower" id=${ul}>`)
            for (let li = 0; li < 3; li++) {
                let $li = $(`<li class="disc" id=${li}>`)
                $ul.append($li);
            }
            this.$el.append($ul);
            $ul.on('click', "disc", (e) => this.bindEvents(e.currentTarget));
        }
    }
}

module.exports = View;