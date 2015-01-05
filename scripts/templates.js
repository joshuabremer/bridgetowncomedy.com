Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/header", options) : helperMissing.call(depth0, "partial", "partials/header", options))));
  data.buffer.push("\n\n  \n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "jumbotron", options) : helperMissing.call(depth0, "outlet", "jumbotron", options))));
  data.buffer.push("\n      </div>\n    </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n\n\n<!-- MODAL FOR CONTACT -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          contact us\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row centered\">\n            <p>We are available 24/7, so don't hesitate to contact us.</p>\n            <p>\n              Somestreet Ave, 987<br/>\n              London, UK.<br/>\n              +44 8948-4343<br/>\n              hi@blacktie.co\n            </p>\n            <div id=\"mapwrap\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");
  return buffer;
  
});Ember.TEMPLATES['catch_all'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['event'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"schedule-list__item-venue-label label label-default\">");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>\n          <img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("show.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <p>\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Copy", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </p>\n      </div>\n    </div>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n     ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <strong>MC: </strong> ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <p class=\"lead\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "niceDate", "start_time", options))));
  data.buffer.push("<br/>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getTime", "start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "end_time", options) : helperMissing.call(depth0, "getTime", "end_time", options))));
  data.buffer.push("</small>\n  </p>\n  <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "venue", "venue", options) : helperMissing.call(depth0, "link-to", "venue", "venue", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n  <p>\n    ");
  stack1 = (helper = helpers.googleMapLink || (depth0 && depth0.googleMapLink),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "venue.address", options) : helperMissing.call(depth0, "googleMapLink", "venue.address", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n\n  ");
  stack1 = helpers['if'].call(depth0, "show", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\" style=\"background:#695b53;\">\n    <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Performers</h4>\n    </li>\n    ");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.start_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.end_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "linkTo", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("view");
  }

  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "event", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['faqs'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['four_oh_four'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Page Not Found</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n  <div class=\"container main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"\">\n          <h2>The page cannot be found...</h2>\n          <p>Perhaps you are here because:</p>\n          <ul>\n            <li>The page has moved</li>\n            <li>The page no longer exists</li>\n            <li>You were looking for your puppy and got lost</li>\n            <li>You like 404 pages</li>\n          </ul>\n          <p><a class=\"btn btn-block btn-primary\" href=\"/\">Return to homepage </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n");
  
});Ember.TEMPLATES['history'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron jumbotron-color-1 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n      <div class=\"header-logo\"><img class=\"img-responsive\" src=\"/img/logo-long-inverse.png?1\" /></div>\n      \n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-sm-6\">\n\n        \n        <h3>Thank You!</h3>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/news", options) : helperMissing.call(depth0, "partial", "partials/news", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-sm-6\">\n        <h3>@bridgetown</h3>\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-body\">\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/recent_tweets", options) : helperMissing.call(depth0, "partial", "partials/recent_tweets", options))));
  data.buffer.push("\n          </div>\n        </div>\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br />\n    <br />\n  </div><!-- container -->\n\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/sponsors_front_page", options) : helperMissing.call(depth0, "partial", "partials/sponsors_front_page", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(" <div class=\"row\"> <div class=\"jumbotron jumbotron-default\">\n \n   <div class=\"container main-content\">\n    <h1 class=\"text-center\">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression((helper = helpers['x-spinner'] || (depth0 && depth0['x-spinner']),options={hash:{
    'lines': (12),
    'radius': (10),
    'length': (10),
    'shadow': (false),
    'color': ("#333"),
    'width': (3)
  },hashTypes:{'lines': "INTEGER",'radius': "INTEGER",'length': "INTEGER",'shadow': "BOOLEAN",'color': "STRING",'width': "INTEGER"},hashContexts:{'lines': depth0,'radius': depth0,'length': depth0,'shadow': depth0,'color': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-spinner", options))));
  data.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              <br /> (");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push(")\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Show MC</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "mc_events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event.id", options) : helperMissing.call(depth0, "link-to", "event", "event.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("← All Performers");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n      \n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      ");
  stack1 = helpers['if'].call(depth0, "isAnMC", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <legend>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </legend>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("performer.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Performers</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"container main-content\">\n  <p class=\"lead\">Performers subject to change...</p>\n  <div class=\"row\">\n    ");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['press'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Schedule</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <p>Performers, shows and prices subject to change.</p>\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  \n  <p>\n    <a target=\"_blank\" href=\"https://www.google.com/calendar/embed?src=ij2h1kcsksapda46r4e8qr2atc%40group.calendar.google.com&ctz=America/Los_Angeles\"><img src=\"/img/add-to-google-calendar.gif\" /></a>\n  </p>\n\n\n<div class=\"schedule-list\">\n  <div class=\"text-left\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterThursday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Thursday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterFriday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Friday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSaturday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Saturday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSunday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sunday</button>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['cloaked-collection'] || (depth0 && depth0['cloaked-collection']),options={hash:{
    'cloakView': ("App.ScheduleListItemView"),
    'content': ("controller.events"),
    'preservesContext': (true),
    'defaultHeight': (218)
  },hashTypes:{'cloakView': "ID",'content': "ID",'preservesContext': "BOOLEAN",'defaultHeight': "INTEGER"},hashContexts:{'cloakView': depth0,'content': depth0,'preservesContext': depth0,'defaultHeight': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "cloaked-collection", options))));
  data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['show'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <br /> (");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push(")\n          \n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("← All Shows");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Copy", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['shows'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <legend>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </legend>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("show.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Shows</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"container main-content\">\n  <p class=\"lead\">Shows subject to change...</p>\n  <div class=\"row\">\n    ");
  stack1 = helpers.each.call(depth0, "show", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['sponsors'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Sponsors</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content sponsors-container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.cremabakery.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crema.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.bendistillery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crater-lake.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.eastsidedistilling.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eastside-distillery.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://elevenpdx.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eleven.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://funemploymentradio.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-funemployment.png\" alt=\"\"></a>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://groundkontrol.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ground-kontrol.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://ifc.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ifc.png?1\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://imeldas.com/store?utm_source=BTC14&utm_medium=BTCsponsorpage&utm_campaign=logo\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-imeldas.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-8 col-sm-4\">\n        <a target=\"_blank\" href=\"http://www.jupiterhotel.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-jupiter-long.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.kindsnacks.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-kind-bar.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://laughingplanetcafe.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-laughing-planet.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.montageportland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-montage.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://pabstblueribbon.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pabst.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.pivot.tv/?cmpid=bridgetown\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pivot.png?1\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandmercury.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mercury.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"https://soundcloud.com/wandertown\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-soundcloud.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.standupfordowns.org/\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-stand-up-for-downs.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.tonkin.com/\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-tonkin.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://voodoodoughnut.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://voodoodoughnut.com/recordings\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo-recordings.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://zachsshack.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-zachs-shack.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.yelp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-yelp.png\" alt=\"\"></a>\n      </div>\n\n    </div><!-- row -->\n  </div><!-- container -->\n");
  
});Ember.TEMPLATES['venue'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_list_item", options) : helperMissing.call(depth0, "partial", "partials/schedule_list_item", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-12\">\n      <p>\n        ");
  stack1 = (helper = helpers.googleMapLink || (depth0 && depth0.googleMapLink),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "address", options) : helperMissing.call(depth0, "googleMapLink", "address", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['venues'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-5  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/header", options) : helperMissing.call(depth0, "partial", "partials/header", options))));
  data.buffer.push("\n\n  \n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "jumbotron", options) : helperMissing.call(depth0, "outlet", "jumbotron", options))));
  data.buffer.push("\n      </div>\n    </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n\n\n<!-- MODAL FOR CONTACT -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          contact us\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row centered\">\n            <p>We are available 24/7, so don't hesitate to contact us.</p>\n            <p>\n              Somestreet Ave, 987<br/>\n              London, UK.<br/>\n              +44 8948-4343<br/>\n              hi@blacktie.co\n            </p>\n            <div id=\"mapwrap\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");
  return buffer;
  
});Ember.TEMPLATES['catch_all'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['event'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"schedule-list__item-venue-label label label-default\">");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>\n          <img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("show.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <p>\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Copy", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </p>\n      </div>\n    </div>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n     ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <strong>MC: </strong> ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <p class=\"lead\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "niceDate", "start_time", options))));
  data.buffer.push("<br/>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getTime", "start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "end_time", options) : helperMissing.call(depth0, "getTime", "end_time", options))));
  data.buffer.push("</small>\n  </p>\n  <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "venue", "venue", options) : helperMissing.call(depth0, "link-to", "venue", "venue", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n  <p>\n    ");
  stack1 = (helper = helpers.googleMapLink || (depth0 && depth0.googleMapLink),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "venue.address", options) : helperMissing.call(depth0, "googleMapLink", "venue.address", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n\n  ");
  stack1 = helpers['if'].call(depth0, "show", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\" style=\"background:#695b53;\">\n    <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Performers</h4>\n    </li>\n    ");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.start_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.end_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "linkTo", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("view");
  }

  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "event", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['faqs'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['four_oh_four'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Page Not Found</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n  <div class=\"container main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"\">\n          <h2>The page cannot be found...</h2>\n          <p>Perhaps you are here because:</p>\n          <ul>\n            <li>The page has moved</li>\n            <li>The page no longer exists</li>\n            <li>You were looking for your puppy and got lost</li>\n            <li>You like 404 pages</li>\n          </ul>\n          <p><a class=\"btn btn-block btn-primary\" href=\"/\">Return to homepage </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n");
  
});Ember.TEMPLATES['history'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron jumbotron-color-1 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n      <div class=\"header-logo\"><img class=\"img-responsive\" src=\"/img/logo-long-inverse.png?1\" /></div>\n      \n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-sm-6\">\n\n        \n        <h3>Thank You!</h3>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/news", options) : helperMissing.call(depth0, "partial", "partials/news", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-sm-6\">\n        <h3>@bridgetown</h3>\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-body\">\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/recent_tweets", options) : helperMissing.call(depth0, "partial", "partials/recent_tweets", options))));
  data.buffer.push("\n          </div>\n        </div>\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br />\n    <br />\n  </div><!-- container -->\n\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/sponsors_front_page", options) : helperMissing.call(depth0, "partial", "partials/sponsors_front_page", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(" <div class=\"row\"> <div class=\"jumbotron jumbotron-default\">\n \n   <div class=\"container main-content\">\n    <h1 class=\"text-center\">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression((helper = helpers['x-spinner'] || (depth0 && depth0['x-spinner']),options={hash:{
    'lines': (12),
    'radius': (10),
    'length': (10),
    'shadow': (false),
    'color': ("#333"),
    'width': (3)
  },hashTypes:{'lines': "INTEGER",'radius': "INTEGER",'length': "INTEGER",'shadow': "BOOLEAN",'color': "STRING",'width': "INTEGER"},hashContexts:{'lines': depth0,'radius': depth0,'length': depth0,'shadow': depth0,'color': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-spinner", options))));
  data.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['partials/_event_list_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  	<li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "performer.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("\n<p>\n  <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n</p>\n<ul>\n  ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.performers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Performers");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Press");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<!-- FOOTER -->\n  <footer class=\"site-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"social\">\n  <ul class=\"social-buttons\">\n    <li class=\"follow-btn\">\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"bridgetown\"  data-related=\"bridgetown\" data-hashtags=\"bridgetowncomedy\">Tweet</a>\n    </li>\n    <li class=\"tweet-btn\">\n      <a href=\"https://twitter.com/bridgetown\" class=\"twitter-follow-button\" data-show-count=\"false\" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href=\"http://twitter.com/joshuabremer\" target=\"_blank\">@joshuabremer</a>. Powered by <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\">Squarespace</a></p>\n    <ul class=\"footer-links muted\">\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      \n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
  
});Ember.TEMPLATES['partials/_header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" <span class=\"navbar-brand\"><img class=\"navbar-brand-logo\" src=\"/img/logo-long-inverse.png?1\" /></span>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<span>Performers</span>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<span>Shows</span>");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<span>Schedule</span>");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<span>Venues</span>");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("<span>FAQs</span>");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("<span>2013 Press</span>");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("<span>Sponsors</span>");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("<span>Contact</span>");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n       ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"header-color1\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "schedule", options) : helperMissing.call(depth0, "link-to", "schedule", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color4\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "venues", options) : helperMissing.call(depth0, "link-to", "venues", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color5 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color1 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"dropdown visible-sm \">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            More Info <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header-color5\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color1\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </li>\n      </ul>\n      <div class=\"navbar-form navbar-right\">\n        \n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_news'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"newspost\" style=\"margin-top:50px;\">\n  <div class=\"newspost-content\">\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_performer_box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n  <div class=\"performer-thumbnail\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "", options) : helperMissing.call(depth0, "link-to", "performer", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <legend>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </legend>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_recent_tweets'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<a class=\"twitter-timeline\" href=\"https://twitter.com/bridgetown\" data-widget-id=\"432300245716713474\">Tweets by @bridgetown</a>\n\n\n\n");
  
});Ember.TEMPLATES['partials/_schedule_list_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <span class=\"schedule-list__item-venue-label label label-default\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n            <li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "performer.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n              ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li><strong>MC: </strong>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n         ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n              ");
  return buffer;
  }

  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":schedule-list__item :list-group-item weekday")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n     <div class=\"col-sm-4\">\n        <p class=\"lead\">\n          ");
  stack1 = helpers['if'].call(depth0, "show", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <br/>\n          <small>(");
  data.buffer.push(escapeExpression((helper = helpers.getWeekday || (depth0 && depth0.getWeekday),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getWeekday", "start_time", options))));
  data.buffer.push(" <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getTime", "start_time", options))));
  data.buffer.push(" - </span>\n          <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "end_time", options) : helperMissing.call(depth0, "getTime", "end_time", options))));
  data.buffer.push("</span>)</small>\n        </p>\n        <p>Price: ");
  stack1 = helpers._triageMustache.call(depth0, "Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n      <div class=\"col-xs-5 col-sm-4\">\n        <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "venue", "venue.pageUrl", options) : helperMissing.call(depth0, "link-to", "venue", "venue.pageUrl", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n      </div>\n      <div class=\"col-xs-7 col-sm-4\">\n        <ul class=\"schedule-list__performer-list\">\n\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        &nbsp;\n      </div>\n    </div>\n  </div>\n</li>\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_friday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Friday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Friday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_saturday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.saturdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Saturday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Saturday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_sunday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_thursday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_sponsors_front_page'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"lg\">\n  <div class=\"container sponsors-container text-center\">\n    <h2>SPONSORED BY</h2>\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n      </div>\n\n    </div><!-- row -->\n  </div><!-- container -->\n</div>");
  
});Ember.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              <br /> (");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push(")\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Show MC</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "mc_events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event.id", options) : helperMissing.call(depth0, "link-to", "event", "event.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("← All Performers");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n      \n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      ");
  stack1 = helpers['if'].call(depth0, "isAnMC", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <legend>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </legend>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("performer.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Performers</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"container main-content\">\n  <p class=\"lead\">Performers subject to change...</p>\n  <div class=\"row\">\n    ");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['press'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/friday-table'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Friday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Friday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/friday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_table_friday", options) : helperMissing.call(depth0, "partial", "partials/schedule_table_friday", options))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/friday_schedule'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_table_friday", options) : helperMissing.call(depth0, "partial", "partials/schedule_table_friday", options))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/saturday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Saturday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "schedule_table_saturday", options) : helperMissing.call(depth0, "partial", "schedule_table_saturday", options))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/sunday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Sunday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_table_sunday", options) : helperMissing.call(depth0, "partial", "partials/schedule_table_sunday", options))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule-grid/thursday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Thursday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_table_thursday", options) : helperMissing.call(depth0, "partial", "partials/schedule_table_thursday", options))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['schedule'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Schedule</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <p>Performers, shows and prices subject to change.</p>\n\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("scheduleClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  \n  <p>\n    <a target=\"_blank\" href=\"https://www.google.com/calendar/embed?src=ij2h1kcsksapda46r4e8qr2atc%40group.calendar.google.com&ctz=America/Los_Angeles\"><img src=\"/img/add-to-google-calendar.gif\" /></a>\n  </p>\n\n\n<div class=\"schedule-list\">\n  <div class=\"text-left\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterThursday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Thursday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterFriday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Friday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSaturday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Saturday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSunday", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sunday</button>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['cloaked-collection'] || (depth0 && depth0['cloaked-collection']),options={hash:{
    'cloakView': ("App.ScheduleListItemView"),
    'content': ("controller.events"),
    'preservesContext': (true),
    'defaultHeight': (218)
  },hashTypes:{'cloakView': "ID",'content': "ID",'preservesContext': "BOOLEAN",'defaultHeight': "INTEGER"},hashContexts:{'cloakView': depth0,'content': depth0,'preservesContext': depth0,'defaultHeight': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "cloaked-collection", options))));
  data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['show'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <br /> (");
  data.buffer.push(escapeExpression((helper = helpers.niceDate || (depth0 && depth0.niceDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push(")\n          \n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("← All Shows");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Copy", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n      <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['shows'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <legend>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </legend>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("show.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Shows</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"container main-content\">\n  <p class=\"lead\">Shows subject to change...</p>\n  <div class=\"row\">\n    ");
  stack1 = helpers.each.call(depth0, "show", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['sponsors'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Sponsors</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content sponsors-container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.cremabakery.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crema.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.bendistillery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crater-lake.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.eastsidedistilling.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eastside-distillery.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://elevenpdx.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eleven.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://funemploymentradio.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-funemployment.png\" alt=\"\"></a>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://groundkontrol.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ground-kontrol.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://ifc.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ifc.png?1\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://imeldas.com/store?utm_source=BTC14&utm_medium=BTCsponsorpage&utm_campaign=logo\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-imeldas.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-8 col-sm-4\">\n        <a target=\"_blank\" href=\"http://www.jupiterhotel.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-jupiter-long.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.kindsnacks.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-kind-bar.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://laughingplanetcafe.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-laughing-planet.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.montageportland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-montage.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://pabstblueribbon.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pabst.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.pivot.tv/?cmpid=bridgetown\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pivot.png?1\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandmercury.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mercury.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"https://soundcloud.com/wandertown\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-soundcloud.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.standupfordowns.org/\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-stand-up-for-downs.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.tonkin.com/\">\n          <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-tonkin.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://voodoodoughnut.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://voodoodoughnut.com/recordings\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo-recordings.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://zachsshack.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-zachs-shack.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.yelp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-yelp.png\" alt=\"\"></a>\n      </div>\n\n    </div><!-- row -->\n  </div><!-- container -->\n");
  
});Ember.TEMPLATES['venue'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/schedule_list_item", options) : helperMissing.call(depth0, "partial", "partials/schedule_list_item", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <li class=\"list-group-item\">No shows scheduled yet...</li>\n        ");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-12\">\n      <p>\n        ");
  stack1 = (helper = helpers.googleMapLink || (depth0 && depth0.googleMapLink),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "address", options) : helperMissing.call(depth0, "googleMapLink", "address", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['venues'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-5  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_event_list_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  	<li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "performer.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("\n<p>\n  <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n</p>\n<ul>\n  ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.performers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Performers");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Press");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<!-- FOOTER -->\n  <footer class=\"site-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"social\">\n  <ul class=\"social-buttons\">\n    <li class=\"follow-btn\">\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"bridgetown\"  data-related=\"bridgetown\" data-hashtags=\"bridgetowncomedy\">Tweet</a>\n    </li>\n    <li class=\"tweet-btn\">\n      <a href=\"https://twitter.com/bridgetown\" class=\"twitter-follow-button\" data-show-count=\"false\" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href=\"http://twitter.com/joshuabremer\" target=\"_blank\">@joshuabremer</a>. Powered by <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\">Squarespace</a></p>\n    <ul class=\"footer-links muted\">\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      \n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
  
});Ember.TEMPLATES['partials/_header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" <span class=\"navbar-brand\"><img class=\"navbar-brand-logo\" src=\"/img/logo-long-inverse.png?1\" /></span>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<span>Performers</span>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<span>Shows</span>");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<span>Schedule</span>");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<span>Venues</span>");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("<span>FAQs</span>");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("<span>2013 Press</span>");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("<span>Sponsors</span>");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("<span>Contact</span>");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n       ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"header-color1\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "schedule", options) : helperMissing.call(depth0, "link-to", "schedule", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color4\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "venues", options) : helperMissing.call(depth0, "link-to", "venues", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color5 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color1 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3 hidden-sm\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"dropdown visible-sm \">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            More Info <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header-color5\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color1\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </li>\n      </ul>\n      <div class=\"navbar-form navbar-right\">\n        \n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_news'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"newspost\" style=\"margin-top:50px;\">\n  <div class=\"newspost-content\">\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_performer_box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n  <div class=\"performer-thumbnail\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "", options) : helperMissing.call(depth0, "link-to", "performer", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <legend>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </legend>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_recent_tweets'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<a class=\"twitter-timeline\" href=\"https://twitter.com/bridgetown\" data-widget-id=\"432300245716713474\">Tweets by @bridgetown</a>\n\n\n\n");
  
});Ember.TEMPLATES['partials/_schedule_list_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <span class=\"schedule-list__item-venue-label label label-default\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n            <li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "performer.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n              ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li><strong>MC: </strong>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n         ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n              ");
  return buffer;
  }

  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":schedule-list__item :list-group-item weekday")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n     <div class=\"col-sm-4\">\n        <p class=\"lead\">\n          ");
  stack1 = helpers['if'].call(depth0, "show", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <br/>\n          <small>(");
  data.buffer.push(escapeExpression((helper = helpers.getWeekday || (depth0 && depth0.getWeekday),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getWeekday", "start_time", options))));
  data.buffer.push(" <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getTime", "start_time", options))));
  data.buffer.push(" - </span>\n          <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "end_time", options) : helperMissing.call(depth0, "getTime", "end_time", options))));
  data.buffer.push("</span>)</small>\n        </p>\n        <p>Price: ");
  stack1 = helpers._triageMustache.call(depth0, "Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n      <div class=\"col-xs-5 col-sm-4\">\n        <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "venue", "venue.pageUrl", options) : helperMissing.call(depth0, "link-to", "venue", "venue.pageUrl", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n      </div>\n      <div class=\"col-xs-7 col-sm-4\">\n        <ul class=\"schedule-list__performer-list\">\n\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        &nbsp;\n      </div>\n    </div>\n  </div>\n</li>\n\n");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_friday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Friday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Friday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_saturday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.saturdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Saturday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Saturday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_sunday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_schedule_table_thursday'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      ");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n    </tr>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-start-time': ("event.start_time")
  },hashTypes:{'data-start-time': "STRING"},hashContexts:{'data-start-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-end-time': ("event.end_time")
  },hashTypes:{'data-end-time': "STRING"},hashContexts:{'data-end-time': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.getTime || (depth0 && depth0.getTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options))));
  data.buffer.push("\n        <br />\n        ");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "event.emcee", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("comma-list")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = (helper = helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  ");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});Ember.TEMPLATES['partials/_sponsors_front_page'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"lg\">\n  <div class=\"container sponsors-container text-center\">\n    <h2>SPONSORED BY</h2>\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n      </div>\n\n    </div><!-- row -->\n  </div><!-- container -->\n</div>");
  
});