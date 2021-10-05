const conn = net.createConnection({ 
  host: 'localhost', // change to IP address if working on a different computer
  port: 3000
});

conn.setEncoding('utf8');
