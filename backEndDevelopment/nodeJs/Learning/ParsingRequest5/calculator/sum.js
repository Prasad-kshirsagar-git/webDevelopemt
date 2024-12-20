const sumRequestHandler = (req, res) => {
  console.log("in Sum request Handler", req.url);
  const body =  [];
  // req.on('data', chunk => {
  //   body.push[chunk];
  // });

  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
    console.log(params);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);

    const Result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(Result);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1> Adding is : ${Result}</h1>
        <a href = "/">Go To home</a>
      </body>
    </html>
  `);

  return res.end();

  });
}

exports.sumRequestHandler = sumRequestHandler;