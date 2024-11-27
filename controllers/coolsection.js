
const coolMessege = (request, response, next) => {
    response.json({messege : "You are allowed to enter the cool section"});
};

module.exports = {coolMessege};