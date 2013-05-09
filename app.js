window.u = {
  gameEl: $('#game'),
  levels: {},
  ui: {}
};

u.game = Backbone.Router.extend({
  start: function(){
    this.levelOne = new u.levels['zero'];
  }
});

u.ui.restart = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  el: $('#restart'),

  events: {
    'mouseover': 'restart',
    'mouseout': 'leftRestart'
  },

  restart: function(e){
    var timeoutId = window.setTimeout(function(){
      new u.levels.one;
    }, 1000);
    this.$el.data('timeoutId', timeoutId);
  },

  leftRestart: function(e){
    clearTimeout( this.$el.data('timeoutId') );
    delete this.$el.data('timeoutId');
  },

  render: function(){
    this.$el.show();
  }
});

u.level = Backbone.View.extend({
  initialize: function(level){
    this.level = level;
    _.bindAll(this, 'render');
    this.render();
    console.log(u.levels)
  },

  events: {
    'mouseover .next': 'next',
    'mouseout .next': 'leftNext'
  },

  next: function(e){
    var timeoutId = window.setTimeout(function(){
      new u.levels[e.target.id];
    }, 1000);
    this.$el.data('timeoutId', timeoutId);
  },

  leftNext: function(e){
    clearTimeout( this.$el.data('timeoutId') );
    delete this.$el.data('timeoutId');
  },

  render: function(){
    u.gameEl.html( this.$el.html( this.content() ) );
  }
});

u.levels.zero = u.level.extend({
  id: 'level-zero',

  content: function(){
    return '<span id="one" class="next">Play.</span>';
  }
});

u.levels.one = u.level.extend({
  id: 'level-one',

  initialize: function(level){
    this.level = level;
    _.bindAll(this, 'render');
    this.render();
    var restart = new u.ui.restart();
  },

  content: function(){
    return 'Ainsley Ward <span id="twoA" class="next">turned</span> a <span id="twoB" class="next">corner</span>.'
  }
});

u.levels.twoA = u.level.extend({
  id: 'level-two-a',

  content: function(){
    return 'She turned in circles. <span id="twoAA" class="next">Multiple times</span>.'
  }
});

u.levels.twoAA = u.level.extend({
  id: 'level-two-a-a',

  content: function(){
    return 'She kept turning until <span id="twoAB" class="next">she fell</span> to the ground.'
  }
});

u.levels.twoAB = u.level.extend({
  id: 'level-two-a-b',

  content: function(){
    return 'Laying on the ground she stared at a cloudy darkness that <span id="twoAC" class="next">could have been</span> stars.'
  }
});

u.levels.twoAC = u.level.extend({
  id: 'level-two-a-c',

  content: function(){
    return 'Ainsley thought about things being hidden, about rocks under ground. <span id="threeB" class="next">She thought about her rock</span>.'
  }
});

u.levels.twoB = u.level.extend({
  id: 'level-two-b',

  content: function(){
    return 'The university was empty. The night <span id="threeA" class="next">snored</span>.'
  }
});

u.levels.threeA = u.level.extend({
  id: 'level-three-a',

  content: function(){
    return 'She sat on a rock and thought a while about <span id="four" class="next">rocks</span>.'
  }
});

u.levels.threeB = u.level.extend({
  id: 'level-three-b',

  content: function(){
    return 'She sat on her rock and thought a while about <span id="four" class="next">rocks</span>.'
  }
});

u.levels.four = u.level.extend({
  id: 'level-four',

  content: function(){
    return 'Ainsley wished the rock would <span id="five" class="next">move</span>.'
  }
});

u.levels.five = u.level.extend({
  id: 'level-five',

  content: function(){
    return 'The university was the last place she wanted to be, so she <span id="six" class="next">stood</span>.'
  }
});

u.levels.six = u.level.extend({
  id: 'level-six',

  content: function(){
    return 'Her rock was just a normal rock, lumped in with the dirt and the grass, sitting bored in the middle of the <span id="seven" class="next">university campus</span>.'
  }
});

u.levels.seven = u.level.extend({
  id: 'level-seven',

  content: function(){
    return 'Ainsley liked her rock. It was smooth and convenient, unlike the <span id="eight" class="next">bubble boulders</span>.'
  }
});

u.levels.eight = u.level.extend({
  id: 'level-eight',

  content: function(){
    return 'The bubble boulders were remote rocks on the top of <span id="nine" class="next">Lake Mountain</span>.'
  }
});

u.levels.nine = u.level.extend({
  id: 'level-nine',

  content: function(){
    return 'The boulders wer huge, and looked like Dwarf Caps, the <span id="ten" class="next">red</span> clustered mushrooms of the forest.'
  }
});

u.levels.ten = u.level.extend({
  id: 'level-ten',

  content: function(){
    return 'The <span id="eleven" class="next">boulders</span> even had a red tint, like the caps of the mushrooms.'
  }
});

u.levels.eleven = u.level.extend({
  id: 'level-eleven',

  content: function(){
    return 'Ainsley liked her rock on campus, but the bubble boulders were the most amazing rocks she\'d ever <span id="end" class="next">seen</span>.'
  }
});

u.levels.end = u.level.extend({
  id: 'level-ten',

  content: function(){
    return '<span id="one" class="next">Play again.</span>';
  }
});

var game = new u.game;
game.start();