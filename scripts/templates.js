Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/header", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "jumbotron", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n      </div>\n    </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/footer", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n\n\n<!-- MODAL FOR CONTACT -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          contact us\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row centered\">\n            <p>We are available 24/7, so don't hesitate to contact us.</p>\n            <p>\n              Somestreet Ave, 987<br/>\n              London, UK.<br/>\n              +44 8948-4343<br/>\n              hi@blacktie.co\n            </p>\n            <div id=\"mapwrap\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Contact")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p>For advertising and general festival inquiries, please contact us at <a href=\"mailto:info@bridgetowncomedy.com\">info@bridgetowncomedy.com</a></p>\n\n<p>For press and industry requests, please contact us at <a href=\"mailto:press@bridgetowncomedy.com\">press@bridgetowncomedy.com</a></p>\n\n<p>If you are interested in volunteering, please visit the following site: <a href=\"http://bridgetown.festivalthing.com/volunteering\">bridgetown.festivalthing.com/volunteering</a></p>\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["event"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n    <span class=\"schedule-list__item-venue-label label label-default\">");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>\n          <img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("show.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <p>\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Copy", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n        </p>\n      </div>\n    </div>\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "emcee", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <strong>MC: </strong> ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <p class=\"lead\">\n    ");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("<br/>\n    ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</small>\n  </p>\n  <p>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venue", "venue", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </p>\n  <p>\n    ");
  stack1 = ((helpers.googleMapLink || (depth0 && depth0.googleMapLink) || helperMissing).call(depth0, "venue.address", {"name":"googleMapLink","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n\n");
  stack1 = helpers['if'].call(depth0, "show", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\" style=\"background:#695b53;\">\n    <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Performers</h4>\n    </li>\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </ul>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["faqs"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("FAQs")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p><em>Can I buy individual show tickets?</em></p>\n\n  <p>Yes! Well, sort of. We only sell full festival passes in advance. If you want to attend a single show, you can pay admission as you enter (doors open 30 minutes prior to showtime). This has always been Bridgetown’s policy in an attempt to avoid penalizing full weekend pass-holders. This way, no matter how popular a single show may be, those with festival passes and those who only want to attend one show have an equal chance at getting in by lining up beforehand.</p>\n\n  <p>Note: Individual show tickets are only valid for a single show. They do not grant access for the following shows in the same venue.</p>\n\n  <p><em>Are all shows 21 and over?</em></p>\n\n  <p>All of the shows in this year's festival are 21 and over, with the exception of the free panel discussion with the authors of the The Humor Code taking place at 7pm on Thursday, May 8th at Powell's City of Books in conjunction with the Bridgetown Comedy Festival. If you purchased a festival pass in advance and you're under 21, please email info@bridgetowncomedy.com and we will gladly refund your order.</p>\n\n  <p><em>So I bought a festival pass... what now? Where do I pick it up?</em></p>\n\n  <p>If you bought a standard festival pass, Golden Ticket VIP pass or a Bridgetown Fantasy Camp pass, you will get a wristband to wear throughout the weekend that grants you admission to shows. To pick up your festival wristband, please bring a printout of your Laughtstub receipt, or show your receipt on your smartphone, or just show a picture ID at one of the following venues (ONLY DURING THE FESTIVAL -- these venues will only have will call for Bridgetown passes set up half an hour before shows begin):</p>\n\n  <ul>\n  <li><p>Doug Fir Lounge/Jupiter Hotel, 830 E. Burnside St.</p>\n\n  </li>\n  <li><p>Hawthorne Theatre, 1507 SE 39th Ave.</p>\n\n  </li>\n  <li><p>Alhambra Theater, 4811 SE Hawthorne Blvd.</p>\n\n  </li>\n  </ul>\n\n  <p>This wristband is what grants admission to shows, and must be worn at all times. If you remove or lose your wristband, you will need to purchase a new one. </p>\n\n  <p><em>Are tickets transferable?</em></p>\n\n  <p>No. Your weekend wristband is meant to be worn by you and only you throughout the weekend. If you wish to transfer your ticket into someone else’s name<em>before </em>the festival, you may request to do so by emailing info@bridgetowncomedy.com</p>\n\n  <p><em>What does my Golden Ticket VIP Pass get me?</em></p>\n\n  <p>Your VIP Golden Ticket pass grants you front-of-the-line access to shows, a free Bridgetown T-shirt and admission to the pre-festival meet-and-greet. If you purchased a Golden Ticket, you will receive an email a week before the festival with information on this event via the email address you used when purchasing your pass.</p>\n\n  <p><em>What does my Bridgetown Fantasy Camp Pass get me?</em></p>\n\n  <p>Lucky you! You've got the most primo pass we've ever offered! Your pass gets you all of the perks of a Golden Ticket, plus four nights' stay at the Jupiter Hotel, the official hotel of the 2014 Bridgetown Comedy Festival, and admission to the performer-only parties taking place after shows end every night. We'll be contacting you with details a week before the festival via the email address you used when purchasing your pass.</p>\n\n  <p><em>What about Tanker? What’s going on there?</em></p>\n\n  <p>The Tanker will be hosting an open mic all weekend. The Tanker has played host to some of the most legendary performances in our seven-year history. Bridgetown performers may sign up for 3-5 minute sets.</p>\n\n  <p><em>Do certain shows forbid late admittance?</em></p>\n\n  <p>It is a good idea to get to shows early to ensure entry. Once a show has sold out, you will not be able to enter. There may be certain cases that require waiting until a natural break in the performance before late entry is allowed.</p>\n\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["four_oh_four"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Page Not Found")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n  <div class=\"container main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"\">\n          <h2>The page cannot be found...</h2>\n          <p>Perhaps you are here because:</p>\n          <ul>\n            <li>The page has moved</li>\n            <li>The page no longer exists</li>\n            <li>You were looking for your puppy and got lost</li>\n            <li>You like 404 pages</li>\n          </ul>\n          <p><a class=\"btn btn-block btn-primary\" href=\"/\">Return to homepage </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["history"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("History")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"jumbotron jumbotron-color-1 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n      <div class=\"header-logo\"><img class=\"img-responsive\" src=\"/img/logo-long-inverse.png?1\" /></div>\n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-sm-6\">\n\n        <h3>Thank You!</h3>\n        ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/news", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-sm-6\">\n        <h3>@bridgetown</h3>\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-body\">\n\n          ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/recent_tweets", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n          </div>\n        </div>\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br />\n    <br />\n  </div><!-- container -->\n\n\n\n");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/sponsors_front_page", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(" <div class=\"row\"> <div class=\"jumbotron jumbotron-default\">\n   <div class=\"container main-content\">\n    <h1 class=\"text-center\">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression(((helpers['x-spinner'] || (depth0 && depth0['x-spinner']) || helperMissing).call(depth0, {"name":"x-spinner","hash":{
    'width': (3),
    'color': ("#333"),
    'shadow': (false),
    'length': (10),
    'radius': (10),
    'lines': (12)
  },"hashTypes":{'width': "NUMBER",'color': "STRING",'shadow': "BOOLEAN",'length': "NUMBER",'radius': "NUMBER",'lines': "NUMBER"},"hashContexts":{'width': depth0,'color': depth0,'shadow': depth0,'length': depth0,'radius': depth0,'lines': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["performer"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              <br /> (");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "event.start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(")\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Show MC</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "mc_events", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event.id", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  data.buffer.push("← All Performers");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n");
  stack1 = helpers['if'].call(depth0, "isAnMC", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      <p>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["performers"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </div>\n      <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </legend>\n    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("performer.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Performers")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p class=\"lead\">Performers subject to change...</p>\n  <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["press"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Press")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p>The Huffington Post</p>\n\n  <p><a href=\"http://www.huffingtonpost.com/barbara-holm/why-the-world-needs-bridg_b_3047738.html\" >http://www.huffingtonpost.com/barbara-holm/why-the-world-needs-bridg_b_3047738.html</a></p>\n\n  <p>LaughSpin.com</p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/\" >http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/\" >http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/\" >http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/\" >http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/%20http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/%20http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/%20http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/%20http://www.laughspin.com/2013/04/19/bridgetown-diary-inside-portlands-annual-comedy-festival/\" >http://www.laughspin.com/2013/04/19/bridgetown-diary-inside-portlands-annual-comedy-festival/</a></p>\n\n  <p>Splitsider.com</p>\n\n  <p><a href=\"http://splitsider.com/2013/04/go-backstage-at-the-bridgetown-comedy-festival-with-andy-peters-wandertown-podcast/\" >http://splitsider.com/2013/04/go-backstage-at-the-bridgetown-comedy-festival-with-andy-peters-wandertown-podcast/</a></p>\n\n  <p>Serial Optimist</p>\n\n  <p><a href=\"http://www.serialoptimist.com/interviews/allen-strickland-williams-a-man-we-love-15410.html\" >http://www.serialoptimist.com/interviews/allen-strickland-williams-a-man-we-love-15410.html</a></p>\n\n  <p>The Oregonian/OregonLive.com</p>\n\n  <p><a href=\"http://www.oregonlive.com/performance/index.ssf/2013/04/laugh_it_up_portland.html\" >http://www.oregonlive.com/performance/index.ssf/2013/04/laugh_it_up_portland.html</a></p>\n\n  <p><a href=\"http://www.oregonlive.com/movies/index.ssf/2013/04/bridgetown_comedy_festival_who.html\" >http://www.oregonlive.com/movies/index.ssf/2013/04/bridgetown_comedy_festival_who.html</a></p>\n\n  <p>Oregon Public Broadcasting</p>\n\n  <p><a href=\"http://www.opb.org/artsandlife/article/bridgetown-comedy-festival-announces-2013-lineup/\" >http://www.opb.org/artsandlife/article/bridgetown-comedy-festival-announces-2013-lineup/</a></p>\n\n  <p><a href=\"http://www.opb.org/thinkoutloud/shows/local-comics-perform-bridgetown-comedy-festival/\" >http://www.opb.org/thinkoutloud/shows/local-comics-perform-bridgetown-comedy-festival/</a></p>\n\n  <p>KGW Newschannel 8</p>\n\n  <p><a href=\"http://www.kgw.com/thesquare/Talk-Box-Bridgetown-Comedy-Festival-203321801.html\" >http://www.kgw.com/thesquare/Talk-Box-Bridgetown-Comedy-Festival-203321801.html</a></p>\n\n  <p><em>Portland Mercury</em></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/03/13/2013-bridgetown-comedy-festival-lineup-announced\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/03/13/2013-bridgetown-comedy-festival-lineup-announced</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/portland/bridgetown-comedy-fest/Content?oid=9077410\" >http://www.portlandmercury.com/portland/bridgetown-comedy-fest/Content?oid=9077410</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/19/your-drunk-bridgetown-update\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/19/your-drunk-bridgetown-update</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/a-hungover-bridgetown-update\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/a-hungover-bridgetown-update</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/your-drunk-bridgetown-update-2\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/your-drunk-bridgetown-update-2</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/22/a-hungover-bridgetown-update-3\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/22/a-hungover-bridgetown-update-3</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/hey-bridgetown-go-see-theme-park-this-afternoon\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/hey-bridgetown-go-see-theme-park-this-afternoon</a><br />\n  <a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/saturday-night-bridgetown-update-emily-heller-won-iron-comic-and-guy-branum-won-twitter\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/saturday-night-bridgetown-update-emily-heller-won-iron-comic-and-guy-branum-won-twitter</a></p>\n\n  <p><a href=\"http://blogtown.portlandmercury.com/BlogtownPDX/archives/2013/04/23/bridgetown-parting-shots\" >http://blogtown.portlandmercury.com/BlogtownPDX/archives/2013/04/23/bridgetown-parting-shots</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/sketching-bridgetown\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/sketching-bridgetown</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/if-you-missed-that-simpsons-panel-youre-a-terrible-portlander\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/if-you-missed-that-simpsons-panel-youre-a-terrible-portlander</a></p>\n\n  <p><em>Portland Monthly</em> magazine</p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/bridgetown-comedy-fest-is-coming-march-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/bridgetown-comedy-fest-is-coming-march-2013</a></p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-local-bridgetown-comedian-nathan-brannon-april-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-local-bridgetown-comedian-nathan-brannon-april-2013</a></p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-simpsons-writer-dana-gould-april-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-simpsons-writer-dana-gould-april-2013</a></p>\n\n  <p>PDXPipeline</p>\n\n  <p><a href=\"http://pdxpipeline.com/2013/04/09/portland-bridgetown-comedy-festival/\" >http://pdxpipeline.com/2013/04/09/portland-bridgetown-comedy-festival/</a></p>\n\n  <p>CultureMob</p>\n\n  <p><a href=\"http://culturemob.com/culturemob-chats-with-three-of-seattles-bridgetown-first-timers\" >http://culturemob.com/culturemob-chats-with-three-of-seattles-bridgetown-first-timers</a></p>\n\n  <p><a href=\"http://culturemob.com/bridgetown-qa-four-questions-for-barbara-holm\" >http://culturemob.com/bridgetown-qa-four-questions-for-barbara-holm</a></p>\n\n  <p><a href=\"http://culturemob.com/emmett-montgomery-talks-bridgetown-airblades-decapitations\" >http://culturemob.com/emmett-montgomery-talks-bridgetown-airblades-decapitations</a></p>\n\n  <p><a href=\"http://culturemob.com/if-you-only-see-four-shows-at-bridgetown-honestly-you-are-hardly-trying-at-all\" >http://culturemob.com/if-you-only-see-four-shows-at-bridgetown-honestly-you-are-hardly-trying-at-all</a></p>\n\n  <p><a href=\"http://culturemob.com/discovery-and-excitement-bridgetown-2013-day-1\" >http://culturemob.com/discovery-and-excitement-bridgetown-2013-day-1</a></p>\n\n  <p><a href=\"http://culturemob.com/todd-glass-and-the-hawthorne-lounge-bridgetown-day-3\" >http://culturemob.com/todd-glass-and-the-hawthorne-lounge-bridgetown-day-3</a></p>\n\n  <p><em>Nailed</em> magazine</p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-janet-varney/\" >http://www.nailedmagazine.com/interview/comedian-janet-varney/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-karen-kilgariff/\" >http://www.nailedmagazine.com/interview/comedian-karen-kilgariff/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-shane-torres/\" >http://www.nailedmagazine.com/interview/comedian-shane-torres/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-moshe-kasher/\" >http://www.nailedmagazine.com/interview/comedian-moshe-kasher/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-myq-kaplan/\" >http://www.nailedmagazine.com/interview/comedian-myq-kaplan/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-lonnie-bruhn/\" >http://www.nailedmagazine.com/interview/comedian-lonnie-bruhn/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-gabe-dinger/\" >http://www.nailedmagazine.com/interview/comedian-gabe-dinger/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-paul-gilmartin/\" >http://www.nailedmagazine.com/interview/comedian-paul-gilmartin/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-chris-fairbanks/\" >http://www.nailedmagazine.com/interview/comedian-chris-fairbanks/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-kurt-braunohler/\" >http://www.nailedmagazine.com/interview/comedian-kurt-braunohler/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-paul-jay/\" >http://www.nailedmagazine.com/interview/comedian-paul-jay/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-barbara-holm/\" >http://www.nailedmagazine.com/interview/comedian-barbara-holm/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/interview-comedian-katie-rose-leon/\" >http://www.nailedmagazine.com/interview/interview-comedian-katie-rose-leon/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-emily-heller/\" >http://www.nailedmagazine.com/interview/comedian-emily-heller/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-baron-vaughn/\" >http://www.nailedmagazine.com/interview/comedian-baron-vaughn/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/ec/top-12-quick-jokes-from-bridgetown-comedy-festival/\" >http://www.nailedmagazine.com/ec/top-12-quick-jokes-from-bridgetown-comedy-festival/ </a></p>\n\n  <p><br />\n  The Superslice</p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/17/the-superslice-guide-to-the-2013-bridgetown-comedy-festival/\" >http://thesuperslice.com/2013/04/17/the-superslice-guide-to-the-2013-bridgetown-comedy-festival/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/16/bridgetown-comedy-festival-2013-karen-kilgariff-interview/\" >http://thesuperslice.com/2013/04/16/bridgetown-comedy-festival-2013-karen-kilgariff-interview/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/13/bridgetown-comedy-festival-2013-matt-braunger-x-nathan-brannon-x-whitney-streed-interviews/\" >http://thesuperslice.com/2013/04/13/bridgetown-comedy-festival-2013-matt-braunger-x-nathan-brannon-x-whitney-streed-interviews/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/05/05/joe-sib-interview/\" >http://thesuperslice.com/2013/05/05/joe-sib-interview/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/28/bridgetown-comedy-festival-2013-recap-part-1-interviews-with-ian-karmel-lance-bangs/\" >http://thesuperslice.com/2013/04/28/bridgetown-comedy-festival-2013-recap-part-1-interviews-with-ian-karmel-lance-bangs/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/30/bridgetown-comedy-festival-2013-recap-part-2/\" > http://thesuperslice.com/2013/04/30/bridgetown-comedy-festival-2013-recap-part-2/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/05/03/bridgetown-comedy-festival-2013-recap-part-3/\" >http://thesuperslice.com/2013/05/03/bridgetown-comedy-festival-2013-recap-part-3/</a></p>\n\n  <p><br />\n  AfterEllen.com</p>\n\n  <p><a href=\"http://www.afterellen.com/2013/04/lez-stand-out-bridgetown-comedy-fest\" >http://www.afterellen.com/2013/04/lez-stand-out-bridgetown-comedy-fest</a></p>\n\n  <p><a href=\"http://www.afterellen.com/2013/04/lez-stand-out-bridgetowns-best\" >http://www.afterellen.com/2013/04/lez-stand-out-bridgetowns-best</a></p>\n\n  <p><em>Willamette Week</em></p>\n\n  <p><a href=\"http://www.wweek.com/portland/blog-30065-bridgetown_comedy_festival_moments_from_day_1.html\" >http://www.wweek.com/portland/blog-30065-bridgetown_comedy_festival_moments_from_day_1.html</a></p>\n\n  <p><a href=\"http://www.wweek.com/portland/blog-30066-bridgetown_comedy_festival_moments_from_days_2_and_3.html\" >http://www.wweek.com/portland/blog-30066-bridgetown_comedy_festival_moments_from_days_2_and_3.html</a></p>\n\n  <p>DailyBlender.com</p>\n\n  <p><a href=\"http://www.dailyblender.com/2013/04/comedy-can-save-the-day-portland-comic-ian-karmel/\" >http://www.dailyblender.com/2013/04/comedy-can-save-the-day-portland-comic-ian-karmel/</a></p>\n\n  <p>DailyDot.com</p>\n\n  <p><a href=\"http://www.dailydot.com/entertainment/bridgetown-comedy-festival-matt-braunger/\" >http://www.dailydot.com/entertainment/bridgetown-comedy-festival-matt-braunger/</a></p>\n\n  <p><a href=\"http://www.dailydot.com/entertainment/walking-room-podcast-greg-behrendt-interview/\" >http://www.dailydot.com/entertainment/walking-room-podcast-greg-behrendt-interview/</a></p>\n\n  <p><a href=\"http://ec.dailydot.com/entertainment/megan-amram-twitter-interview-parks-rec/\" >http://ec.dailydot.com/entertainment/megan-amram-twitter-interview-parks-rec/</a></p>\n\n  <p>PODCASTS at the festival</p>\n\n  <p>Walking the Room</p>\n\n  <p><a href=\"https://soundcloud.com/walking-the-room/148-gallaghers-suicide-note\" >https://soundcloud.com/walking-the-room/148-gallaghers-suicide-note</a> (live show featuring guests Paul Gilmartin, Todd Glass, and Gallagher)<a href=\"https://soundcloud.com/walking-the-room/147-moshe-kasher-at-bridgetown\" >https://soundcloud.com/walking-the-room/147-moshe-kasher-at-bridgetown</a> (with guest Moshe Kasher)</p>\n\n  <p>The Paul Goebel Show </p>\n\n  <p><a href=\"http://www.thekingoftv.com/podcast/2013/04/23/episode-346-w-myq-kaplan-xander-deveaux-gallagher/\" >http://www.thekingoftv.com/podcast/2013/04/23/episode-346-w-myq-kaplan-xander-deveaux-gallagher</a> (final episode, featuring guests Myq Kaplan, Xander Deveaux, and Gallagher)</p>\n\n  <p>Probably Science</p>\n\n  <p><a href=\"http://probablyscience.tumblr.com/post/48664764618/episode-66-with-peter-serafinowicz-and-gallagher\" >http://probablyscience.tumblr.com/post/48664764618/episode-66-with-peter-serafinowicz-and-gallagher</a> (with guests Peter Serafinowicz and Gallagher)</p>\n\n  <p>Put Your Hands Together</p>\n\n  <p><a href=\"http://castroller.com/podcasts/PutYourHands/3527529\" >http://castroller.com/podcasts/PutYourHands/3527529</a> (Cameron Esposito hosts Reggie Watts, Karen Kilgariff, Seth Herzog, Ben Kronberg, Andy Wood, and Rhea Butcher)</p>\n\n  <p>The Mental Illness Happy Hour</p>\n\n  <p><a href=\"http://mentalpod.com/Karen-Kilgariff-podcast\" >http://mentalpod.com/Karen-Kilgariff-podcast</a> (host Paul Gilmartin talks to Karen Kilgariff)</p>\n\n  <p>The JV Club</p>\n\n  <p><a href=\"http://www.nerdist.com/2013/05/the-jv-club-60-live-from-bridgetown/\" >http://www.nerdist.com/2013/05/the-jv-club-60-live-from-bridgetown</a> (Janet Varney interviews Natasha Leggero and Karen Kilgariff)</p>\n\n  <p>Who Charted?</p>\n\n  <p><a href=\"http://www.earwolf.com/episode/42613-two-charted-64/\" >http://www.earwolf.com/episode/42613-two-charted-64</a> (Howard and Kulap give a Bridgetown recap)</p>\n\n  <p>Shanrock's Triviopodogy</p>\n\n  <p><a href=\"http://www.patiohpatino.com/wp-content/uploads/2013/05/Trivipodigy_Ep12-FINAL-CUT.mp3\" >http://www.patiohpatino.com/wp-content/uploads/2013/05/Trivipodigy_Ep12-FINAL-CUT.mp3</a> (guest host Kenny Sessler interviews Veronica Heath and Paul Goebel, the champions of the 2013 Comedy Cup Quiz at Bridgetown.)</p>\n\n  <p>Wandertown: Audio Dispatches from the Bridgetown Comedy Festival</p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-1\" >https://soundcloud.com/andy_peters/sets/wandertown-day-1</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-2\" >https://soundcloud.com/andy_peters/sets/wandertown-day-2</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-3\" >https://soundcloud.com/andy_peters/sets/wandertown-day-3</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-4\" >https://soundcloud.com/andy_peters/sets/wandertown-day-4</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-the-goodest-of-the\" >https://soundcloud.com/andy_peters/sets/wandertown-the-goodest-of-the</a></p>\n\n  <p>FunEmployment Radio</p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/12/funemployment-radio-episode-839/\" >http://funemploymentradio.com/2013/04/12/funemployment-radio-episode-839/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/16/funemployment-radio-episode-840/\" >http://funemploymentradio.com/2013/04/16/funemployment-radio-episode-840/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/19/funemployment-radio-episode-843/\" >http://funemploymentradio.com/2013/04/19/funemployment-radio-episode-843/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/22/funemployment-radio-episode-844/\" >http://funemploymentradio.com/2013/04/22/funemployment-radio-episode-844/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/24/funemployment-radio-episode-846/\" >http://funemploymentradio.com/2013/04/24/funemployment-radio-episode-846/</a></p>\n\n  <p>VIDEOS</p>\n\n  <p><a href=\"https://www.youtube.com/watch?feature=player_embedded&amp;v=IF306s_jW_k\" >https://www.youtube.com/watch?feature=player_embedded&amp;v=IF306s_jW_k </a>(by Nate Craig with help from other performers)</p>\n\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Schedule")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p>Performers, shows and prices subject to change.</p>\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  <p>\n    <a target=\"_blank\" href=\"https://www.google.com/calendar/embed?src=ij2h1kcsksapda46r4e8qr2atc%40group.calendar.google.com&ctz=America/Los_Angeles\"><img src=\"/img/add-to-google-calendar.gif\" /></a>\n  </p>\n\n\n<div class=\"schedule-list\">\n  <div class=\"text-left\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterThursday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Thursday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterFriday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Friday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSaturday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Saturday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSunday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Sunday</button>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      ");
  data.buffer.push(escapeExpression(((helpers['cloaked-collection'] || (depth0 && depth0['cloaked-collection']) || helperMissing).call(depth0, {"name":"cloaked-collection","hash":{
    'defaultHeight': (218),
    'preservesContext': (true),
    'content': ("controller.events"),
    'cloakView': ("App.ScheduleListItemView")
  },"hashTypes":{'defaultHeight': "NUMBER",'preservesContext': "BOOLEAN",'content': "ID",'cloakView': "ID"},"hashContexts":{'defaultHeight': depth0,'preservesContext': depth0,'content': depth0,'cloakView': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["show"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n            <br /> (");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "event.start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(")\n\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"6":function(depth0,helpers,partials,data) {
  data.buffer.push("← All Shows");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Copy", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <p>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "shows", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["shows"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </div>\n      <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </legend>\n    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("show.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Shows")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p class=\"lead\">Shows subject to change...</p>\n  <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "show", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["sponsors"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Sponsors")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content sponsors-container text-center\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n      <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n      <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n      <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.cremabakery.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crema.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n    </div>\n\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.bendistillery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-crater-lake.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.eastsidedistilling.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eastside-distillery.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://elevenpdx.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-eleven.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://funemploymentradio.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-funemployment.png\" alt=\"\"></a>\n    </div>\n\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://groundkontrol.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ground-kontrol.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://ifc.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-ifc.png?1\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://imeldas.com/store?utm_source=BTC14&utm_medium=BTCsponsorpage&utm_campaign=logo\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-imeldas.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-8 col-sm-4\">\n      <a target=\"_blank\" href=\"http://www.jupiterhotel.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-jupiter-long.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.kindsnacks.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-kind-bar.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://laughingplanetcafe.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-laughing-planet.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.montageportland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-montage.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://pabstblueribbon.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pabst.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.pivot.tv/?cmpid=bridgetown\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-pivot.png?1\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.portlandmercury.com/\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mercury.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"https://soundcloud.com/wandertown\">\n        <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-soundcloud.png\" alt=\"\">\n      </a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.standupfordowns.org/\">\n        <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-stand-up-for-downs.png\" alt=\"\">\n      </a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.tonkin.com/\">\n        <img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-tonkin.png\" alt=\"\">\n      </a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://voodoodoughnut.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://voodoodoughnut.com/recordings\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-voodoo-recordings.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://zachsshack.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-zachs-shack.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n      <a target=\"_blank\" href=\"http://www.yelp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-yelp.png\" alt=\"\"></a>\n      </div>\n  </div><!-- row -->\n</div><!-- container -->\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["venue"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_list_item", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-12\">\n      <p>\n        ");
  stack1 = ((helpers.googleMapLink || (depth0 && depth0.googleMapLink) || helperMissing).call(depth0, "address", {"name":"googleMapLink","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "events", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["venues"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Venues")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <div class=\"col sqs-col-12 span-12\"><div class=\"sqs-block embed-block sqs-block-embed\" data-block-json=\"{&quot;hSize&quot;:null,&quot;floatDir&quot;:null,&quot;html&quot;:&quot;<iframe src=\\&quot;https://mapsengine.google.com/map/u/0/embed?mid=zFy_pBh586PU.kbpDVJC5_cCI\\&quot; width=\\&quot;2000\\&quot; height=\\&quot;480\\&quot;></iframe>&quot;,&quot;resolvedBy&quot;:&quot;manual&quot;,&quot;resolved&quot;:true}\" data-block-type=\"22\" id=\"block-yui_3_10_1_1_1397859598638_18386\"><div class=\"sqs-block-content\"><iframe src=\"https://mapsengine.google.com/map/u/0/embed?mid=zFy_pBh586PU.kbpDVJC5_cCI&amp;wmode=opaque\" width=\"2000\" data-embed=\"true\" height=\"480\"></iframe></div></div><div class=\"sqs-block image-block sqs-block-image\" data-aspect-ratio=\"54.46685878962536\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_50694\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13e0e4b0cd207ffebea9/1398674401784/dougfirlogo.gif\"  alt=\"dougfirlogo.gif\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"dougfirlogo.gif\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13e0e4b0cd207ffebea9/1398674401784/dougfirlogo.gif\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13e0e4b0cd207ffebea9/1398674401784/dougfirlogo.gif\" data-image-dimensions=\"620x339\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e13e0e4b0cd207ffebea9\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13e0e4b0cd207ffebea9/1398674401784/dougfirlogo.gif\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_48903\"><div class=\"sqs-block-content\"><h2><span><span style=\"font-size:15px\">Squarespace Stage at Doug Fir Lounge</span></span></h2><p><a href=\"/venue/7612-squarespace-stage-at-doug-fir\"><span><span style=\"font-size:15px\">- View Shows</span></span></a></p><p><span><a href=\"http://www.dougfirlounge.com/\"><span style=\"font-size:15px\">http://www.dougfirlounge.com/</span></a></span></p><p><span><span style=\"font-size:15px\">830 E. Burnside St.</span></span></p><p><span><span style=\"font-size:15px\">Since 2004, Doug Fir Lounge has stood above the rest as Portland’s best sounding venue, hosting over 25 shows a month. The Lounge was named to </span><a href=\"http://venue/7612-squarespace-stage-at-doug-fir\"><em>Rolling Stone</em><span style=\"font-size:15px\"> magazine’s list of top club venues in America in 2013</span></a><span style=\"font-size:15px\">. The Doug Fir is the place to see the world’s best performers in the most intimate of settings for a truly memorable experience.</span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_11479\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13a4e4b0cd207ffebe5c/1398674341886/\"  /&gt;</noscript><img class=\"thumb-image\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13a4e4b0cd207ffebe5c/1398674341886/\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13a4e4b0cd207ffebe5c/1398674341886/\" data-image-dimensions=\"620x189\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e13a4e4b0cd207ffebe5c\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13a4e4b0cd207ffebe5c/1398674341886/\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1397603338441_24550\"><div class=\"sqs-block-content\"><h2><span><span style=\"font-size:15px\">Taxi Magic Stage at Alhambra Theater&nbsp;</span></span></h2><p><a href=\"/venue/7609-taxi-magic-stage-at-alhambra-theater-main\"><span><span style=\"font-size:15px\">- View Shows for Alhambra Main Stage</span></span></a></p><p><a href=\"/venue/7608-alhambra-theater-lounge\"><span><span style=\"font-size:15px\">- View Shows for Alhambra Lounge</span></span></a></p><p><span><a href=\"http://www.alhambrapdx.com/\"><span style=\"font-size:15px\">http://www.alhambrapdx.com/</span></a></span></p><p><span><span style=\"font-size:15px\">4811 SE Hawthorne Blvd.</span></span></p><p><span><span style=\"font-size:15px\">Originally an early-twentieth-century movie theater, the Alhambra and its adjacent lounge have recently been renovated to return to their original glory in decor, technology, hospitality, and entertainment. The Alhambra Lounge offers a secondary venue for more intimate performances and podcast tapings.</span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_58924\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1453e4b0482b3e2a05b8/1398674515900/WOSC.jpg\"  alt=\"WOSC.jpg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"WOSC.jpg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1453e4b0482b3e2a05b8/1398674515900/WOSC.jpg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1453e4b0482b3e2a05b8/1398674515900/WOSC.jpg\" data-image-dimensions=\"620x129\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e1453e4b0482b3e2a05b8\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1453e4b0482b3e2a05b8/1398674515900/WOSC.jpg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_54798\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_53845\"><span><span style=\"font-size:15px\">Mailchimp Stage at White Owl Social Club</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_53846\"><a data-cke-saved-href=\"/venue/7618-mailchimp-stage-stage-at-white-owl-social-club\" href=\"/venue/7618-mailchimp-stage-stage-at-white-owl-social-club\"><span><span style=\"font-size:15px\">- View Shows</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_53847\"><span><a data-cke-saved-href=\"http://whiteowlsocialclub.com/\" href=\"http://whiteowlsocialclub.com/\"><span style=\"font-size:15px\">http://whiteowlsocialclub.com/</span></a></span></p><p id=\"yui_3_10_1_1_1398673161089_53848\"><span><span style=\"font-size:15px\">1305 SE 8th Ave.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_53849\"><span><span style=\"font-size:15px\">The White Owl Social Club is a bar, restaurant, and performance venue boasting a swanky interior and a massive outdoor patio. Trust us here at Bridgetown HQ, every night is a party at White Owl, complete with crafty cocktails and comfort food! </span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1398673161089_61852\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:578.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e16a4e4b0e811728f8d70/1398675108809/FOE.jpg\"  alt=\"FOE.jpg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"FOE.jpg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e16a4e4b0e811728f8d70/1398675108809/FOE.jpg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e16a4e4b0e811728f8d70/1398675108809/FOE.jpg\" data-image-dimensions=\"578x326\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e16a4e4b0e811728f8d70\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e16a4e4b0e811728f8d70/1398675108809/FOE.jpg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_62056\"><div class=\"sqs-block-content\"><h2><span><span style=\"font-size:15px\">Sizzle Pie Stage at Eagles Lodge</span></span></h2><p><a href=\"/venue/7613-sizzle-pie-stage-at-eagles-lodge\"><span style=\"font-size:15px\">- View Shows</span></a></p><p><a target=\"_blank\" href=\"http://www.yelp.com/biz/east-portland-eagle-lodge-portlan\">http://www.yelp.com/biz/east-portland-eagle-lodge-portland</a></p><p><span><span style=\"font-size:15px\">4904 SE Hawthorne Blvd.</span></span></p><p><span><span style=\"font-size:15px\">If the walls of the Eagles Lodge could talk, Bridgetown would probably get a stern lecture. </span></span></p><p><span><span style=\"font-size:15px\">With an interior resembling ‘70s prom decor, this relic of bygone Portland opens its doors to Bridgetown year after year, for performances that are likely more mischievous than it normally sees.</span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_41690\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:500.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1432e4b0482b3e2a05a8/1398674483770/hawthorne-theatre-logo.jpeg\"  alt=\"hawthorne-theatre-logo.jpeg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"hawthorne-theatre-logo.jpeg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1432e4b0482b3e2a05a8/1398674483770/hawthorne-theatre-logo.jpeg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1432e4b0482b3e2a05a8/1398674483770/hawthorne-theatre-logo.jpeg\" data-image-dimensions=\"500x314\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e1432e4b0482b3e2a05a8\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1432e4b0482b3e2a05a8/1398674483770/hawthorne-theatre-logo.jpeg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1397603338441_25989\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_79597\"><span><span style=\"font-size:15px\">Hawthorne Theatre</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_79598\"><a data-cke-saved-href=\"/venue/7615-hawthorne-theatre-main\" href=\"/venue/7615-hawthorne-theatre-main\"><span><span style=\"font-size:15px\">- View Shows for Hawthorne Theatre</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_79599\"><a data-cke-saved-href=\"/venue/7614-hawthorne-theatre-lounge\" href=\"/venue/7614-hawthorne-theatre-lounge\"><span><span style=\"font-size:15px\">- View Shows for Hawthorne Lounge</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_79600\"><span><a data-cke-saved-href=\"http://www.hawthornetheatre.com/\" href=\"http://www.hawthornetheatre.com/\"><span style=\"font-size:15px\">http://www.hawthornetheatre.com/</span></a></span></p><p id=\"yui_3_10_1_1_1398673161089_79601\"><span><span style=\"font-size:15px\">1507 SE 39th Ave.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_79602\"><span><span style=\"font-size:15px\">A staple of live entertainment in Portland, the Hawthorne Theater offers a large concert hall and a smaller, more intimate performance space under one roof. Conveniently located at the corner of SE 39th and Hawthorne, this venue is renowned for hosting top-notch performances. </span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_28506\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13d4e4b0cd207ffebe96/1398674389676/bossanova.jpg\"  alt=\"bossanova.jpg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"bossanova.jpg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13d4e4b0cd207ffebe96/1398674389676/bossanova.jpg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13d4e4b0cd207ffebe96/1398674389676/bossanova.jpg\" data-image-dimensions=\"620x228\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e13d4e4b0cd207ffebe96\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13d4e4b0cd207ffebe96/1398674389676/bossanova.jpg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_80404\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_79603\"><span><span style=\"font-size:15px\">Bossanova Ballroom</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_79604\"><a data-cke-saved-href=\"/venue/7611-bossanova\" href=\"/venue/7611-bossanova\"><span><span style=\"font-size:15px\">- View Shows</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_79605\"><span><a data-cke-saved-href=\"http://www.bossanovaballroom.com/\" href=\"http://www.bossanovaballroom.com/\"><span style=\"font-size:15px\">http://www.bossanovaballroom.com/</span></a></span></p><p id=\"yui_3_10_1_1_1398673161089_79606\"><span><span style=\"font-size:15px\">722 E. Burnside St.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_79607\"><span><span style=\"font-size:15px\">The Bossanova Ballroom is an 11,000-square-foot, two-level event space equipped with multiple bars, a large performance stage, and space for an audience of 750 people. Expect big laughs at this giant venue!</span></span></p><p id=\"yui_3_10_1_1_1398673161089_79608\"><br></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_17576\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13bae4b0cd207ffebe78/1398674363312/\"  /&gt;</noscript><img class=\"thumb-image\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13bae4b0cd207ffebe78/1398674363312/\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13bae4b0cd207ffebe78/1398674363312/\" data-image-dimensions=\"620x150\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e13bae4b0cd207ffebe78\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13bae4b0cd207ffebe78/1398674363312/\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_77146\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_76410\"><span><span style=\"font-size:15px\">Analog Cafe</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_76411\"><a data-cke-saved-href=\"/venue/7619-analog-theater\" href=\"/venue/7619-analog-theater\"><span><span style=\"font-size:15px\">- View Shows for Analog Theatre</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_76412\"><a data-cke-saved-href=\"/venue/7620-analog-cafe\" href=\"/venue/7620-analog-cafe\"><span><span style=\"font-size:15px\">- View Shows for Analog Cafe</span></span></a>&nbsp;</p><p id=\"yui_3_10_1_1_1398673161089_76413\"><a data-cke-saved-href=\"http://www.analogpdx.com/\" href=\"http://www.analogpdx.com/\"><span style=\"font-size:15px\">http://www.analogpdx.com/</span></a></p><p id=\"yui_3_10_1_1_1398673161089_76414\"><span><span style=\"font-size:15px\">720 SE Hawthorne Blvd.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_76415\"><span><span style=\"font-size:15px\">The Analog is a artist-centric performance theater and restaurant owned and operated by an indie record label DRD Records. It’s conveniently located on inner SE Hawthorne, just a block from the White Owl.</span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397604293805_29933\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:700.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/534dc059e4b0ec6f48740ad4/1397604441975/\"  /&gt;</noscript><img class=\"thumb-image\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/534dc059e4b0ec6f48740ad4/1397604441975/\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/534dc059e4b0ec6f48740ad4/1397604441975/\" data-image-dimensions=\"700x302\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"534dc059e4b0ec6f48740ad4\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/534dc059e4b0ec6f48740ad4/1397604441975/\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1397604293805_30137\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_44377\"><span><span style=\"font-size:15px\">Jupiter Hotel Tent</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_44378\"><a data-cke-saved-href=\"/venue/7616-jupiter-tent\" href=\"/venue/7616-jupiter-tent\"><span><span style=\"font-size:15px\">- View Shows</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_44379\"><span><a data-cke-saved-href=\"http://www.jupiterhotel.com/\" href=\"http://www.jupiterhotel.com/\"><span style=\"font-size:15px\">http://www.jupiterhotel.com/</span></a></span></p><p id=\"yui_3_10_1_1_1398673161089_44380\"><span><span style=\"font-size:15px\">800 E. Burnside St.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_44381\"><span><span style=\"font-size:15px\">Adjacent to the Doug Fir, this 2,800-square-foot covered outdoor space is lined with lush bamboo, adorned with crystal chandeliers, and features a two-tiered stage for entertainment. Just steps from the Doug Fir’s indoor main stage, this secondary venue allows <span>festivalgoers</span> to quickly hop from one show to another.</span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_22543\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13c8e4b0317988ab5309/1398674377555/BOG+LOGO.jpeg\"  alt=\"BOG LOGO.jpeg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"BOG LOGO.jpeg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13c8e4b0317988ab5309/1398674377555/BOG+LOGO.jpeg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13c8e4b0317988ab5309/1398674377555/BOG+LOGO.jpeg\" data-image-dimensions=\"620x293\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e13c8e4b0317988ab5309\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e13c8e4b0317988ab5309/1398674377555/BOG+LOGO.jpeg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1398673161089_74357\"><div class=\"sqs-block-content\"><h2 id=\"yui_3_10_1_1_1398673161089_73696\"><span><span style=\"font-size:15px\">Bar of the Gods</span></span></h2><p id=\"yui_3_10_1_1_1398673161089_73697\"><a data-cke-saved-href=\"/venue/7610-bar-of-the-gods\" href=\"/venue/7610-bar-of-the-gods\"><span><span style=\"font-size:15px\">- View Shows</span></span></a></p><p id=\"yui_3_10_1_1_1398673161089_73698\"><span><a data-cke-saved-href=\"http://barofthegods.com/\" href=\"http://barofthegods.com/\"><span style=\"font-size:15px\">http://barofthegods.com/</span></a></span></p><p id=\"yui_3_10_1_1_1398673161089_73699\"><span><span style=\"font-size:15px\">4801 SE Hawthorne Blvd.</span></span></p><p id=\"yui_3_10_1_1_1398673161089_73700\"><span><span style=\"font-size:15px\">Bar of the Gods, a.k.a. <span>the</span> BOG, is darker than Plato's cave, but only in terms of lighting. BOG is a friendly, lighthearted bar, populated by a mostly younger crowd of amicable mortals. Groups will find plenty of booths, and solo acts will find good conversation at the bar. The patio out back is climate controlled for year-round seating. There's always an interesting selection of esoteric beverages, plus pinball and pool. </span></span></p></div></div><div class=\"sqs-block image-block sqs-block-image\" data-block-type=\"5\" id=\"block-yui_3_10_1_1_1397599847113_40194\"><div class=\"sqs-block-content\">\n  <div class=\"image-block-outer-wrapper layout-caption-below \">\n\n    <div class=\"intrinsic\" style=\"max-width:620.0px;\">\n\n        <div class=\"\" data-description=\"\">\n          <noscript>&lt;img src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1446e4b0a4907f963672/1398674503945/tanker+logo.jpg\"  alt=\"tanker logo.jpg\"  /&gt;</noscript><img class=\"thumb-image\" alt=\"tanker logo.jpg\" data-src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1446e4b0a4907f963672/1398674503945/tanker+logo.jpg\" data-image=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1446e4b0a4907f963672/1398674503945/tanker+logo.jpg\" data-image-dimensions=\"620x256\" data-image-focal-point=\"0.5,0.5\" data-load=\"false\" data-image-id=\"535e1446e4b0a4907f963672\" data-type=\"image\" src=\"http://static.squarespace.com/static/52b7370ae4b08fdf3635e468/t/535e1446e4b0a4907f963672/1398674503945/tanker+logo.jpg\">\n        </div>\n\n\n\n\n    </div>\n\n  </div>\n</div></div><div class=\"sqs-block html-block sqs-block-html\" data-block-type=\"2\" id=\"block-yui_3_10_1_1_1397603338441_30331\"><div class=\"sqs-block-content\"><h2><strong><span><span style=\"font-size:15px\">Tanker</span></span></strong></h2><p><a href=\"/venue/7608-alhambra-theater-lounge\">- View Shows</a></p><p><span><a href=\"http://www.tankerbar.com/\"><span style=\"font-size:15px\">http://www.tankerbar.com/</span></a></span></p><p><span><span style=\"font-size:15px\">4825 SE Hawthorne Blvd.</span></span></p><p><span><span style=\"font-size:15px\">This cozy bar at the edge of Hawthorne Boulevard hosts an ongoing open <span>mic</span> all four days of the <span>fest</span>. We’ve seen our share of ridiculous antics at the Tanker in Bridgetowns past. When in doubt, pop in to the Tanker—you never know just who will drop in, or just how crazy it will get!</span></span></p></div></div></div>\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/page-title-banner"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_event_list_item"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  	<li>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </li>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("        ");
  stack1 = helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n<p>\n  <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n</p>\n<ul>\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.performers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</ul>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_footer"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Home");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Performers");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("Press");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("Contact");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<!-- FOOTER -->\n  <footer class=\"site-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"social\">\n  <ul class=\"social-buttons\">\n    <li class=\"follow-btn\">\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"bridgetown\"  data-related=\"bridgetown\" data-hashtags=\"bridgetowncomedy\">Tweet</a>\n    </li>\n    <li class=\"tweet-btn\">\n      <a href=\"https://twitter.com/bridgetown\" class=\"twitter-follow-button\" data-show-count=\"false\" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href=\"http://twitter.com/joshuabremer\" target=\"_blank\">@joshuabremer</a>. Powered by <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\">Squarespace</a></p>\n    <ul class=\"footer-links muted\">\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_header"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push(" <span class=\"navbar-brand\"><img class=\"navbar-brand-logo\" src=\"/img/logo-long-inverse.png?1\" /></span>");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Performers</span>");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Shows</span>");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Schedule</span>");
  },"9":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Venues</span>");
  },"11":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>FAQs</span>");
  },"13":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>2013 Press</span>");
  },"15":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Sponsors</span>");
  },"17":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Contact</span>");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n       ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"header-color1\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "shows", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "schedule", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color4\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venues", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color5 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "faqs", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color1 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sponsors", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(15, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(17, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"dropdown visible-sm \">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            More Info <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header-color5\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color1\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sponsors", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(15, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color2\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(17, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color3\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "faqs", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </li>\n      </ul>\n      <div class=\"navbar-form navbar-right\">\n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_news"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("\n<div class=\"newspost\" style=\"margin-top:50px;\">\n  <div class=\"newspost-content\">\n    <p>Submissions for the 2015 Bridgetown Comedy Festival, taking place May 7 - 10, are now open! Visit http://bridgetown.festivalthing.com to apply to perform as a standup comic or to submit your themed show or podcast for consideration. Submissions are open until February 1st, but if you apply by January 11th you save $5 off of the $25 submission fee, so put those videos together and show us what you've got!</p>\n  </div>\n</div>\n\n\n\n\n\n");
  },"useData":true});

Ember.TEMPLATES["partials/_performer_box"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("      ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n  <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n  <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </legend>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_recent_tweets"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<a class=\"twitter-timeline\" href=\"https://twitter.com/bridgetown\" data-widget-id=\"432300245716713474\">Tweets by @bridgetown</a>\n\n\n\n");
  },"useData":true});

Ember.TEMPLATES["partials/_schedule_list_item"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression;
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression;
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n          <span class=\"schedule-list__item-venue-label label label-default\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("\n            <li>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </li>\n\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "performer.Name", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            <li><strong>MC: </strong>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </li>\n");
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "emcee.Name", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":schedule-list__item :list-group-item weekday")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n     <div class=\"col-sm-4\">\n        <p class=\"lead\">\n");
  stack1 = helpers['if'].call(depth0, "show", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("          <br/>\n          <small>(");
  data.buffer.push(escapeExpression(((helpers.getWeekday || (depth0 && depth0.getWeekday) || helperMissing).call(depth0, "start_time", {"name":"getWeekday","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - </span>\n          <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</span>)</small>\n        </p>\n        <p>Price: ");
  stack1 = helpers._triageMustache.call(depth0, "Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n      <div class=\"col-xs-5 col-sm-4\">\n        <p>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venue", "venue.pageUrl", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </p>\n      </div>\n      <div class=\"col-xs-7 col-sm-4\">\n        <ul class=\"schedule-list__performer-list\">\n\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </ul>\n        &nbsp;\n      </div>\n    </div>\n  </div>\n</li>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_friday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Friday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_saturday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.saturdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Saturday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_sunday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Thursday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_thursday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Thursday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_sponsors_front_page"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div id=\"lg\">\n  <div class=\"container sponsors-container text-center\">\n    <h2>SPONSORED BY</h2>\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-squarespace-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"https://taximagic.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-taxi-magic-big.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n        <a target=\"_blank\" href=\"http://mailchimp.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-mailchimp-long.png?1\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.portlandoldies.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-oldies.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.z100portland.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-z100.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.1059thebrew.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-brew.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://www.deschutesbrewery.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-deschutes.png\" alt=\"\"></a>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        <a target=\"_blank\" href=\"http://sizzlepie.com\"><img class=\"img-responsive\" src=\"/img/sponsor-images/sponsor-sizzle-pie.png\" alt=\"\"></a>\n      </div>\n\n    </div><!-- row -->\n  </div><!-- container -->\n</div>");
  },"useData":true});

Ember.TEMPLATES["schedule-grid/friday-table"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Friday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/friday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_friday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/friday_schedule"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_friday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/saturday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Saturday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "schedule_table_saturday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/sunday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Sunday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_sunday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/thursday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Thursday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_thursday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});