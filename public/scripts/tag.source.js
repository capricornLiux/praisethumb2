xtag.register('x-praise', {
    content: `
    <div id="main">
        <div class="finger finger1"></div>
        <div class="finger finger2"></div>
        <div class="finger finger3"></div>
        <div class="finger finger4"></div>
        <div class="finger finger5"></div>

        <span id="addOne">+1</span>
    </div>
    `,
    lifecycle:{
      created: function(){},
      inserted: function(){},
      removed: function(){},
      attributeChanged: function(){}
    },
    methods: {
      someMethod: function(){}
    },
    accessors: {
      someAccessor: {
        // links to the 'some-accessor' attribute
        attribute: {},
        set: function(){},
        get: function(){}
      }
    },
    events: {
      tap: function(){},
      focus: function(){}
    }
  });