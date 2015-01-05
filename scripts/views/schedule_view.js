(function(){
  "use strict";

  App.ScheduleView = Ember.View.extend({
    templateName: 'schedule',
    didInsertElement:function(){
      Ember.run.scheduleOnce('afterRender', this, this.addListDividers);
      Ember.run.scheduleOnce('afterRender', this, this.addTableColspans);
      //Ember.run.scheduleOnce('afterRender', this, this.makeTableResponsive);

    },
    addListDividers: function() {
      $('.schedule-list__spacer').remove();
      var currentTime = moment().zone('-07:00').subtract(100,'years').toISOString();
      $('.list-group-item').each(function() {
        var rowTime = $(this).data('start-time');
        if (rowTime !== currentTime) {
          currentTime = rowTime;
          var dateString = moment(currentTime).zone('-07:00').format('h:mm a - dddd MMMM Do YYYY');
          var weekday = moment(currentTime).zone('-07:00').format('dddd').toLowerCase();
          currentTime = $(this).data('start-time');

          $(this).before('<div class="list-group-item schedule-list__spacer ' + weekday + '"><div class="container-fluid"><div class="row"><div class="col-xs-12">' + dateString + '</div></div></div></div>');
        }
      })
    },

    addTableColspans: function() {
      $('.cell-spacer').remove();
      $('.schedule-table__cell').each(function() {
      var startTime = $(this).data('start-time');
      var endTime = $(this).data('end-time');
      var duration = moment(endTime).diff(moment(startTime),'minutes') / 30;
      $(this).attr('colspan',duration);


      var previousTime = $(this).prevAll('.schedule-table__cell:eq(0)').data('end-time') || FESTIVAL_START_TIME;
      var durationBefore = moment(startTime).diff(moment(previousTime),'minutes') / 30;
      $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>')
      });
    },

    makeTableResponsive: function() {
      $("table.schedule-table").css('visibility','hidden');
        var switched = false;
        var updateTables = function() {
          if (($(window).width() < 9999999) && !switched ){
            switched = true;
            $("table.responsive").each(function(i, element) {
              splitTable($(element));
            });
            return true;
          }
          else if (switched && ($(window).width() > 9999999)) {
            switched = false;
            $("table.responsive").each(function(i, element) {
              unsplitTable($(element));
            });
          }
        };
        updateTables();
        $("table.schedule-table").css('visibility','visible').hide();
        // $(window).load(updateTables);
        // $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
        // $(window).on("resize", updateTables);


       function splitTable(original)
       {
         original.wrap("<div class='table-wrapper' />");

         var copy = original.clone();
         copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
         copy.removeClass("responsive");

         original.closest(".table-wrapper").append(copy);
         copy.wrap("<div class='pinned' />");
         original.wrap("<div class='scrollable' />");

          setCellHeights(original, copy);
       }

       function unsplitTable(original) {
          original.closest(".table-wrapper").find(".pinned").remove();
          original.unwrap();
          original.unwrap();
       }

        function setCellHeights(original, copy) {
          var tr = original.find('tr'),
              tr_copy = copy.find('tr'),
              heights = [];

          tr.each(function (index) {
            var self = $(this),
                tx = self.find('th, td');

            tx.each(function () {
              var height = $(this).outerHeight(true);
              heights[index] = heights[index] || 0;
              if (height > heights[index]) heights[index] = height;
            });

          });

          tr_copy.each(function (index) {
            $(this).height(heights[index]);
          });
        }

      //});

    }
  });
}());