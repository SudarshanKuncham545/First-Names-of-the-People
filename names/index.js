const teamMemberNames = require("../country/state/city/index");

const getFirstNames = require("../utilities/utils/index");

function getPeopleInCity(teamMemberNames) {
  return getFirstNames(teamMemberNames);
}

module.exports = getPeopleInCity;
