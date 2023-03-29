'use strict';

module.exports.hello = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!'
        }),
    };
};

module.exports.greet = async (event) => {
  const name = JSON.parse(event.body).name;
  const message = `Hello ${name}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ message })
  };
};