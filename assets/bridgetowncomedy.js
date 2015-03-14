/* jshint ignore:start */

/* jshint ignore:end */

define('bridgetowncomedy/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend({});

});
define('bridgetowncomedy/app', ['exports', 'ember', 'ember-data', 'ember/resolver', 'ember/load-initializers', 'bridgetowncomedy/config/environment'], function (exports, Ember, DS, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  App.FixtureAdapter = DS['default'].FixtureAdapter.extend({
    queryFixtures: function queryFixtures(records, query) {
      return records.filter(function (record) {
        for (var key in query) {
          if (!query.hasOwnProperty(key)) {
            continue;
          }
          var value = query[key];
          if (record[key] !== value) {
            return false;
          }
        }
        return true;
      });
    }
  });

  App.ApplicationStore = DS['default'].Store.extend({
    revision: 11,
    //adapter: DS.RESTAdapter.create()
    //adapter: DS.LSAdapter.create()
    adapter: "Fixture"
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('bridgetowncomedy/components/x-spinner', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    lines: 12, // The number of lines to draw
    length: 6, // The length of each line
    width: 2, // The line thickness
    radius: 4, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: "#000", // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: "spinner", // The CSS class to assign to the spinner
    zIndex: 2000000000, // The z-index (defaults to 2000000000)
    top: "auto", // Top position relative to parent in px
    left: "50%", // Left position relative to parent in px

    showSpinner: (function () {
      var target = this.get("element");
      this.spinner = new window.Spinner({
        lines: this.get("lines"),
        length: this.get("length"),
        width: this.get("width"),
        radius: this.get("radius"),
        corners: this.get("corners"),
        rotate: this.get("rotate"),
        direction: this.get("direction"),
        color: this.get("color"),
        speed: this.get("speed"),
        trail: this.get("trail"),
        shadow: this.get("shadow"),
        hwaccel: this.get("hwaccel"),
        className: this.get("className"),
        zIndex: this.get("zIndex"),
        top: this.get("top"),
        left: this.get("left")
      });
      this.spinner.spin(target);
    }).on("didInsertElement"),

    teardown: (function () {
      if (this.spinner && this.spinner) {
        this.spinner.stop();
      }
    }).on("willDestroyElement")
  });

});
define('bridgetowncomedy/controllers/performers', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ArrayController.extend({
    sortProperties: ["SortOrder"],
    sortAscending: true,
    filteredPerformers: (function () {
      return this.get("model").filterProperty("ExcludeFromList", false);
    }).property("model.@each.ExcludeFromList")
  });

});
define('bridgetowncomedy/fixtures/event', ['exports'], function (exports) {

  'use strict';

  /*
  export default [
   {
     id: 1,
     name: 'Example'
   },
   {
    id: 2,
    name: 'Example 2'
   }
  ];
  */

  exports['default'] = [];

});
define('bridgetowncomedy/fixtures/performer', ['exports'], function (exports) {

	'use strict';

	exports['default'] = [{Name:"Jonathan Katz", Bio:"<p>I started doing standup in 1981, when there weren’t so many jokes. I quickly learned that my comedy wasn’t for everybody, it was for everybody else. The Improv in New York City was my first home. There, being funny onstage was important, but even more so was being funny at the bar with the other comics. In the early days, some of the comedians had a standing bet on how long I’d last on stage. No one guessed it would be thirty-three years. </p>\n<p>My earliest credit was being musical director for Robin Williams, which worked until people realized that he was not a musician. Around that time, the movie House Of Games was released, written by David Mamet, based on a story by the two of us. A few years later, I played a sleazy comedian in his movie, Things Change – a stretch? </p>\n<p>I made my debut on Late Night with David Letterman in 1985 and have returned eight times since. I always pretend to leave something behind. </p>\n<p>Soon, I did The Tonight Show with Johnny Carson – twice, Leno twice, and Conan seven times, but the work that really attracted attention was an animated series I created with Tom Snyder for Comedy Central called Dr. Katz: Professional Therapist. I played the title role and won an Emmy. The show won a Peabody Award. And then Hollywood took an interest: first NBC, then Dreamworks, followed by Paramount where I created a show called Raising Dad, which aired on the WB network. </p>\n<p>I’ve had roles in many animated shows, including Home Movies, Bob’s Burgers, Adventure Time and Explosion Bus, but probably more people have seen me as the social worker in Eddie Murphy’s film Daddy Day Care than in any other role. </p>\n<p>Currently I am working on a book with David Mamet called the The Home for Unfortunate Animals and happen to be living in one, too. </p>\n<p>You can hear me on my podcast Hey, We’re Back on WKATZ.com.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/dr_katz_live.jpg", PerformerId:"10349", Twitter:"jonathan_katz", Website:"http://www.jonathankatz.com/", Position:"1", id:"10349", pageUrl:"10349-jonathan-katz", ExcludeFromList:false, SortOrder:1, events:[], mc_events:[]}, {Name:"Andy Kindler", Bio:"<p>Andy Kindler is known in comedy circles as a troublemaker.  Originally from New York, and now complaining from California, he annoys people all over the world.  Andy is a frequent guest and correspondent for The Late Show with David Letterman.  Each summer at the Just For Laughs Festival in Montreal he delivers the State of the Industry address to a packed ballroom filled with comics and Hollywood industry types.  He is infamous for his scathing attacks on the world of entertainment, including the previously taboo practice of making fun of his fellow comedians. Andy currently recurs on Comedy Central’s Tosh.0, IFC’s Maron and Fox’s hit animation, Bob’s Burgers.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kindler_2012_small.jpg", PerformerId:"10299", Twitter:"", Website:"", Position:"2", id:"10299", pageUrl:"10299-andy-kindler", ExcludeFromList:false, SortOrder:2, events:[], mc_events:[]}, {Name:"Janeane Garofalo", Bio:"<p>Actress and comedian Janeane Garofalo has had many memorable and critically acclaimed roles in film and television since bursting on the scene in 1992. She's appeared in films such as “Wet Hot American Summer,” “Ratatouille,” \"The Truth About Cats and Dogs,\" and \"Reality Bites\". She was a cast member of the Emmy award winning \"Ben Stiller Show,\" as well as comedy classic \"The Larry Sanders Show,\" and had recurring roles on “24” and “The West Wing”. She tours as a stand up comedian, is one of the stars of the first scripted show on Bravo, and will reprise her role as Beth in the forthcoming, highly anticipated Netflix \"Wet Hot American Summer\" series.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/janeane_garofalo_headshot.jpg", PerformerId:"10293", Twitter:"", Website:"", Position:"3", id:"10293", pageUrl:"10293-janeane-garofalo", ExcludeFromList:false, SortOrder:3, events:[], mc_events:[]}, {Name:"Dana Gould", Bio:"<p>Dana Gould, host of \"The Dana Gould Hour\" podcast, has produced and written for \"The Simpsons\" and \"Parks and Recreation.\" His TV guest appearances include \"Seinfeld,\" \"Roseanne\" and \"Ellen.\" After getting his start performing in the San Francisco area in the late 80s, he wrote for \"The Ben Stiller Show\" in the early 90s. Gould has also written for various sitcoms and animated series, including seven years spent on \"The Simpsons,\" and has performed stand-up on \"The Late Show with David Letterman,\" \"Conan\" and \"Jimmy Kimmel Live!\" Gould's debut comedy album, \"Fun House,\" was released in 1998; his second album, \"Let Me Put My Thoughts in You,\" was released in 2009.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/danagould.jpg", PerformerId:"10288", Twitter:"", Website:"", Position:"4", id:"10288", pageUrl:"10288-dana-gould", ExcludeFromList:false, SortOrder:4, events:[], mc_events:[]}, {Name:"Neil Hamburger", Bio:"<p>America’s Funnyman Neil Hamburger is the hardest working comedian in existence,  performing up to 399 shows a year internationally to critical acclaim and audience  bewilderment.  He’s toured as the hand-picked opener for Tenacious D, Tim &amp; Eric, and  Faith No More, and his TV credits include Fox News’ Red Eye, Tim and Eric Awesome  Show, Tom Green Live, and Jimmy Kimmel Live. On his 2011 UK tour Neil played to  packed houses at the Edinburgh Fringe and completed a 10-show stint at London’s Soho  Theatre. His most recent album “Live At Third Man” was produced by Jack White in  Nashville; an earlier Hamburger album was among SPIN’s “40 Greatest Comedy Albums  Of All Time.”</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/neil_hamburger_photo_0.jpg", PerformerId:"10312", Twitter:"NeilHamburger", Website:"http://www.americasfunnyman.com", Position:"5", id:"10312", pageUrl:"10312-neil-hamburger", ExcludeFromList:false, SortOrder:5, events:[], mc_events:[]}, {Name:"Jessica Williams", Bio:"<p>Jessica Williams is an actress, writer, and all-around funny lady from Los Angeles, California. She credits her ability to be hilarious on her very large funny bone. No really, she has been six feet tall since she was in middle school. At first she was awkward and super weird. Then she became funny and still super weird.</p>\n<p>Jessica then became a \"comedic animal.\" She was funny, but intense and domineering. She was only blood- thirsty for the giggles and laughter of others. To fill her insatiable appetite, Jessica threw herself into the intense and cut-throat world of improv and sketch comedy. She frantically performed in shows with \"ComedySportz: The College Team\" and at the \"Upright Citizens Brigade Theatre.\" A lot of people died laughing.</p>\n<p>After practically \"killing it\" at every single comedic venue in Los Angeles, Jessica decided it was time to conquer New York City. This year, she joined \"The Daily Show with Jon Stewart\" as a new correspondent. Jessica plans to destroy everything that she sees both comedically and physically. As a result, there are a lot of things broken around the studio. She loves it.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jessica.jpeg", PerformerId:"10348", Twitter:"msjwilly", Website:"", Position:"6", id:"10348", pageUrl:"10348-jessica-williams", ExcludeFromList:false, SortOrder:6, events:[], mc_events:[]}, {Name:"Kurt Braunohler", Bio:"<p>Kurt Braunohler was featured in Variety’s annual prestigious “10 Comics To Watch” list, named in Time Out New York's list of 50 Funniest New Yorkers and Backstage Magazine’s “5 Comics To Watch,” \"Comic to Watch\" by Comedy Central, the New York Comedy Festival and Time Out NY, as well as “Best Male Stand-Up” by the ECNY and “Best Unscripted Host” by the New York Television Festival.</p>\n<p>On TV, Kurt can been seen (or heard) on Bob's Burgers, Chelsea Lately, John Oliver Stand Up, Delocated, @midnight, Comedy Central Presents, Drunk History, Getting Doug with High, Adam Devine's House Party, Jon Benjamin Has a Van, Assy McGee, The Heart She Holler, Human Giant and as host of IFC’s comedy game show Bunk!. He has also performed standup sets on CONAN and The Tonight Show with Jimmy Fallon.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kurtbraunohler_credit_mandee_johnson_main.jpg", PerformerId:"10311", Twitter:"kurtbraunohler", Website:"http://kurtbraunohler.tumblr.com", Position:"7", id:"10311", pageUrl:"10311-kurt-braunohler", ExcludeFromList:false, SortOrder:7, events:[], mc_events:[]}, {Name:"Karen Kilgariff", Bio:"<p>Comedian Karen Kilgariff worked as an actor on HBO's legendary sketch program Mr. Show and as the head writer for Ellen DeGeneres. But she's found a niche for herself as the composer of scathingly-funny songs about smart-phone obsession, drinking on holidays and dysfunctional relationships.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_16.jpg", PerformerId:"9601", Twitter:"", Website:"", Position:"8", id:"9601", pageUrl:"9601-karen-kilgariff", ExcludeFromList:false, SortOrder:8, events:[], mc_events:[]}, {Name:"Matt Braunger", Bio:"<p>Matt Braunger was raised in Portland, Oregon. A headlining comedian since 2007 and an actor since childhood, Matt studied theatre in New York and improvisation in Chicago under such luminaries as Susan Messing and Del Close. </p>\n<p>Matt’s television credits include a recurring role on NBC’s UP ALL NIGHT, a series regular role on MADtv, and as well as appearances on Garfunkel and Oates, Maron, Family Tree, The Michael J Fox, Happy Endings, HBO’s Family Tree, CONAN, The Tonight Show with Conan O’Brien, The Late Show with David Letterman, The Pete Holmes Show, United States of Tara, Pushing Daisies, Carpoolers, The Late Late Show with Craig Ferguson, Acceptable TV, and Live At Gotham. He is also a regular guest on the Chelsea Lately roundtable and @midnight. In 2009, he was named to Variety’s Top 10 Comics to Watch and Comedy Central’s Hot 9 in ’09 list, his debut album Soak Up The Night was released by Comedy Central Records and named to the iTunes REWIND Top 20 Albums of 2009 In 2010, he recorded his half hour Comedy Central Presents special and in 2012 released his debut hour-long special entitled Shovel Fighter, also released as an album. Matt’s new hour-long comedy special, Big, Dumb Animal premieres in February on Comedy Central.</p>\n<p>Along with touring comedy clubs across the country, Matt is also a regular at the Upright Citizens Brigade in Los Angeles, and he headlined the Old Milwaukee Comedy Tour for Funny Or Die in 2013. Matt has also performed at a variety of prestigious comedy festivals including the Just For Laughs Festival in Montreal and Chicago, The TBS Comedy Festival Las Vegas, South By Southwest. Matt won the 2008 “Best Of The Fest” at the inaugural Rooftop Comedy Festival in Aspen and he co-founded the popular Bridgetown Comedy Festival that takes place annually in Portland.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/braunger.jpg", PerformerId:"10337", Twitter:"Braunger", Website:"http://mattbraunger.com", Position:"9", id:"10337", pageUrl:"10337-matt-braunger", ExcludeFromList:false, SortOrder:9, events:[], mc_events:[]}, {Name:"Brendon Small", Bio:"<p>Brendon Small is most known for creating, writing, acting and making the music for both adult swim’s \"Metalocalypse\" and \"Home Movies.\" After graduating Berklee College of Music Small began working in the alt Boston comedy clubs which led him to pitching and developing TV shows where he would hire himself to make the music. After 5 records (three of which hold the title for highest charting Death Metal album of all time) he has returned to his stand up roots. Baked is the perfect combination of his love for stand up and music.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/brendon_small.jpg", PerformerId:"10342", Twitter:"_Brendonsmall", Website:"http://www.brendonsmall.com/", Position:"10", id:"10342", pageUrl:"10342-brendon-small", ExcludeFromList:false, SortOrder:10, events:[], mc_events:[]}, {Name:"Jackie Kashian", Bio:"<p>Jackie Kashian's comedy is like listening to a really racy episode of All Things Considered. She is a national touring comic with a new hour standup special \"This Will Make an Excellent Horcrux.\" It is available digitally or on CD or DVD. It's also available for $5 download on<a href=\"http://www.allthingsrecords.com\">www.allthingsrecords.com</a>. She recently made her late night comedy debut on the Conan O'Brien show, has her own half hour special on Comedy Central, was a semi-finalist on Last Comic Standing and has recorded This American Life with Ira Glass for NPR. She has a weekly Podcast where she interviews people about their obsessions. Tune into The Dork Forest on iTunes or at her website:<a href=\"http://www.dorkforest.com\">www.dorkforest.com</a></p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jackie.jpg", PerformerId:"10297", Twitter:"", Website:"", Position:"11", id:"10297", pageUrl:"10297-jackie-kashian", ExcludeFromList:false, SortOrder:11, events:[], mc_events:[]}, {Name:"Tone Bell", Bio:"<p>Tone Bell is best known for starring in the NBC multi-camera comedy \"Whitney\" as RJ, Alex's (Chris D'Elia) old high school friend who has moved back to Chicago to bartend after a recent divorce. Born and raised in Atlanta, the stand-up comedian began his career in Dallas, where he was voted one of the Funniest Comics in Texas. Bell's real-life brand of comedy has seen him succeed on both the comedy festival circuit as well as previously on NBC as the winner of the Stand Up For Diversity program. Tone recently was a guest on The Late Late Show with Craig Ferguson and was also featured on the Spike TV special \"Eddie Murphy: One Night Only\" and E!’s “Love You Mean It”.  He currently tours around the country performing at colleges and clubs. Tone recently starred in a single-camera comedy pilot for Fox, has also appeared on Comedy Central’s “Key and Peele,” and hosted MTV's \"Jerks with Cameras.\"  Tone can next be seen starring in the new NBC comedy pilot \"Bad Judge,\" which was recently picked up to series.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/tone_bell-3445.jpg", PerformerId:"10287", Twitter:"toneBell", Website:"http://www.tonebell.com", Position:"12", id:"10287", pageUrl:"10287-tone-bell", ExcludeFromList:false, SortOrder:12, events:[], mc_events:[]}, {Name:"Michelle Buteau", Bio:"<p>Michelle can be seen every weekday morning as co-host of VH1’s Big Morning Buzz along with Nick Lachey. Previously she had a recurring role on the Fox sitcom Enlisted and was a series regular on VH1’s Best Week Ever. Her other  television appearances include the The Late Late Show with Craig Ferguson, Lopez Tonight, @midnight, Key and Peele, Totally Biased with W. Kamau Bell, Gotham Comedy Live and Last Comic Standing. As a comedian, she has toured the country performing at colleges, clubs and comedy festivals.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/michelle_buteau.jpg", PerformerId:"9423", Twitter:"michellebuteau", Website:"http://www.michellebuteau.com/", Position:"13", id:"9423", pageUrl:"9423-michelle-buteau", ExcludeFromList:false, SortOrder:13, events:[], mc_events:[]}, {Name:"Kyle Kinane", Bio:"<p>Kyle Kinane is a comedian seen on Comedy Central and Conan, as well as peddling<br />\nhis wares in lands near and far. His mother is finally accepting his life choice. Also,<br />\nfarts.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kyle_kinane_photo_bw.jpg", PerformerId:"10313", Twitter:"kylekinane", Website:"", Position:"14", id:"10313", pageUrl:"10313-kyle-kinane", ExcludeFromList:false, SortOrder:14, events:[], mc_events:[]}, {Name:"Moshe Kasher", Bio:"<p>Moshe Kasher. Comedian. Child Genius. Jew. Jew Comedian. OBGYN. Pleasure center. Good tipper. Guiding light. Beefcake.</p>\n<p>He lives alone in LA.</p>\n<p>Featured on: NBC, E!’s Chelsea Lately, Late Night with Jimmy Fallon, Comedy Central’s Drunk History, @midnight, Conan, Carson Daly, Showtime’s Shameless, MTV &amp; more…</p>\n<p>Currently the Co-host of The Champs podcast and the author of the acclaimed memoir Kasher In The Rye on Grand Central Publishing. Selected as one of Variety Magazine’s “Ten Comics to Watch”, LA Times’ “Faces to Watch”, and iTunes’ “Comic of the Year”.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/moshe.jpeg", PerformerId:"10292", Twitter:"", Website:"", Position:"15", id:"10292", pageUrl:"10292-moshe-kasher", ExcludeFromList:false, SortOrder:15, events:[], mc_events:[]}, {Name:"Michael Kosta", Bio:"<p>Michael Kosta is a stand-up comedian who was most recently seen on Fox Sports 1’s flagship series, Crowd Goes Wild.  Kosta and Regis Philbin lead a panel of sports experts in a lighthearted look at the daily happenings in the world of sports. Kosta started out as an athlete; he is quick to point out that he was once-ranked number 864 in the world in professional tennis and earned over $11,000 on tour.  Don&#039;t laugh, that&#039;s $11,000 more than you made as a pro athlete.</p>\n<p>He will next be seen on E!’s The Comments Section, executive produced by Joel McHale and K.P. Anderson (The Soup). The show will focus on deconstructing the often snarky comments on popular websites. </p>\n<p>Kosta gained attention as a comedian when he broke out of the HBO Comedy and Arts Festival in Aspen.  He quickly relocated to Los Angeles where he began his television career; he made regular appearances on The Tonight Show with Jay Leno &amp; Chelsea Lately before both those hosts drowned in their money and ended their shows.  He has performed on Conan, @Midnight, the Just for Laughs Festival in Montreal and also starred in his own comedy special, Comedy Central Presents: Michael Kosta.  As a host, Michael acted as a know-it-all correspondent for E!’s spinoff of The Soup, entitled The Soup Investigates, and was recently seen guest hosting the hit G4 series, Attack of The Show; that stint ended after Kosta caused the show as well as the network to be cancelled (the media says that the network was being reformatted, but we know better).</p>\n<p>His other TV credits include TruTV’s The Smoking Gun Presents, Showtime’s Live Nude Comedy and Michael also hosted the 63rd Annual Emmy Awards’ Backstage Live show.<br />\nKosta has also shot pilots with MTV, NBC, E! and developed a late night talk show with Comedy Central and recently developed his own scripted pilot based on his life, produced by Fox. All of those projects were colossal failures.</p>\n<p>In the sports world, Kosta hosted Fox Sports Network’s CCHA All Access, a hockey show in Detroit, for which he won two “Michigan Emmys” as performer/host. Those are like regular Emmys, but smaller and a lot less prestigious.  He is also the author of a book titled “101 Tips for Winning More Tennis Matches” which earns him quarterly royalty checks of around $110.</p>\n<p>Michael lives in Los Angeles where he hopes to someday become famous and forget the little people.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/michael_kosta_-_headshot_0.jpg", PerformerId:"9755", Twitter:"michaelkosta", Website:"http://www.michaelkosta.com/", Position:"16", id:"9755", pageUrl:"9755-michael-kosta", ExcludeFromList:false, SortOrder:16, events:[], mc_events:[]}, {Name:"Kate Berlant", Bio:"<p>Kate Berlant is a writer, actor, and stand-up who recently was profiled by The New York Times as a “magnetic improvisational comic” at the forefront of experimental comedy.  Kate was named a New Face at the 2014 Montreal Comedy Festival and was one of Comedy Central&#039;s Top Ten Comics to Watch in 2013. She has performed in festivals such as the New York Comedy Festival, Bridgetown Comedy Festival, Moontower, San Francisco Sketchfest, and the Eugene Mirman Comedy Festival. She was recently named by Splitsider as one of the Top 10 Up-And-Coming Comedians and was named by Time Out New York as one of the &quot;Three Comics to Watch&quot; in 2012.  Kate was commissioned by The Museum of Contemporary Art, Los Angeles to create material for their online channel and just wrapped a pilot for Comedy Central and TruTV. Kate recently wrapped an international tour opening for musician Father John Misty and a national tour with musician Lo Fang.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kate_berlant.jpeg", PerformerId:"9446", Twitter:"kateberlant", Website:"http://kateberlant.tumblr.com/", Position:"17", id:"9446", pageUrl:"9446-kate-berlant", ExcludeFromList:false, SortOrder:17, events:[], mc_events:[]}, {Name:"Ian Karmel", Bio:"<p>Ian Karmel is a homegrown Portland comedian whose style zig-zags between the eclectic and the universal. Ian is currently a writer on CBS’ The Late Late Show with James Corden, previously he was writer and roundtable regular on E!’s Chelsea Lately. In 2014, Karmel made his late night TV debut on TBS' Conan and was featured on Comedy Central’s Adam Devine’s House Party Season 2. In 2013, Ian was invited to the prestigious Just for Laughs Festival in Montreal, where he was a breakout stand up in the New Faces category. Ian’s other television credits include IFC’s Portlandia and the Travel Channel’s Best Sandwich in America, as well as a post-game analyst and commentator for the Portland Trailblazers. </p>\n<p>His debut album is set to release in 2015 from Portland based label Kill Rock Stars. Ian’s unique perspective helped him win the 2011 Funniest Person in Portland and has given him the opportunity to headline at various venues and festivals throughout America including the Bridgetown Comedy Festival and Moontower Comedy Festival in Austin. His training includes The Groundlings and the Upright Citizens Brigade and he is a regular contributor for the Portland Mercury in which is he currently writes the highly anticipated weekly column “Everything as F*ck”. He currently lives in Los Angeles.</p>\n<p>(photo credit Nicole Clemetson)</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/ian_karmel_credit_nicolle_clemetson_3.jpg", PerformerId:"10315", Twitter:"iankarmel", Website:"http://iankarmel.com/", Position:"18", id:"10315", pageUrl:"10315-ian-karmel", ExcludeFromList:false, SortOrder:18, events:[], mc_events:[]}, {Name:"Beth Stelling", Bio:"<p>Beth Stelling had her network TV debut on Conan, appeared several times on Chelsea Lately&#039;s round table, won the internet on Comedy Central&#039;s @midnight with Chris Hardwick and performed on The Pete Holmes Show on TBS. Her debut album, Sweet Beth, has been named to countless top 10 lists.</p>\n<p>LA Weekly named Stelling no. 2 on a list of “12 L.A. Comedy Acts to Watch in 2013.” Patton Oswalt listed Beth as one of his favorite up-and-coming comics during his AMA on Reddit. Buzzfeed.com says she’s one of “14 Comedians Who You Should Be Paying Attention To.” </p>\n<p>Beth was a New Face of Comedy at the Just for Laughs Comedy Festival in Montreal and returned to the festival last summer to record HBO Canada’s &quot;Funny As Hell&quot; with Jon Dore.</p>\n<p>Beth was deemed one of the “Top 18 Women You Should Be Following On Twitter” by Huffington Post. Nerdist.com has been a big supporter of Beth, including her in their “Four Funny Female Comedians You Need to Know” alongside Shelby Fero, Tig Notaro and Ali Wong. Beth can be heard on Chris Hardwick’s annual podcast &quot;Stand-up Cluster 2013&quot; and with Pete Holmes on his podcast “You Made It Weird” #134.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mjp-9772.jpg", PerformerId:"9445", Twitter:"Bethstelling", Website:"http://www.beth-stelling.squarespace.com/", Position:"19", id:"9445", pageUrl:"9445-beth-stelling", ExcludeFromList:false, SortOrder:19, events:[], mc_events:[]}, {Name:"Baron Vaughn", Bio:"<p>BARON VAUGHN has a comedy recording, Raised By Cable, produced by AST Records, available at Amazon (mp3 and CD), and iTunes. Baron’s performed stand-up on Conan (twice), Late Night with Jimmy Fallon, and has had numerous appearances on Comedy Central most recently in the form of his own \"Half Hour\" comedy special. He’s performed in the HBO U.S. Comedy Arts Festival (Aspen), The Just for Laughs Comedy Festival (Montreal), The South Beach Comedy Festival (Miami), Moontower Comedy Festival (Austin), San Francisco Sketchfest, Bridgetown Comedy Festival (Portland), Vancouver Comedy Festival, All Points West Music Festival (New Jersey), FYF Music Festival (Los Angeles), Bonnaroo Music and Arts Festival (TN), and Bumbershoot Music and Arts Festival (Seattle). He has also appeared in many shows on VH1, MTV, FUSE as well as the films Black Dynamite, Cloverfield, The Other Guys (Deleted Scenes), and was a series regular on USA's \"Fairly Legal.\" Catch him on the upcoming Netflix Original Series \"Grace and Frankie\" starting in May 2015.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/baron_6th_grade_and_11_yrs._old.jpg", PerformerId:"10233", Twitter:"barvonblaq", Website:"http://baronvaughn.com", Position:"20", id:"10233", pageUrl:"10233-baron-vaughn", ExcludeFromList:false, SortOrder:20, events:[], mc_events:[]}, {Name:"Kira Soltanovich", Bio:"<p>Kira Soltanovich grew up in San Francisco during a time when there were bad neighborhoods, cheap coffee and it wasn’t ironic to ride the cable cars. She began her career in comedy back in 1998 right after asking her immigrant Russian parents if they were supportive of her desire to become a stand up comedian. After her mother and father confessed “It’s not like you’re smart enough to be a doctor,” Kira took that as their blessing to pursue her dreams and she’s never looked back.<br />\n <br />\nShe was a series regular on the hidden camera show Girls Behaving Badly for 4 seasons, and was a correspondent on The Tonight Show with Jay Leno for over 8 years.<br />\n <br />\nKira has appeared on Jimmy Kimmel Live, Last Call with Carson Daly, Hell’s Kitchen, Last Comic Standing, Set List TV, Nick Mom, Hello Ross! and The World Stands Up. She has written and performed with Joan Rivers, Scott Baio, Selena Gomez and Justin Bieber. And if that doesn’t impress you, I don’t know what will.</p>\n<p>She’s been a writer on How’d You Get So Rich? for TV Land, Raising Whitley on Oxygen and Prankstars on Disney.  Currently Kira is a Series Regular on How To Be A Grownup for TruTV.<br />\n <br />\nHer half hour Showtime special, Here Comes Trouble, won Best Stand Up Special by a Soviet.*<br />\n <br />\nKira’s four year old son inspired her to have her very own podcast. On The Kira Soltanovich Show, Kira interviews other fellow comedians who have kids and they discuss all things comedy and colic related.</p>\n<p>*There is no such award.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kira_soltanovich_headshot_0.jpg", PerformerId:"9919", Twitter:"kiracomedy", Website:"http://www.kiracomedy.com", Position:"21", id:"9919", pageUrl:"9919-kira-soltanovich", ExcludeFromList:false, SortOrder:21, events:[], mc_events:[]}, {Name:"Guy Branum", Bio:"<p>Guy Branum is a stand-up comedian, actor and writer. He has guest starred on NBC&#039;s &quot;Partners&quot; and he was an original staff writer and panelist for Chelsea Lately, and toured with the Comedians of Chelsea Lately. He has also appeared in supporting roles in the feature films &quot;Seeking a Friend for the End of the World&quot; and &quot;No Strings Attached&quot; and has appeared on E!, MTV, G4, and Current TV. Most recently, Guy served as  a staff writer and correspondent on FX&#039;s and then FXX&#039;s &quot;Totally Biased with W Kamau Bell&quot; and appeared on NBC&#039;s &quot;Last Comic Standing&quot;. He also just wrote for several pilots, including Comedy Central&#039;s &quot;Another Period&quot; and LOGO&#039;s &quot;Straight Out&quot;.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/guy_branum_headshot.jpg", PerformerId:"10210", Twitter:"guybranum", Website:"http://www.guybranum.com/", Position:"22", id:"10210", pageUrl:"10210-guy-branum", ExcludeFromList:false, SortOrder:22, events:[], mc_events:[]}, {Name:"Dave Hill", Bio:"<p>Dave Hill is a writer, performer, musician, actor, comedian, artist, and thinking man originally from Cleveland, Ohio but now living in New York.</p>\n<p>Dave can be seen electrifying clubs and festivals around the world and is the host of a live chat/variety show called &quot;The Dave Hill Explosion.&quot; A unique and original funny man all his own, Dave was named one of the<br />\n“10 Comics to Watch” in 2007 by Variety Magazine.</p>\n<p>You may recognize Dave from Fuse TV’s &quot;Hoppus on Music,&quot; Court TV’s comedy news show &quot;Smoking Gun TV,&quot; MOJO Network’s &quot;King of Miami,&quot; which is now airing in the United Kingdom on the Film24 channel, or perhaps you’ve seen him as a frequent on-air correspondent on HBO and Cinemax. Dave has also made multiple appearances on other TV networks, including MTV, Comedy Central, VH1, Adult Swim, Sundance Channel, TLC, Current TV, and Spike TV.</p>\n<p>Dave has written for media outlets such as the New York Times, Salon, Blender, the Huffington Post, FHM UK, the New York Daily News, XXL, Guitar World, Guitar Player, the Cleveland Plain Dealer, HBO, VH1, Spike TV, The Learning Channel, and Court TV. Additionally, Dave is a contributor to the popular public radio program This American Life and his first book, &quot;Tasteful Nudes&quot; was released through St. Martin’s Press in May of 2012.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/davehill.jpg", PerformerId:"9167", Twitter:"mrdavehill", Website:"http://davehillonline.com/", Position:"23", id:"9167", pageUrl:"9167-dave-hill", ExcludeFromList:false, SortOrder:23, events:[], mc_events:[]}, {Name:"Chris Fairbanks", Bio:"<p>Chris Fairbanks’ album, “Fairbanks!” was named one of Amazon &amp; Amazon MP3s Top Ten of 2010. Fast paced, quirky, and constantly improvising his act, Chris Fairbanks delivers a truly unique self-observational style.</p>\n<p>“He’s a master of controlled nervousness, almost jazz-like spontaneous prose, so free-flowing yet forward-moving it makes one wonder whether this is brilliant scripting or just damned good improv.” –Laughspin.</p>\n<p>Chris has been seen on Conan, Jimmy Kimmel, VH1, Last Comic Standing, and Comedy Central.</p>\n<p>He’s a master of a nervous, almost jazz-like spontaneous prose, so free-flowing yet forward-moving it makes one wonder whether this is brilliant scripting or just damned good improv. -Laughspin</p>\n<p>…not to say he doesn’t deliver some hilarious jokes, it’s rather the real meat of his comedy comes more from something else: seemingly stream of consciousness comedic rambling. -Punchline Magazine</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/fairbanks.jpg", PerformerId:"10350", Twitter:"", Website:"http://chrisfairbanks.com/", Position:"24", id:"10350", pageUrl:"10350-chris-fairbanks", ExcludeFromList:false, SortOrder:24, events:[], mc_events:[]}, {Name:"Phoebe Robinson", Bio:"<p>Phoebe Robinson is a stand-up comedian, writer, and actor who both TimeOut NY and Flavorpill.com have named one of the top ten comics working in NYC. Most recently, she appeared on NBC’s Late Night with Seth Meyers, Comedy Central’s Broad City, NBC’s Last Comic Standing and the Today show, and is a writer on MTV’s hit talking head show Girl Code.</p>\n<p>When not working on television, Ms. Robinson is a writer for Glamour.com and contributes to The New York Times, bitch magazine, xoJane.com, VH1.com, Refinery 29.com, Decider.com, VanityFair.com, and TheDailyBeast.com. Her blog Blaria (aka Black Daria), which is rapidly approaching 150,000 views, has been featured on The Huffington Post, and has launched a podcast as well as a monthly stand-up show at Union Hall that she co-hosts with The Daily Show’s Jessica Williams. It has consistently sold out since its inception nearly a year ago.</p>\n<p>She recently just finished opening for The Daily Show’s Wyatt Cenac and Broad City on their comedy tours and is currently a staff writer on Fuse’s upcoming daily late night pop culture talk show.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/phoebe_robinson_closeup_headshot_5.9.11_small.jpg", PerformerId:"10043", Twitter:"PRobinsonComedy", Website:"http://blaria.com", Position:"25", id:"10043", pageUrl:"10043-phoebe-robinson", ExcludeFromList:false, SortOrder:25, events:[], mc_events:[]}, {Name:"Ron Lynch", Bio:"<p>RON LYNCH is considered one of the forefathers of alternative comedy. Ron was part of the Boston comedy scene that spawned such comics as Steven Wright, Paula Poundstone, Bobcat Goldthwait, Marc Maron, and others featured with him in the documentary, &quot;When Comedy Was King.&quot; Ron studied theater in New York and improvisation at Second City Chicago. Presently, he is the host/producer of the popular &quot;Tomorrow!&quot; variety show, now in its tenth year, which occurs every Saturday at midnight in Los Angeles. His act is a blend of characters, improvisation, sounds, and other stuff. His credits include The Sarah Silverman Program (he played all the doctors), Conan, Andy Richter Controls the Universe, and several sitcoms. His voice can be heard on Bob&#039;s Burgers, Adventure Time, Dr. Katz, Tim and Eric, and the cult favorite, Home Movies, where he was Mr. Lynch. Movie credits include &quot;Smashed,&quot; &quot;Murder in the First,&quot; several independents, and many short movies, including a few produced with Louie CK. He plays drums in two bands, both mostly comics, still hasn&#039;t done his taxes, and performed at the Edinburgh Fringe Festival in Scotland this last August!</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/rojoly.jpg", PerformerId:"9691", Twitter:"ronlynch1", Website:"https://www.facebook.com/ron.lynch1", Position:"26", id:"9691", pageUrl:"9691-ron-lynch", ExcludeFromList:false, SortOrder:26, events:[], mc_events:[]}, {Name:"Steve Agee", Bio:"<p>Steve is best known for playing Steve Myron on Comedy Central’s \"The Sarah Silverman Program\" and Outside Dave on Fox’s \"New Girl.\" Prior to that, Steve was a writer for ABC’s \"Jimmy Kimmel Live\" and MTV’s \"The Andy Milonakis Show.\" More recently, Steve has made appearances on \"Community,\" \"2 Broke Girls,\" \"Happy Endings,\" \"Childrens Hospital,\" and done voice over for \"Bob’s Burgers,\" \"Adventure Time\" and \"The Cleveland Show.\"</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/agee.jpg", PerformerId:"10346", Twitter:"steveagee", Website:"http://steveagee.tumblr.com/", Position:"27", id:"10346", pageUrl:"10346-steve-agee", ExcludeFromList:false, SortOrder:27, events:[], mc_events:[]}, {Name:"Jay Larson", Bio:"<p>With appearances on TOSH.0, The Late Late show, The Smoking Gun Presents, Conan and his own half hour special on Comedy Central, Jay Larson has come a long way since he moved to Los Angeles in 2000.  After flunking out of college, then finally getting accepted back after many attempts, Jay threw away his diploma to pursue a career in standup comedy.</p>\n<p>After living in a condemned house for 14 months, I mean who hasn’t, Jay started opening for comedy greats such as Nick Swardson, Daniel Tosh and Pablo Fransisco. He soon became known as a comedian with a wacky, original voice who tends to get a little weird. Since those early days Jay has continued climbing the ranks with multiple TV appearances, many internet short films and his first album, “Self-Diagnosed,” available on iTunes. His voice continues to grow as he has delved into the world of interacting with strangers and creating conflict with people he doesn’t know. Jay is a fantastic storyteller, showcased weekly on The Crabfeast Podcast with co-host Ryan Sickler. With TV projects in development, be sure to catch Jay now before he ignores everyone…forever…seriously…he will.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jaylarson.jpg", PerformerId:"10316", Twitter:"jaylarsoncomedy", Website:"http://www.jaylarsoncomedy.com/", Position:"28", id:"10316", pageUrl:"10316-jay-larson", ExcludeFromList:false, SortOrder:28, events:[], mc_events:[]}, {Name:"Ryan Sickler", Bio:"<p>If the adage is true — that tragedy plus time equals comedy — then Ryan Sickler has paid his dues on the left side of the equation.  Born in Baltimore, Ryan lost his father when he was 16. After that, he bounced from one relative to another. And while his early years might have seemed rocky, that tumultuous childhood gave him both fodder for material and armor against the relentless onslaught that is life as a standup comic.</p>\n<p>His television appearances include Ovation&#039;s The Art of Comedy, TBS’s The Pete Holmes Show, Comedy Central’s Tosh.O, Live At Gotham and Cutman and CBS’s The Late Late Show.  Ryan is also an informed sports fan and appeared as a regular on Fox Sports.</p>\n<p>Beyond standup, Ryan Sickler is an engaging storyteller.  You can catch him every Tuesday on his podcast, The CrabFeast.  Inspired by his hometown, the show celebrates the things Ryan loves most — storytelling, family, friends and comedy.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/super_serious_headshot_bw.png", PerformerId:"9640", Twitter:"ryansickler", Website:"http://ryansickler.com", Position:"29", id:"9640", pageUrl:"9640-ryan-sickler", ExcludeFromList:false, SortOrder:29, events:[], mc_events:[]}, {Name:"Jacqueline Novak", Bio:"<p>Jacqueline Novak is a NYC-based stand up comedian and writer. Her debut stand-up album QUALITY NOTIONS, the culmination of ten years of stand-up, debuted at #2 on iTunes comedy in 2014. Her humorous guide to depression, , HOW TO WEEP IN PUBLIC, a mix of memoir and advice for living a depression-rich life comes out in 2016 from Crown Books. &quot;One of the funniest and most original young comic voices in New ￼York&quot; - Michael Showalter. “Jacqueline Novak&#039;s unapologetic and original comedy is the kind that gives me hope in this ￼business.” -Amy Shumer</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/novak-jacqueline.jpeg", PerformerId:"9739", Twitter:"jacquelinenovak", Website:"http://www.jokesnovak.com", Position:"30", id:"9739", pageUrl:"9739-jacqueline-novak", ExcludeFromList:false, SortOrder:30, events:[], mc_events:[]}, {Name:"Joe Zimmerman", Bio:"<p>In 2013 Joe Zimmerman made his television debut on Comedy Central&#039;s John Oliver&#039;s New York Stand Up Show, and since then has appeared on The Late Late Show with Craig Ferguson, Season 8 of Last Comic Standing, Nickelodeon, and recorded a Half Hour Special with Comedy Central. He was also chosen as one of the acclaimed New Faces at Just For Laughs Montreal, where he was positively reviewed by the The Spit Take and Time Out NY. In 2014, he recorded his debut solo album, Smiling at Wolves, and Buzzfeed named him one of the comedians you should be paying attention to, saying, &quot;The combination of Joe&#039;s calming vocalization and inventive writing is a thing of magic,&quot; and &quot;You&#039;d be hard pressed to find a more enjoyable show.&quot;</p>\n<p>Praised for an accessible style pairing absurdism with a wide-eyed, aw-shucks demeanor, Joe is an original member of the Beards of Comedy, who toured from 2008-2012 and released two albums (2011&#039;s Cardio Mix with Comedy Central Records &amp; 2009&#039;s Comedy For People with Rooftop Records).</p>\n<p>Currently Joe is touring the country working on his new hour, and has a comedy-science podcast called Universe City with new episodes every Tuesday. Joe grew up in West Virginia and started comedy in North Carolina shortly after graduating from Davidson College. He now lives in New York City where he hosts a weekly Wednesday show in Brooklyn called Hot Crowd.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/joezstageoliver.jpg", PerformerId:"10044", Twitter:"joezimmerman", Website:"http://www.zimmermancomedy.com/", Position:"31", id:"10044", pageUrl:"10044-joe-zimmerman", ExcludeFromList:false, SortOrder:31, events:[], mc_events:[]}, {Name:"Matt McCarthy", Bio:"<p>Matt McCarthy is a comedian, writer, improviser and actor living in<br />\nLos Angeles, best known for appearances on The Pete Holmes Show,<br />\nCollegeHumor.com and as host of the We Watch Wrestling Podcast, he has<br />\nappeared on Louie, Curb Your Enthusiasm, Bored to Death, Just For<br />\nLaughs New Faces, John Oliver&#039;s NY Stand-Up and the Adam McKay film<br />\nThe Other Guys.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/786928-54.jpg", PerformerId:"10119", Twitter:"mccarthyredhead", Website:"http://en.wikipedia.org/wiki/Matt_McCarthy_%28comedian%29", Position:"32", id:"10119", pageUrl:"10119-matt-mccarthy", ExcludeFromList:false, SortOrder:32, events:[], mc_events:[]}, {Name:"Matt Peters", Bio:"<p>Best known for his HILARIOUS role on Netflix&#039;s ORANGE IS THE NEW BLACK!  He plays Joel Luschek.  Season 3 just wrapped and will be premiering in Spring/Summer 2015. </p>\n<p>Matt Peters is a Los Angeles based comedian, actor and writer. As an actor, Peters has been seen on Showtime&#039;s WEEDS, G4TV&#039;s Attack of the Show, and elsewhere. Most notably, he has a recurring role on the well-received Netflix series, Orange is the New Black. Additionally, he hosts the popular bi-weekly comedy show, BLAM! BLAM! BLAM! that takes place at the infamous R Bar in Los Angeles.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/matt_peters_0.jpg", PerformerId:"9545", Twitter:"mattpeters", Website:"", Position:"33", id:"9545", pageUrl:"9545-matt-peters", ExcludeFromList:false, SortOrder:33, events:[], mc_events:[]}, {Name:"David Angelo", Bio:"<p>David Angelo is an Emmy-nominated comedian who has written for shows on FOX, NBC, Discovery, E!, Oxygen, and Syfy. He has appeared on &quot;2 Broke Girls,&quot; &quot;Red Eye,&quot; and is currently developing a web series with Comedy Central in which he will also star. On his own, David produces a popular web show called &quot;eEconomics&quot; that blends comedy with finance.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/david_angelo_-_press_photo.jpg", PerformerId:"9687", Twitter:"mrdavidangelo", Website:"http://davidangelo.info", Position:"34", id:"9687", pageUrl:"9687-david-angelo", ExcludeFromList:false, SortOrder:34, events:[], mc_events:[]}, {Name:"Gary Vider", Bio:"<p>Gary Vider is a NY based comedian who recently made his late night debut on Conan. He has also been named a “Comic to Watch” by Esquire and was the winner of the 2014 Carolines on Broadway March Madness competition where he beat out 63 of the best young comedians. He placed 2nd in the 2012 Laughing Skull Comedy Festival in Atlanta, Georgia. Gary has had material published in the NY Times and Time Out NY. He can be regularly seen at Carolines on Broadway, Comedy Strip Live, and many other top NYC clubs. He has hosted and presented top comics from VH1, Comedy Central, and Conan.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/gary_vider_hs.jpg", PerformerId:"9881", Twitter:"GaryVider", Website:"http://www.garyvider.com/", Position:"35", id:"9881", pageUrl:"9881-gary-vider", ExcludeFromList:false, SortOrder:35, events:[], mc_events:[]}, {Name:"Chad Daniels", Bio:"<p>This is more of an AutoBio than a Bio. The truth is most comedians write their own bios. I’m not judging. It’s a lot easier to brag about one’s own accomplishments while hiding behind third person. They are very well written. It seems comedians either 1. Have a Masters in English, or 2. A Thesaurus, and a lot of free time. I have neither.</p>\n<p>The truth is I’d rather you come see me to check it out for yourself. To get you to the club I’ll tell you this:</p>\n<p>2004\tJust for Laughs Comedy Festival New Faces\tMontreal<br />\n2004\tLate Late Show with Craig Kilborn\tCBS<br />\n2006\tLive at Gotham\tComedy Central<br />\n2007\tComedy Central Presents Chad Daniels\tComedy Central<br />\n2009\tAspen Comedy Festival winner &quot;Comics Comic&quot;\tAspen, CO<br />\n2009\tTonight Show with Conan O&#039;Brien\tNBC<br />\n2010\tJust for Laughs Comedy Festival Masters Showcase\tMontreal<br />\n2012\tGilda&#039;s Laughfest Comedy Competition 1st Place\tGrand Rapids<br />\n2012\tLate Late Show with Craig Ferguson\tCBS<br />\n2012\tConan O&#039;Brien Show\tTBS<br />\n2014        @midnight  Comedy Central</p>\n<p>I’m funny. If you’re still not willing to come to a show you’re just being difficult.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/screen_shot_2014-02-10_at_11.24.36_pm.png", PerformerId:"9676", Twitter:"", Website:"http://www.chaddaniels.com", Position:"36", id:"9676", pageUrl:"9676-chad-daniels", ExcludeFromList:false, SortOrder:36, events:[], mc_events:[]}, {Name:"Mike Vecchione", Bio:"<p>Mike Vecchione is a comedian based in New York City. He has appeared on Comedy Centrals Live at Gotham, Comedy Centrals Fresh Face Debates, and Russell Simmons Presents: Stand Up at the El Rey Theatre. Mike also had a guest appearance on the IFC hit show Z Rock. In 2010, he won the People’s Choice Award for the New York Comedy Festival, was a semi-finalist on NBC’s Last Comic Standing, and was selected to perform at the prestigious Montreal Comedy Festival (New Faces). Mike then went on to perform on the Tonight Show starring Jay Leno and shot his own Half Hour Special for Comedy Central.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mike_vecchione_hs.jpg", PerformerId:"9258", Twitter:"comicmikev", Website:"http://mikevecchione.com/", Position:"37", id:"9258", pageUrl:"9258-mike-vecchione", ExcludeFromList:false, SortOrder:37, events:[], mc_events:[]}, {Name:"Curtis Cook", Bio:"<p>Curtis Cook is a comic from Cleveland, Ohio now living in Portland, Oregon. He has performed in venues and festivals throughout the country, including the Cleveland Comedy Festival, the Chicago Comedy Exposition, the Big Sky Comedy Festival, and San Francisco’s Sketchfest.</p>\n<p>In addition to performing, Curtis is among the co-hosts of Earthquake Hurricane – a weekly comedy showcase described as one of the best in Portland – and co-hosts a semi-kinda-biweekly podcast titled Black By Popular Demand. He is also a contributing writer for Laugh Staff, and presently holds an undisputed record for 2014’s highest number of consecutive tweets about the 4 Non Blondes.</p>\n<p>The Portland Mercury described his comedy as “sleepy, slam poetry,” and the Willamette Week listed him among 2014&#039;s funniest five comics in PDX.</p>\n<p>He can be followed on twitter at @Curtis_Cook.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_-_curtis_cook.jpg", PerformerId:"9990", Twitter:"Curtis_Cook", Website:"http://www.curtiscookcomedy.com", Position:"38", id:"9990", pageUrl:"9990-curtis-cook", ExcludeFromList:false, SortOrder:38, events:[], mc_events:[]}, {Name:"Drennon Davis", Bio:"<p>From his elaborate characters and sketches, to his provocative songs and animation, Drennon Davis has made a name for himself as one of the most innovative minds in today’s comedy scene. His live performances of the festival favorite, The Imaginary Radio Program, combine live music and beat-boxing with one-man sketches into a show that the Los Angeles Comedy Bureau writes, &quot;Not only lives up to its name, but exceeds expectation in what you could possibly think it is.&quot;</p>\n<p>He was recently featured on Comedy Central&#039;s new show &quot;Adam Devine&#039;s House Party&quot; and his new animated show &quot;The Long Legs&quot; can be seen on MTV&#039;s rebirth of Liquid Television.  He was recently featured in LA Weekly&#039;s &quot;Top 10 Comedy Acts to Watch in 2014.&quot;</p>\n<p><a href=\"https://www.youtube.com/watch?v=pXUDycy5MnM\">https://www.youtube.com/watch?v=pXUDycy5MnM</a></p>\n<p>Some love for Imaginary Radio Program:</p>\n<p>“If you venture into this awkward yet ultimately rewarding late-night show, you may well come out of it thinking that Drennon Davis is a bit of a genius.”<br />\n- The Times (UK)</p>\n<p>“Tune in, for a show that&#039;s high on concept and adept in execution.”<br />\n- The Guardian </p>\n<p>“If Davis isn’t the world’s foremost radio impressionist he’s definitely tuned somewhere near the top… The Imaginary RadioProgram may just be the most inspiring show about what you can create when your entire world revolves around radio, and not just your genitals.”<br />\n– Fest Magazine</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/drennon_radio.png", PerformerId:"9763", Twitter:"drennondavis", Website:"http://www.drennondavis.com", Position:"39", id:"9763", pageUrl:"9763-drennon-davis", ExcludeFromList:false, SortOrder:39, events:[], mc_events:[]}, {Name:"Allen Strickland Williams", Bio:"<p>I was born in Texas, grew up in Florida and went to college in New York. Now I live in Los Angeles writing and telling one-liners. I made my late-night television debut performing stand-up on CONAN this past Fall. I’ve performed at the Hollywood Improv, The Comedy Store, Denver’s Comedy Works and The Punchline in San Francisco. One time, I got a standing ovation for telling a single joke. I’m featured on the Holy Fuck. live comedy album. Buy it. It’s great. I’ve traveled to perform at Fest in Florida, Comedy Carnivale in Salt Lake City and Hell Yes Fest! in New Orleans. I’ve also been on the RIOT Festival in Los Angeles. I am one-fourth of the sketch group WOMEN, which has been featured on Tosh.0 and at the top of L.A. Weekly’s 10 L.A. Comedy Acts to Watch in 2014. I feel compelled to end this bio on a joke, but I won’t.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/asw_suit_of_headshots.jpg", PerformerId:"9093", Twitter:"totallyallen", Website:"http://www.allenstricklandwilliams.com/", Position:"40", id:"9093", pageUrl:"9093-allen-strickland-williams", ExcludeFromList:false, SortOrder:40, events:[], mc_events:[]}, {Name:"Laura House", Bio:"<p>Laura House is a comic and writer who first hit showbiz starring as herself on Mtv’s first fully-scripted sit-com, Austin Stories. This brought her from Texas to Hollywood where she played a hillbilly slut opposite Natalie Portman in the film Where the Heart is and stretched her acting chops as a planet of burping robots on Futurama. As a stand-up, she stood out in HBO’s Aspen Comedy Festival and had her network comic premiere in their Best of the Fest, which led to spots on Comedy Central, HBO, and NBC. She has written on shows including Blue Collar TV, the George Lopez Show, the Emmy-winning Samantha Who? and most recently the hit CBS show Mom. She’s had several shows in development including SuperMom at ABC with Barry Sonnenfeld, and LifeBlowz at Fx with Katey Sagal. She’s an LA favorite at stand-up and storytelling shows, teaches meditation and is a certified raw food chef who refuses to stop eating chocolate cake.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/l_house.jpg", PerformerId:"9505", Twitter:"imlaurahouse", Website:"http://laurahouse.com", Position:"41", id:"9505", pageUrl:"9505-laura-house", ExcludeFromList:false, SortOrder:41, events:[], mc_events:[]}, {Name:"Arden Myrin", Bio:"<p>Arden Myrin is an actress, writer and comedian.  A popular roundtable panelist on Chelsea Lately, Arden appeared on the show over 115 times, proving that all those years she spent reading Us Weekly for “research” were worth it.  On the acting fron, she will appear in the upcoming ABC show Fresh Off the Boat.    Arden was also a cast member on MADtv for four years, where she wrote many of her sketches, and was surprised to be in her underwear on TV a lot. Arden is a frequent guest on Comedy Central’s new hit show @midnight and was one of the first females to “win the Internet.” Arden has appeared on Orange Is the New Black, Key and Peele, Inside Amy Schumer, Suburgatory, Hung, Legit, Reno 911, Quickdraw, Late Night with Conan O’Brien, Psych, The Howard Stern Show, RuPaul’s Drag Race, Party Down, Hot in Cleveland, Legit, Soul Man and Quick Draw, among others.</p>\n<p>Her film credits include Morning Glory, Kinsey, The Lucky Ones and Bubble Boy, and the Sundance movies Bachelorette, Wrong and Wrong Cops.</p>\n<p>As a writer Arden just sold a sitcom to ABC Studios called Playing with Boys about a female comedian living in Brooklyn, and also recently shot a pilot called Hole to Hole for Adult Swim that she wrote with South Park producer Pam Brady. They were the first females to sell a show to this popular network, with Arden serving as co-executive producer, writer and star.</p>\n<p>Arden loves interior design, appearing with her designs on The Nate Berkus four times, as well as being featured on Apartment Therapy.  Mostly Arden loves naps, sledding, and peanut butter.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/arden.jpg", PerformerId:"10341", Twitter:"ardenmyrin", Website:"", Position:"42", id:"10341", pageUrl:"10341-arden-myrin", ExcludeFromList:false, SortOrder:42, events:[], mc_events:[]}, {Name:"Matt Kirshen", Bio:"<p>London born Matt Kirshen's precision wit has earned him an impressive reputation on the international comedy circuit. More recently his appearances on Late Night with Jimmy Fallon, The Late Late Show with Craig Ferguson, Paul Provenza’s Green Room, The Nerdist and as a finalist on NBC's Last Comic Standing has earned him a whole new host of fans in the United States and a surprising number of other countries worldwide. </p>\n<p>He has also recorded a half-hour special for the World Stands Up, Comedy Central, and has acclaimed festival appearances in Montreal, Edinburgh, Kilkenny, Glastonbury, Reading, Leeds, Bermuda, and San Francisco amongst many others. </p>\n<p>His debut CD, \"I Guess We'll Never Know\" was named in Punchline Magazine's top 10 albums of 2009 and his hit appearance at the 2008 Just For Laughs festival in Montreal resulted in no fewer than 4 of his gags appearing in the Montreal Gazette's round up of their best jokes of the fest. </p>\n<p>Matt has appeared in and written for numerous television shows in the UK, including a charity gala featuring Jimmy Fallon, which resulted in Jimmy himself requesting Matt to open for him in a college tour to promote his new Late Night hosting slot. </p>\n<p>His youthful looks disguise a veteran comic with over a decade of experience, and a wealth of smart, funny and relatable material, making him a firm favorite with all audiences. While it's his prime-time NBC appearances that many comedy fans will recognize him from, they are often surprised at the breadth and scope of his material, described by one reviewer as \"intelligent, but with the emphasis firmly on the funny.\"</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kirshen_matt-1429.jpg", PerformerId:"10343", Twitter:"mattkirshen", Website:"http://www.mattkirshen.com", Position:"43", id:"10343", pageUrl:"10343-matt-kirshen", ExcludeFromList:false, SortOrder:43, events:[], mc_events:[]}, {Name:"Adam Cayton-Holland", Bio:"<p>Adam Cayton-Holland (<a href=\"http://www.adamisfreakingoutrightnow.com\">www.adamisfreakingoutrightnow.com</a>) is a national touring comic who has appeared on Conan, @midnight, The Meltdown with Jonah and Kumail, The Pete Holmes Show, Happy Endings and was named one of Esquire’s “25 Comics to Watch.” His podcast, “My Dining Room Table,” and his debut album, “I Don’t Know If I Happy” are both available on iTunes. He has been described as “genial” and “with pretty decent teeth.”</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/pencildick.jpg", PerformerId:"10112", Twitter:"CaytonHolland", Website:"http://www.adamisfreakingoutrightnow.com", Position:"44", id:"10112", pageUrl:"10112-adam-cayton-holland", ExcludeFromList:false, SortOrder:44, events:[], mc_events:[]}, {Name:"Chris Garcia ", Bio:"<p>Born and raised in Los Angeles, CA, Chris Garcia started his comedy career in the San Francisco Bay Area where he was named “A Comic To Watch” by the San Jose Mercury News, “One of the 7 Funniest People in San Francisco” by 7x7 Magazine, and a “Rising Comedic Star” by the SF Weekly.<br />\nChris moved back to Los Angeles in the summer of 2012. Since then, he has appeared on NPR’s This American Life, The WTF podcast with Marc Maron, Holy F*ck, UCB, Hot Tub, and The Meltdown with Jonah and Kumail, among other shows. In February of 2013, Chris was profiled as “A Comic’s Comic” in Esquire Magazine.</p>\n<p>Chris has had the honor of working with such comedians as Patton Oswalt, Bill Burr, Marc Maron, Dave Attell, David Cross, Maria Bamford, Reggie Watts, Aziz Ansari, Human Giant, The Kids in the Hall, Bobcat Goldthwait, and Robin Williams. His festival appearances include SF Sketchfest, The Bridgetown Comedy Festival, The Aspen Rooftop Comedy Festival, Riot LA, Outside Lands, the Humboldt Comedy Festival, and The San Francisco Literary Arts Festival.</p>\n<p>As a writer, Chris has worked as the Editor for RooftopComedy.com, and has contributed to MSN, Yahoo, Bing, Nick Mom, Fast Company, Revision 3, and Life &amp; Style Magazine. Chris has also written and recorded music that has been featured on Comedy Central Insider and MTV Tr3s. Chris recently joined the NHMC’s Writers program, an ABC and NBC sponsored intensive scriptwriters workshop that prepares Latinos for writing jobs at the major television networks.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/chrisgarciaheadshot1.jpg", PerformerId:"10046", Twitter:"_chrisgarcia", Website:"http://chrisgarciacomedy.com/", Position:"45", id:"10046", pageUrl:"10046-chris-garcia-", ExcludeFromList:false, SortOrder:45, events:[], mc_events:[]}, {Name:"Ben Roy", Bio:"<p>Ben Roy started in the world of standup comedy when he entered a Denver, Colorado Comedy Works new talent night in early 2004. After an impressive showing, a manager snuck him into a professional competition a few months later, where he placed second to comedian Josh Blue, who would go onto national fame as winner of Last Comic Standing. </p>\n<p>In the summer of 2010, Roy was invited to perform in the &quot;New Faces&quot; division of the Montreal Just for Laughs Comedy Festival. After standout performances that year, he was invited back for its 2012 Nasty Show as well as in 2014 to headline his own hour shows. He&#039;s appeared on HBO&#039;s Funny as Hell series, Comedy Central&#039;s Adam Devine&#039;s House Party, Gotham Comedy Live, NickMom Night Out, and was featured in the book Mock Stars: Indie Comedy and Dangerously Funny (alongside comedy greats like Patton Oswalt and Fred Armisen). </p>\n<p>Ben&#039;s debut standup album, I Got Demons, was released in 2012 and ranked one of the 10 Best Comedy Albums of the year by Laughspin. His second standup album, No Enlightenment in Sobriety, was released April 15, 2014 and peaked at #2 on the iTunes charts. He is also part of the The Grawlix, a Denver based comedy troupe that has filmed TV pilots for Amazon Studios and truTV. </p>\n<p>Ben sings for punk band SPELLS, and had the rare honor of being an official invite to the South by Southwest music festival as both a comic and musician.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/10257091_749224155108242_7456968762510003345_o_1.jpg", PerformerId:"10309", Twitter:"benroy00", Website:"http://www.benroyyellsalot.com", Position:"46", id:"10309", pageUrl:"10309-ben-roy", ExcludeFromList:false, SortOrder:46, events:[], mc_events:[]}, {Name:"Lizzy Cooperman", Bio:"<p>Lizzy&#039;s been featured on &quot;The Late Late Show with Craig Ferguson,&quot; and at “New Faces” and “Dating It” at the Just For Laughs comedy festival in Montreal. She&#039;s a winner of the Laugh Across America contest and was also a finalist at the Las Vegas Comedy Festival. She&#039;s written for several shows including &quot;The Dish,&quot; &quot;The Eric Andre Show,&quot; &quot;Streets of Hollywood&quot; and &quot;Naked &amp; Funny.&quot;  She&#039;s currently a writer for The Soup TV.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/lizzy_cooperman_headshot_bridgetown.jpg", PerformerId:"9564", Twitter:"lizzycooperman", Website:"http://lizzycooperman.com", Position:"47", id:"9564", pageUrl:"9564-lizzy-cooperman", ExcludeFromList:false, SortOrder:47, events:[], mc_events:[]}, {Name:"Maggie Maye", Bio:"<p>Maggie Maye has been called one of the hottest up and coming comedians in Austin, has been a multiple time finalist in the Funniest Person in Austin contest, and has been featured in Austin Monthly magazine. She also performs comedy in festivals around the country, such as the Bridgetown Comedy Festival, San Francisco Comedy Burrito Festival, and the She Devil Comedy Festival. She is also a contributing blogger for one of her favourite fests, the Women in Comedy Festival.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/maggie_maye_hs.jpg", PerformerId:"9876", Twitter:"maggiemayehaha", Website:"", Position:"48", id:"9876", pageUrl:"9876-maggie-maye", ExcludeFromList:false, SortOrder:48, events:[], mc_events:[]}, {Name:"Patrick Keane", Bio:"<p>Originally from the Midwest, raised in Orange County, college in Montana and a three year stint in Asia make Patrick Keane a comedian with a background. Why college in Montana? Football scholarship. Why Asia? To get away from football. </p>\n<p>Patrick has appeared on Comedy Central’s ‘Live At Gotham’, the Late Late Show with Craig Ferguson, Jimmy Kimmel Live, the Bob and Tom show, XM Radio, Spotify, Comics Unleashed, and the Montreal Comedy Festival. Asked what the key is to comedy, this writer/actor/comedian (WAC) says, “I try not to be funny and it usually works.”</p>\n<p>Patrick can name all the U.S. Presidents in order and knows every Super Bowl match up in history. He feels bad that he's so knowledgeable about sports when he can't even remember all the names of people in his family.</p>\n<p>His dry sarcastic self-deprecating style originates from comedy influences Bill Murray, Gene Wilder and John Wooden. </p>\n<p>Like Tom Hagen, Patrick Keane is of German-Irish descent. </p>\n<p>In addition to doing comedy, Patrick also likes to do magic and sometimes he's able to make comedy completely disappear from the room.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_6044.jpg", PerformerId:"9638", Twitter:"", Website:"", Position:"49", id:"9638", pageUrl:"9638-patrick-keane", ExcludeFromList:false, SortOrder:49, events:[], mc_events:[]}, {Name:"DJ REAL (Nick Stargu)", Bio:"<p>Nick Stargu is a musician, comedian, and writer who is best know for his musical comedy act, DJ REAL, which has been featured in the San Francisco Sketch Festival, the Bridgetown Comedy Festival, the San Francisco Comedy Competition, and more. And he&#039;s opened for Devo! Nick is also one half of festival favorite Imaginary Radio with Drennon Davis. They have appeared together at SXSW, and the Funny or Die Oddball Festival. </p>\n<p>“…DJ REAL was a very strange, and strangely wonderful combination of lo-fi recording artist and Andy Kaufman comedian…” – SF Weekly</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/majik-bad-lowrez.jpg", PerformerId:"9105", Twitter:"djrealsmells", Website:"http://www.djrealsmells.com", Position:"50", id:"9105", pageUrl:"9105-dj-real-nick-stargu", ExcludeFromList:false, SortOrder:50, events:[], mc_events:[]}, {Name:"Andy Wood", Bio:"<p>Andy Wood is one of the only comedians to have performed in all eight years of the Bridgetown Comedy Festival, which he would like to think is unrelated to the fact that he's a co-founder and producer of said festival. He's also the co-host of the weekly podcast Probably Science, and he can be seen in the Comedy Central film Jason Nash Is Married and on the current season of MOCKpocalypse on AXS TV.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/andy_wood_headshot.jpg", PerformerId:"10317", Twitter:"andytwood", Website:"http://andytwood.com", Position:"51", id:"10317", pageUrl:"10317-andy-wood", ExcludeFromList:false, SortOrder:51, events:[], mc_events:[]}, {Name:"Ben Bizuneh", Bio:"<p>Ben started doing stand-up in Bloomington, Indiana at the Comedy Attic, and moved to Los Angeles in the summer of 2012. He’s performed at the Limestone Comedy Festival, was a finalist in the Great American Comedy Festival, and most recently performed at the 2014 Bridgetown Comedy Festival. </p>\n<p>Ben is the creator of the YouTube channel, LieGuys, where he makes videos in which he lies to people with his friends (mostly Aristotle Georgeson). LieGuys has been featured on Sourcefed, Elite Daily, WorldStarHipHop, Mic, Racialicious, College Humor, and The Bleacher Report. Ben hopes to one day be able to cry on command.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/hot_tub_pic.jpg", PerformerId:"10134", Twitter:"benbizuneh", Website:"http://benbizuneh.tumblr.com", Position:"52", id:"10134", pageUrl:"10134-ben-bizuneh", ExcludeFromList:false, SortOrder:52, events:[], mc_events:[]}, {Name:"Ian Abramson", Bio:"<p>Ian Abramson is from Moreno Valley, California, where he learned to walk, read, and drive, but not in that order. He studied theater at California State University Channel Islands, which isn’t on an island, but has been converted from an old mental hospital, so it’s isolated in its own way.  While at school, he took as many performance and writing classes as he could and after trying stand-up at a couple of campus open mics, he decided to start writing comedy.  After finishing school, he briefly lived in Orange County, launching his standup career.</p>\n<p>In search of the best comedy training, Ian moved to Chicago where he began taking improv classes at The Second City and the iO Theatre.  With comic friend Tim Barnes, he co-created The Pitch and Talent Scout’s Honor, both web series for Tom Snyder (of Dr. Katz fame).  Over the course of a year and a half, they made over 50 weekly episodes. Working again with Snyder, he voiced an episode of the producer/writer’s Explosion Bus, featured alongside Daryl Hall of “Hall and Oates.”  Ian is well known for producing events such as A Funeral for a Prop Comic and A Court Case for a Young Comedian.  He insists these are not comedy shows.  He is also a regular contributor for The Onion. </p>\n<p>Ian’s stand-up has evolved into a mix of precise wordplay, longer emotionally absurd jokes, and larger conceptual pieces.  In the past year, Ian has performed at the Oddball Comedy Festival, UP Comedy Club, Milwaukee’s Comedy Cafe, The Lincoln Lodge.  His Seven Minutes in Purgatory is an experimental show where comedians perform to a camera in one room while the audience watches in another room, resulting in the comics having no idea of how they are doing. Chicago Magazine named Ian “Best Experimental Comedian” and also listed him in a separate article as one of the “16 Comedians You Should See This Fall.”  Ian has made Appearances at Funny or Die&#039;s Oddball Festival and the Chicago Comedy Exposition. He has featured for Dave Hill and Bridget Everett at UP Comedy Club and Jimmy Pardo at Jukebox Comedy Club.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/hiresheadshot.jpg", PerformerId:"9096", Twitter:"iantherage", Website:"http://www.ianabramson.com/", Position:"53", id:"9096", pageUrl:"9096-ian-abramson", ExcludeFromList:false, SortOrder:53, events:[], mc_events:[]}, {Name:"Andrew Orvedahl", Bio:"<p>Andrew Orvedahl is a comedian and person currently based in Denver, Colorado. If you were a comedy sommelier, you might say his comedy is somewhat cerebral, with a dry finish and floral notes of sarcasm. He prefers mixing real-life stories with creative (and often improvised) observations within those stories. He is a regular at his home club, the renowned Comedy Works in Denver, and has performed at the Montreal Just for Laughs, Bridgetown, Aspen, Las Vegas, Seattle, and Great American comedy festivals.</p>\n<p>Andrew is 1/3 of Denver’s comedy supergroup The Grawlix, who sold their sitcom pilot ‘Those Who Can’t’ to Amazon Studios in 2012. Andrew co-created, co-wrote, and co-starred in the pilot, which debuted in April of 2013.</p>\n<p>Andrew has appeared on Nickmom’s ‘Night Out’, ‘Last Comic Standing’, on Comedy Central’s website, and on Sirius XM radio.In 2014, Andrew made his late night debut on &#039;The Tonight Show with Jimmy Fallon&#039;. In 2013, Andrew released his debut comedy album ‘Hit the Dick Lights‘ on Greater Than Records, which was named one of the top 10 comedy specials of 2013 by Time Out New York. In 2012, Andrew was awarded Denver’s prestigious ‘Mastermind’ award for his support of comedy culture in the city.</p>\n<p>In 2010, Andrew created the hit storytelling show and podcast The Narrators, which he continues to co-host monthly.</p>\n<p>In 2013, Andrew created The Unicorn podcast, where he and his co-host Talitha talk invite comedians to talk about sex and relationships.</p>\n<p>When he isn’t performing comedy Andrew can be found playing with Legos, riding bikes, and doing really fun stuff with his daughter.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_20140216_211142_1.jpg", PerformerId:"10282", Twitter:"TheOrvedahl", Website:"http://www.5unicorns.com", Position:"54", id:"10282", pageUrl:"10282-andrew-orvedahl", ExcludeFromList:false, SortOrder:54, events:[], mc_events:[]}, {Name:"Jesse Case", Bio:"<p>Jesse is a standup comedian from Nashville, Tennessee, who currently resides in Los Angeles. He’s been featured on Last Comic Standing, Parenthood, and various other canceled shows. He was ‘Best of Fest’ at both the Toronto and Montreal 'Just for Laughs' Festivals, and tours nationally between naps.</p>\n<p>Jesse is a co-host of the Probably Science podcast, as well as the Jesse Case Program.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jessecase2014.jpg", PerformerId:"10305", Twitter:"jessecase", Website:"", Position:"55", id:"10305", pageUrl:"10305-jesse-case", ExcludeFromList:false, SortOrder:55, events:[], mc_events:[]}, {Name:"Amber Preston", Bio:"<p>Amber Preston is a comedy seductress.  Named one of “5 Comedians to Watch” in New York Magazine, her brassy charisma and keenly honed jokecraft leave audiences powerless not to fall head over heels.  From raucous roadhouses to the classiest clubs, Preston’s saucy, mischievous charm captivates diehard and casual comedy fans alike.</p>\n<p><a href=\"http://www.amberpreston.com\">www.amberpreston.com</a></p>\n<p>3rd Place at the 2012 Great American Comedy Festival<br />\n2012 Best of the Midwest winner at Gilda&#039;s LaughFest<br />\nMarc Maron’s Five Comedians to Watch<br />\nSan Francisco Sketchfest<br />\nBig Sky Comedy Festival<br />\nWomen in Comedy Festival<br />\nThe Aspen Rooftop Comedy Festival<br />\n2010 Rooftop Comedy Silver Nail Award<br />\nLaugh Your Asheville Off! Comedy Festival<br />\nFinalist in Progressive.com Help Flo! Contest<br />\nHas been a Contributing comic to Life &amp; Style magazine</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/amberpreston.jpg", PerformerId:"9770", Twitter:"prestonparty", Website:"http://amberpreston.com", Position:"56", id:"9770", pageUrl:"9770-amber-preston", ExcludeFromList:false, SortOrder:56, events:[], mc_events:[]}, {Name:"Greg Barris", Bio:"<p>Greg Barris is a staple in New York’s downtown stand-up scene and is the creator of Heart Of Darkness: a psychedelic showcase of comedy, live music and fringe scientists that has been a frequent Time Out New York critic’s pick, much loved by BrooklynVegan and hailed as ‘Excellent’ by The New Yorker.  Comedians who have appeared on Heart of Darkness include Reggie Watts, Fred Armisen, Janeane Garofalo, Jim Gaffigan, Marc Maron, Kristen Schaal, Eugene Mirman, Greg Behrendt, and Chelsea Peretti.</p>\n<p>Barris’s comedic shorts have been featured on Funny or Die, College Humor and Jay Leno's Laugh Squad to name a few.  He has been a commentator on MTV's All That Rocks and MTV's Warren The Ape, and his debut album Shame Wave was released on ASpecialThing Records in 2012.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/gregbarris.jpg", PerformerId:"10318", Twitter:"gregbarris", Website:"http://www.gregbarris.com/", Position:"57", id:"10318", pageUrl:"10318-greg-barris", ExcludeFromList:false, SortOrder:57, events:[], mc_events:[]}, {Name:"Bri Pruett", Bio:"<p>Bri Pruett is a stand-up comic and improviser from Portland, Oregon.  She’s appeared at SF Sketch Fest,  All Jane No Dick comedy festival, the Seattle International Comedy Competition, and Bumbershoot. She makes regular appearances at Helium Comedy Club, Curious Comedy Theater, and other Portland showcases.</p>\n<p>She’s the comedy sidekick, writer, and co-creator of &quot;Late Night Action with Alex Falcone,&quot; a live, talk/variety show. Along with comedy buddies Alex Falcone, Curtis Cook and Anthony Lopez she is the power quartet behind weekly comedy showcase Earthquake Hurricane.</p>\n<p>She has a background in improv and teaches these skills at Curious Comedy Theater, where she’s a regular player with improv singing-ensemble: Pipes.</p>\n<p>Bri is a monthly contributor to the ever popular Portland Mercury, Blogtown, USA, with her sex and dating column: Let’s Do It! with Bri Pruett.</p>\n<p>Willamette Week named her on the 2013 list of the Funniest 5 Comedians in Portland.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/portraits_-_bri_pruett_11_0.jpg", PerformerId:"10189", Twitter:"bripruett", Website:"http://www.bripruett.com", Position:"58", id:"10189", pageUrl:"10189-bri-pruett", ExcludeFromList:false, SortOrder:58, events:[], mc_events:[]}, {Name:"Amy Miller", Bio:"<p>Amy Miller gets on stage to tell jokes, and you’re all like, well she doesn’t look funny at ALL. I hope she doesn’t blow this! Maybe I should go for a smoke break.  Two minutes in, your pants have been charmed off by her rosy cheeks and the fact that she sounds like a six-year-old Asian boy. Five minutes in, you start to feel sad for her and sometimes feel the need to go, “AWWW” out loud in the middle of her set, or occasionally, “YOU’RE ADORABLE.” Ten minutes in, you’re not sure if you want to have wild sex with her or have her pretend to be your mom and tuck you into bed at night while lightly stroking your hair and singing, &quot;You Are My Sunshine&quot; because she’s also an excellent singer. Any exposure above 15 minutes, and your head is just a chaotic swirl of love feelings and a crippling fear of eventual heartbreak and rejection at the end of which you decide you should just be best friends. It’s fun!</p>\n<p>Voted Portland’s Funniest Comedian by the Willamette Week in 2013, Amy Miller has been seen at the San Francisco Sketchfest, Noise Pop Festival, SF Punchline, Cobb’s Comedy Club, Harvey’s Comedy Club, Portland Helium Comedy Club, The All Jane No Dick Festival, The Siren Nation Festival, Laugh Your Asheville Off, Mississippi Studios Portland, and in the Bridgetown Comedy Festival. </p>\n<p>She has a podcast called Sorry About Your Dad. It’s about dad stuff.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/amym4.jpg", PerformerId:"9079", Twitter:"amymiller", Website:"http://amymillercomedy.com", Position:"59", id:"9079", pageUrl:"9079-amy-miller", ExcludeFromList:false, SortOrder:59, events:[], mc_events:[]}, {Name:"Andrew Sleighter", Bio:"<p>Andrew Sleighter started in comedy looking for an outlet for his vulgar arguments for decency. Since then Andrew’s laid-back style and clever writing has won him appreciation from fans and respect from his peers.</p>\n<p>Andrew is a regular at colleges and comedy clubs across the country. He has performed at the Bumbershoot Music and Arts Festival, the Bridgetown Comedy Festival, The Laugh Your Asheville-Off Comedy Festival and was a finalist at the Laughing Skull Festival in Atlanta. He’s performed at the Cabo Comedy Festival and the Johnny Carson Great American Comedy Festival. Andrew is the creator and writer of the well read sports twitter Danica Patrick Ewing.</p>\n<p>Andrew wrote and blogged for the Sports Show with Norm Macdonald on Comedy Central and was a regular on the MTV prank show Money From Strangers. He performed on Nuvo TV’s Stand Up and Deliver and can be seen on the new season of Last Comic Standing.</p>\n<p>Andrew’s comedy has the ability to reach wide ranges of audiences and works in a diversity of rooms. Reliable and consistent, he rarely ends a show by lighting the stage on fire out of rage. Most importantly, he’s constantly fascinated by, and eager to keep learning about stand-up.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/7916655222_5c2e2d5bf4_b.jpg", PerformerId:"9392", Twitter:"andrewsleighter", Website:"http://andrewsleighter.com", Position:"60", id:"9392", pageUrl:"9392-andrew-sleighter", ExcludeFromList:false, SortOrder:60, events:[], mc_events:[]}, {Name:"Bryan Cook", Bio:"<p>Comic/writer Bryan Cook, named one of LA Weekly’s 10 Comics to Watch for 2014, is the host and creator of the live show (and podcast on the Nerdist network) Competitive Erotic Fan Fiction, one of Rolling Stone’s Top 10 Comedy Podcasts. He was featured in the comedy special Dancing Around the Shit Fire with Kyle Kinane, and performs regularly at festivals and clubs all over the country. Cook has also contributed to McSweeney’s, written for Funny or Die, Ridiculousness, Fantasy Factory, Fashion Police, JASH, Maker Studios, and various Joan Rivers projects.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/bryan_new_headshot_0.jpg", PerformerId:"10296", Twitter:"", Website:"", Position:"61", id:"10296", pageUrl:"10296-bryan-cook", ExcludeFromList:false, SortOrder:61, events:[], mc_events:[]}, {Name:"Clare O&#039;Kane", Bio:"<p>Clare O’Kane is an actress and comedian from San Jose, California. She has performed in the Edinburgh Fringe Festival, the Bridgetown Comedy Festival, SF Sketchfest, and other wonderful festivals around the country. She has been described as “sarcastic” and “half-Asian.” Along with being a stand up, Clare is also one-third of the sketch group Blessed. They have made a couple of very funny videos, none of which have gone viral. When she’s not sneezing or whatever, Clare travels around the country to perform stand-up comedy and “seize the day.” She hopes to get that tattooed on her lower back (for free) someday. She currently lives in Los Angeles, California with a guy and a cat.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/clareokane1.jpg", PerformerId:"9272", Twitter:"babysfirstgun", Website:"http://www.clareokane.com", Position:"62", id:"9272", pageUrl:"9272-clare-okane", ExcludeFromList:false, SortOrder:62, events:[], mc_events:[]}, {Name:"Derek Sheen", Bio:"<p>Derek Sheen is a cuddly mess of insecurities and is quickly becoming a favorite among comedy nerds all over the globe! He’s been a featured performer at the Cape Fear and S.F. Sketchfest Comedy Festivals,  has toured with Patton Oswalt, Brian Posehn, Janeane Garofolo and Rory Scovel! His debut album “Holy Drivel” was recorded by iconic metal producer Matt Bayles (Minus the Bear, Mastodon, Isis).<br />\nLindy West (GQ Magazine) has called him “A Human Hug.”<br />\nPASTE Magazine: “Derek Sheen has the uncanny ability to take mundane events and turn them into over-the-top comedy.&quot;<br />\n“Dylan Gadino at Laughspin Magazine: “Equal parts-playful-and-absurd approach to self-deprecating comedy.”<br />\nDaniel Berkowitz of TheSpitTake-Comedynews.org: “When Sheen’s at his best, he’s firing everything off with nuanced diction and rhythmical precision. He develops a Carlin-esque pace to his speech that only serves to amplify the already-high level of laughs.”</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_0095.jpg", PerformerId:"9144", Twitter:"dereksheen", Website:"http://derektime.com", Position:"63", id:"9144", pageUrl:"9144-derek-sheen", ExcludeFromList:false, SortOrder:63, events:[], mc_events:[]}, {Name:"Ashley Barnhill", Bio:"<p>Ashley Barnhill is an up-and-coming stand up comic.  She was recently named one of the &quot;People to Watch in 2015&quot; by the Austin American-Statesman.  She has been featured in the Huffington Post&#039;s &quot;18 Funny Women You Should Be Following on Twitter&quot; and Splitsider&#039;s &quot;Follow Friday.&quot;  Ashley is known for her dark and compact one liners. She has performed at festivals such as Moontower Comedy Festival, she headlined the New Orleans Comedy Arts Festival, and most recently toured with Funny or Die&#039;s Oddball Comedy Fest&#039;s Second Stage.  Ashley has written, directed and acted in many of her own sketch videos that have been featured on Funny or Die and Huffington Post.  She is also the lead in the upcoming indie feature film &quot;Here There Now Year Ago&quot; and is a contributor to WitStream.  Ashley is also a Top 10 Finalist in Ben Affleck and Matt Damon&#039;s &quot;Project Greenlight,&quot; which will air on HBO in 2015.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/6109e9a82f9f4fdba24cff5801a68698.jpeg", PerformerId:"9484", Twitter:"ashley_barnhill", Website:"http://ashleybarnhill.flavors.me/", Position:"64", id:"9484", pageUrl:"9484-ashley-barnhill", ExcludeFromList:false, SortOrder:64, events:[], mc_events:[]}, {Name:"Paul Hooper", Bio:"<p>An only child with OCD, Paul Hooper channels his dysfunction into a cathartic harangue. This native of Charlotte, North Carolina, now residing in New York City, has been featured at the HBO Comedy Festival in Vegas, the Boston Comedy Festival, Michael Moore and Jeff Garlin&#039;s Traverse City Comedy Arts Festival, the Vancouver Comedy Fest and was a finalist in the 30th Annual Seattle International Comedy Competition. A seasoned headliner, Paul has performed in forty one states and ten countries, including two armed forces tours. His debut solo album, &quot;Tense and Uncomfortable&quot; was released in October of 2013 with Stand Up! Records</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_34.jpg", PerformerId:"10070", Twitter:"paulhooper", Website:"http://www.paulhoopercomedy.com", Position:"65", id:"10070", pageUrl:"10070-paul-hooper", ExcludeFromList:false, SortOrder:65, events:[], mc_events:[]}, {Name:"Dulcé Sloan", Bio:"<p>Sassy and straightforward, Dulcé Sloan is an Actor by trade and has been doing Stand Up Comedy for over five years.  She also writes and performs sketch comedy and improv. She was recently on &quot;Riggles Pick&quot; for FOX NFL Sunday Pre-game Show and ABC&#039;s &quot;Resurrection.&quot;  She can be seen at clubs and venues all over the SouthEast including the Laughing Skull Lounge and The Improv Atlanta.</p>\n<p> For upcoming dates and videos visit <a href=\"http://www.dulcesloan.com\">www.dulcesloan.com</a>.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot-comic.jpg", PerformerId:"9483", Twitter:"dulcesloan", Website:"http://www.dulcesloan.com", Position:"66", id:"9483", pageUrl:"9483-dulc-sloan", ExcludeFromList:false, SortOrder:66, events:[], mc_events:[]}, {Name:"Barbara Gray", Bio:"<p>Barbara Gray is a comedian and writer and maybe sometimes actress based out of Los Angeles. She has toured the country doing standup and has performed at comedy festivals like Bridgetown, SF Sketchfest, Limestone Comedy Fest, and has headlined the SLC Comedy Carnivale. She has been a writer for &quot;Billy on the Street&quot; on FUSE, and her comedy has been featured on Ellen, The Huffington Post, and America Online, also known as AOL. Her standup can be heard on the &quot;Holy Fuck&quot; live album, and she will be recording her own album later this year titled &quot;Family And Friends,&quot; featuring a disc of &#039;family-friendly&#039; material and a disc of &#039;not-so-family-friendly&#039; material. </p>\n<p>Barbara is one-third of the popular &quot;Lady to Lady&quot; podcast on the Maximum Fun network, along with comedians Tess Barker and Brandie Posey. Each week, the ladies welcome a fourth funny female to the table to discuss pop culture, embarrassing personal revelations, and everything in between. &quot;Lady to Lady&quot; can also be seen at the brand new UCB Sunset with live shows that continue to frighten and blow minds. </p>\n<p>Follow Barbara on twitter @BabsGray and see videos and her sketch series &#039;Barb &amp; Whitney&#039; at her website <a href=\"http://www.myjokesareuphere.com\">www.myjokesareuphere.com</a></p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_m0472jhaka1r0pyhvo1_400.jpg", PerformerId:"10137", Twitter:"BabsGray", Website:"http://www.myjokesareuphere.com", Position:"67", id:"10137", pageUrl:"10137-barbara-gray", ExcludeFromList:false, SortOrder:67, events:[], mc_events:[]}, {Name:"Steven Wilber", Bio:"<p>&quot;Offbeat,&quot; &quot;unexpected&quot; and &quot;clever&quot; are just three of literally hundreds of words used to describe the comedy-style stylings of Steven Wilber. Since starting stand-up in 2011, Steven has risen up in the Portland comedy scene to become a frequent performer at arcade bars, anarchist bookstores, Doctor Who-themed seafood restaurants and other typical comedy venues this city has to offer. In 2014, he had the honor of winning Portland’s Funniest Person competition, as well as being voted in the Willamette Week&#039;s &quot;Funniest Five&quot; list.<br />\nSteven has also performed at the Bridgetown Comedy Festival, SF Sketchfest, Bumbershoot, and has been featured on Bryan Cook&#039;s Competitive Erotic Fan Fiction podcast.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/stevenwilberheadshot.jpg", PerformerId:"9235", Twitter:"WilberWithAnE", Website:"", Position:"68", id:"9235", pageUrl:"9235-steven-wilber", ExcludeFromList:false, SortOrder:68, events:[], mc_events:[]}, {Name:"Jak Knight", Bio:"<p>Originally from Seattle, Jak Knight performed 2 times before knowing it was time to pack up all his possessions and move to Los Angeles permanently to pursue stand-up comedy.  Now he uses his charming demeanor and street smarts to navigate the comedy scene. Jak recently wrote for the ADHD animated series THE LUCAS BROS. MOVING COMPANY and was recently named a Comedy Central Comic to Watch in 2014.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jak.jpg", PerformerId:"9212", Twitter:"", Website:"", Position:"69", id:"9212", pageUrl:"9212-jak-knight", ExcludeFromList:false, SortOrder:69, events:[], mc_events:[]}, {Name:"Caitlin Gill", Bio:"<p>People are talking about Caitlin Gill.  Most of what they’re saying has to do with how funny she is.  </p>\n<p>Caitlin has performed on the Oddball Comedy Tour, the Outside Lands Festival, SF Sketchfest, the Vancouver Global Comedy Fest and in some of the best comedy clubs in the nation. Her writing has been featured in a Believer Magazine project for 826LA. She was featured as one of the &quot;7 Comics Rocking the Local Scene&quot; in 7x7 Magazine, and was voted Best Comedian in the East Bay Express “Best Of” Edition in 2013.  You can also hear her on podcasts like Put Your Hands Together, Competitive Erotic Fan Fiction, and NPR&#039;s Snap Judgment.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/caitlin-gill.jpg", PerformerId:"9879", Twitter:"ROBOTCAITLIN", Website:"http://www.caitlingillcomedy@gmail.com", Position:"70", id:"9879", pageUrl:"9879-caitlin-gill", ExcludeFromList:false, SortOrder:70, events:[], mc_events:[]}, {Name:"Doogie Horner", Bio:"<p>Doogie Horner famously tamed a hostile NYC audience on America&#039;s Got Talent in 2009. He won Helium&#039;s Philly&#039;s Funniest contest in 2010 and was selected for the Oddball Festival in 2013. His show The Ministry of Secret Jokes won a Best of Philly award in 2011. He is the author of &quot;Everything Explained Through Flowcharts&quot; and &quot;100 Ghosts,&quot; and has written for McSweeney&#039;s, Wired, Playboy, Fast Company, the London Times, Boing Boing, and others.</p>\n<p>&quot;Horner&#039;s delivery has a formal yet sing-song cadence to it that fits nicely into the way he delivers crafty one liners with nerd-like precision.&quot;<br />\n–Jason Heidemann, Chicago Tribune, 9/6/2014</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/doogie_headshot.jpg", PerformerId:"9827", Twitter:"doogiehorner", Website:"http://www.doogiehorner.com", Position:"71", id:"9827", pageUrl:"9827-doogie-horner", ExcludeFromList:false, SortOrder:71, events:[], mc_events:[]}, {Name:"Josh Johnson", Bio:"<p>Josh Johnson is a comedian/writer based in Chicago. He currently writes for Empire News as well as The Whiskey Journal, and as a stand-up, performs across the country in colleges and festivals. He’s performed at the New Orleans Comedy Festival, Snubfest, Orlando  Indie Comedy Festival, Big-Little Comedy Festival, and Epic Fest. He was also a semi-finalist in NBC's Stand Up Diversity Showcase and is currently an ensemble member of Under The Gun Theater in Chicago.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/couch.jpeg", PerformerId:"10214", Twitter:"", Website:"http://joshjohnson.com", Position:"72", id:"10214", pageUrl:"10214-josh-johnson", ExcludeFromList:false, SortOrder:72, events:[], mc_events:[]}, {Name:"Billy Prinsell", Bio:"<p>Billy Prinsell is an up-and-coming presence in the New York comedy scene. Since developing his unique on-stage persona five years ago, he has performed all over New York City in clubs, improv theaters and bar shows.  He&#039;s been on &quot;Friends of the People&quot; on truTV.  Among his influences are Sam Kinson, George Carlin and Bill Burr. He is a graduate of SUNY Purchase, where he studied the dimensions of the comic character and took these concepts to shape an instantly recognizable and captivating stage persona. His comedy is a fresh, innovative, and bold approach that leaves everyone laughing.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_12.jpg", PerformerId:"9595", Twitter:"", Website:"", Position:"73", id:"9595", pageUrl:"9595-billy-prinsell", ExcludeFromList:false, SortOrder:73, events:[], mc_events:[]}, {Name:"Langston Kerman", Bio:"<p>Langston Kerman is a Brooklyn based comic who just performed as a finalist at the 11th Annual Stand Up NBC Finale Showcase at the Hollywood Improv in LA. He hosts The Fancy Show, a weekly standup night on Tuesdays in Brooklyn and has performed at UCB, IO and other venues all over the country. Last year he was a finalist in the Boston Comedy Festival. He is a fresh face who is hilarious.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/langston.jpg", PerformerId:"9243", Twitter:"", Website:"", Position:"74", id:"9243", pageUrl:"9243-langston-kerman", ExcludeFromList:false, SortOrder:74, events:[], mc_events:[]}, {Name:"Kristin Rand", Bio:"<p>In her four short years in Denver, comic Kristin Rand has made quite the impression on the city. The Denver Post has called her “one of the most gloriously authentic, irrepressible personalities in the city” and listed her a comic to watch at the 2012 Laugh Track Comedy Festival. In 2013, she was listed in Reverb as one of the top 10 comics to watch at the inaugural High Plains Comedy Festival. Rand is a four-time semi-finalist in the prestigious annual Comedy Works New Faces Contest. The Denver Westward has called Kristin a &quot;sentient cupcake&quot; and “endlessly charming.&quot; In addition to stand-up comedy, she writes and performs sketch regularly which has garnered press from the Denver Post. A frequent collaborator with the Nix Brothers, Rand is also featured in many Nix Bros videos. In 2013, she was awarded &quot;best actress&quot; for the Nix Bros film &quot;Love to Hate.&quot;  </p>\n<p>In 2014, Rand served as a host to 5 monthly showcases, 4 of which she produced herself. She is a regular at both the Denver Comedy Works and the Denver Improv where she has worked with such acts as Ron Funches, Baron Vaughn, Moshe Kasher, and Nick Thune. During the 2014 High Plains Comedy Festival, Rand won her round of Competitive Erotic Fan Fiction and served as the MC for the festival&#039;s grand finale show featuring acts like Beth Stelling, Billy Wayne Davis, and Pete Holmes. </p>\n<p>In late 2014, Rand was crowned the Moth StorySlam champion at the Denver debut of the Moth StorySlam. Since her win, she has been serving as a recurring host for the event.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_1031email.jpg", PerformerId:"9583", Twitter:"krandomthoughts", Website:"http://kristinrand.com", Position:"75", id:"9583", pageUrl:"9583-kristin-rand", ExcludeFromList:false, SortOrder:75, events:[], mc_events:[]}, {Name:"Nathan Brannon", Bio:"<p>Nathan was the winner of the Seattle International Comedy Competition in 2014, voted in Willamette Week&#039;s &quot;Portland&#039;s Funniest 5&quot; for 2013, and released his first comedy album &quot;I Black Out&quot; that same year. On top of that, he was the winner of Helium Comedy Club’s “Portland’s Funniest Person Comedy Competition” in 2012. Nathan has opened for national headliners such as Dave Chappelle, Damon Wayans, Maria Bamford, and has Photoshopped himself into photos with many more. The back of Nathan&#039;s head was seen in NBC’s new series, “Grimm”. Nathan is now seeking a funnier way to end this paragraph.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/8zwfqrz.jpg", PerformerId:"9453", Twitter:"nathanbrannon", Website:"http://nathanbrannon.com", Position:"76", id:"9453", pageUrl:"9453-nathan-brannon", ExcludeFromList:false, SortOrder:76, events:[], mc_events:[]}, {Name:"Jerron Horton", Bio:"<p>Jerron Horton is a stand up comedian from Atlanta, GA who currently resides in Hollywood.  He is a funny guy that made the right career choice.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jh_small.jpg", PerformerId:"9382", Twitter:"jerronhorton", Website:"", Position:"77", id:"9382", pageUrl:"9382-jerron-horton", ExcludeFromList:false, SortOrder:77, events:[], mc_events:[]}, {Name:"Noah Gardenswartz", Bio:"<p>Noah Gardenswartz was born and raised in Denver, Colorado, but spent years cutting his comedy teeth in the diverse rooms of Atlanta, Georgia. Noah now lives in Brooklyn, New York, and when he’s not touring, he performs all around the city, and co-hosts a monthly show called “Comedy Freaknik” at The Creek and the Cave. His comedy has been featured on TBS, Oxygen, Nat Geo TV, and in VICE Magazine. In 2012, Noah was named a semi-finalist in NBC’s “Stand Up For Diversity,” and in 2014 he was selected as one of the “New Faces” at the Montreal Just For Laughs Comedy Festival.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/ng_headshot.jpg", PerformerId:"9520", Twitter:"noahgcomedy", Website:"http://www.noahgcomedy.com", Position:"78", id:"9520", pageUrl:"9520-noah-gardenswartz", ExcludeFromList:false, SortOrder:78, events:[], mc_events:[]}, {Name:"Ever Mainard ", Bio:"<p>Ever&#039;s spontaneous characters, quick-witted anecdotes, and quirky mannerisms will have you laughing well after her performance.  Her background in improv gives her the ability to create visceral and borderline cathartic moments in her crowd work and off-the-cuff riffs.</p>\n<p>Featured on CNN, Jezebel and WBEZ, Ever Mainard has appeared on The Todd Glass Show, Daily Motion with Andy Daily, and has been in: RIOT LA (2015),San Francisco Sketchfest (2014), Just For Laughs Festival (2012, 2013), Bridgetown Comedy Festival (2012, Best of Bridgetown, Best of Chicago), Chicago Sketchfest, Chicago Women&#039;s Funny Festival (2012, Headliner), and many others.  She has worked with national headliners such as Ian Karmel, Jerrod Carmichael, Moshe Kasher, Maria Bamford, and Matt Braunger. </p>\n<p>Along with Louis C.K. and John Mulaney- Ever was listed as one of the Top Five Comics who could (successfully) tell a rape joke. </p>\n<p>Ever lives and works in Los Angeles, but she got her comedic start in Chicago where she was one of the city&#039;s best stand-ups and a cast member of the esteemed Chicago Underground Comedy.  She is also the co-founder/host/and producer of the multi-city show, The Shit Show.  Chicago Magazine credits her being one of the top 100 comics, Metromix/ Redeye says she&#039;s one of the Top Seven Acts to Watch in 2012, and Gaper&#039;s Block called her one of The Most Influential Women in Chicago Comedy.</p>\n<p>Ever is currently coordinating a tour of the northwest and is producing and hosting the LA branch of the critically acclaimed, The Shit Show and Last Book Review!</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/superss_ever_0_0.jpg", PerformerId:"9427", Twitter:"evermainard", Website:"http://www.evermainard.com", Position:"79", id:"9427", pageUrl:"9427-ever-mainard-", ExcludeFromList:false, SortOrder:79, events:[], mc_events:[]}, {Name:"Gabe Dinger", Bio:"<p>Portland native, Gabe Dinger, has been making audiences laugh for the last 10 years. His sharp wit, irreverent observations, and ability to improvise make Gabe’s shows varied and exciting. He has performed at several comedy festivals, including: Bridgetown Comedy Festival, Bumbershoot, and SF Sketchfest. As a member of the improv troupe Whiskey Tango, he has also performed in the LA Improv Festival, SF Sketchfest, and the Del Close Marathon in New York City. More notably Gabe was the first comedian to perform at a high security prison in the state of Oregon. The Portland Mercury has called him a “Punchline machine”.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/gabe_dinger.jpg", PerformerId:"9075", Twitter:"GabeDinger", Website:"http://www.GabeDinger.com", Position:"80", id:"9075", pageUrl:"9075-gabe-dinger", ExcludeFromList:false, SortOrder:80, events:[], mc_events:[]}, {Name:"Troy Walker", Bio:"<p>If you haven&#039;t heard yet, the Denver comedy scene is blowing up and comedian Troy Walker is one of the most talented local rising stars.</p>\n<p>Troy Walker has quickly become one of Denver&#039;s most sought-after comedians, a designation he&#039;d dismiss with a modest scoff, despite its accuracy. A regular at Comedy Works, Walker has won the Comedy Works &quot;New Faces&quot; contest twice.</p>\n<p>Walker has had the pleasure of opening for some of the most prominent comedians in the country and also serves as a fine ambassador of Denver comedy at national and local comedy festivals including The Aspen Rooftop Comedy Festival, The Great American Comedy Festival, The Laughing Skull Comedy Festival, Portland&#039;s Bridgetown Comedy Festival, The Telluride Comedy Festival, and most recently as one of Just for Laughs Montreal&#039;s New Faces of Comedy.</p>\n<p>After witnessing his storytelling abilities and commanding presence on-stage it should come as no surprise that he&#039;s also a licensed attorney who graduated from The University of Denver&#039;s Sturm College of Law.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/troy_11.jpg", PerformerId:"9839", Twitter:"troywalkeresq", Website:"http://www.gershcomedy.com/troy-walker/", Position:"81", id:"9839", pageUrl:"9839-troy-walker", ExcludeFromList:false, SortOrder:81, events:[], mc_events:[]}, {Name:"Jen Seaman", Bio:"<p>Jen Seaman brings to the stage an imaginatively whimsical and sometimes dark (well, let’s be honest, most of the time dark) style of humor for over seven years now. Seaman has performed at a variety of festivals including SF Sketchfest, Bumbershoot (Seattle), She-Devil Comedy Festival (New York), and the Women in Comedy Festival (Boston). </p>\n<p>She was recently featured on FOX&quot;s Laughs and was a judge’s favorite on Season 6 of NBC’s America’s Got Talent, which took her to Vegas. Seaman can been seen on Comedy Central’s AtomTV and was recently named Seattle’s Best Comedian by Seattle Weekly.</p>\n<p>Her bizarre upbringing, tales of a baby-obsessed mother and an unwavering desire to stay independent all play a part in making this sweet 5’1’’ spitfire one of the most unique stand-up comedians around!<br />\nWhen not on stage or writing Seaman can be found indulging in her other passion, baking, for her web series, “The Filling is Mutual.” “The Filling is Mutual” is a unique combination of sweets and laughs in which she and a fellow comedian use jokes as an inspiration for the creation of delicious treats.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jenseaman.jpeg", PerformerId:"10082", Twitter:"jenseaman", Website:"http://jenseaman.com", Position:"82", id:"10082", pageUrl:"10082-jen-seaman", ExcludeFromList:false, SortOrder:82, events:[], mc_events:[]}, {Name:"Lisa Best", Bio:"<p>Lisa Best is one of the exciting fresh faces making a name for herself in the Los Angeles comedy scene.  The Portland Monthly wrote that Lisa &quot;has a flair for turning embarrassing stories into comedy gold.&quot;  Lisa can be seen in sketches for Comedy Central and Funny or Die, as well as starring in the film &quot;Something Funny.&quot;  She has also been in some other things she was proud of until her parents asked &quot;What&#039;s that?&quot;, or &quot;But did you get paid?&quot; and &quot;Stop using our HBO Go password.&quot;</p>\n<p>Lisa performs standup comedy throughout Los Angeles, as well as in clubs, colleges, comic book conventions and homeless shelters around the country. With her quirky perspective and captivating knack for story-telling, Lisa is riveting audiences once stage at a time, forcing audience members to leave her shows saying &quot;the girl who looks like a little boy was good.&quot;</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/dsc_5832.jpg", PerformerId:"9326", Twitter:"lisabestcomedy", Website:"http://lisabestcomedy.com/", Position:"83", id:"9326", pageUrl:"9326-lisa-best", ExcludeFromList:false, SortOrder:83, events:[], mc_events:[]}, {Name:"Jason Van Glass", Bio:"<p>Master of the one-liner, and favorite comedian of servicemen and presidents alike, Jason Van Glass is one of the nation&#039;s most-beloved entertainers, a millionaire many times over, and a star in every category open to him -- vaudeville, radio, television and film, most notably a string of &quot;Road&quot; movies with longtime friend Bing Crosby. He performs regularly at clubs around Los Angeles including the Meltdown, the Comedy Store, and the Pasadena Icehouse, and has traveled countless miles to entertain troops in cities like Austin, Portland, Santa Cruz, San Luis Obispo, San Diego, San Francisco, and Fresno. The Bob Hope American Patriot Award is named in his honor.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jasonvanglass_headshot.png", PerformerId:"9780", Twitter:"JasonVanGlass", Website:"http://JasonVanGlass.tumblr.com", Position:"84", id:"9780", pageUrl:"9780-jason-van-glass", ExcludeFromList:false, SortOrder:84, events:[], mc_events:[]}, {Name:"Maggie Faris", Bio:"<p>Meet your new best friend, Maggie Faris. Maggie is noted for her ceaselessly cheerful personality and seemingly endless series of quirky, intelligent jokes dissecting our fears and social barriers.</p>\n<p>Maggie is a comedy competition assassin. Audiences and judges love her. She won the Minnesota Laugh off. Another competition win made Maggie the Public Address Announcer for the St. Paul Saints professional baseball team, which led to an appearance on ESPN™s Cold Pizza for her unique style and memorable announcements. She beat out Tig Notaro to win both the Funniest Clip of the Year and the Silver Nail award at the Aspen Comedy Festival. Curve magazine named Maggie Faris one of the Funniest Lesbians in America. She recently won The Advocate Magazine’s national search for the Next Funniest Queer Comedian. She was also voted “Best Comedian” by her Minnesota peers.</p>\n<p>Maggie has also been invited to perform at Boston Womens Comedy Festival, Gilda’s Laughfest, Out Loud Comedy festival in San Francisco, Laugh Your Asheville Off, and best of the fest in the 10,000 Laughs Festival and the first Madison Comedy Festival.</p>\n<p>Maggie has opened for such greats as Michael Che, Maria Bamford, Daniel Tosh, Kathleen Madigan, Louis Black, and Damon Wayans.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/36767_1469357810466_1129201296_1395612_6692132_n.jpg", PerformerId:"9660", Twitter:"extrememaggie", Website:"http://extrememaggie.com", Position:"85", id:"9660", pageUrl:"9660-maggie-faris", ExcludeFromList:false, SortOrder:85, events:[], mc_events:[]}, {Name:"Anthony Lopez", Bio:"<p>Anthony Lopez is a writer, comedian and a friend. He has written for the Gotham Independent Film Awards and the popular Portland based live talk show &quot;Late Night Action&quot;. He has performed at the Bridgetown Comedy Festival, Bumbershoot, UCB East, and is a regular at several comedy clubs throughout the Northwest. He was recently a finalist in the Portland Funniest Person Contest and is a host of the popular weekly showcase, &quot;Earthquake Hurricane.&quot;</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/anthony_lopez.jpg", PerformerId:"9953", Twitter:"anthonylopezpt2", Website:"", Position:"86", id:"9953", pageUrl:"9953-anthony-lopez", ExcludeFromList:false, SortOrder:86, events:[], mc_events:[]}, {Name:"Elicia Sanchez", Bio:"<p>Elicia Sanchez is a stand-up comedian, writer, comic book reader and mostly an adult who has been talking to strangers from stages all over the West Coast since 2010. Her self-deprecating, yet upbeat style has been described by The Capitol Hill Times as, \"...mad cap tales of social incompetence,\" while writer/activist Lindy West has called her, \"...a grumpy nugget of delight,\" and \"...one of the funniest people in Seattle, for serious.\" </p>\n<p>Elicia has performed at Bumbershoot, the Bridgetown Comedy Festival, the All Jane No Dick Comedy Festival, GeekGirlCon, Northwest Comedy Fest, Autostraddle’s A-Camp and has opened for comedians W. Kamau Bell (Totally Biased w/ W. Kamau Bell), Wyatt Cenac (The Daily Show) and is a regular opening act for comedian Hari Kondabolu (Late Show with David Letterman).  She has made appearances on the Seattle-based sketch TV show \"The [206],\" KJR-FM's \"The Bob Rivers Show,\" NPR's \"Latino USA\" and has written for websites Autostraddle, Capeless Crusader, Have You Nerd? and Jezebel. </p>\n<p>Elicia currently resides in Seattle, WA where when not performing stand-up or singing with her band Lightning Bolton (Seattle’s only all-female Michael Bolton comedy cover band) she enjoys splitting her time between drinking shots of wine, panic attacks on the bus and dusting her action figures.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/elicia_sanchez_head_shot.jpg", PerformerId:"9341", Twitter:"", Website:"", Position:"87", id:"9341", pageUrl:"9341-elicia-sanchez", ExcludeFromList:false, SortOrder:87, events:[], mc_events:[]}, {Name:"Lucas O&#039;Neil", Bio:"<p>A Chicago-based stand-up comic who performs regularly in showcases around the city—especially showcases in record shops and bookstores. A trained actor and improvisor, Lucas began stand-up in college, and after a brief period of actually earning a living as a copywriter, he committed to stand-up full-time. And the rest is poverty.  Funny poverty.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/lucas-oneil2_copy.jpg", PerformerId:"10031", Twitter:"loneilz", Website:"http://www.lucasoneil.com", Position:"88", id:"10031", pageUrl:"10031-lucas-oneil", ExcludeFromList:false, SortOrder:88, events:[], mc_events:[]}, {Name:"Jessica Sele", Bio:"<p>Jessica Sele is a deeply weird human being and stand-up comedian living in Oakland, CA. She frequently performs up and down the west coast and sometimes in Fargo. Jessica co-produces a popular weekly show every Thursday in San Francisco in the Cine Cave at Lost Weekend Video called the \"Mission Position,\" and can also be seen at the San Francisco Punchline or at most other regular comedy shows in the bay area. </p>\n<p>She has also performed in venues such as The Great American Music Hall, The Oakland Metropolitan Opera House and The Chapel. Her subject material ranges from sexuality to living in the end times to mental health issues and their related substance abuse habits, etc. Jessica’s comedy is often described as personal, emotionally raw, incisive and hilarious.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jessica-headshot.jpg", PerformerId:"9598", Twitter:"", Website:"", Position:"89", id:"9598", pageUrl:"9598-jessica-sele", ExcludeFromList:false, SortOrder:89, events:[], mc_events:[]}, {Name:"Jeff Scheen", Bio:"<p>Jeff Scheen is a comedian and writer who grew up in remote Holly, Michigan and began his career in Detroit. Since moving to Chicago, Jeff has become a regular at the Chicago Laugh Factory, Zanies, and several independent comedian run shows including his own &quot;This Weeks Show&quot; in Wrigleyville. </p>\n<p>     His off beat humor goes along nicely with his expressive yet creepy face. Growing up in northern Michigan surrounded by trees and dirt roads will make any kid a weirdo and Jeff has no problem telling you about it. Jeff has showcased at numerous theaters and festivals including The Cleveland Comedy Festival, Laugh your Asheville Off in North Carolina, and Laughfest in Grand Rapids Michigan.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/jeff_scheen_0.jpg", PerformerId:"9177", Twitter:"sexmascheen", Website:"http://Jeffscheen.com", Position:"90", id:"9177", pageUrl:"9177-jeff-scheen", ExcludeFromList:false, SortOrder:90, events:[], mc_events:[]}, {Name:"Adrian McNair", Bio:"<p>Adrian McNair is a San Francisco/Bay Area-based stand-up comic. He considers himself intelligent, though he can’t find a better way to put a degree from UC Berkeley to good use. He has been featured in SF Sketchfest, hosts the weekly Laugh Function Comedy Showcase in Berkeley and independently produces “The Book Was Better” Comedy Night in Oakland.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/comed_2.jpg", PerformerId:"10101", Twitter:"Adrian_McNair", Website:"", Position:"91", id:"10101", pageUrl:"10101-adrian-mcnair", ExcludeFromList:false, SortOrder:91, events:[], mc_events:[]}, {Name:"Jeffrey Jay", Bio:"<p>Jeffrey Jay is a comedy writer for the Feast of Fun podcast, host of the Two Black Women podcast, and a nationally touring college comedian and public speaker. He has been featured in The Advocate as one of  “The top 5 Transgender Comedians” and “7 LGBT Comics You Shouldn’t Have Missed in 2011,″ has been see on the CW morning show The Eye Opener, and was a finalist in The 2013 Funniest Comic in Texas. He has been featured in the Dallas Comedy Festival and in a currently airing national Hyundai commercial.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot2_0.jpg", PerformerId:"9439", Twitter:"heyjeffreyjay", Website:"http://jeffreyjaycomedian.com", Position:"92", id:"9439", pageUrl:"9439-jeffrey-jay", ExcludeFromList:false, SortOrder:92, events:[], mc_events:[]}, {Name:"Joel Kim Booster", Bio:"<p>Joel Kim Booster is a Chicago bred, Brooklyn based comedian and writer. His comedy can be seen at comedy clubs, colleges and bar basements all over the country. He was recently named by Paper Magazine as one of their &quot;10 Comedians You Need to Know.&quot; He writes regularly for sites like The Toast, Reductress, Decider and others. Previously he served as a co-writer and guest star on the camp comedy webseries Kam Kardashian. The series premiered at SXSW in 2013 and continues to get written about on various blogs, if you&#039;re into that.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/joel_kim_booster.jpg", PerformerId:"9552", Twitter:"ihatejoelkim", Website:"http://www.ihatejoelkim.com", Position:"93", id:"9552", pageUrl:"9552-joel-kim-booster", ExcludeFromList:false, SortOrder:93, events:[], mc_events:[]}, {Name:"Anthony Calderon", Bio:"<p>Originally from the small town of Ellensburg, WA, Anthony Calderon has been using humor to make his way through life since he first realized his casual observations about life caused others to pay attention. He has now performed all over the US on both coasts, Seattle, L.A, New York and Boston to name a few.<br />\nAnthony has graced over 300 stages with his presence, including the 2014 bumbershoot music and art festival and the 2014 Washington comedy festival. He continues to bring his one-of-a-kind blend of observational, physical comedy to crowds of all ages. Calderon’s talents aren’t limited to the microphone; he is also involved in cultivating the Seattle comedy scene. He founded “Punchline Tuesdays,” an open mic as well as “Punchline Fridays” a showcase, both continue to thrive in their fifth year.<br />\nHe has performed with some of the top comedians in country including Bret Ernst, Rory Scovel, Steve Rannazzisi and Alonzo Bodden. His high-energy performances and unique views of the world will keep you laughing and having fun. Don&#039;t miss your chance to see Anthony Calderon, one of the rising stars of comedy.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot2014_0.jpg", PerformerId:"10181", Twitter:"standupanthony", Website:"http://punchlinefridays.com", Position:"94", id:"10181", pageUrl:"10181-anthony-calderon", ExcludeFromList:false, SortOrder:94, events:[], mc_events:[]}, {Name:"Kevin Iso", Bio:"<p>Originally from Houston, Kevin Iso began performing stand up all across Texas before moving to New York where he has been honing his skills. As a true student of the game Kevin displays likeability and poise way beyond the years of a 22-year-old. Through his unique point of view, Kevin seamlessly blends cultures while appealing to all ages. This past year Kevin has performed at the Montreux Comedy Festival in Switzerland, the Funny or Die Oddball Festival, Comedy Central&#039;s Comics To Watch and will be featured on Axs TV&#039;s Gotham Comedy Live. He can currently be seen at premier clubs like Stand Up NY, Caroline&#039;s on Broadway and The Stand, as well as colleges across the country. On top of performing stand up, Kevin is the Co-Creator of the hit web-series Moderately Funny.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kevin_iso.jpg", PerformerId:"10025", Twitter:"keviniso", Website:"http://keviniso.tumblr.com/", Position:"95", id:"10025", pageUrl:"10025-kevin-iso", ExcludeFromList:false, SortOrder:95, events:[], mc_events:[]}, {Name:"Leah Kayajanian", Bio:"<p>Now based in Los Angeles, Leah Kayajanian grew up in Oklahoma, where in 2009, she won the title &quot;Funniest Person in Oklahoma City.&quot; Since moving to L.A. in 2011, Leah has gained momentum on the comedy scene, becoming a regular at the World Famous Comedy Store in 2013 and performing on high profile shows such as Holy Fuck, Big Money, The Tomorrow Show, and Sleepaway Camp. She has is also the co-producer of a weekly show called The Workout Room, which runs out of her very own backyard in LA.  In September 2014, she made it through two auditions to perform on the Semi-Final Showcase for Stand Up NBC.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/bridgetownphoto.jpg", PerformerId:"9324", Twitter:"leahkayjay", Website:"http://www.leahkayajanian.com", Position:"96", id:"9324", pageUrl:"9324-leah-kayajanian", ExcludeFromList:false, SortOrder:96, events:[], mc_events:[]}, {Name:"Kevin Saucier", Bio:"<p>Kevin Saucier likes to tell jokes and rollerblade, and he does both as often as he can. He produces a show called SHAKE with comedian Shalewa Sharpe, and can be seen regularly at the Laughing Skull Lounge and the Improv Comedy Club in Atlanta, Georgia.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/kevinsaucier.jpg", PerformerId:"9977", Twitter:"sosure", Website:"http://sosure.tumblr.com", Position:"97", id:"9977", pageUrl:"9977-kevin-saucier", ExcludeFromList:false, SortOrder:97, events:[], mc_events:[]}, {Name:"Ismael Loutfi", Bio:"<p>Ismael Loutfi is a sweet boy. Just look at that face. You probably want to bring him home to mom. Underneath that sweetness lies a deeply acerbic sense of humor, the sort of thing you might develop growing up a Muslim in Ocala, Fl. Now living in Atlanta, GA, Ismael has quickly become a favorite of the city’s exploding comedy scene. He’s a regular at the Laughing Skull Lounge and Atlanta Improv, and has been featured on The Fest in Gainesville alongside Chris Gethard.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/pic.jpg", PerformerId:"10128", Twitter:"Ismaelian", Website:"", Position:"98", id:"10128", pageUrl:"10128-ismael-loutfi", ExcludeFromList:false, SortOrder:98, events:[], mc_events:[]}, {Name:"Matt Donaher ", Bio:"<p>Matt has performed stand-up on Conan. Comedy Central named Matt one of 10 &quot;Comics to Watch.&quot; He was a character on the new Jonathan Katz series &quot;Explosion Bus,&quot; and after winning the 2012 Magner’s Comedy Festival he was invited to perform in the Glasgow International Comedy Festival in Scotland. In 2011 Matt was one of the twenty comedians hand picked by David Letterman’s Talent Coordinator to perform in the Johnny Carson Great American Comedy Festival in Norfolk, NE where he went on to be a top eight finalist. That same year Eugene Mirman invited him to perform at the Eugene Mirman Comedy Festival in New York and was voted the Best Comedian in Boston by the Boston Phoenix.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/992826_619581368076598_1475969497_n.jpg", PerformerId:"9208", Twitter:"mattdonaher", Website:"http://www.mattdonaher@gmail.com", Position:"99", id:"9208", pageUrl:"9208-matt-donaher-", ExcludeFromList:false, SortOrder:99, events:[], mc_events:[]}, {Name:"Ryan Conner", Bio:"<p>I&#039;m from Washington DC, and now live in Los Angeles. I tour nationally as a stand-up and write for MTV&#039;s Ridiculousness. Let&#039;s be friends.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/ryanconner_0.jpg", PerformerId:"10217", Twitter:"rccomedy", Website:"http://www.ryanconnercomedy.com", Position:"100", id:"10217", pageUrl:"10217-ryan-conner", ExcludeFromList:false, SortOrder:100, events:[], mc_events:[]}, {Name:"Shane Torres", Bio:"<p>Shane Torres is a stand up comedian and writer. You may have seen him in the background on &quot;Last Comic Standing&quot; or acting on IFC’s &quot;Comedy Bang Bang&quot; in 2013. He was part of Montreal Just For Laugh’s New Faces that same year. Shane was also one of Comedy Central’s Comics to Watch in 2012. Shane has performed at festivals all over the country, including Bridgetown Comedy Festival, Bumbershoot Music and Arts Festival, and many more.</p>\n<p>He is the creator of the podcast radio show &quot;Help Wanted.&quot; Shane has also contributed writing to Laughspin, the Portland Mercury, and Nailed Magazine. He also hates writing bios.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/images.jpg", PerformerId:"9979", Twitter:"syrupmountain", Website:"http://www.shaneisacomedian.com", Position:"101", id:"9979", pageUrl:"9979-shane-torres", ExcludeFromList:false, SortOrder:101, events:[], mc_events:[]}, {Name:"Sean Jordan", Bio:"<p>In 2014 Sean was named the funniest person in Portland by the Willamette Week magazine--it&#039;s been a very good year. He was also a finalist in the 2014 Portland’s Funniest Person contest, The Tacoma Comedy contest and The Wenatchee Comedy Festival.  Sean has become a nationally touring comic, having traveled all over doing stand up at some of the best clubs in the country, including ACME Comedy Club in Minneapolis, Helium Comedy Club in Portland, Zanies in Nashville and Chicago and the Dallas Improv, to name a few.  Sean has also been a part of the Bridgetown Comedy Festival, The Bumbershoot Comedy and Arts Festival, The Wenatchee Comedy Festival and Cromfest.  If you’re a podcast fan then you may have heard him on the Crabfeast, The Benson Interruption or as a regular guest on Doug Benson’s podcast Doug Loves Movies.  Sean also produces and performs in the #1 independent comedy showcase in Portland, Funny Over Everything.  Happy all the time, loves to skateboard and eat burritos and/or pizza, that best describes Sean. :)  SOUTH DAKOTA!</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/greenshirt1.jpg", PerformerId:"9790", Twitter:"seansjordan", Website:"http://about.me/seanjordan", Position:"102", id:"9790", pageUrl:"9790-sean-jordan", ExcludeFromList:false, SortOrder:102, events:[], mc_events:[]}, {Name:"Ralph Hardesty", Bio:"<p>Ralph Hardesty is a die-hard Midwesterner who, after a series of indelible life mistakes, eventually wound up acting and doing standup in Austin, where Ralph is on 24/7 crotch watch (the straight guys in Texas do not wear underwear under their basketball shorts).</p>\n<p>Hardesty has performed at festivals all over this great land including Fun Fun Fun Fest, Moontower Comedy &amp; Oddity Festival, Bridgetown Comedy Festival, the Ladies Are Funny Festival (though he is male, he is no less a lady) and the San Francisco Comedy &amp; Burrito Festival, which was delicious. Moms love him.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/ralph_hardesty_headshot_bridgetown.jpg", PerformerId:"9353", Twitter:"ralphiehardesty", Website:"http://www.ralphiehardesty.com", Position:"103", id:"9353", pageUrl:"9353-ralph-hardesty", ExcludeFromList:false, SortOrder:103, events:[], mc_events:[]}, {Name:"Scout Durwood", Bio:"<p>Scout Durwood, also known as “Lady Scoutington,” is an acclaimed chanteuse and comedienne who was recently named one of The Huffington Post&#039;s “20 Burlesque Stars to Know,” Funny Not Slutty’s “10 Women Who Rock Comedy” and Stand Up Talk’s “Five Awesome Women’s Musical Comedy Acts.” Originally from Mission Hills, Kansas, Scout worked as a cabaret singer in New York City before heading to Los Angeles to pursue a career in mainstream comedy. As a stand-up comic, Scout has toured nationally and is known for her unique blend of storytelling, music and whimsy, spreading laughter and joy wherever she and her ukulele may roam. Scout is the author of four solo shows, including the one-woman musical, “Hi, How Can I Help You?” which debuted at the Edinburgh Festival Fringe. She is a Moth StorySLAM Champion whose work has been featured on MTV, “The Howard Stern Show” and “The Mindy Project.” Scout recently recorded her debut comedy EP which she hopes to release this spring.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/scout_durwood_1143.jpg", PerformerId:"9661", Twitter:"ladyscoutington", Website:"http://www.scoutdurwood.com", Position:"104", id:"9661", pageUrl:"9661-scout-durwood", ExcludeFromList:false, SortOrder:104, events:[], mc_events:[]}, {Name:"Samaria Sam Jay Johnson ", Bio:"<p>When asked how long she has been doing comedy Samaria (Sam Jay) Johnson smiles and replies “For as long as I could speak.&quot; Hailing from Boston, MA, a city that is no stranger to comedic prowess, a place that can lay claim to the comedic talents of Jay Leno, Louis C.K., Conan O&#039;Brien and many others, Sam Jay is setting her own stage. Some would say the fact that she’s female, African American, and a lesbian has allowed her to stand out in a male-dominated industry. But it is moreso how she can take these experiences and make them not only funny but relatable. Witty, candid, and raw, she is bringing about a brand of comedy that has yet to be seen. Provoking audiences by pushing their thinking while still giving her sets the feel of a barroom conversation with one of your funniest friends, her familiar personality on and off stage has allowed her to build quite the buzz in and around Boston comedy circles. Her 2013 invite to Laugh Your Asheville Off Comedy Festival and her 2014 acceptance into the Women In Comedy Festival, along with her recent trip to the Stand Up NBC 2014 NYC semifinals , her recent showing in RiotLA as well as an invite to the HBO/ABFF 2014 comedy wings semifinals, has the industry talking about this young lady.  Opening for power house/veteran acts like Hannibal Burress (Comedy Central), and Rob Stapleton (Comedy Central) has not only helped this rising star hone her skills but has allowed her to branch out, booking shows up and down the east coast.  Performing at comedic institutions from Gotham NYC, Comedy Store LA, Ice House LA, to the Comedy Studio in Cambridge, MA, Sam Johnson is wowing audiences and building her fan base.  Her fresh, unique and warm approach makes Sam Jay a comedian worth seeing and one you will be talking about long after you do.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/samaria.jpg", PerformerId:"9978", Twitter:"SamJayComic", Website:"http://jokesanddreams.com", Position:"105", id:"9978", pageUrl:"9978-samaria-sam-jay-johnson-", ExcludeFromList:false, SortOrder:105, events:[], mc_events:[]}, {Name:"Rhea Butcher", Bio:"<p>Rhea Butcher grew up in Akron, Ohio as a skateboarder and a printmaker. She moved to Chicago after a series of grad schools, and cut her teeth comically at The Second City and iO before eventually landing in standup. Rhea brings a James Dean type cool to her highly personal jokes. She has performed in clubs such as Zanies (Chicago), Comedy Works (Denver), The Jukebox (Peoria), and The Improv (LA); as well as alternative comedy instititions like Chicago Underground Comedy and The Lincoln Lodge (Chicago), The Meltdown, UCB (Los Angeles), Union Hall and The Bell House (Brooklyn). She was part of the 2013 Bridgetown Comedy Festival, Cleveland Accidental Comedy Festival, SF Sketchfest, and the first ever Atlantic Ocean Comedy &amp; Music Festival. </p>\n<p>You can also catch Rhea in Buzzfeed’s “Ask A Lesbian” webseries, live show/podcast Put Your Hands Together, and movie podcast Wham Bam Pow.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/rheabutcher.jpg", PerformerId:"9138", Twitter:"rheabutcher", Website:"http://www.rheabutcher.com", Position:"106", id:"9138", pageUrl:"9138-rhea-butcher", ExcludeFromList:false, SortOrder:106, events:[], mc_events:[]}, {Name:"Zak Toscani", Bio:"<p>Zak is a stand-up comedian who lives in Portland, OR. He has performed at the Bumbershoot Music &amp; Arts Festival, San Francisco Sketchfest and the Bridgetown Comedy Festival. You may have also seen him perform at Helium Comedy Club, Go Bananas, the Tacoma Comedy Club, and Seattle&#039;s Comedy Underground as well as other stages both intimate and large.</p>\n<p>In the three short years he has been performing, he has been lucky enough to share the stage with Jon Dore, Kyle Kinane, Pete Holmes, and TJ Miller to name a few. His style melts like an artisan cheese into both the honest and the silly, much like Dom DeLuise&#039;s lasagna recipe.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/zak_toscani_headshot_0.jpg", PerformerId:"9164", Twitter:"ZakToscani", Website:"http://about.me/ZakToscani", Position:"107", id:"9164", pageUrl:"9164-zak-toscani", ExcludeFromList:false, SortOrder:107, events:[], mc_events:[]}, {Name:"Ray Marshall", Bio:"<p>Ray Marshall is a New York based stand up comedian and writer. He has entertained audiences at Caroline’s, The Comic Strip, Gotham Comedy Club, Stand Up New York and various other top venues in NYC and the Tri-state area. He was a New York Semi Finalist in the 2012 NBC Stand up for Diversity Competition and has appeared on Comedy Time TV twice. He credits growing up in New York City with helping him to mold an analytical, laid back on stage persona that has entertained diverse audiences across the Country.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/ray-marshall-bodyguard_photo_2_0.jpg", PerformerId:"9692", Twitter:"MARSHALLCOMIC", Website:"http://bridgetown.festivalthing.com/N/A", Position:"108", id:"9692", pageUrl:"9692-ray-marshall", ExcludeFromList:false, SortOrder:108, events:[], mc_events:[]}, {Name:"Parker Postyeni", Bio:"<p>Based out of Seattle, Parker Postyeni (who definitely needs a more recent head shot) has been preforming across the northwest for over 3 whole years! He first preformed at the Bridgetown comedy festival in 2013 and has since preformed in the Seattle international comedy competition, the San Francisco International Comedy Competition,  and won the 2014 Washington Comedy Festival! Know for having an intellect much higher than his energy level, and a voice far lower than his self esteems, Parker Postyeni is a comic he doesn&#039;t want you to miss!</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/1_0.jpg", PerformerId:"9703", Twitter:"ParkerPostyeni", Website:"", Position:"109", id:"9703", pageUrl:"9703-parker-postyeni", ExcludeFromList:false, SortOrder:109, events:[], mc_events:[]}, {Name:"T.J. Chambers", Bio:"<p>The previous year was a breakout one for this delightfully scruffy Los Angeles-based writer and performer.  Mr. Chambers made his (international!) television debut on Channel Four&#039;s massively popular special &quot;50 Funniest Moments of 2014&quot;, worked as writer and producer for shows on Fox, NBC, and Lifetime, and was a regular fixture on some of comedy&#039;s most nerve-wracking shows like Setlist and Competitive Erotic Fan Fiction.  One time he even successfully pulled off the rare triple-denim (jeans, jean shirt, denim jacket) vaulting him into minor celebrity in the tight-knit (pun intended) denim world.  Appearances at San Diego Comic-Con, Stan Lee&#039;s Comikaze, and his role as one of the Kings of Cosplay Comedy justified a lot of pre-teen nerdery, and his combination of edgy smarts with a dash of whimsy entertained audiences at home and abroad.  Also, you know, he&#039;s generally a nice dude or whatever.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/bw-cropped.jpg", PerformerId:"9087", Twitter:"tjchambersLA", Website:"https://www.youtube.com/user/tjchambers27/", Position:"110", id:"9087", pageUrl:"9087-tj-chambers", ExcludeFromList:false, SortOrder:110, events:[], mc_events:[]}, {Name:"Mark James Heath", Bio:"<p>Mark James Heath is a  comedian, writer, and actor who hails from Chicago, IL now making his home in Toronto. Alumni from NBC&#039;s Stand Up for Diversity Initiative, he was spotted by Mark Breslin when opening up for Hannibal Buress. He now plays clubs, colleges, fundraisers, theatres, and private/corporate functions all over the U.S. and Canada.  </p>\n<p>A Hiphop nerd, Mjh has a poetic sensibility and dynamic rhythm that capture any audiences&#039; ear and attention. His unique observations and experience as a husband and father give him a range of insights from politics to potty training to pop culture. Mjh is an old soul with a young energy, who approaches subjects with an open mind and a southern charm.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mjh2_0.jpg", PerformerId:"9787", Twitter:"Mjh708", Website:"", Position:"111", id:"9787", pageUrl:"9787-mark-james-heath", ExcludeFromList:false, SortOrder:111, events:[], mc_events:[]}, {Name:"Matteo Lane", Bio:"<p>Nyc based comic who sings opera and paints :)</p>\n<p>Current cast member on MTV&#039;s &#039;Guy Code&#039;. Also just featured on comedy centrals &quot;Adam Devines house party&quot;</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_17.jpg", PerformerId:"9662", Twitter:"Matteolane", Website:"", Position:"112", id:"9662", pageUrl:"9662-matteo-lane", ExcludeFromList:false, SortOrder:112, events:[], mc_events:[]}, {Name:"Veronica Heath", Bio:"<p>Veronica Heath was born in San Francisco, CA and entered the Portland, OR comedy scene in 2006, with a strong presence. It didn&#039;t take long before she was spreading her neurosis and joy all over the West Coast and opening for some of the best comedians around.</p>\n<p>Veronica has had roles in 3 seasons of the IFC sketch show ‘Portlandia’. In 2007, she finished as a finalist in the Stephen Colbert Portland Amateur Comedy Competition, and she is a six time alum of the Bridgetown Comedy Festival. When she’s not busy getting divorced or fighting rheumatic diseases, you can find her performing at comedy clubs, theaters, casinos, and festivals all over the West Coast and beyond. Additionally, she and one of her writing partners are working on a screenplay for a hopeful Lifetime movie.</p>\n<p>When you think of Veronica Heath, think of an anxious unicorn and top shelf cranberry meets low shelf vodka, and then just let it happen.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/veronica_heath_2.jpg", PerformerId:"10188", Twitter:"veronicaheath1", Website:"http://veronicaheath.com", Position:"113", id:"10188", pageUrl:"10188-veronica-heath", ExcludeFromList:false, SortOrder:113, events:[], mc_events:[]}, {Name:"Mac Blake", Bio:"<p>Mac Blake comes from the bearded streets of Austin, TX. In 2013 he performed at the New Faces of Comedy Showcase at Just for Laughs Montreal and won the Funniest Person in Austin contest. Mac has also performed at SXSW Comedy, the Moontower Comedy and Oddity Festival, Funny or Die’s Oddball Festival, Fun Fun Fun Fest, and more. You can also find Mac performing with the sketch group STAG Comedy, co-hosting the stand-up showcase Jazz Cigarette with his buddy Joe Hafkey, or being one of the producers of Austin Sketch Fest.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mac_blake.jpg", PerformerId:"9280", Twitter:"macbdazzler", Website:"http://macblakecomedy.com", Position:"114", id:"9280", pageUrl:"9280-mac-blake", ExcludeFromList:false, SortOrder:114, events:[], mc_events:[]}, {Name:"Sonia Denis", Bio:"<p>Sonia Denis is a Chicago-based comedian by way of Washington, DC. Sonia’s stand-up can be described as confessional, frenetic and another cool adjective.</p>\n<p>Sonia has performed in the Comedy Exposition of 2014, the Women’s Funny Festival, Snubfest, and the Cape Fear Comedy Festival. She has also performed at Zanies, Second City, UP, Jokes and Notes, Riddles Comedy Club, and Chicago Underground Comedy (ChUC). She co-hosts a popular Chicago open mic at Cole’s Bar every Wednesday. She’s also a co-producer of Congrats on Your Success (CoYS), a monthly stand-up showcase that has been featured in the Chicago Reader and Time Out Chicago.</p>\n<p>&quot;Sonia is by far one of the most hilarious women making a name for herself in comedy,&quot; says AfterEllen.com</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/10548091_10102916484264008_2744518814731360048_o.jpg", PerformerId:"9860", Twitter:"sonideni", Website:"http://sonideni.tumblr.com/about", Position:"115", id:"9860", pageUrl:"9860-sonia-denis", ExcludeFromList:false, SortOrder:115, events:[], mc_events:[]}, {Name:"Raj Sivaraman", Bio:"<p>Raj Sivaraman is a writer, comedian, and writer/comedian (Oh! And scientist!). He is one of the co-hosts of the Universe City podcast, which breaks down scientific papers for mainstream audiences. In addition to performing across the country in a variety of comedy festivals, he has presented his research at many international scientific conferences. As a sketch writer, he released an album in 2012 entitled “In Case of Emergency” and was one of the main writers/performers for Boston News Net. As a smart person, he&#039;s appeared on Jeopardy!, and asked out Kate Middleton before she met some other guy.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_raj.jpg", PerformerId:"9799", Twitter:"rajsivaraman", Website:"http://rajsivaraman.com", Position:"116", id:"9799", pageUrl:"9799-raj-sivaraman", ExcludeFromList:false, SortOrder:116, events:[], mc_events:[]}, {Name:"Nore Davis", Bio:"<p>Nore, the young refreshing face of comedy, delivers an energetic performance filled with witty quips and sharp punch lines, combined with an amazing stage presence. Edgy and clean, Nore tells it like it is, speaking to audiences everywhere. Nore is a comedian for the masses, relating to everyone from teens to the mature adult, delivering original content, and leaving no topic unturned.  Nore had the honor of performing as a new face at Montreal&#039;s world famous Just For Laughs Festival in 2014. Most recent credits include &quot;Boardwalk Empire&quot; on HBO, &quot;Inside Amy Schumer&quot; and &quot;The Ruckus&quot; on Comedy Central, &quot;nickmom Night Out&quot; and &quot;Gotham Comedy Live&quot; on AXS TV. This past fall Nore released his debut stand-up album &quot;Home Game&quot; with Rooftop Comedy so check it out! Look out for this rising star, as he reinvents comedy one laugh at a time.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/_hr1_davisnore0714.jpg", PerformerId:"9114", Twitter:"noredavis", Website:"http://noredavis.com", Position:"117", id:"9114", pageUrl:"9114-nore-davis", ExcludeFromList:false, SortOrder:117, events:[], mc_events:[]}, {Name:"Rana May", Bio:"<p>Rana May’s deadpan delivery and punk rock sensibility make her comedy different than anything you might have seen before. She has a self-proclaimed issue with authority – but loves dogs – which is why she is so ambivalent about police dogs. Something she loves and hates wrapped up in such a medium fluffy package.</p>\n<p>Rana has been featured locally in the City Pages and on Minnesota Public Radio. You can see her performing all over the Twin Cities producing and hosting shows under the Kill It! moniker (open mic, comedy-oke, and open mic brunch). You could also catch her reading at the long running Riot Act Reading Series, the Irregular Reading Series, at the Loft Literary Center or doing comedy on various club stages. She’s has opened for national headliners such as Mary Mack, Tim Harmston, and Neil Hamburger.</p>\n<p>Rana is the winner of Rick Bronson’s House of Comedy 2014 Funniest Person with a Day Job Contest.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/rana-may-_headshot_1.jpg", PerformerId:"9808", Twitter:"rana_may", Website:"http://ranamay.com", Position:"118", id:"9808", pageUrl:"9808-rana-may", ExcludeFromList:false, SortOrder:118, events:[], mc_events:[]}, {Name:"Sean White", Bio:"<p>Called a “Gem” by RE:Com Chicago Comedy magazine, “Killing it” by the Chicago Tribune, and “Fearless” by ComedyofChicago.com, Sean White was just listed as one of the top 16 comics in Chicago by Chicago Magazine “with jokes that look misery straight in the eye” and has been performing over 8 years in clubs across 3 countries. His brutally honest style of quick thought-provoking material landed him in the finals of the Hong Kong International Comedy Competition with entrants from over 11 countries, and his debut album &quot;Dead and Gone&quot; was called “an essential rumination about loss” by the Chicago Tribune with “a point of view unique among comics.&quot; Originally from Alabama, Sean is now located in Chicago and can be seen in showcases, clubs, and family reunions throughout the Midwest and South.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/hshot1.jpeg", PerformerId:"9116", Twitter:"seanwhitecomedy", Website:"http://seanwhitecomedy.com/", Position:"119", id:"9116", pageUrl:"9116-sean-white", ExcludeFromList:false, SortOrder:119, events:[], mc_events:[]}, {Name:"Paige Bowman", Bio:"<p>Paige Bowman&#039;s act is a charming blend of relatable yet embarrassing personal anecdotes told with zero shame and no apologies. Paige&#039;s 21st century everywoman comedy has endeared her to audiences across the country. She has been a resident comedian at Atlanta&#039;s Laughing Skull Lounge and performs regularly in Atlanta and the southeast. In 2013, Paige was selected to appear on IFC as a part of Rooftop Comedy&#039;s &#039;A Comedy Moment&#039; Moment.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_n48isa7tyh1smk5o2o1_1280.jpg", PerformerId:"9820", Twitter:"paigopolis", Website:"http://paigopolis.tumblr.com", Position:"120", id:"9820", pageUrl:"9820-paige-bowman", ExcludeFromList:false, SortOrder:120, events:[], mc_events:[]}, {Name:"Matt Pharr", Bio:"<p>For the past ten years Atlanta-born comedian Matt Pharr has been honing his stand-up skills around the south and up the east coast. Getting his start in rockabilly/punk rock clubs, it&#039;s not surprising that hints of the southern outlaw spirit shine through in his performances. Matt&#039;s sense of humor and rebellious nature came together when he and his friends opened an illegal comedy club/speakeasy in an abandoned church in Atlanta, paying off local law enforcement, and bringing in some of the best comics in the country to perform.  </p>\n<p>With Matt&#039;s easygoing demeanor, he tackles divisive topics such as police brutality, abortion, and drugs in a way that allows the audience to laugh regardless of their stance on an issue. It&#039;s not all heavy topics, though. Matt stacks the deck by alternating between silly and important subject matter. It&#039;s not at all uncommon for a bit about police murdering an unarmed person to be followed by a joke about how the city of Dubai should add the prefix &quot;shooby&quot; to its name. </p>\n<p>Although raised in poverty by a single mother, Matt feels as though he has had some advantages, especially when it comes to comedy. &quot;When your mom has a drinking problem and your dad did some stints in mental institutions, there&#039;s a pretty fine chance that you&#039;re going to be funnier than most people,&quot; he says. </p>\n<p>On his recent move to Los Angeles: &quot;I rode across the country, bringing with me my only possessions: a motorcycle, some T-shirts, a gun, and one bullet. Sometimes, when you follow your dreams, you end up with a motorcycle, some T-shirts, a gun, and one bullet.&quot;</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mattpharr.jpg", PerformerId:"9479", Twitter:"mattpharrcomic", Website:"", Position:"121", id:"9479", pageUrl:"9479-matt-pharr", ExcludeFromList:false, SortOrder:121, events:[], mc_events:[]}, {Name:"Bryan Yang", Bio:"<p>Bryan Yang is a stand up comedian based in New York City. He’s originally from Sacramento, CA where he began his comedy career. Yang relocated to New York because he heard there was a pretty good comedy scene there. </p>\n<p>Bryan was named one of Buzzfeed’s &quot;Top 14 Comedians You Should Be Paying Attention To.&quot; He was number 12 on the list, so he barely made it. </p>\n<p>Some of the places Yang has performed at include the Sacramento Punchline, San Francisco Punchline, Cobb’s Comedy Club, Gotham Comedy Club, and the UCB Theatre. He mostly performs in the basement of bars though. There were too many bars to list.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/16544.jpg", PerformerId:"9381", Twitter:"bryanyang", Website:"", Position:"122", id:"9381", pageUrl:"9381-bryan-yang", ExcludeFromList:false, SortOrder:122, events:[], mc_events:[]}, {Name:"Rob Schultz", Bio:"<p>Rob Schultz is a stand-up comedian in Los Angeles, CA who has performed at SF Sketchfest in 2013-15, the 2013 Sacramento Comedy Festival, a fish restaurant in Portland, OR, and at various Los Angeles landmarks with his traveling monthly show The Hike Mic. </p>\n<p>He is also the co-host of the weekly Gangbusters! Comedy Enjoyment Show, a submissions editor of the daily humor magazine TheHiggsWeldon.com, a member of the Upright Citizens Brigade&#039;s LA Digital group, and a video editor with credits on feature films, cable TV, and all manner of shorts and web things. And he still feels super lazy.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/rob-bruin_0.jpg", PerformerId:"9182", Twitter:"greenglassdoor", Website:"http://www.normalwebsite.com", Position:"123", id:"9182", pageUrl:"9182-rob-schultz", ExcludeFromList:false, SortOrder:123, events:[], mc_events:[]}, {Name:"Mitch Mitchell", Bio:"<p>Originally from a census-designated place in Montana, Mitch Mitchell dropped out of art school after two semesters and got a job on an ambulance. With an offbeat sense of humor and a healthy variety of jokes, Mitch has been seen performing at Bumbershoot and the Seattle International Comedy Competition as well as an assortment of poorly lit restaurants, bars and basements in the greater Seattle area and Portland.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/1025764_10151483619709135_1226120215_o_1.jpg", PerformerId:"9327", Twitter:"ClassyMitch", Website:"", Position:"124", id:"9327", pageUrl:"9327-mitch-mitchell", ExcludeFromList:false, SortOrder:124, events:[], mc_events:[]}, {Name:"Caitlin Weierhauser", Bio:"<p>Caitlin Weierhauser spent her childhood in an Ewok tree fort with her rubber band cross-bow, her wolf, and her budding resentment of The Man. She grew up to be a feminist, atheist, and vegan liar that creates safe spaces for queer comedy.<br />\nCaitlin is a member of Lez Stand Up, has performed on All Jane No Dick Comedy Festival, Grrrl Front, Not Enough! Fest, and won The Moth StorySLAM in December. She was recently included in the AfterEllen list of &quot;40 Hot Queer Ladies in Comedy,&quot; and plans to take down the patriarchy by Christmas.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/caitlinw.jpg", PerformerId:"9972", Twitter:"grapetheist", Website:"", Position:"125", id:"9972", pageUrl:"9972-caitlin-weierhauser", ExcludeFromList:false, SortOrder:125, events:[], mc_events:[]}, {Name:"David Mascorro", Bio:"<p>David Mascorro has an unrelenting, energetic soul. David started his pursuit of comedy in Chicago, and went through improv training at the Annoyance Theater and Second City before turning his sights on stand-up. </p>\n<p>David draws people in with his natural charisma, while proceeding to keep the laughs going with an infectious energy. When audiences hear David tell personal stories from his life, they instantly feel connected to him like a long lost friend. </p>\n<p>David is currently based out of Portland, OR and has quickly become a local favorite on the scene. He produces multiple showcases, including Funny Humans Vs The Wheel (a comedy game show) and The Awkward Phase, a storytelling show/podcast about childhood memories.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/dm.jpg", PerformerId:"9846", Twitter:"davidmascorro", Website:"http://www.davidmascorro.com/", Position:"126", id:"9846", pageUrl:"9846-david-mascorro", ExcludeFromList:false, SortOrder:126, events:[], mc_events:[]}, {Name:"Mike Recine ", Bio:"<p>Mike Recine is either the smartest dumb guy or the dumbest smart guy in the room. He’s performed stand-up on Conan, written for the MTV Video Music Awards, performed as a New Face in the Montreal Just for Laughs Festival, and been nominated for Time Out New York’s Joke of the Year. Since his first open mic as a teenager in Jersey, he’s performed at nearly every comedy venue in NYC, blending observation and personal storytelling with a pitch-perfect dark wit. Catch him live across NYC to see one of the only guys Brooklyn hipsters and Jersey slobs can agree on.</p>\n", PhotoUrl:"http://bridgetown.festivalthing.com/sites/default/files/images/performers/mike.recine_1.jpg", PerformerId:"10382", Twitter:"mikerecine", Website:"http://www.mikerecine.com/about-mike/", Position:"127", id:"10382", pageUrl:"10382-mike-recine-", ExcludeFromList:false, SortOrder:127, events:[], mc_events:[]}];

});
define('bridgetowncomedy/fixtures/show', ['exports'], function (exports) {

  'use strict';

  /*jshint -W100 */
  exports['default'] = [{
    Name: "Dr. Katz, Professional Therapist: a 20th Anniversary Celebration",
    Copy: "The Bridgetown Comedy Festival is proud to present a live production of Dr. Katz, Professional Therapist in celebration of the 20th anniversary of the Comedy Central debut of the groundbreaking animated program that showcased dozens of comedy legends including Conan O&#039;Brien, Ray Romano, Louis CK, Dave Chappelle and Mitch Hedberg. For the live presentation, host Jonathan Katz welcomes special guests Janeane Garofalo (24, Mr. Show, The Ben Stiller Show), Andy Kindler (The Late Show with David Letterman, Last Comic Standing), Dana Gould (The Simpsons), Brendon Small (Metalocalypse, Home Movies) and surprise guests.\r\n\r\nTickets available at https://www.ticketfly.com/purchase/event/796489",
    Bio: "The Bridgetown Comedy Festival is proud to present a live production of Dr. Katz, Professional Therapist in celebration of the 20th anniversary of the Comedy Central debut of the groundbreaking animated program that showcased dozens of comedy legends including Conan O&#039;Brien, Ray Romano, Louis CK, Dave Chappelle and Mitch Hedberg. For the live presentation, host Jonathan Katz welcomes special guests Janeane Garofalo (24, Mr. Show, The Ben Stiller Show), Andy Kindler (The Late Show with David Letterman, Last Comic Standing), Dana Gould (The Simpsons), Brendon Small (Metalocalypse, Home Movies) and surprise guests.\r\n\r\nTickets available at https://www.ticketfly.com/purchase/event/796489",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/drkatz.jpg",
    SubmittedId: "10354",
    Position: "1",
    id: "10354",
    pageUrl: "10354-dr-katz-professional-therapist-a-20th-anniversary-celebration",
    events: []
  }, {
    Name: "Andy Kindler&#039;s Particular Show",
    Copy: "Andy chooses from his rolodex (Rolex?) of comedy superstars from LA and around the world (New York) to present a hilarious (his words) and very Particular show. Andy’s the host. It’s his party and he will do time in between each comic if he wants to.\r\n \r\nAndy Kindler is a frequent guest on The Late Show with David Letterman.  He currently recurs on IFC’s Maron, Comedy Central’s Tosh.O and is Mort the Mortician on Fox’s hit animation show Bob’s Burgers.",
    Bio: "Andy chooses from his rolodex (Rolex?) of comedy superstars from LA and around the world (New York) to present a hilarious (his words) and very Particular show. Andy’s the host. It’s his party and he will do time in between each comic if he wants to.\r\n \r\nAndy Kindler is a frequent guest on The Late Show with David Letterman.  He currently recurs on IFC’s Maron, Comedy Central’s Tosh.O and is Mort the Mortician on Fox’s hit animation show Bob’s Burgers.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bridgetownparticularshow.jpg",
    SubmittedId: "10314",
    Position: "2",
    id: "10314",
    pageUrl: "10314-andy-kindlers-particular-show",
    events: []
  }, {
    Name: "Baked",
    Copy: "Baked is an evening of music and comedy hosted by Brendon Small (Metalocalypse, Home Movies) and Steve Agee (The Sarah Silverman Program, New Girl, Adventure Time) and an incredibly talented band including Joe Travers (Zappa Plays Zappa, Mike Keneally Band), Pete Griffin (Zappa Plays Zappa, Dethklok), and Mike Keneally (Mike Keneally Band)*. After a yearlong residency at LA&#039;s world famous jazz club The Baked Potato, Baked travels north to force its musical and comedic ethos onto the inhabitants of Portland and ultimately destroy their brains. Join us for a show in which comics are encouraged to perform in a musical capacity after a set of standup comedy.\r\n\r\n*band lineup subject to change",
    Bio: "Baked is an evening of music and comedy hosted by Brendon Small (Metalocalypse, Home Movies) and Steve Agee (The Sarah Silverman Program, New Girl, Adventure Time) and an incredibly talented band including Joe Travers (Zappa Plays Zappa, Mike Keneally Band), Pete Griffin (Zappa Plays Zappa, Dethklok), and Mike Keneally (Mike Keneally Band)*. After a yearlong residency at LA&#039;s world famous jazz club The Baked Potato, Baked travels north to force its musical and comedic ethos onto the inhabitants of Portland and ultimately destroy their brains. Join us for a show in which comics are encouraged to perform in a musical capacity after a set of standup comedy.\r\n\r\n*band lineup subject to change",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/baked_square.jpg",
    SubmittedId: "10371",
    Position: "3",
    id: "10371",
    pageUrl: "10371-baked",
    events: []
  }, {
    Name: "7 Minutes in Purgatory",
    Copy: "Seven Minutes in Purgatory is a high-concept comedy show that has been hailed as an “outrageous experiment” by the Chicago Tribune. Host and co-creator of Seven Minutes in Purgatory, Ian Abramson, challenges comedians to perform their material to a camera alone in a soundproof room. Audience members will watch a live feed of the comedians, as they awkwardly and hilariously attempt to perform without knowing the crowd&#039;s reaction.\r\n\r\n\r\n",
    Bio: "What happens when a comedian doesn&#039;t know how the audience is responding? Seven Minutes in Purgatory challenges comedians to perform a tight seven minute set in a soundproof room while the audience watches a live stream of their set.\r\n\r\nSeven Minutes in Purgatory isolates performers from any type of audience feedback, offering audiences a chance to witness stand-up comics attempting to do their act without the benefit of knowing how they&#039;re doing. In eliminating one of the essential elements of traditional live comedy, Seven Mintues In Purgatory amplifies the comics&#039; neuroses, giving fans a different perspective on their favorite performers. The live-streamed element gives performers the chance to experiment within these newfound conceptual constraints. At past shows, performers have called audience members to check in on how their set&#039;s going, staged fights with audience plants, and auditioned for appearances on The Voice. \r\n\r\nWe&#039;ve taken Seven Minutes in Purgatory on the road this year, to Atlanta&#039;s Laughing Skull Lounge in September, as well as a two week tour of the Midwest in November, staging pop-up shows in Denver, Omaha, St. Louis, and Kansas City. The show has been featured in The A.V. Club, Chicago Tribune, and the Chicago Reader, and has sold out every Chicago show to date.\r\n\r\nSeven Minutes in Purgatory was created by Ian Abramson, who was recently named Chicago&#039;s best Experimental Comedian by Chicago Magazine and has been described as &quot;one of the smartest, weirdest and funniest guys on the scene&quot; by the Chicago Tribune, and Matt Byrne, a Chicago-based comedy producer who recently co-founded the Comedy Exposition, a stand-up comedy festival in Chicago. Matt also runs The Steamroller, a blog about Chicago&#039;s comedy scene.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/poster_by_j_michael_osborne.jpg",
    SubmittedId: "9113",
    Position: "4",
    id: "9113",
    pageUrl: "9113-7-minutes-in-purgatory",
    events: []
  }, {
    Name: "The CrabFeast Podcast",
    Copy: "",
    Bio: "The CrabFeast is a podcast hosted by comedians Ryan Sickler and Jay Larson.  The show focuses on storytelling with new episodes every Toozdee.\r\nThe chemistry between Ryan and Jay enables them to take the conversation anywhere, often making light of some heavier subjects.  They make their guests feel like family and their listeners feel like they’re sitting around sharing stories with old friends. \r\nPart of the All Things Comedy family, they’ve appeared on Ovation’s ‘The Art of Comedy’, TBS&#039;s ‘The Pete Holmes Show’, Live at the LA Podfest, The Damon Bruce Radio Show and were finalists in the 2013 Stitcher Awards for Best Comedy Podcast.  \r\nPull up a chair, grab a coupla cold ones and celebrate the things that Ryan and Jay love most — storytelling, family, friends and comedy.\r\n\r\n#FTCF *****\r\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/2014_crabfeast_atc_logo_black.jpg",
    SubmittedId: "9639",
    Position: "5",
    id: "9639",
    pageUrl: "9639-the-crabfeast-podcast",
    events: []
  }, {
    Name: "Competitive Erotic Fan Fiction",
    Copy: "Comedians compete writing and performing Erotic Fan Fiction pieces, based upon their whims or audience suggestion. It’s really stupid.",
    Bio: "Comedians compete writing and performing Erotic Fan Fiction pieces, based upon their whims or audience suggestion. It’s really stupid.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/ceff_podcast_logo.jpg",
    SubmittedId: "10344",
    Position: "6",
    id: "10344",
    pageUrl: "10344-competitive-erotic-fan-fiction",
    events: []
  }, {
    Name: "The K Ohle with Kurt Braunohler",
    Copy: "The K Ohle is a multi-format podcast hosted by comedian Kurt Braunohler. FORMATS INCLUDE (but are not limited to): The Boat Show – &quot;The Best Non-Boating Boat Show on the Internet&quot; -- Kurt and his guests talk at length about boating, a topic of which they have no knowledge. PETophilia – “The Animal Show for People Who Think Animals are Dumb” – guests get into it about their pets; plus, Animal Stories of the Week, Fact Animal Facts, and Who’s Dumber, the fun game the humiliates animals! Get Lost! – “This Feels a Bit Rape-y” - Every episode, Kurt takes a guest into his car, blindfolds them, drives them somewhere they’ve never been, and they have to figure out where they are and how they’d get back. And they have some chats along the way. FactTime - Kurt and co-host Matt Oberg unpack and investigate improvised stories from comedians while applying faulty scientific theories in a very produced and tightly edited format. If you love Radiolab, you&#039;ll love FactTime.",
    Bio: "The K Ohle is a multi-format podcast hosted by comedian Kurt Braunohler. FORMATS INCLUDE (but are not limited to): The Boat Show – &quot;The Best Non-Boating Boat Show on the Internet&quot; -- Kurt and his guests talk at length about boating, a topic of which they have no knowledge. PETophilia – “The Animal Show for People Who Think Animals are Dumb” – guests get into it about their pets; plus, Animal Stories of the Week, Fact Animal Facts, and Who’s Dumber, the fun game the humiliates animals! Get Lost! – “This Feels a Bit Rape-y” - Every episode, Kurt takes a guest into his car, blindfolds them, drives them somewhere they’ve never been, and they have to figure out where they are and how they’d get back. And they have some chats along the way. FactTime - Kurt and co-host Matt Oberg unpack and investigate improvised stories from comedians while applying faulty scientific theories in a very produced and tightly edited format. If you love Radiolab, you&#039;ll love FactTime.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/k-ohle.jpg",
    SubmittedId: "10320",
    Position: "7",
    id: "10320",
    pageUrl: "10320-the-k-ohle-with-kurt-braunohler",
    events: []
  }, {
    Name: "Dork Forest with Jackie Kashian",
    Copy: "Jackie Kashian discusses favorite obsessions with the obsessed. Video games, Comic Books, Birdwatching. How deep in the dork forest are you? Celebrate it and f*&amp;%$, make it your own! ",
    Bio: "Jackie Kashian discusses favorite obsessions with the obsessed. Video games, Comic Books, Birdwatching. How deep in the dork forest are you? Celebrate it and f*&amp;%$, make it your own! ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/image.png",
    SubmittedId: "10298",
    Position: "8",
    id: "10298",
    pageUrl: "10298-dork-forest-with-jackie-kashian",
    events: []
  }, {
    Name: "Funny Over Everything",
    Copy: "The Funny Over Everything comedy showcase is a monthly series showcasing some of the best, most innovative up-and-coming stand-up comedians that the nation has to offer. Past performers include Moshe Kasher, Ron Funches, Hannibal Buress, Jerrod Carmichael, Doug Benson, Peter Serafenowitz, Sean Patton, Beth Stelling, Nate Bargatze, Emily Heller, Ian Karmel, Timmy Williams, Sean Jordan and Shane Torres.\r\n",
    Bio: "A standup showcase of some of the top, somewhat unknown to the mainstream, comics in North America. Hosted by Sean Jordan, and featuring sketch by Phil Schallberger. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/funny-over.png",
    SubmittedId: "10199",
    Position: "9",
    id: "10199",
    pageUrl: "10199-funny-over-everything",
    events: []
  }, {
    Name: "Blaria",
    Copy: "Comedians Phoebe Robinson &amp; Jessica Williams host this monthly stand up show based on the popular blog of the same name and the show features the best comics from all over the country.",
    Bio: "Comedians Phoebe Robinson &amp; Jessica Williams host this monthly stand up show based on the popular blog of the same name and the show features the best comics from all over the country.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/jess_phoebe.jpeg",
    SubmittedId: "10042",
    Position: "10",
    id: "10042",
    pageUrl: "10042-blaria",
    events: []
  }, {
    Name: "Brew HaHa: The Comedy Show Drinking Game",
    Copy: "One part comedy show, two parts drinking game, Brew Haha is a hilarious interactive mix of standup comedy and your favorite pre-party ritual.  At the beginning of every show, the hosts introduce the crowd to a set of rules created specifically for that show.  When a comic, unbeknownst to them, breaks a rule, the audience drinks. A giant light-up “drink” sign will help you play along.  A second game, specifically for the performers, ensures that as the audience gets toastier, so do the comedians.\r\n\r\nThe rules are simple, but nobody is forced to participate, and the hosts ensure everyone gets home safe. So strap on your party hat and make sure you experience the show that a super famous comedian once called “the worst idea for a show ever”.",
    Bio: "One part comedy show, two parts drinking game, Brew Haha is an interactive mix of standup comedy and your favorite pre-party ritual.  At the beginning of every show, the hosts tell fun stories from past parties and then introduce the crowd to a set of rules created specifically for that show.  When a comic, unbeknownst to them, breaks a rule, the audience drinks. A giant light-up “drink” sign will help the audience play along.  Examples of rules include, &quot;every time a comic uses a funny voice, or sings&quot;, &quot;every time a comic talks about a romantic relationship past or present&quot;, or &quot;every time a comic tries to guess a rule&quot;.  A second game, specifically for the performers, ensures that as the audience gets drunker, so do the comedians.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/brewhaha_clean.jpg",
    SubmittedId: "9710",
    Position: "11",
    id: "9710",
    pageUrl: "9710-brew-haha-the-comedy-show-drinking-game",
    events: []
  }, {
    Name: "Nerdist&#039;s Sex Nerd Sandra Podcast",
    Copy: "Curious about the naughty side of life? Come giggle with Sandra at the cuddly side of the sex pool! Exploring fascinating topics &amp; perspectives on sex &amp; love, join sexuality educator Sandra Daugherty &amp; special guests for a loving laugh at the fundamentals of human nature.\r\n\r\nSandra is known the world over for her podcast, “Sex Nerd Sandra.” At once irreverent and educational, the show has earned a top spot on iTunes. Its loyal listenership (over 8 million downloads) is vocal about Sandra’s impact, describing her as “inspiring” with “contagious enthusiasm” and an “awesome nerd-like ability that [she’s] not afraid to show.” Her weekly podcast has run since 2011 under the Nerdist Industries banner with no end in sight. $20 All Ages (recommended for mature audiences)\r\n\r\n***\r\nAbout Sex Nerd Sandra:\r\n\r\nSandra Daugherty punches sexual shame in the face. The sex educator is a firm believer in the right to healthy intimate experiences and the skills that get us there.\r\n\r\nSandra is known the world over for her podcast, “Sex Nerd Sandra.” At once irreverent and educational, the show has earned a top spot on iTunes. Its loyal listenership (over 8 million downloads) is vocal about Sandra’s impact, describing her as “inspiring” with “contagious enthusiasm” and an “awesome nerd-like ability that [she’s] not afraid to show.” Her weekly podcast has run since 2011 under the Nerdist Industries banner with no end in sight.\r\n\r\nHer professional journey began in 2009 normalizing sexuality through sex-positive workshops and she continues to teach as well as appearing across other platforms including web and TV shows, podcasts, documentaries, panels, lectures, personal coaching and consulting.\r\n\r\nHer background in cultural anthropology, philosophy and broadcast journalism provide crucial lenses through which she views her work. Sandra has completed the comprehensive sex educator training program provided by San Francisco Sex Information (SFSI), attends professional conferences and workshops regularly and devours literature on all related topics with retention equal to her curiosity.\r\n\r\nBrimming with book smarts and street smarts, Sandra is passionately committed to creating a safe space for each person’s unique intimate needs. Her methods include heavy doses of physical comedy, playful insight and surprising disclosure.\r\n\r\nBorn and raised in Los Angeles, she is an avid traveler and lover of big questions.",
    Bio: "Lighthearted, sex-positive and curiosity driven, I am always amazed at how brilliantly the podcast gives comedian ample material for laughs. Previously co-hosted with Dave Ross,  I explore a topic a week. While comedy leaning myself, I love playing an awkward straight man with naive questions to the many comedians who come on the show. \r\n\r\nFresh from 2 wonderfully successful shows at SF Sketchfest, one on multiple orgasms and the other on friends with benefits, I&#039;m hoping to do something that even further highlights comedians. I&#039;ve been wanting to do a show on urban dictionary terms (slightly @midnigh-like) or interview a Portland sex club manager with the help of a few comics. \r\n\r\nI just think it would be silly fun. Plus last time I was there we sold out Dante&#039;s, so I know I have an audience at Bridgetown. Thanks for considering!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/sandra_shocked_final.jpg",
    SubmittedId: "10203",
    Position: "12",
    id: "10203",
    pageUrl: "10203-nerdists-sex-nerd-sandra-podcast",
    events: []
  }, {
    Name: "Hound Tall Discussion Series with Moshe Kasher ",
    Copy: "The Hound Tall discussion series is a live podcast, hosted by Moshe Kasher, that takes a single topic and figures out the mysteries of the universe. An hour long chat with an expert and a panel of comedians, they learn all there is to know about things. And also laugh at them.",
    Bio: "The Hound Tall discussion series is a live podcast, hosted by Moshe Kasher, that takes a single topic and figures out the mysteries of the universe. An hour long chat with an expert and a panel of comedians, they learn all there is to know about things. And also laugh at them.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/hound_tall.jpeg",
    SubmittedId: "10291",
    Position: "13",
    id: "10291",
    pageUrl: "10291-hound-tall-discussion-series-with-moshe-kasher-",
    events: []
  }, {
    Name: "Talk Show: The Game Show",
    Copy: "Beloved comedian Guy Branum hosts the ultimate test of banter in a thrilling combination of America’s two least respected television formats. Three guests face off to prove who’s the best talk show guest by plugging, name-dropping, and anecdoteing their way to victory. ",
    Bio: "&quot;Beloved comedian Guy Branum hosts the ultimate test of banter in a thrilling combination of America’s two least respected television formats. Three guests face off to prove who’s the best talk show guest by plugging, name-dropping, and anecdoteing their way to victory. &quot;\r\n\r\nAs far as show format, it&#039;s a 60-90 minute show. Guy hosts and does a quick monologue, scorekeeper and judges are introduced, and then one guest comes out at a time for a timed interview/competition round. After all 3 guests have been interviewed/competed, the last round is a lightning round of question answering and the winner is revealed. \r\n\r\nSo could use 3 comics that will already be up there, and even judges as I&#039;m sure some of the people going have done the show before in LA or NY. Scorekeeper is usually Whitmer Thomas or Jay Weingarten but I assume any younger adorable comedian that Guy can lovingly objectify while they keep tally will suffice.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/guy_branum-_ts_tgs_promo.jpg",
    SubmittedId: "10212",
    Position: "14",
    id: "10212",
    pageUrl: "10212-talk-show-the-game-show",
    events: []
  }, {
    Name: "Probably Science",
    Copy: "The hit podcast in which three professional comedians who are also incompetent scientists take you through this week in science. Incompetently. Featuring Matt Kirshen (Jimmy Fallon, Craig Ferguson, Nerdist, Last Comic Standing), Andy Wood (Jason Nash Is Married, MOCKpocalypse), Jesse Case (Just For Laughs, Live At Gotham, Last Comic Standing), with special guests from the world of science and comedy.\r\n\r\nPast guests have included Chris Hardwick, Karen Gillan, Rhys Darby, Peter Serafinowicz, Gallagher (sorry about that one), The Sklar Brothers and TJ Miller, not to mention actual scientists such as Dr. Sean Carroll and Dr. Janna Levin and astronaut Chris Hadfield.\r\n\r\nIt&#039;s the most topical, up-to-date, half-assed science, delivered straight to you in bite-sized comedy chunks.",
    Bio: "The hit podcast in which three professional comedians who are also incompetent scientists take you through this week in science. Incompetently. Featuring Matt Kirshen (Jimmy Fallon, Craig Ferguson, Nerdist, Last Comic Standing), Andy Wood (Jason Nash Is Married, MOCKpocalypse), Jesse Case (Just For Laughs, Live At Gotham, Last Comic Standing), with special guests from the world of science and comedy.\r\n\r\nPast guests have included Chris Hardwick, Karen Gillan, Rhys Darby, Peter Serafinowicz, Gallagher (sorry about that one), The Sklar Brothers and TJ Miller, not to mention actual scientists such as Dr. Sean Carroll and Dr. Janna Levin and astronaut Chris Hadfield.\r\n\r\nIt&#039;s the most topical, up-to-date, half-assed science, delivered straight to you in bite-sized comedy chunks.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/probablysciencesallyart.jpg",
    SubmittedId: "10372",
    Position: "15",
    id: "10372",
    pageUrl: "10372-probably-science",
    events: []
  }, {
    Name: "The Dana Gould Hour",
    Copy: "Comedian Dana Gould takes a look at our world… through his eyes… for your benefit. Joined by fellow comedians and other interesting people with a focus on the weird and the real. Conversation. Music. Monologues. ",
    Bio: "Comedian Dana Gould takes a look at our world… through his eyes… for your benefit. Joined by fellow comedians and other interesting people with a focus on the weird and the real. Conversation. Music. Monologues. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/dghs04e01_360.jpg",
    SubmittedId: "10347",
    Position: "16",
    id: "10347",
    pageUrl: "10347-the-dana-gould-hour",
    events: []
  }, {
    Name: "The OkCupid Show",
    Copy: "Real people, real dates, live on stage in front of a real audience. \r\n\r\nRemember that time you sat next to that awkward couple on a first date and couldn&#039;t help but listen in? Fascinating, right? This show takes that moment and puts it on stage - no more hiding your eavesdropping behind a menu. Love scientists Amanda Sitko and Eli Newell guide a real dude through three real dates with three real ladies and it gets real weird. \r\n\r\nThe OkCupid Show has been playing to sold out houses at the Upright Citizens Brigade Theater in Los Angeles for the last four years and is finally making its way up to the Great NorthWest. Featuring some of LA&#039;s top improvisers, this show takes you on a journey you&#039;ll never forget. ",
    Bio: "We get a real guy from OkCupid and set him up on three blind dates with three real ladies from OkCupid - all live on stage. Amanda and Eli (and the audience) coach the guy through the awkwardness and obstacles of each date. As a bonus, each date is interrupted by some fictional character from the guys&#039;s past who just happens to be in the restaurant. \r\n\r\nThe OkCupid Show has been running at UCB for almost four years now and we are currently working with Sony to develop it for TV.\r\n\r\nThis show is reality tv on stage. It is weird and awkward and intense and super hilarious. A funny car crash you can&#039;t stop watching.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/okc_blank_1.jpg",
    SubmittedId: "10220",
    Position: "17",
    id: "10220",
    pageUrl: "10220-the-okcupid-show",
    events: []
  }, {
    Name: "Heart of Darkness",
    Copy: "        The Heart of Darkness\r\nThe World&#039;s most important live event. \r\n A Transformative act of psychomagic. \r\n\r\n ‘Heart Of Darkness’: a psychedelic showcase of comedy, live music and fringe scientists that is a frequent Time Out New York critic’s pick, much loved by BrooklynVegan and hailed as ‘Excellent’ by The New Yorker.\r\n\r\n“Barris’s show features crazed comedy, live music and bizarro antics  — a mixture that landed it its 20th sold-out show in a row in Brooklyn.”\r\n         - LA Times\r\n\r\nThis is an article on me and the show from The Village Voice: http://www.villagevoice.com/2010-06-22/theater/new-york-comics-go-laughing-into-heart-of-darkness/ \r\n\r\nwe have been named a &#039;Critics PIc&#039; by Time Out New York for years. \r\n\r\n&quot;The Union Hall show Fred Armisen performed at, Heart of Darkness, regularly features darlings from the world of music and comedy spanning from Ted Leo to Reggie Watts. It&#039;s always hosted by Greg Barris and his house band The Forgiveness, who also backed up Armisen&quot;  -huffington post\r\n\r\n&quot;at the bimonthly, bicoastal comedy event called Heart of Darkness, the atmosphere is more of a communal gathering. Comics like Reggie Watts share their jokes almost campfire-style, backed with a house band that can shift the mood from light-hearted to trippy to introspective&quot; - the village voice  \r\n\r\n“Greg Barris is the perfect\r\ncombination of very good \r\nlooking, hilarious and \r\nsuper-weird”   \r\n      -Paper Magazine​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\r\n ",
    Bio: "Hi . \r\n\r\n  I&#039;ve been thinking about doing my show Heart of Darkness at Bridgetown for a few months now.  I think it would be a very perfect fit. \r\n\r\nEach show has a guest speaker we call a &#039;Mind Warrior&#039;, 2-3 comedians and a musical guest. In the past we&#039;ve had Mind Warriors  Graham Hancock,  Heather Berlin Ph.D, Dennis Mckenna ,  Andrew W.K., Daniel Pinchbeck and many more, as well as comedians Janeane Garofalo, Jim Gaffigan and Reggie Watts, Chelsea Peretti, Fred Armisen, Jim Gaffigan, Michael Showalter among many others.   The show is a themed variety show featuring 3 comics, a scientist and a musical guest with a house band and me hosting. The audience is also very involved: we bring an audience member on stage to sit in the &#039;I love you chair&#039; and at the end of the show we forgive everyone for their sins getting as many as we can by going into the audience.  I&#039;ll book comics that will already be coming to Bridgetown and contact a few local bands. I&#039;ve performed in Portland a decent amount of times and know musicians and am confident it would be easy to pull off. \r\n\r\nThe show is a way for artists and audience members to participate and collaborate in ideas and experience something that will only happen once.  \r\n\r\nI just did one at the Brooklyn Museum and will be in LA this Feb to do the Cinefamily and then the Hollywood Improv in March.  \r\n\r\nI would really love to do as many as I could in Bridgetown.  it would be most most excellent.  \r\n\r\nlove,\r\nGreg\r\n\r\n\r\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/10562479_10152679710938934_1004616428426174128_o.jpg",
    SubmittedId: "9933",
    Position: "18",
    id: "9933",
    pageUrl: "9933-heart-of-darkness",
    events: []
  }, {
    Name: "The Grawlix",
    Copy: "Based in Denver, Colorado, The Grawlix is the world&#039;s best comedy show that consists of Adam Cayton-Holland, Andrew Orvedahl and Ben Roy. A combination of sketch, video and stand-up (let&#039;s be honest, mostly stand-up) the Grawlix has performed at such festivals as Bridgetown, SXSW, The New York Comedy Festival, Riot LA, Crom Comedy Festival and the High Plains Comedy Festival. The Grawlix recently filmed a pilot for TRU TV entitled &quot;Those Who Can&#039;t.&quot; The process swelled their heads and egos, but not to the point where they are totally insufferable. Yet. www.grawlixcomedy.com",
    Bio: "Based in Denver, Colorado the Grawlix consists of comics Adam Cayton-Holland, Andrew Orvedhal and Ben Roy. The three of us host the show with a sketch up top - sweet, sweet banter between the three of us - and then some standup with a video or two thrown in for good measure. After much experimentation we&#039;ve found that the up-front with the three of us, then a video, then pretty much a stand-up show after that (with the three of us taking turns MCing, usually with some running through-line we conceive on the fly) is the best way to pull this show off. We&#039;ve done The Grawlix at Bridgetown before, as well as SXSW, The New York Comedy Festival, Riot LA and the High Plains Comedy Festival. We also just filmed a pilot for TRU TV and by the time Bridgetown rolls around we could very well have had that pilot picked up so we&#039;ll be MEGA HUGE STARTS BUT STILL WITH HUMBLE ATTITUDES AND GOOD TIME VIBES. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/grawlixomaha.jpg",
    SubmittedId: "10111",
    Position: "19",
    id: "10111",
    pageUrl: "10111-the-grawlix",
    events: []
  }, {
    Name: "Hecklevision",
    Copy: "This special film screening is presented in HECKLEVISION: Through the magic of MuVChat technology, your jokes, heckles and commentary are encouraged - in TEXT form! Tap out your wittiest wisecracks with your phone and they&#039;ll appear instantly on screen. Special guests [to be determined] will hang out to crack jokes via text with you and a few hundred of your best friends! ",
    Bio: "Hey folks! I&#039;d love to feature a Hecklevision screening as part of Bridgetown 2015. I want to go back to the film that started it all for me: HACKERS. (But I&#039;m also open to suggestions!)\r\n\r\nHecklevision is a top secret technology that allows you to use your cellphone to text heckles, jokes and commentary to a special number that displays your comments on screen instantly as the movie plays. My personal tweak on the format is inviting special guests - we feature comedians and have worked with the software developer to add an option to make sure the jokes/comments from our &quot;VIP&quot; guests stand out.\r\n\r\nWe generally choose movies that are cheesy, bizarre and awful but we still love to watch (and probably saw on cable many many times growing up). Highlights have been films like HACKERS, ROCKY IV, OVER THE TOP, SPACE JAM, etc. We even had a hell of a lot of fun with ROBOCOP, although that one is close to my heart. Generally we get close to 100 attendees.\r\n\r\nThis would be a great low-pressure show and a really cool opportunity for me to introduce out-of-towners to Hecklevision, which I plan to program for the Alamo Drafthouse when it opens in LA, too. \r\n\r\nNOTE - Photo I uploaded is the old poster, but an example of what I would produce for this one.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/hecklevision-bridgetown.jpg",
    SubmittedId: "9492",
    Position: "20",
    id: "9492",
    pageUrl: "9492-hecklevision",
    events: []
  }, {
    Name: "THE TINKLE TWINS! (with Arden Myrin and Dana Gould!)",
    Copy: "The Tinkle Twins stars Dana Gould (The Simpsons, Mob City) and Arden Myrin (Chelsea Lately, Orange Is the New Black) as douchey identical twins. It is a monthly show at Nerdmelt Showroom at Meltdown Comics in Los Angeles. The Tinkle Twins have no idea that the fact that they are a man and a woman, are different ages and have different parents would make it impossible for them to be exact replicas of one another. The Twins host a jacked-up fake kids show with stand up guests, characters and music. The twins set the joyful creepy mood for the first 30 minutes of the show. Eddie Pepitone plays the arch nemesis of the Tinkle Twins. He hates Arden the most.",
    Bio: "The Tinkle Twins stars Dana Gould (The Simpsons, Mob City) and Arden Myrin (Chelsea Lately, Orange Is the New Black) as douchey identical twins. It is a monthly show at Nerdmelt Showroom at Meltdown Comics in Los Angeles. The Tinkle Twins have no idea that the fact that they are a man and a woman, are different ages and have different parents would make it impossible for them to be exact replicas of one another. The Twins host a jacked-up fake kids show with stand up guests, characters and music. The twins set the joyful creepy mood for the first 30 minutes of the show. Eddie Pepitone plays the arch nemesis of the Tinkle Twins. He hates Arden the most.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/tinkle.jpg",
    SubmittedId: "10325",
    Position: "21",
    id: "10325",
    pageUrl: "10325-the-tinkle-twins-with-arden-myrin-and-dana-gould",
    events: []
  }, {
    Name: "The Mike Eagle Show/Secret Skin Live",
    Copy: "What happens when Open Mike Eagle brings together comics, hip-hop artists, and writers in a room? Music, conversation, and comedy. This is The Mike Eagle Show: Secret Skin live. After the success of Secret Skin on the Infinite Guest Podcast Network, Open Mike Eagle is bringing the live experience to the stage with special guests.",
    Bio: "Open Mike Eagle is an L.A. based hip-hop artist. On Secret Skin, he and his guests examine what’s really going on behind the face that comics and hip-hop artists put on for the public. The in-jokes. The heavy stuff. The tour stories. The day-to-day struggles and absurdities of being a working musician. The Secret Skin.\r\n\r\nDeveloping from the Mike Eagle variety shows that took place in LA, Seattle, San Francisco, New York, and Atlanta, Mike Eagle&#039;s Secret Skin Live combines the comedy and rap performances of his live show with a quick-fire interview format that allows each performer to illuminate their story in a way that their peformance might not allow. Interviews are edited together to create special live episodes of the Secret Skin podcast\r\n\r\npast stand up guests: Hannibal Buress, James Adomian, Cameron Esposito, Chris Gethard, Baron Vaughn, Greer Barnes and many more\r\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/tumblr_ndptbthiaq1qetalto1_500.jpg",
    SubmittedId: "10230",
    Position: "22",
    id: "10230",
    pageUrl: "10230-the-mike-eagle-showsecret-skin-live",
    events: []
  }, {
    Name: "Roustabout",
    Copy: "Kurt Braunohler&#039;s brand of comedy could be described as &quot;high-energy absurdity from an approachable stranger&quot; but he prefers to describe his brand as &quot;Doritos&quot;.\r\n\r\nKurt was named a &quot;Comic To Watch&quot; by Variety, Time Out NY, Time Out LA, Comedy Central, and the NY Comedy Festival.  On TV, Kurt has been seen on CONAN, The Tonight Show, Delocated, Comedy Central Presents, BUNK, John Oliver Presents, @Midnight, Chelsea Lately, Bob&#039;s Burgers, New Girl, Drunk History, Getting Doug with High, Adam Devine&#039;s House Party and more.\r\n\r\nKurt rode a jet ski from Chicago to New Orleans on a seven city water tour/ charity mission to send 500 goats and 1,000 chickens to families in need in Africa. The adventure was filmed by Comedy Central and Kurt&#039;s nine episode &quot;Roustabout&quot; webseries is now availble on cc.com.   \r\n\r\nHis debut comedy album How Do I Land? made AV Club, Paste Magazine, Village Voice, and Time Out New York&#039;s  Best Of lists.   His popular podcast &quot;The K Ohle&quot; airs weekly on the Nerdist Network.",
    Bio: "Kurt Braunohler&#039;s brand of comedy could be described as &quot;high-energy absurdity from an approachable stranger&quot; but he prefers to describe his brand as &quot;Doritos&quot;.\r\n\r\nKurt was named a &quot;Comic To Watch&quot; by Variety, Time Out NY, Time Out LA, Comedy Central, and the NY Comedy Festival.  On TV, Kurt has been seen on CONAN, The Tonight Show, Delocated, Comedy Central Presents, BUNK, John Oliver Presents, @Midnight, Chelsea Lately, Bob&#039;s Burgers, New Girl, Drunk History, Getting Doug with High, Adam Devine&#039;s House Party and more.\r\n\r\nKurt rode a jet ski from Chicago to New Orleans on a seven city water tour/ charity mission to send 500 goats and 1,000 chickens to families in need in Africa. The adventure was filmed by Comedy Central and Kurt&#039;s nine episode &quot;Roustabout&quot; webseries is now availble on cc.com.   \r\n\r\nHis debut comedy album How Do I Land? made AV Club, Paste Magazine, Village Voice, and Time Out New York&#039;s  Best Of lists.   His popular podcast &quot;The K Ohle&quot; airs weekly on the Nerdist Network.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/roustabout-title-logo.png",
    SubmittedId: "10319",
    Position: "23",
    id: "10319",
    pageUrl: "10319-roustabout",
    events: []
  }, {
    Name: "Uncalled Four",
    Copy: "Comedians and live audiences come together to make a show for Bridgetown&#039;s worst people: Uncalled Four. When posed ridiculous questions generated by those in attendance, comedians draw from a deck of their own creation to give the most twisted and hilarious answers. Performing stand-up to start the show, each comic has a chance to win over the crowd by giving them a glimpse into their psyche. During the game show,  audience members win prizes and serve as judge and jury to see which anonymously entered card is truly Qthe worst (read: best) of the round.",
    Bio: "Formerly known as &quot;Comics Against Civility&quot;, this comedy game show is loosely based on Cards Against Humanity. Four comedians create decks of 20 offensively hilarious ideas (&quot;Subjecting white people to actual suffering.&quot; or &quot;A burka for your fleshlight.&quot;) to answer audience cards suggested before the show. Audience members win prizes and serve as judge and jury to see which card is truly the worst (read: best) of the round. At the end of the 30 minute round, there&#039;s one final opportunity to wager points and determine which member of the panel is the most &quot;Uncalled Four&quot;. Each game opens with a stand-up portion featuring all performers. Please note that all social media and website accounts are currently being updated after receiving a nice cease and desist from Cards Against Humanity. Our legal team has assured us our new format is 100% legal.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/uncalled_four_logo.png",
    SubmittedId: "9936",
    Position: "24",
    id: "9936",
    pageUrl: "9936-uncalled-four",
    events: []
  }, {
    Name: "Meet Me in the Bathroom and Tell Me All your Secrets",
    Copy: "An incredible night of comedy, music, and gunplay hosted by Dave Hill with house band Valley Lodge.",
    Bio: "Variety show with music, comedy and one part x-factor.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/meet-me-under-the-misteltoe-8335.jpg",
    SubmittedId: "10045",
    Position: "25",
    id: "10045",
    pageUrl: "10045-meet-me-in-the-bathroom-and-tell-me-all-your-secrets",
    events: []
  }, {
    Name: "The Nickel Club",
    Copy: "Dear people of Bridgetown:\r\n\r\nYou&#039;ve been chosen to join an exclusive society of the arts and culture, The Nickel Club:  A community so special you&#039;ll want to tell everyone about it, but won&#039;t... because now... you&#039;re in on the secret. \r\n\r\nBe prepared for a spectacular night of jazz, traditions, comedy, and laughter as the world&#039;s best and funniest will be there to welcome you to the world&#039;s premier secret club.  We look forward to you joining our ranks.  \r\n\r\nThe Nickel Club... surviving the constant cascade of modern mediocrity.  Sero venientes male sedentes.",
    Bio: "The Nickel Club is a theme show in LA that promises audience members an immersive night of comedy, jazz, and fun. Each show starts with the audience being ushered into the world of &quot;The Nickel Club&quot;, the world&#039;s premiere secret society. Like a 1920s speakeasy, as the audience arrives, they give the password to &#039;the bouncer&#039; (played by a comic), they are led into the secret venue by lantern (venue dependent) where they will find the producers in character and dressed to the 9&#039;s as a live jazz band plays classic tunes. To begin the show, the hosts &quot;initiate&quot; the audience into the Nickel Club, a society that has been around as long as time. Then, the comedy show starts, which is their reward for being part of this exclusive secret society. The comics then do sets where they can play along with the jazz band. Some ask them to punctuate jokes, others ask them to do nothing, others still have the band play sweet melodies behind a story or a joke.  After the show, time permitting, the band plays and people enjoy the rest of their night.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/nickel1.jpg",
    SubmittedId: "9781",
    Position: "26",
    id: "9781",
    pageUrl: "9781-the-nickel-club",
    events: []
  }, {
    Name: "TV Guidance Counselor",
    Copy: "Hosted by well respected Boston based comedian Ken Reid, TV Guidance Counselor is a new podcast about old TV. The premise is,  Ken owns every TV Guide from 1980-1995 or so. Someone  picks a random TV Guide, writes down everything in it that they want to watch in prime time (8-10pm) and then the podcast is the discussion of their choices. Ken does occasionally break format for the celebrity editions, where the TV Guide is used as an inspiration to discuss their careers.\r\n\r\n60  episodes are out so far (and a lot more banked) and they have been getting a really great response (Ken is also having a ton of fun doing them). The conversations kind of get into stories about growing up, people&#039;s relationship with television, some cultural/media studies dissection and Ken spits out a lot of trivia. It&#039;s a fun conversation.  \r\n\r\nIt&#039;s up on iTunes if you want to check it out\r\nhttps://itunes.apple.com/us/podcast/tv-guidance-counselor-podcast/id821665905\r\n\r\nThere&#039;s more detail and what not also up on the webpage\r\nhttp://tvguidancecounselor.com/\r\n \r\nGuests have included Jim Beaver (Supernatural, Justified, Deadwood) Captain Sensible and Dave Vanian of the Damned, Amy Sedaris, Christian Finnegan, Laura Kightlinger, JoAnn Willete (Just the Ten of Us, Facts of Life), Melanie Chartoff (Fridays, Parker Lewis Can&#039;t Lose, Rugrats), Laraine Newman, Michael Ian Black, Kumail Nanjiani, James Adomian, Jonathan Katz, Andy Kindler, Hari Kondabolu, Alex Edelman, Myq Kaplan, Kelly MacFarland,  Bethany Van Delft, Danny Tamberelli (&quot;The Adventures of Pete and Pete), Josh Gondelman, Giulia Rozzi, Adam Resnick (Get a Life, Cabin Boy), Julia Duffy, Vanessa Angel and more\r\n\r\nHere&#039;s an incredibly nice piece Cinema Blend recently wrote about the show:\r\n\r\nhttp://www.cinemablend.com/television/TV-Guidance-Counselor-Nostalgia-Driven-Comedy-Podcast-You-Need-Listening-66551.html\r\n\r\nand here&#039;s one from USA Today&#039;s Pop Candy Blog\r\n\r\nhttp://www.usatoday.com/story/popcandy/2014/07/28/tv-guidance-counselor/13280167/\r\n\r\nand it got recently featured in the New York Times as well. \r\nhttp://www.nytimes.com/2014/10/03/nyregion/new-york-super-week-offers-cultural-highlights.html?_r=1\r\n\r\nKen has also done live editions of the show at New York Comic Con, New York Super Week, North East Comic Con, The Boston Comedy Festival and Riot LA. ",
    Bio: "This show is a ton of fun and fairly unique. It&#039;s not snarky at all. We show a real reverence for the shows of our youth and peel back life experiences to discuss living situations and the shared experience of classic television. It&#039;s a fun conversation and a nice change from stand up.\r\n\r\nUnlike other Stand up comedian fronted podcasts, this one doesn&#039;t focus too much on the mechanics of comedy. Although I&#039;ve only been doing the show a year, we&#039;re getting about 10k downloads a month all over the world. I&#039;ve also had some experience with doing live editions as we&#039;ve done them now at New York Super Week/New York ComicCon (with Amy Sedaris), North East Comic Con (with Evan Michaelson from Oddieis/Obscura Antiques), The Boston Comedy Festival (with Emmanuel Lewis of Webster) and will have done one at Riot LA in January (guest TBA, I know who it is, but don&#039;t want to jinx it, nice big name).\r\n\r\nI have a unique knowledge of television and revisiting a specific week of our lives always leads to some fun tangents and interesting insights from my guests.\r\n\r\nI own every issue of TV Guide, and review them frequently. It&#039;s a life long passion and it&#039;s interesting to see how people form all different backgrounds share an early love of television. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/kentvgc_0.jpg",
    SubmittedId: "9240",
    Position: "27",
    id: "9240",
    pageUrl: "9240-tv-guidance-counselor",
    events: []
  }];

});
define('bridgetowncomedy/fixtures/venue', ['exports'], function (exports) {

  'use strict';

  /*
  export default [
   {
     id: 1,
     name: 'Example'
   },
   {
    id: 2,
    name: 'Example 2'
   }
  ];
  */

  exports['default'] = [];

});
define('bridgetowncomedy/helpers/helpers', function () {

	'use strict';

	// import Ember from 'ember';

	// function getTimeArray(day) {
	//   var timeArray = [];
	//   var duration = moment(FESTIVAL_END_TIMES[day]).diff(FESTIVAL_START_TIMES[day],'hours');
	//   for(var i=0;i<duration*2;i++) {
	//     timeArray.push(moment(FESTIVAL_START_TIMES[day]).add(i*30,'minutes'));
	//   }
	//   return timeArray;
	// }

	// Ember.Handlebars.helper("debug", function(optionalValue) {
	//   console.log("Current Context");
	//   console.log("====================");
	//   console.log(this);

	//   if (optionalValue) {
	//     console.log("Value");
	//     console.log("====================");
	//     console.log(optionalValue);
	//   }
	// });

	// Ember.Handlebars.helper('googleMapLink', function(address) {
	//   var html = "Address: <a target='blank' href='http://maps.google.com/?q=" + address + "'>" + address + " </a>";

	//   return new Handlebars.SafeString(html);
	// });

	// Ember.Handlebars.helper('fullDate', function(dateString) {
	//   return moment(dateString).zone('-07:00').calendar();
	// });

	// Ember.Handlebars.helper('niceDate', function(dateString) {
	//   return moment(dateString).zone('-07:00').format("dddd, MMMM Do YYYY");
	// });

	// Ember.Handlebars.helper('getWeekday', function(dateString) {
	//   return moment(dateString).zone('-07:00').format('dddd');
	// });

	// Ember.Handlebars.helper('getMonth', function(dateString) {
	//   return moment(dateString).zone('-07:00').format('MMM');
	// });

	// Ember.Handlebars.helper('getDayOfMonth', function(dateString) {
	//   return moment(dateString).zone('-07:00').format('D');
	// });

	// Ember.Handlebars.helper('getTime', function(dateString) {
	//   return moment(dateString).zone('-07:00').format('h:mm a');
	// });

	// Ember.Handlebars.helper('scheduleTableHeaderRow', function(day) {
	//   var html = "<th>Venue</th>";
	//   var timeArray = getTimeArray(day);
	//   $.each(timeArray,function(index, time) {
	//     var $el = $('<tr><th class="schedule-table__time-header" data-start-time="' + time.toISOString() + '">' + time.format('MM/DD ') + '<br />' + time.format('h:mm a') + '</th></tr>');
	//     html += $el.html();
	//   });
	//   return new Handlebars.SafeString(html);
	// });

	// export function breaklines(input) {
	//   return input;
	// }

	// export default Ember.Handlebars.makeBoundHelper(breaklines);

});
define('bridgetowncomedy/initializers/app-version', ['exports', 'bridgetowncomedy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('bridgetowncomedy/initializers/export-application-global', ['exports', 'ember', 'bridgetowncomedy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('bridgetowncomedy/initializers/load-fixtures', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    name: "load-fixtures",

    initialize: function initialize(container, app) {
      Object.keys(require._eak_seen).forEach(function (module) {
        if (module.indexOf(app.modulePrefix + "/models/") !== 0) {
          return;
        }
        var model = require(module)["default"];
        var fixtureModule = module.replace("/models/", "/fixtures/");
        var fixtures;
        try {
          fixtures = require(fixtureModule)["default"];
        } catch (error) {
          fixtures = [];
        }

        fixtures = Ember.copy(fixtures, true);
        model.reopenClass({
          FIXTURES: fixtures
        });
      });
    }
  };

});
define('bridgetowncomedy/initializers/route-mods', ['exports', 'ember', 'jquery'], function (exports, Ember, $) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {}

  exports['default'] = {
    name: "route-mods",
    initialize: function initialize() {
      Ember['default'].Route.reopen({
        render: function render() {
          this._super();
          window.scrollTo(0, 0);
        },
        activate: function activate() {
          this._super();
          if (this.get("title")) {
            document.title = this.get("title") + " | Bridgetown Comedy Festival";
          } else {
            document.title = "Bridgetown Comedy Festival";
          }
        },
        deactivate: function deactivate() {
          if ($['default'](".navbar .navbar-collapse.collapse.in").length) {
            $['default'](".navbar-toggle").not(".collapsed").click();
          }
        },
        loadAllData: function loadAllData() {
          return Ember['default'].RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
          });
        }
      });
    }
  };
  /* container, application */
  // application.inject('route', 'foo', 'service:foo');

});
define('bridgetowncomedy/models/event', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var EventModel = DS['default'].Model.extend({
    performers: DS['default'].hasMany("performer", { inverse: "events" }),

    emcees: DS['default'].hasMany("performer", { inverse: "mc_events" }),

    venue: DS['default'].belongsTo("venue"),

    show: DS['default'].belongsTo("show"),

    Name: DS['default'].attr("string"),

    start_time: DS['default'].attr("string"),

    end_time: DS['default'].attr("string"),

    Cost: DS['default'].attr("string"),

    pageUrl: DS['default'].attr("string"),

    weekday: (function () {
      return moment(this.get("start_time")).zone("-07:00").format("dddd").toLowerCase();
    }).property("start_time"),

    getPerformers: (function () {
      return this.get("performers").get("content");
    }).property(),

    getPerformerCount: (function () {
      return this.get("performers");
    }).property(),

    sortedPerformers: (function () {
      var performers = this.get("performers").toArray();
      return performers.sort(function (lhs, rhs) {
        return lhs.get("SortOrder") > rhs.get("SortOrder");
      });
    }).property("performers.@each.isLoaded")

  });

  EventModel.reopenClass({
    FIXTURES: []
  });

  exports['default'] = EventModel;

});
define('bridgetowncomedy/models/performer', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Performer = DS['default'].Model.extend({

    events: DS['default'].hasMany("event", { inverse: "performers" }),

    mc_events: DS['default'].hasMany("event", { inverse: "emcees" }),

    Name: DS['default'].attr("string"),

    Twitter: DS['default'].attr("string"),

    Website: DS['default'].attr("string"),

    PhotoUrl: DS['default'].attr("string"),

    SortOrder: DS['default'].attr("number"),

    ExcludeFromList: DS['default'].attr("boolean"),

    slug: (function () {
      return sluggify(this.get("Name"));
    }).property("Name"),

    Bio: DS['default'].attr("string"),

    pageUrl: DS['default'].attr("string"),

    twitterUrl: (function () {
      return "https://twitter.com/" + this.get("Twitter").replace("@", "");
    }).property("Twitter"),

    headshot300: (function () {
      return "/img/performer-images/performer-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }).property("Name"),

    backgroundImageCSS: (function () {
      return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }).property("PhotoUrl"),

    isAnMC: (function () {
      return this.get("mc_events").get("length");
    }).property("mc_events.@each.isLoaded"),

    sortedEvents: (function () {
      var events = this.get("events").toArray();
      return events.sort(function (lhs, rhs) {
        return lhs.get("start_time") > rhs.get("start_time");
      });
    }).property("events.@each.isLoaded"),

    allSortedEvents: (function () {
      var events = this.get("events").toArray().slice(0);
      var mc_events = this.get("mc_events").toArray();
      var all_events = events.slice(0).concat(mc_events);

      return all_events.sort(function (lhs, rhs) {
        return lhs.get("start_time") > rhs.get("start_time");
      });
    }).property("events.@each.isLoaded", "mc_events.@each.isLoaded")
  });

  function sluggify(string) {
    string = string || "";
    return string.replace(/\W/g, "-").toLowerCase();
  }

  function cleanStr(string) {
    string = string || "";
    return string.replace(/\W/g, "").toLowerCase();
  }

  exports['default'] = Performer;

});
define('bridgetowncomedy/models/show', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  function sluggify(string) {
    string = string || "";
    return string.replace(/\W/g, "-").toLowerCase();
  }

  function cleanStr(string) {
    string = string || "";
    return string.replace(/\W/g, "").toLowerCase();
  }

  var Show = DS['default'].Model.extend({
    events: DS['default'].hasMany("event"),

    Name: DS['default'].attr("string"),

    PhotoUrl: DS['default'].attr("string"),

    SortOrder: DS['default'].attr("number"),

    slug: (function () {
      return sluggify(this.get("Name"));
    }).property("Name"),

    Bio: DS['default'].attr("string"),
    Copy: DS['default'].attr("string"),

    pageUrl: DS['default'].attr("string"),

    headshot300: (function () {
      return "/img/show-images/show-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }).property("Name"),

    backgroundImageCSS: (function () {
      return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }).property("PhotoUrl"),

    sortedEvents: (function () {
      var events = this.get("events").toArray();
      return events.sort(function (lhs, rhs) {
        return lhs.get("start_time") > rhs.get("start_time");
      });
    }).property("events.@each.isLoaded")
  });

  exports['default'] = Show;

});
define('bridgetowncomedy/models/venue', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

  'use strict';

  var $ = Ember['default'].$;
  var Venue = DS['default'].Model.extend({
    events: DS['default'].hasMany("event"),

    Name: DS['default'].attr("string"),

    address: DS['default'].attr("string"),

    pageUrl: DS['default'].attr("string"),

    thursdayEvents: (function () {
      var events = this.get("events").toArray();
      var thursdayEvents = [];
      $.each(events, function (index, event) {
        if (moment(event.get("start_time")).format("dddd") === "Thursday") {
          thursdayEvents.push(event);
        }
      });
      return thursdayEvents;
    }).property("events.@each.isLoaded"),

    fridayEvents: (function () {
      var events = this.get("events").toArray();
      var fridayEvents = [];
      $.each(events, function (index, event) {
        if (moment(event.get("start_time")).format("dddd") === "Friday") {
          fridayEvents.push(event);
        }
      });
      return fridayEvents;
    }).property("events.@each.isLoaded"),

    saturdayEvents: (function () {
      var events = this.get("events").toArray();
      var saturdayEvents = [];
      $.each(events, function (index, event) {
        if (moment(event.get("start_time")).format("dddd") === "Saturday") {
          saturdayEvents.push(event);
        }
      });
      return saturdayEvents;
    }).property("events.@each.isLoaded"),

    sundayEvents: (function () {
      var events = this.get("events").toArray();
      var sundayEvents = [];
      $.each(events, function (index, event) {
        if (moment(event.get("start_time")).format("dddd") === "Sunday") {
          sundayEvents.push(event);
        }
      });
      return sundayEvents;
    }).property("events.@each.isLoaded")
  });

  Venue.reopenClass({
    FIXTURES: []
  });

  exports['default'] = Venue;

});
define('bridgetowncomedy/router', ['exports', 'ember', 'bridgetowncomedy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.resource("performers", function () {});
    this.resource("performer", { path: "/performer/:pageUrl" });
    this.resource("venues", function () {});
    this.resource("shows", function () {});
    this.resource("show", { path: "/show/:pageUrl" });
    this.resource("events", function () {});
    this.route("faqs");
    this.route("press");
    this.route("sponsors");
    this.route("contact");
    this.route("four_oh_four", { path: "/*path" });
  });

  Router.reopen({
    notifyGoogleAnalytics: (function () {
      try {
        return window.ga("send", "pageview", {
          page: this.get("url"),
          title: this.get("url")
        });
      } catch (e) {}
    }).on("didTransition")
  });

  exports['default'] = Router;

});
define('bridgetowncomedy/routes/contact', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      var host = "http://www.bridgetowncomedy.com";
      if (window.location.host === "localhost:4000") {
        host = "http://localhost:4000";
      }

      return Ember['default'].$.ajax(host + "/contact").then(function (data) {
        return $(data).find("#jekyll-content").html();
      });
    },
    title: "Contact"
  });

});
define('bridgetowncomedy/routes/events', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bridgetowncomedy/routes/faqs', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {

      var host = "http://www.bridgetowncomedy.com";
      if (window.location.host === "localhost:4000") {
        host = "http://localhost:4000";
      }
      return Ember['default'].$.ajax(host + "/faqs").then(function (data) {
        return $(data).find("#jekyll-content").html();
      });
    },
    title: "Faqs"
  });

});
define('bridgetowncomedy/routes/four_oh_four', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    redirect: function redirect() {
      var url = this.router.location.formatURL("/four_oh_four");
      if (window.location.pathname !== url) {
        this.transitionTo("/four_oh_four");
      }
    }
  });

});
define('bridgetowncomedy/routes/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      var host = "http://www.bridgetowncomedy.com";
      if (window.location.host === "localhost:4000") {
        host = "http://localhost:4000";
      }

      return Ember['default'].$.ajax(host + "/").then(function (data) {
        return Ember['default'].$(data).find("#jekyll-content").html();
      });
    },

    renderTemplate: function renderTemplate() {
      this.render("index");
      this.render("jumbotron_index", { outlet: "jumbotron" });
    }
  });

});
define('bridgetowncomedy/routes/performer', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      error: (function (_error) {
        var _errorWrapper = function error(_x) {
          return _error.apply(this, arguments);
        };

        _errorWrapper.toString = function () {
          return _error.toString();
        };

        return _errorWrapper;
      })(function (error) {
        Ember['default'].Logger.error(error);
        this.transitionTo("/not-found");
      })
    },
    model: function model(params) {
      var _this = this;

      return this.loadAllData().then(function () {
        return _this.store.find("performer", params.pageUrl.split("-")[0]);
      });
    },
    title: "Performer"
  });

});
define('bridgetowncomedy/routes/performers', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.loadAllData().then(function (data) {
        return data.performers;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    title: "Performers"
  });

});
define('bridgetowncomedy/routes/press', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {

      var host = "http://www.bridgetowncomedy.com";
      if (window.location.host === "localhost:4000") {
        host = "http://localhost:4000";
      }

      return Ember['default'].$.ajax(host + "/press").then(function (data) {
        return $(data).find("#jekyll-content").html();
      });
    },
    title: "Press"
  });

});
define('bridgetowncomedy/routes/show', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      error: (function (_error) {
        var _errorWrapper = function error(_x) {
          return _error.apply(this, arguments);
        };

        _errorWrapper.toString = function () {
          return _error.toString();
        };

        return _errorWrapper;
      })(function (error) {
        Ember['default'].Logger.error(error);
        this.transitionTo("/not-found");
      })
    },

    model: function model(params) {
      var _this = this;

      return this.loadAllData().then(function () {
        return _this.store.find("show", params.pageUrl.split("-")[0]);
      });
    },
    title: "Show"
  });

});
define('bridgetowncomedy/routes/shows', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      var _this = this;
      return this.loadAllData().then(function () {
        return _this.store.find("show");
      });
    },
    title: "Shows"
  });

});
define('bridgetowncomedy/routes/sponsors', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bridgetowncomedy/routes/venues', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {

      var host = "http://www.bridgetowncomedy.com";
      if (window.location.host === "localhost:4000") {
        host = "http://localhost:4000";
      }

      return Ember['default'].$.ajax(host + "/venues/").then(function (data) {
        return $(data).find("#jekyll-content").html();
      });
    },
    title: "Venues"
  });

});
define('bridgetowncomedy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","wrap");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","main");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","push");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" MODAL FOR CONTACT ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","myModal");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","myModalLabel");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-hidden","true");
        var el6 = dom.createTextNode("×");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5,"class","modal-title");
        dom.setAttribute(el5,"id","myModalLabel");
        var el6 = dom.createTextNode("\n          contact us\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","row centered");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("We are available 24/7, so don't hesitate to contact us.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("\n              Somestreet Ave, 987");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              London, UK.");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              +44 8948-4343");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              hi@blacktie.co\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","mapwrap");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-danger");
        dom.setAttribute(el5,"data-dismiss","modal");
        var el6 = dom.createTextNode("Save & Go");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.modal-content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.modal-dialog ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [2]);
        var morph0 = dom.createMorphAt(element0,0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [1, 1]),0,1);
        var morph2 = dom.createMorphAt(element1,2,3);
        var morph3 = dom.createMorphAt(fragment,1,2,contextualElement);
        inline(env, morph0, context, "partial", ["partials/header"], {});
        inline(env, morph1, context, "outlet", ["jumbotron"], {});
        content(env, morph2, context, "outlet");
        inline(env, morph3, context, "partial", ["partials/footer"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/catch_all', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row centered");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-lg-8 col-lg-offset-2");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" row ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" headerwrap ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1, 1, 1]),-1,-1);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2]),0,1);
        content(env, morph0, context, "collection.title");
        content(env, morph1, context, "mainContent");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/components/page-title-banner', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1, 1, 1, 1]),-1,-1);
        content(env, morph0, context, "title");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/components/x-spinner', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        content(env, morph0, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/contact', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Contact"});
        content(env, morph1, context, "model");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/error', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-8 col-md-offset-2");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("Sorry...It's not you, it's us.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("This error has been reported to us, but feel free to contact ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","mailto:joshua.bremer@gmail.com");
        var el7 = dom.createTextNode("joshua.bremer@gmail.com");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" with any additional information on your error. Sorry for the trouble.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","text-center");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"class","btn btn-primary");
        dom.setAttribute(el6,"href","/");
        var el7 = dom.createTextNode("Return to homepage ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "page-title-banner", [], {"title": "There's been an error..."});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/event', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","schedule-list__item-venue-label label label-default");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
          content(env, morph0, context, "venue.Name");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-sm-4");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4,"class","img-responsive performer-headshot");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-sm-8");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1, 1, 1]);
          var morph0 = dom.createUnsafeMorphAt(dom.childAt(element0, [3, 1]),0,1);
          element(env, element1, context, "bind-attr", [], {"src": "show.headshot300"});
          content(env, morph0, context, "show.Copy");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "performer.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "list-group-item"}, child0, null);
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("strong");
            var el2 = dom.createTextNode("MC: ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(fragment,2,3,contextualElement);
            content(env, morph0, context, "emcee.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "emcee")], {"classNames": "list-group-item"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container single-performer main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","lead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" - ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","list-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","list-group-item active");
        dom.setAttribute(el3,"style","background:#695b53;");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4,"class","list-group-item-heading");
        dom.setAttribute(el4,"style","background:#695b53;color:white");
        var el5 = dom.createTextNode("Performers");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element2 = dom.childAt(fragment, [2]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [8]);
        if (this.cachedFragment) { dom.repairClonedNode(element4,[3]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element3,0,1);
        var morph2 = dom.createMorphAt(element3,2,3);
        var morph3 = dom.createMorphAt(element3,3,4);
        var morph4 = dom.createMorphAt(dom.childAt(element2, [3]),-1,0);
        var morph5 = dom.createUnsafeMorphAt(dom.childAt(element2, [5]),0,1);
        var morph6 = dom.createMorphAt(element2,6,7);
        var morph7 = dom.createMorphAt(element4,2,3);
        var morph8 = dom.createMorphAt(element4,3,4);
        inline(env, morph0, context, "page-title-banner", [], {"title": get(env, context, "model.Name")});
        inline(env, morph1, context, "niceDate", [get(env, context, "start_time")], {});
        inline(env, morph2, context, "getTime", [get(env, context, "start_time")], {});
        inline(env, morph3, context, "getTime", [get(env, context, "end_time")], {});
        block(env, morph4, context, "link-to", ["venue", get(env, context, "venue")], {}, child0, null);
        inline(env, morph5, context, "googleMapLink", [get(env, context, "venue.address")], {});
        block(env, morph6, context, "if", [get(env, context, "show")], {}, child1, null);
        block(env, morph7, context, "each", [get(env, context, "sortedPerformers")], {"keyword": "performer"}, child2, null);
        block(env, morph8, context, "each", [get(env, context, "emcees")], {"keyword": "emcee"}, child3, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/events', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createTextNode("view");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),-1,-1);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),-1,-1);
          var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),-1,-1);
          var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),-1,-1);
          var morph4 = dom.createMorphAt(dom.childAt(element0, [9]),-1,-1);
          content(env, morph0, context, "event.name");
          content(env, morph1, context, "event.start_time");
          content(env, morph2, context, "event.end_time");
          content(env, morph3, context, "event.price");
          block(env, morph4, context, "linkTo", ["event", get(env, context, "event")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("start_time");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("end_time");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("price");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1, 1, 1]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3]),0,1);
        content(env, morph0, context, "collection.title");
        block(env, morph1, context, "each", [get(env, context, "controller")], {"keyword": "event"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/faqs', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "FAQs"});
        content(env, morph1, context, "model");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/four_oh_four', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-8 col-md-offset-2");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("The page cannot be found...");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Perhaps you are here because:");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("The page has moved");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("The page no longer exists");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"class","btn btn-block btn-primary");
        dom.setAttribute(el6,"href","/");
        var el7 = dom.createTextNode("Return to homepage ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Page Not Found"});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/friday_schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Friday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_friday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/history', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "History"});
        content(env, morph1, context, "mainContent");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-color-1 jumbotron-page-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2 text-center");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","header-logo");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","img-responsive");
        dom.setAttribute(el6,"src","/img/logo-long-inverse.png?1");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createTextNode("Portland, OR");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createTextNode("May 7th - May 10th");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" col-lg-6 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createTextNode("@bridgetown");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel panel-default");
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","panel-body");
        var el7 = dom.createTextNode("\n\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" col-lg-6 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","clearfix");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(element1, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [4, 3, 1]),0,1);
        var morph2 = dom.createMorphAt(element0,3,4);
        content(env, morph0, context, "model");
        inline(env, morph1, context, "partial", ["partials/recent_tweets"], {});
        inline(env, morph2, context, "partial", ["partials/sponsors_front_page"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/loading', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","jumbotron jumbotron-default");
        var el3 = dom.createTextNode("\n   ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container main-content");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","text-center");
        var el5 = dom.createTextNode("Loading...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1, 5]),-1,-1);
        inline(env, morph0, context, "x-spinner", [], {"lines": 12, "radius": 10, "length": 10, "shadow": false, "color": "#333", "width": 3});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_event_list_item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "performer.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("strong");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,-1);
        content(env, morph0, context, "event.Name");
        block(env, morph1, context, "each", [get(env, context, "event.performers")], {"keyword": "performer"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_footer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Home");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Performers");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Press");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Contact");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" FOOTER ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1,"class","site-footer");
        dom.setAttribute(el1,"role","contentinfo");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","social");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","social-buttons");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","follow-btn");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://twitter.com/share");
        dom.setAttribute(el6,"class","twitter-share-button");
        dom.setAttribute(el6,"data-via","bridgetown");
        dom.setAttribute(el6,"data-related","bridgetown");
        dom.setAttribute(el6,"data-hashtags","bridgetowncomedy");
        var el7 = dom.createTextNode("Tweet");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","tweet-btn");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://twitter.com/bridgetown");
        dom.setAttribute(el6,"class","twitter-follow-button");
        dom.setAttribute(el6,"data-show-count","false");
        var el7 = dom.createTextNode("Follow @bridgetown");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Designed and built by ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://twitter.com/joshuabremer");
        dom.setAttribute(el4,"target","_blank");
        var el5 = dom.createTextNode("@joshuabremer");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","footer-links muted");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("·");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("·");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("·");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2, 1, 5]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [5]),-1,-1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [9]),-1,-1);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [13]),-1,-1);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        block(env, morph1, context, "link-to", ["performers"], {}, child1, null);
        block(env, morph2, context, "link-to", ["press"], {}, child2, null);
        block(env, morph3, context, "link-to", ["contact"], {}, child3, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_header', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","navbar-brand");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"class","navbar-brand-logo");
          dom.setAttribute(el2,"src","/img/logo-long-inverse.png?1");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Performers");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Shows");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Venues");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("FAQs");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Press");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Sponsors");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Contact");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Press");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Sponsors");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("Contact");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createElement("span");
          var el1 = dom.createTextNode("FAQs");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","navbar navbar-inverse navbar-fixed-top");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","navbar-toggle");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target",".navbar-collapse");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n       ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-collapse collapse");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav navbar-nav");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color4");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color5 hidden-sm");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color1 hidden-sm");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color2 hidden-sm");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","header-color3 hidden-sm");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","dropdown visible-sm ");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"class","dropdown-toggle");
        dom.setAttribute(el6,"data-toggle","dropdown");
        dom.setAttribute(el6,"href","#");
        var el7 = dom.createTextNode("\n            More Info ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","caret");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6,"class","dropdown-menu");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7,"class","header-color5");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7,"class","header-color1");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7,"class","header-color2");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7,"class","header-color3");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","navbar-form navbar-right");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"class","btn btn-default");
        dom.setAttribute(el6,"target","_blank");
        dom.setAttribute(el6,"href","http://bridgetown2015.eventbrite.com");
        var el7 = dom.createTextNode("Tickets");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("/.navbar-collapse ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var element2 = dom.childAt(element1, [15, 3]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [1]),-1,-1);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),-1,-1);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [5]),-1,-1);
        var morph4 = dom.createMorphAt(dom.childAt(element1, [7]),-1,-1);
        var morph5 = dom.createMorphAt(dom.childAt(element1, [9]),-1,-1);
        var morph6 = dom.createMorphAt(dom.childAt(element1, [11]),-1,-1);
        var morph7 = dom.createMorphAt(dom.childAt(element1, [13]),-1,-1);
        var morph8 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
        var morph9 = dom.createMorphAt(dom.childAt(element2, [3]),-1,-1);
        var morph10 = dom.createMorphAt(dom.childAt(element2, [5]),-1,-1);
        var morph11 = dom.createMorphAt(dom.childAt(element2, [7]),-1,-1);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        block(env, morph1, context, "link-to", ["performers"], {}, child1, null);
        block(env, morph2, context, "link-to", ["shows"], {}, child2, null);
        block(env, morph3, context, "link-to", ["venues"], {}, child3, null);
        block(env, morph4, context, "link-to", ["faqs"], {}, child4, null);
        block(env, morph5, context, "link-to", ["press"], {}, child5, null);
        block(env, morph6, context, "link-to", ["sponsors"], {}, child6, null);
        block(env, morph7, context, "link-to", ["contact"], {}, child7, null);
        block(env, morph8, context, "link-to", ["press"], {}, child8, null);
        block(env, morph9, context, "link-to", ["sponsors"], {}, child9, null);
        block(env, morph10, context, "link-to", ["contact"], {}, child10, null);
        block(env, morph11, context, "link-to", ["faqs"], {}, child11, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_news', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","newspost");
        dom.setAttribute(el1,"style","margin-top:50px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","newspost-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Submissions for the 2015 Bridgetown Comedy Festival, taking place May 7 - 10, are now closed. Thanks to everyone who submitted. We're hunkering down for a couple of weeks to look over all the great comedy you sent our way and looking forward to putting together an incredible lineup for this year's fest!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_performer_box', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"class","img-responsive");
          dom.setAttribute(el1,"width","300");
          dom.setAttribute(el1,"height","300");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          element(env, element0, context, "bind-attr", [], {"src": "headshot300"});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
          content(env, morph0, context, "Name");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","performer-thumbnail");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("legend");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        block(env, morph0, context, "link-to", ["performer", get(env, context, "this")], {}, child0, null);
        block(env, morph1, context, "link-to", ["performer", get(env, context, "performer")], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_recent_tweets', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"class","twitter-timeline");
        dom.setAttribute(el1,"href","https://twitter.com/bridgetown");
        dom.setAttribute(el1,"data-widget-id","432300245716713474");
        var el2 = dom.createTextNode("Tweets by @bridgetown");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_schedule_list_item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "show.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["show", get(env, context, "show")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["event", get(env, context, "this")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","schedule-list__item-venue-label label label-default");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
          content(env, morph0, context, "venue.Name");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","label label-default schedule__label-performer");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1]),0,1);
            inline(env, morph0, context, "unbound", [get(env, context, "performer.Name")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","label label-default schedule__label-performer");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1]),0,1);
            inline(env, morph0, context, "unbound", [get(env, context, "emcee.Name")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("MC: ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,2);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "emcee")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","lead");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("small");
        var el7 = dom.createTextNode("(");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","white-space:nowrap");
        var el8 = dom.createTextNode(" - ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"style","white-space:nowrap");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(")");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Price: ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-5 col-sm-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-7 col-sm-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","schedule-list__performer-list");
        var el6 = dom.createTextNode("\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n         \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, get = hooks.get, block = hooks.block, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [4]);
        var element5 = dom.childAt(element1, [5, 1]);
        if (this.cachedFragment) { dom.repairClonedNode(element5,[1]); }
        var morph0 = dom.createMorphAt(element3,0,1);
        var morph1 = dom.createMorphAt(element4,0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element4, [2]),-1,0);
        var morph3 = dom.createMorphAt(dom.childAt(element4, [4]),-1,-1);
        var morph4 = dom.createMorphAt(dom.childAt(element2, [3]),0,-1);
        var morph5 = dom.createMorphAt(dom.childAt(element1, [3, 1]),-1,0);
        var morph6 = dom.createMorphAt(element5,0,1);
        var morph7 = dom.createMorphAt(element5,1,2);
        element(env, element0, context, "bind-attr", [], {"data-start-time": "start_time"});
        element(env, element0, context, "bind-attr", [], {"class": ":schedule-list__item :list-group-item weekday"});
        block(env, morph0, context, "if", [get(env, context, "show")], {}, child0, child1);
        inline(env, morph1, context, "getWeekday", [get(env, context, "start_time")], {});
        inline(env, morph2, context, "getTime", [get(env, context, "start_time")], {});
        inline(env, morph3, context, "getTime", [get(env, context, "end_time")], {});
        content(env, morph4, context, "Cost");
        block(env, morph5, context, "link-to", ["venue", get(env, context, "venue.pageUrl")], {}, child2, null);
        block(env, morph6, context, "each", [get(env, context, "sortedPerformers")], {"keyword": "performer"}, child3, null);
        block(env, morph7, context, "each", [get(env, context, "emcees")], {"keyword": "emcee"}, child4, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_schedule_table_friday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.fridayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Friday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_schedule_table_saturday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.saturdayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Saturday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_schedule_table_sunday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.thursdayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Thursday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_schedule_table_thursday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.thursdayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Thursday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/partials/_sponsors_front_page', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","lg");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container sponsors-container text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("SPONSORED BY");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-8 col-sm-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","http://mailchimp.com");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","img-responsive");
        dom.setAttribute(el6,"src","/img/sponsor-images/sponsor-mailchimp-long.png?1");
        dom.setAttribute(el6,"alt","");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-8 col-sm-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","http://www.killrockstars.com/");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","img-responsive");
        dom.setAttribute(el6,"src","/img/sponsor-images/sponsor-krs.png?1");
        dom.setAttribute(el6,"alt","");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","http://www.cc.com/");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","img-responsive");
        dom.setAttribute(el6,"src","/img/sponsor-images/sponsor-comedy-central-long.png");
        dom.setAttribute(el6,"alt","");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","http://www.nwe.com/");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","img-responsive");
        dom.setAttribute(el6,"src","/img/sponsor-images/sponsor-comedy-dynamics-long.png?1");
        dom.setAttribute(el6,"alt","");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/performer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1,"class","btn btn-default");
          dom.setAttribute(el1,"target","_blank");
          dom.setAttribute(el1,"style","white-space:normal");
          var el2 = dom.createTextNode("View Website ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2,"class","fa fa-external-link");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          element(env, element1, context, "bind-attr", [], {"href": get(env, context, "model.Website")});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1,"class","twitter-timeline");
          dom.setAttribute(el1,"data-widget-id","432300245716713474");
          var el2 = dom.createTextNode("Tweets by ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element0,0,-1);
          element(env, element0, context, "bind-attr", [], {"href": get(env, context, "model.twitterUrl")});
          element(env, element0, context, "bind-attr", [], {"data-screen-name": get(env, context, "model.Twitter")});
          content(env, morph0, context, "model.Twitter");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("strong");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" - ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" (");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" - ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(")\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1]),-1,-1);
            var morph1 = dom.createMorphAt(fragment,2,3,contextualElement);
            var morph2 = dom.createMorphAt(fragment,5,6,contextualElement);
            var morph3 = dom.createMorphAt(fragment,6,7,contextualElement);
            var morph4 = dom.createMorphAt(fragment,7,8,contextualElement);
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.venue.Name");
            inline(env, morph2, context, "niceDate", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph4, context, "getTime", [get(env, context, "event.end_time")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["event", get(env, context, "event")], {"classNames": "list-group-item"}, child0, null);
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","list-group-item");
          var el2 = dom.createTextNode("No shows scheduled yet...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" - ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("br");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" (");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" - ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(")\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1]),-1,-1);
              var morph1 = dom.createMorphAt(fragment,2,3,contextualElement);
              var morph2 = dom.createMorphAt(fragment,5,6,contextualElement);
              var morph3 = dom.createMorphAt(fragment,6,7,contextualElement);
              var morph4 = dom.createMorphAt(fragment,7,8,contextualElement);
              content(env, morph0, context, "event.Name");
              content(env, morph1, context, "event.venue.Name");
              inline(env, morph2, context, "niceDate", [get(env, context, "event.start_time")], {});
              inline(env, morph3, context, "getTime", [get(env, context, "event.start_time")], {});
              inline(env, morph4, context, "getTime", [get(env, context, "event.end_time")], {});
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            block(env, morph0, context, "link-to", ["event", get(env, context, "event.id")], {"classNames": "list-group-item"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","list-group-item");
            var el2 = dom.createTextNode("No shows scheduled yet...");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","list-group");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","list-group-item active");
          dom.setAttribute(el2,"style","background:#695b53;");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3,"class","list-group-item-heading");
          dom.setAttribute(el3,"style","background:#695b53;color:white");
          var el4 = dom.createTextNode("Show MC");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),2,3);
          block(env, morph0, context, "each", [get(env, context, "mc_events")], {"keyword": "event"}, child0, child1);
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("← All Performers");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container single-performer main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-4 text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive performer-headshot");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","list-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","list-group-item active");
        dom.setAttribute(el5,"style","background:#695b53;");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        dom.setAttribute(el6,"class","list-group-item-heading");
        dom.setAttribute(el6,"style","background:#695b53;color:white");
        var el7 = dom.createTextNode("Shows");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element2 = dom.childAt(fragment, [2, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element2, [3]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element3, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element3, [5]),0,1);
        var morph3 = dom.createUnsafeMorphAt(dom.childAt(element5, [1]),0,1);
        var morph4 = dom.createMorphAt(dom.childAt(element5, [3]),2,3);
        var morph5 = dom.createMorphAt(element5,4,5);
        var morph6 = dom.createMorphAt(dom.childAt(element5, [6]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": get(env, context, "model.Name")});
        element(env, element4, context, "bind-attr", [], {"src": "headshot300"});
        block(env, morph1, context, "if", [get(env, context, "model.Website")], {}, child0, null);
        block(env, morph2, context, "if", [get(env, context, "model.Twitter")], {}, child1, null);
        content(env, morph3, context, "Bio");
        block(env, morph4, context, "each", [get(env, context, "sortedEvents")], {"keyword": "event"}, child2, child3);
        block(env, morph5, context, "if", [get(env, context, "isAnMC")], {}, child4, null);
        block(env, morph6, context, "link-to", ["performers"], {}, child5, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/performers', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"class","img-responsive lazy");
            dom.setAttribute(el1,"width","300");
            dom.setAttribute(el1,"height","300");
            dom.setAttribute(el1,"src","/img/performer-placeholder.png");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            element(env, element0, context, "bind-attr", [], {"data-original": "performer.headshot300"});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "performer.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","performer-thumbnail");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("legend");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
          block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {}, child0, null);
          block(env, morph1, context, "link-to", ["performer", get(env, context, "performer")], {}, child1, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","text-center");
          var el2 = dom.createTextNode("Performers to be announced...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nclass=\"lazy\" data-original=\"img/example.jpg\"");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Performers"});
        block(env, morph1, context, "each", [get(env, context, "model")], {"keyword": "performer"}, child0, child1);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/press', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Press"});
        content(env, morph1, context, "model");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/saturday_schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Saturday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["schedule_table_saturday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/friday-table', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.fridayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Friday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/friday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Friday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_friday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/friday_schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Friday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_friday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/saturday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Saturday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["schedule_table_saturday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/sunday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Sunday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_sunday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule-grid/thursday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Thursday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_thursday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("Schedule to be announced...");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","https://www.google.com/calendar/embed?src=ij2h1kcsksapda46r4e8qr2atc%40group.calendar.google.com&ctz=America/Los_Angeles");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","/img/add-to-google-calendar.gif");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","schedule-list");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","text-left");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","container-fluid");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","row");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","col-xs-6 col-sm-3");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8,"type","button");
        dom.setAttribute(el8,"style","margin: 0em 0em 0.5em;");
        dom.setAttribute(el8,"class","btn btn-default btn-block");
        var el9 = dom.createTextNode("Thursday");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","col-xs-6 col-sm-3");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8,"type","button");
        dom.setAttribute(el8,"style","margin: 0em 0em 0.5em;");
        dom.setAttribute(el8,"class","btn btn-default  btn-block");
        var el9 = dom.createTextNode("Friday");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","col-xs-6 col-sm-3");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8,"type","button");
        dom.setAttribute(el8,"style","margin: 0em 0em 0.5em;");
        dom.setAttribute(el8,"class","btn btn-default  btn-block");
        var el9 = dom.createTextNode("Saturday");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","col-xs-6 col-sm-3");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8,"type","button");
        dom.setAttribute(el8,"style","margin: 0em 0em 0.5em;");
        dom.setAttribute(el8,"class","btn btn-default  btn-block");
        var el9 = dom.createTextNode("Sunday");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","list-group");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, element = hooks.element, get = hooks.get;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2, 3]);
        var element1 = dom.childAt(element0, [3, 1]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element2, [3, 1]);
        var element5 = dom.childAt(element2, [5, 1]);
        var element6 = dom.childAt(element2, [7, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Schedule"});
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        element(env, element3, context, "action", ["filterThursday"], {});
        element(env, element4, context, "action", ["filterFriday"], {});
        element(env, element5, context, "action", ["filterSaturday"], {});
        element(env, element6, context, "action", ["filterSunday"], {});
        inline(env, morph1, context, "cloaked-collection", [], {"cloakView": get(env, context, "App.ScheduleListItemView"), "content": get(env, context, "controller.events"), "preservesContext": true, "defaultHeight": 218});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/schedule_table_friday', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
                content(env, morph0, context, "performer.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "performer")], {"classNames": "comma-list"}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createElement("span");
                dom.setAttribute(el0,"class","label label-default schedule__label-performer");
                var el1 = dom.createTextNode("MC: ");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,-1);
                content(env, morph0, context, "event.emcee.Name");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
              block(env, morph0, context, "link-to", ["performer", get(env, context, "event.emcee")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","schedule-table__cell");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("strong");
            var el3 = dom.createTextNode(" - ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" - ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            if (this.cachedFragment) { dom.repairClonedNode(element0,[9]); }
            var element1 = dom.childAt(element0, [1]);
            var morph0 = dom.createUnsafeMorphAt(element1,-1,0);
            var morph1 = dom.createMorphAt(element1,0,-1);
            var morph2 = dom.createMorphAt(element0,4,5);
            var morph3 = dom.createMorphAt(element0,5,6);
            var morph4 = dom.createMorphAt(element0,8,9);
            var morph5 = dom.createMorphAt(element0,9,10);
            element(env, element0, context, "bind-attr", [], {"data-start-time": "event.start_time"});
            element(env, element0, context, "bind-attr", [], {"data-end-time": "event.end_time"});
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.Cost");
            inline(env, morph2, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.end_time")], {});
            block(env, morph4, context, "each", [get(env, context, "event.sortedPerformers")], {"keyword": "performer"}, child0, null);
            block(env, morph5, context, "if", [get(env, context, "event.emcee")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("th");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element2,2,3);
          content(env, morph0, context, "venue.Name");
          block(env, morph1, context, "each", [get(env, context, "venue.fridayEvents")], {"keyword": "event"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("table");
        dom.setAttribute(el0,"class","schedule-table");
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("thead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3,"style","display:none;");
        var el4 = dom.createTextNode("Venue");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [1, 1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),0,1);
        inline(env, morph0, context, "scheduleTableHeaderRow", ["Friday"], {});
        block(env, morph1, context, "each", [get(env, context, "controller.venues")], {"keyword": "venue"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/show', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("strong");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" - ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" (");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" - ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(")\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
            var morph1 = dom.createMorphAt(fragment,2,3,contextualElement);
            var morph2 = dom.createMorphAt(fragment,5,6,contextualElement);
            var morph3 = dom.createMorphAt(fragment,6,7,contextualElement);
            var morph4 = dom.createMorphAt(fragment,7,8,contextualElement);
            content(env, morph0, context, "event.Name");
            content(env, morph1, context, "event.venue.Name");
            inline(env, morph2, context, "niceDate", [get(env, context, "event.start_time")], {});
            inline(env, morph3, context, "getTime", [get(env, context, "event.start_time")], {});
            inline(env, morph4, context, "getTime", [get(env, context, "event.end_time")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["event", get(env, context, "event")], {"classNames": "list-group-item"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","list-group-item");
          var el2 = dom.createTextNode("No shows scheduled yet...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("← All Shows");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container single-performer main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-4 text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive performer-headshot");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","list-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","list-group-item active");
        dom.setAttribute(el5,"style","background:#695b53;");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        dom.setAttribute(el6,"class","list-group-item-heading");
        dom.setAttribute(el6,"style","background:#695b53;color:white");
        var el7 = dom.createTextNode("Shows");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1, 1, 0]);
        var element2 = dom.childAt(element0, [3]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(element2, [1]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element2, [3]),2,3);
        var morph3 = dom.createMorphAt(dom.childAt(element2, [5]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": get(env, context, "model.Name")});
        element(env, element1, context, "bind-attr", [], {"src": "headshot300"});
        content(env, morph1, context, "Copy");
        block(env, morph2, context, "each", [get(env, context, "sortedEvents")], {"keyword": "event"}, child0, child1);
        block(env, morph3, context, "link-to", ["shows"], {}, child2, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/shows', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"class","img-responsive");
            dom.setAttribute(el1,"width","300");
            dom.setAttribute(el1,"height","300");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            element(env, element0, context, "bind-attr", [], {"src": "show.headshot300"});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "show.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","performer-thumbnail");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("legend");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
          block(env, morph0, context, "link-to", ["show", get(env, context, "show")], {}, child0, null);
          block(env, morph1, context, "link-to", ["show", get(env, context, "show")], {}, child1, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","text-center");
          var el2 = dom.createTextNode("Shows to be announced...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Shows"});
        block(env, morph1, context, "each", [get(env, context, "controller")], {"keyword": "show"}, child0, child1);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/shows_gallery', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"class","lazy img-responsive");
            dom.setAttribute(el1,"width","300");
            dom.setAttribute(el1,"height","300");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            element(env, element0, context, "bind-attr", [], {"data-original": "show.headshot300"});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createUnsafeMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "show.Name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","performer-thumbnail");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("legend");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
          block(env, morph0, context, "link-to", ["show", get(env, context, "show")], {}, child0, null);
          block(env, morph1, context, "link-to", ["show", get(env, context, "show")], {}, child1, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Shows");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","lead");
        var el3 = dom.createTextNode("Shows subject to change...");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [4, 3]),0,1);
        block(env, morph0, context, "each", [get(env, context, "controller")], {"keyword": "show"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/sponsors', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content sponsors-container text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-8 col-sm-offset-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://mailchimp.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-mailchimp-long.png?1");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-8 col-sm-offset-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.killrockstars.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-krs.png?1");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.cc.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-comedy-central-long.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.nwe.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-comedy-dynamics-long.png?1");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.portlandmercury.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-mercury.png?1");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.sizzlepie.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-sizzle-pie.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.yelp.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-yelp.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-4 col-sm-offset-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.gilgameshbrewing.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-gilgamesh-brewing.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.newdealdistillery.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-new-deal-logo.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://groundkontrol.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-ground-kontrol.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.bendistillery.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-crater-lake.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://zachsshack.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-zachs-shack.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://pdxpipeline.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-pdxpipeline.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://voodoodoughnut.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-voodoo.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.commonsbrewery.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-commons-brewing.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://shanrockstrivia.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-shanrock.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://funemploymentradio.com");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-funemployment.png");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-6 col-sm-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"target","_blank");
        dom.setAttribute(el4,"href","http://www.cookiepedalers.com/");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","img-responsive");
        dom.setAttribute(el5,"src","/img/sponsor-images/sponsor-cookie-pedalers.png?1");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" container ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Sponsors"});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/sunday_schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Sunday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_sunday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/thursday_schedule', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row centered");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-8 col-lg-offset-2");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Thursday Schedule");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" row ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" container ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" headerwrap ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","schedules");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var morph0 = dom.createMorphAt(element0,0,1);
        element(env, element0, context, "bind-attr", [], {"class": "scheduleClass"});
        inline(env, morph0, context, "partial", ["partials/schedule_table_thursday"], {});
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/venue', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          inline(env, morph0, context, "view", ["schedule-list-item"], {"context": get(env, context, "event")});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","list-group-item");
          var el2 = dom.createTextNode("No shows scheduled yet...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("← All Venues");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container single-performer main-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","list-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","list-group-item active");
        dom.setAttribute(el5,"style","background:#695b53;");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        dom.setAttribute(el6,"class","list-group-item-heading");
        dom.setAttribute(el6,"style","background:#695b53;color:white");
        var el7 = dom.createTextNode("Shows");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element0 = dom.childAt(fragment, [2, 1, 1]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(element0, [1]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [3]),2,3);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [5]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": get(env, context, "model.Name")});
        inline(env, morph1, context, "googleMapLink", [get(env, context, "address")], {});
        block(env, morph2, context, "each", [get(env, context, "events")], {"keyword": "event"}, child0, child1);
        block(env, morph3, context, "link-to", ["venues"], {}, child2, null);
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/templates/venues', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container main-content venues-page");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-12");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createUnsafeMorphAt(dom.childAt(fragment, [2, 1, 1]),0,1);
        inline(env, morph0, context, "page-title-banner", [], {"title": "Venues"});
        content(env, morph1, context, "model");
        return fragment;
      }
    };
  }()));

});
define('bridgetowncomedy/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/components/x-spinner.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/x-spinner.js should pass jshint', function() { 
    ok(true, 'components/x-spinner.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/controllers/performers.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/performers.js should pass jshint', function() { 
    ok(true, 'controllers/performers.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/fixtures/event.jshint', function () {

  'use strict';

  module('JSHint - fixtures');
  test('fixtures/event.js should pass jshint', function() { 
    ok(true, 'fixtures/event.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/fixtures/performer.jshint', function () {

  'use strict';

  module('JSHint - fixtures');
  test('fixtures/performer.js should pass jshint', function() { 
    ok(true, 'fixtures/performer.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/fixtures/show.jshint', function () {

  'use strict';

  module('JSHint - fixtures');
  test('fixtures/show.js should pass jshint', function() { 
    ok(true, 'fixtures/show.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/fixtures/venue.jshint', function () {

  'use strict';

  module('JSHint - fixtures');
  test('fixtures/venue.js should pass jshint', function() { 
    ok(true, 'fixtures/venue.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/helpers/helpers.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/helpers.js should pass jshint', function() { 
    ok(true, 'helpers/helpers.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/helpers/resolver', ['exports', 'ember/resolver', 'bridgetowncomedy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('bridgetowncomedy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/helpers/start-app', ['exports', 'ember', 'bridgetowncomedy/app', 'bridgetowncomedy/router', 'bridgetowncomedy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('bridgetowncomedy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/initializers/route-mods.jshint', function () {

  'use strict';

  module('JSHint - initializers');
  test('initializers/route-mods.js should pass jshint', function() { 
    ok(true, 'initializers/route-mods.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/models/event.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/event.js should pass jshint', function() { 
    ok(true, 'models/event.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/models/performer.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/performer.js should pass jshint', function() { 
    ok(true, 'models/performer.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/models/show.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/show.js should pass jshint', function() { 
    ok(true, 'models/show.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/models/venue.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/venue.js should pass jshint', function() { 
    ok(true, 'models/venue.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/contact.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/contact.js should pass jshint', function() { 
    ok(true, 'routes/contact.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/events.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/events.js should pass jshint', function() { 
    ok(true, 'routes/events.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/faqs.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/faqs.js should pass jshint', function() { 
    ok(true, 'routes/faqs.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/four_oh_four.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/four_oh_four.js should pass jshint', function() { 
    ok(true, 'routes/four_oh_four.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/performer.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/performer.js should pass jshint', function() { 
    ok(true, 'routes/performer.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/performers.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/performers.js should pass jshint', function() { 
    ok(true, 'routes/performers.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/press.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/press.js should pass jshint', function() { 
    ok(true, 'routes/press.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/show.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/show.js should pass jshint', function() { 
    ok(true, 'routes/show.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/shows.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/shows.js should pass jshint', function() { 
    ok(true, 'routes/shows.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/sponsors.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/sponsors.js should pass jshint', function() { 
    ok(true, 'routes/sponsors.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/routes/venues.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/venues.js should pass jshint', function() { 
    ok(true, 'routes/venues.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/test-helper', ['bridgetowncomedy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('bridgetowncomedy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('bridgetowncomedy/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/components/x-spinner-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("x-spinner", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('bridgetowncomedy/tests/unit/components/x-spinner-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/x-spinner-test.js should pass jshint', function() { 
    ok(true, 'unit/components/x-spinner-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/controllers/performers-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:performers", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/controllers/performers-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/performers-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/performers-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/initializers/route-mods-test', ['ember', 'bridgetowncomedy/initializers/route-mods', 'qunit'], function (Ember, route_mods, qunit) {

  'use strict';

  var container, application;

  qunit.module("RouteModsInitializer", {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    route_mods.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('bridgetowncomedy/tests/unit/initializers/route-mods-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/route-mods-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/route-mods-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/models/event-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("event", {
    // Specify the other units that are required for this test.
    needs: ["model:performer", "model:venue", "model:show"]
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bridgetowncomedy/tests/unit/models/event-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/event-test.js should pass jshint', function() { 
    ok(true, 'unit/models/event-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/models/performer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("performer", {
    // Specify the other units that are required for this test.
    needs: ["model:event", "model:venue", "model:show"]
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bridgetowncomedy/tests/unit/models/performer-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/performer-test.js should pass jshint', function() { 
    ok(true, 'unit/models/performer-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/models/show-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("show", {
    // Specify the other units that are required for this test.
    needs: ["model:event", "model:venue", "model:performer"]
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bridgetowncomedy/tests/unit/models/show-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/show-test.js should pass jshint', function() { 
    ok(true, 'unit/models/show-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/models/venue-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("venue", {
    // Specify the other units that are required for this test.
    needs: ["model:event", "model:show", "model:performer"]
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bridgetowncomedy/tests/unit/models/venue-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/venue-test.js should pass jshint', function() { 
    ok(true, 'unit/models/venue-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/contact-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:contact", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/contact-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/contact-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/contact-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/events-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:events", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/events-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/events-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/events-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/faqs-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:faqs", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/faqs-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/faqs-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/faqs-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:index", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/performer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:performer", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/performer-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/performer-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/performer-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/performers-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:performers", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/performers-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/performers-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/performers-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/press-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:press", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/press-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/press-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/press-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/show-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:show", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/show-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/show-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/show-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/shows-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:shows", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/shows-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/shows-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/shows-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/sponsors-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:sponsors", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/sponsors-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/sponsors-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/sponsors-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/routes/venues-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:venues", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('bridgetowncomedy/tests/unit/routes/venues-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/venues-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/venues-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/views/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:application");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('bridgetowncomedy/tests/unit/views/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/application-test.js should pass jshint', function() { 
    ok(true, 'unit/views/application-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/views/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:index");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('bridgetowncomedy/tests/unit/views/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/index-test.js should pass jshint', function() { 
    ok(true, 'unit/views/index-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/unit/views/performer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:performer");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('bridgetowncomedy/tests/unit/views/performer-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/performer-test.js should pass jshint', function() { 
    ok(true, 'unit/views/performer-test.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/views/application.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/application.js should pass jshint', function() { 
    ok(true, 'views/application.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/views/index.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/index.js should pass jshint', function() { 
    ok(true, 'views/index.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/views/performer.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/performer.js should pass jshint', function() { 
    ok(true, 'views/performer.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/tests/views/performers.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/performers.js should pass jshint', function() { 
    ok(true, 'views/performers.js should pass jshint.'); 
  });

});
define('bridgetowncomedy/views/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {

      // Twitter show
      var js,
          fjs = document.getElementsByTagName("script")[0],
          p = /^http:/.test(document.location) ? "http" : "https";
      if (!document.getElementById("twitter-wjs")) {
        js = document.createElement("script");
        js.id = "twitter-wjs";
        js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
  });

});
define('bridgetowncomedy/views/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      var js,
          fjs = document.getElementsByTagName("script")[0],
          p = /^http:/.test(document.location) ? "http" : "https";
      js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
      fjs.parentNode.insertBefore(js, fjs);
    }
  });

});
define('bridgetowncomedy/views/performer', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      // Twitter show
      var js,
          fjs = document.getElementsByTagName("script")[0],
          p = /^http:/.test(document.location) ? "http" : "https";
      js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
      fjs.parentNode.insertBefore(js, fjs);
    }
  });

});
define('bridgetowncomedy/views/performers', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    showLazyImages: (function () {
      Ember['default'].$("img.lazy").lazyload();
    }).on("didInsertElement")
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('bridgetowncomedy/config/environment', ['ember'], function(Ember) {
  var prefix = 'bridgetowncomedy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("bridgetowncomedy/tests/test-helper");
} else {
  require("bridgetowncomedy/app")["default"].create({"name":"bridgetowncomedy","version":"0.0.0."});
}

/* jshint ignore:end */
//# sourceMappingURL=bridgetowncomedy.map