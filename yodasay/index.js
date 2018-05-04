let soap = require('soap')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if ((req.body && req.body.text)) {
        const client = await soap.createClientAsync('https://www.yodaspeak.co.uk/webservice/yodatalk.php?wsdl');
		const response = await client.yodaTalkAsync({ inputText: req.body.text });
        context.res = {
            body: response[0].return
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};