
function handleTickInit(tick) {

  var locale = {
    YEAR_PLURAL: 'Jahren',
    YEAR_SINGULAR: 'Jahr',
    MONTH_PLURAL: 'Monaten',
    MONTH_SINGULAR: 'Monat',
    WEEK_PLURAL: 'Wochen',
    WEEK_SINGULAR: 'Woche',
    DAY_PLURAL: 'Tagen',
    DAY_SINGULAR: 'Tag',
    HOUR_PLURAL: 'Stunden',
    HOUR_SINGULAR: 'Stunde',
    MINUTE_PLURAL: 'Minuten',
    MINUTE_SINGULAR: 'Minute',
    SECOND_PLURAL: 'Sekunden',
    SECOND_SINGULAR: 'Sekunde',
    MILLISECOND_PLURAL: 'Millisekunden',
    MILLISECOND_SINGULAR: 'Millisekunde'
  };

  for (var key in locale) {
    if (!locale.hasOwnProperty(key)) { continue; }
    tick.setConstant(key, locale[key]);
  }

  var counter = Tick.count.down('2024-05-11T13:30:00+01:00');

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    tick.root.style.display = 'none';
    document.querySelector('.headline').innerHTML = '<3';
  }
}
