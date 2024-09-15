const http = require('http');

const hostname = 'localhost';
const port = 8000;

const serverConfigGet = require('./NodeUrlConfigForGet');
const serverConfigPost = require('./NodeUrlConfigForPost');

const server = http.createServer(serverConfigGet);

/*
const server = http.createServer((req, res) => {
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
});
*/
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', serverConfigPost);
