const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req,res) => {
  console.log(req.url);
  if(req.url === '/') {
    fs.readFile(path.join(__dirname,'Home.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
 } else
  if (req.url === '/gallery') {
    fs.readFile(path.join(__dirname,'Gallary.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });

  } else if (req.url === '/contact') {
    fs.readFile(path.join(__dirname,'contact.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
} else if (req.url === '/contact.html') {
    fs.readFile(path.join(__dirname,'contact.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
} else if (req.url === '/Home.html') {
    fs.readFile(path.join(__dirname,'Home.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
} else if (req.url === '/Gallary.html') {
        fs.readFile(path.join(__dirname,'Gallary.html'), (err,content) => {
          if(err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html'});
          res.end(content);
        });
//css
  } else if (req.url === '/assets/css/main.css') {
    fs.readFile(path.join(__dirname, 'assets', 'css' , 'main.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
  } else if (req.url === '/assets/css/noscript.css') {
    fs.readFile(path.join(__dirname, 'assets', 'css' , 'noscript.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
}else if (req.url === '/assets/css/font-awesome.min.css') {
    fs.readFile(path.join(__dirname,'assets', 'css' ,'font-awesome.min.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
}else if (req.url === '/assets/css/images/overlay.png') {
    fs.readFile(path.join(__dirname,'assets', 'css','images' ,'overlay.png'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'images/png'});
      res.end(content);
    });
}else if (req.url === '/assets/css/images/loader.gif') {
    fs.readFile(path.join(__dirname,'assets', 'css','images' ,'loader.gif'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'images/gif'});
      res.end(content);
    });
}else if (req.url === '/assets/css/images/arrow.svg') {
    fs.readFile(path.join(__dirname,'assets', 'css','images' ,'arrow.svg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/svg'});
      res.end(content);
    });
}else if (req.url === '/assets/css/fonts/fontawesome-webfont.svg') {
    fs.readFile(path.join(__dirname,'assets', 'css','images' ,'fontawesome-webfont.svg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/svg'});
      res.end(content);
    });
}
//js
else if (req.url === '/assets/js/breakpoints.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'breakpoints.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/browser.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'browser.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/app.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'app.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/jquery.dropotron.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'jquery.dropotron.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}
else if (req.url === '/assets/js/jquery.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'jquery.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}
else if (req.url === '/assets/js/jquery.poptrox.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'jquery.poptrox.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}
else if (req.url === '/assets/js/jquery.scrollex.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'jquery.scrollex.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/jquery.scrolly.min.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'jquery.scrolly.min.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/main.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'main.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}else if (req.url === '/assets/js/util.js') {
    fs.readFile(path.join(__dirname,'assets', 'js' ,'util.js'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript'});
      res.end(content);
    });
}
//images
else if (req.url === '/images/a2.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'a2.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/a3.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'a3.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/a6.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'a6.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h1.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h1.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h2.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h2.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h3.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h3.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h4.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h4.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h5.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h5.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/h6.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'h6.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/header.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'header.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/he2.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'he2.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/he4.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'he4.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/he6.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'he6.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/i6.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'i6.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/p.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'p.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/s1.png') {
    fs.readFile(path.join(__dirname,'images' ,'s1.png'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/png'});
      res.end(content);
    });
}else if (req.url === '/images/s2.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'s2.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/s4.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'s4.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/s7.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'s7.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}else if (req.url === '/images/t.jpg') {
    fs.readFile(path.join(__dirname,'images' ,'t.jpg'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpg'});
      res.end(content);
    });
}
//error
else {
    fs.readFile(path.join(__dirname,'404.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(404, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log('Server is running on port: '+PORT);
});