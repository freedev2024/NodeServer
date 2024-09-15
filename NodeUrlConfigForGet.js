const fs = require('fs');

const urlConfigGet = function UrlConfigGet(req, res) {
  // Set the response header to indicate JSON content
  res.setHeader('Content-Type', 'application/json');

  // Handle different routes
  if (req.method === 'GET')
      { 
      switch (req.url)
      {
	case '/':
	 {
	    // Create a JSON response object
	    const resp = {
	    code: 1,
	    message: 'Server is running to serve requests'
    	    }

	  // Send JSON response
	  res.statusCode = 200;
	  res.end(JSON.stringify(resp));
	}
	break;

	case '/login':
	 {
	   res.writeHead(200, {"Content-Type": "text/html"});
	   fs.readFile("./login.html", (err,fileContent) =>
	   {
  	     res.end(fileContent);
	   });
 	 }
	break;


	case '/user':
	 {
	    //const userId = req.query.id;
 	    //console.log('user ID: ' + userId);
	    // Create a JSON response object
	    const resp = {
	    code: 11,
	    name: 'Jacob Philips',
	    gender: 'male',
	    techProficiency: [
		{
		  id: 110,
		  techName: 'Dotnet Full stack'
		},
		{
		  id: 115,
		  techName: 'MSSQL Development'
		},
		{
		  id: 120,
		  techName: 'Azure Infratructure'
		}]
    	    }

	  // Send JSON response
	  res.statusCode = 200;
	  res.end(JSON.stringify(resp));
	}
	break;

	case '/projects':
	 {
	    // Create a JSON response object
	    const resp = [{
        	projectcode: 101,
        	technology: 'MEAN Full-stack',
        	scope: 'development'
    	    },
	    {
        	projectcode: 101,
        	technology: 'MEAN Full-stack',
        	scope: 'development'
    	    }]
	  // Send JSON response
	  res.statusCode = 200;
	  res.end(JSON.stringify(resp));
	}
	break;

	default: 
	{
	    // Handle 404 Not Found
	    res.statusCode = 404;
	    res.end(JSON.stringify({ error: 'Not Found' }));
  	}
      }
     }
};

module.exports = urlConfigGet;