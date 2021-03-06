var fs = require('fs');

function FestivalData() {
  this.tmpEventsPath = __dirname + '/tmp/events.json';
  this.tmpPerformersPath = __dirname + '/tmp/performers.json';
  this.tmpSchedulePath = __dirname + '/tmp/schedule.json';
  this.tmpShowsPath = __dirname + '/tmp/shows.json';
  this.tmpVenuesPath = __dirname + '/tmp/venues.json';
}

FestivalData.prototype.getEventObject = function() {
  return JSON.parse(this.getEventData());
};

FestivalData.prototype.getEventData = function() {
  return fs.readFileSync(this.tmpEventsPath, 'utf8');
};

FestivalData.prototype.getVenueObject = function() {
  return JSON.parse(this.getVenueData());
};

FestivalData.prototype.getVenueData = function() {
  return fs.readFileSync(this.tmpVenuesPath, 'utf8');
};

FestivalData.prototype.getPerformerObject = function() {
  return JSON.parse(this.getPerformerData());
};

FestivalData.prototype.getPerformerData = function() {
  return fs.readFileSync(this.tmpPerformersPath, 'utf8');
};

FestivalData.prototype.getShowObject = function() {
  return JSON.parse(this.getShowData());
};

FestivalData.prototype.getShowData = function() {
  return fs.readFileSync(this.tmpShowsPath, 'utf8');
};

FestivalData.prototype.getScheduleObject = function() {
  return JSON.parse(this.getScheduleData());
};

FestivalData.prototype.getScheduleData = function() {
  return fs.readFileSync(this.tmpSchedulePath, 'utf8');
};

FestivalData.prototype.getPerformersForEvents = function(id) {
  var scheduleObj = this.getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].EventId, 10);

    if (idCheck === parseInt(id, 10) && this.doesPerformerExistForId(scheduleObj[key].PerformerId)) {

      returnArray.push(Number(scheduleObj[key].PerformerId));
    }
  }
  return returnArray;
};

FestivalData.prototype.getDescriptionForEvent = function(id) {
  var scheduleObj = this.getScheduleObject();
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].EventId, 10);

    if (idCheck === parseInt(id, 10)) {
      return scheduleObj[key].Description;
    }
  }
  return '';
};

FestivalData.prototype.getEventsForPerformer = function(id) {
  var scheduleObj = this.getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].PerformerId, 10);
    if (idCheck === parseInt(id, 10) && this.doesEventExistForId(scheduleObj[key].EventId)) {
      returnArray.push(Number(scheduleObj[key].EventId));
    }
  }
  return returnArray;
};

FestivalData.prototype.getMCEventsForPerformer = function(id) {
  var eventObj = this.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].emcee, 10);
    if (idCheck === parseInt(id, 10) && this.doesEventExistForId(eventObj[key].id)) {
      returnArray.push(Number(eventObj[key].id));
    }
  }
  return returnArray;
};

FestivalData.prototype.doesEventExistForId = function(id) {
  var eventObj = this.getEventObject();
  id = parseInt(id, 10);
  for (var key in eventObj) {
    var eventId = parseInt(eventObj[key].id, 10);

    if (eventId === id) {
      return true;
    }
  }
  return false;
};

FestivalData.prototype.getEventsForShow = function(id) {
  var eventObj = this.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].show, 10);
    if (idCheck === parseInt(id, 10)) {
      returnArray.push(Number(eventObj[key].id));
    }
  }
  return returnArray;
};

FestivalData.prototype.doesPerformerExistForId = function(id) {

  var performerObj = this.getPerformerObject();
  id = parseInt(id, 10);

  for (var key in performerObj) {
    var performerId = parseInt(performerObj[key].id, 10);
    if (performerId === id) {
      return true;
    }
  }
  return false;
};

FestivalData.prototype.doesEventExistForId = function(id) {
  var eventObj = this.getEventObject();
  id = parseInt(id, 10);
  for (var key in eventObj) {
    var eventId = parseInt(eventObj[key].id, 10);

    if (eventId === id) {
      return true;
    }
  }
  return false;
};

module.exports = new FestivalData();