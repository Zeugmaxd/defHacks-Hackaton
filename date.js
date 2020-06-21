//jshint esversion:6
//this date module exports hello world
                            //we don't want to activate our function so we'll leave it without parenthesis
                            //that should be left for our server to handle
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

};

// console.log(module.exports);
//to get date back to the server =
//to make it back to another place where it is needed
