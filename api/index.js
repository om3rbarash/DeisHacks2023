const express = require('express');
const app = express();

// Define the folders and their images
const folders = {
  A: ['https://cdn.discordapp.com/attachments/1071231326654578821/1071519815753289758/Side_A1.png', 'https://cdn.discordapp.com/attachments/1071231326654578821/1071519816860565585/Side_B1.png'],
  B: ['https://cdn.discordapp.com/attachments/1071231326654578821/1071519815967195267/Side_A2.png', 'https://cdn.discordapp.com/attachments/1071231326654578821/1071519817061912576/Side_B2.png'],
  C: ['https://cdn.discordapp.com/attachments/1071231326654578821/1071519816202059836/Side_A3.png', 'https://cdn.discordapp.com/attachments/1071231326654578821/1071519817275818066/Side_B3.png'],
  D: ['https://cdn.discordapp.com/attachments/1071231326654578821/1071519816411795456/Side_A4.png', 'https://cdn.discordapp.com/attachments/1071231326654578821/1071519817493925978/Side_B4.png'],
  E: ['https://cdn.discordapp.com/attachments/1071231326654578821/1071519816608923658/SIde_A5.png', 'https://cdn.discordapp.com/attachments/1071231326654578821/1071519817737191505/Side_B5.png']
};

// Define the MobileFolders and their images
const mobileFolders = {
  A: ['https://cdn.discordapp.com/attachments/755520550134349925/1071694970081263646/Side_A1.png', 'https://cdn.discordapp.com/attachments/755520550134349925/1071695722405171270/Side_B1.png'],
  B: ['https://cdn.discordapp.com/attachments/755520550134349925/1071694974216843285/Side_A2.png', 'https://cdn.discordapp.com/attachments/755520550134349925/1071695747038335037/Side_B2.png'],
  C: ['https://cdn.discordapp.com/attachments/755520550134349925/1071695000636756049/Side_A3.png', 'https://cdn.discordapp.com/attachments/755520550134349925/1071695759889678387/Side_B3.png'],
  D: ['https://user-images.githubusercontent.com/48355572/216808554-0f320ffc-1e35-4721-8034-d022110b37ce.png', 'https://cdn.discordapp.com/attachments/755520550134349925/1071695775337283664/Side_B4.png'],
  E: ['https://cdn.discordapp.com/attachments/755520550134349925/1071695023709634560/Side_A5.png', 'https://cdn.discordapp.com/attachments/755520550134349925/1071695787584651325/Side_B5.png']
};


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/' , (req,res) => {
  // return json array of images
  const folderNames = Object.keys(folders);
  const selectedFolder = folderNames[Math.floor(Math.random() * folderNames.length)];
  const images = folders[selectedFolder];
  res.json ({
    images
  });
});

app.get('/mobile' , (req,res) => {
  const folderNames = Object.keys(mobileFolders);
  const selectedFolder = folderNames[Math.floor(Math.random() * folderNames.length)];
  const images = mobileFolders[selectedFolder];
  res.json ({
    images
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));