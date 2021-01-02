var ENV = 'production';

var TITLE = "Schweberad - Schwebebahn-Ersatzverkehr mit Fahrrädern";
var NAME = "Schweberad";
var SYSTEM_URL = "http://api.schweberad.de";
var API_ROOT = SYSTEM_URL + "/api";
var GBFS_URL = SYSTEM_URL + "/gbfs/gbfs.json";

var DEFAULT_LOCATION = [51.2532, 7.1452];
var DEFAULT_ZOOM = 13;

var I18N_MESSAGE_OVERRIDE = {
    "de": {
      "message": {
        "about": {
          "html": "Schweberad - Ein Versuch einen Schwebebahn Ersatzverkehr mit kostenlosen Radverleih zu realisieren. In Zusammenarbeit mit der <a href=\"//www.schweberingbahn.de\">Schweberingbahn</a>.<br>1) Finde ein Fahrrad an einer Schwebebahnstation 2) Kontrolliere, ob es verkehrssicher ist 3) Fahre zu einer beliebigen Schwebebahnstation und lass das Rad für den Nächsten da."
        },
        "banner": {
          "html": "Aktuell wollen wir auf eine Anmeldung verzichten. Gehe daher bitte pfleglich mit den Rädern um. Der Code fürs Schloss lautet: 1337. "
        }
      }
    }
  };

var SUPPORT_TYPE;
var SUPPORT_URL;

var SENTRY_DSN = '';

var DISABLE_LOGIN = true;

module.exports =  {ENV, TITLE, NAME, API_ROOT, GBFS_URL, DEFAULT_LOCATION, DEFAULT_ZOOM, I18N_MESSAGE_OVERRIDE, SUPPORT_TYPE, SUPPORT_URL, SENTRY_DSN, DISABLE_LOGIN };
