const fs = require('fs');
const queryString = require('querystring');

const urlConfigPost = function UrlConfigPost(req, res) {
  // Set the response header to indicate JSON content
  //res.setHeader('Content-Type', 'application/json');

  // Handle different routes
  if (req.method === 'POST')
      { 
      switch (req.url)
      {
	case '/':
	 {
	    // Create a JSON response object
	    const resp = {
	    code: 1,
	    message: 'Server is running to serve Post requests'
    	    }

	  // Send JSON response
	  res.statusCode = 200;
	  res.end(JSON.stringify(resp));
	}
	break;

	case '/forms':
	 {
	   res.writeHead(200, {"Content-Type": "text/html"});
	   fs.readFile("./forms.html", (err,fileContent) =>
	   {
  	     res.end(fileContent);
	   });
 	 }
	break;


	case '/items':
	 {
	   //console.log(JSON.stringify(req.queryString));
	   //const responseBody = res.json();
 	   //console.log(JSON.stringify(responseBody));
	   res.writeHead(200, {"Content-Type": "text/html"});
	   fs.readFile("./items.html", (err,fileContent) =>
	   {
  	     res.end(fileContent);
	   });
 	 }
	break;



	case '/user':
	 {
	    // Create a JSON response object
	    const resp = {
	    code: 1,
	    name: 'Jacob Philips',
	    gender: 'male'
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

module.exports = urlConfigPost;