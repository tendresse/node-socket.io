'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('get user', function(username, callback) {
    var responseData = {"achievements":[{"condition":5,"icon":"partageur","id":1,"tags":[],"title":"partageur","type_of":"send"},{"condition":1,"icon":"headshot","id":4,"tags":["cumshot"],"title":"headshot","type_of":"receive"}],"id":24,"username":"jesuissaloon"    };
    callback(responseData);
  });

  socket.on('random', function(callback) {
      var responseData = "http://67.media.tumblr.com/bc38e90db5548d9c38b1a5563550c343/tumblr_oeh52avJ3s1scdih6o1_500.gif";

      callback(responseData);
  });

  socket.on('get friends', function(callback) {
      var responseData = [{"achievements":[{"condition":5,"icon":"partageur","id":1,"tags":[],"title":"partageur","type_of":"send"}],"id":24,"username":"jesuissaloon"},{"achievements":[{"condition":1,"icon":"virginity_break","id":49,"tags":[],"title":"Virginity Break","type_of":"send"},{"condition":1,"icon":"un lingot","id":9,"tags":["golden","shower"],"title":"Goldfinger","type_of":"receive"}],"id":27,"username":"patrick"},{"achievements":[{"condition":1,"icon":"virginity_break","id":49,"tags":[],"title":"Virginity Break","type_of":"send"},{"condition":5,"icon":"partageur","id":1,"tags":[],"title":"partageur","type_of":"send"}],"id":12,"username":"korlan"}];
      callback(responseData);
  });

  socket.on('update device', function(token, callback) {
      var responseData = true;
      callback(responseData);
  });

  socket.on('send tendresse', function(username, callback) {
      var responseData = true;
      callback(responseData);
  });


  socket.on('add friend', function(username, callback) {
      var responseData = true;
      callback(responseData);
  });

  socket.on('delete friend', function(username, callback) {
      var responseData = true;
      callback(responseData);
  });

  socket.on('get tendresses', function(callback) {
      var responseData = {"dloomad":{"isFriend":false,"tendresses":[{"gif":"https://66.media.tumblr.com/2bb0a4c5e6c077a73bc917da00890cd4/tumblr_o9nk7rIwE41uqm3c9o1_500.gif","id":2625,"sender":"dloomad"},{"gif":"https://67.media.tumblr.com/74a8a9ebe47eec5efcb79789681ce691/tumblr_o7zq02sYni1uuya3go1_500.gif","id":2641,"sender":"dloomad"},{"gif":"https://66.media.tumblr.com/b1218d6d3183f7937453e7951331a5f7/tumblr_nr3fiia8o61rhw4clo2_500.gif","id":2643,"sender":"dloomad"},{"gif":"https://67.media.tumblr.com/cd6a292876fb9ca66fcaccadfada9a92/tumblr_mywc77f9531t593eto2_400.gif","id":2645,"sender":"dloomad"},{"gif":"https://66.media.tumblr.com/03455f2b7f460c4402b233a51b4e12ad/tumblr_nurvfz8Mam1uuya3go1_400.gif","id":2647,"sender":"dloomad"},{"gif":"https://67.media.tumblr.com/tumblr_m180u7eL1k1rph8rvo1_400.gif","id":2649,"sender":"dloomad"},{"gif":"https://67.media.tumblr.com/7cd0ceb97b6327340c0941a5ebf5ef89/tumblr_npt0k0ulx51uuya3go1_400.gif","id":2732,"sender":"dloomad"},{"gif":"https://66.media.tumblr.com/471b58a33af6552b1df4624256c90dd2/tumblr_nsdg46EPYM1u3xgcbo1_500.gif","id":2799,"sender":"dloomad"}]},"jesuissaloon":{"isFriend":true,"tendresses":[{"gif":"https://66.media.tumblr.com/9658f1362a5debc5d2b2016582891394/tumblr_nwuhjywF6v1uuya3go1_500.gif","id":2973,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/d3f55df4dbb55cf27d2ab1983e579eee/tumblr_nzbd6oKGcD1uuya3go1_500.gif","id":2974,"sender":"jesuissaloon"},{"gif":"https://66.media.tumblr.com/c526684ee93a5e8a068a1d37529b87d8/tumblr_nsrkoaLuwG1uuya3go1_500.gif","id":2984,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/c20af0339f15f2cf45c052c65be1b0d4/tumblr_n8fozcKSYp1ssnbtlo1_400.gif","id":2990,"sender":"jesuissaloon"},{"gif":"https://66.media.tumblr.com/12cdeaf8d91213a01a7c6941ce0b8599/tumblr_nob7lfHjZI1u1zu5lo1_r1_400.gif","id":3052,"sender":"jesuissaloon"},{"gif":"https://66.media.tumblr.com/e72f8820d0a382f7f0c94a12387cc2db/tumblr_o8jbwodxLV1un023zo6_540.gif","id":3061,"sender":"jesuissaloon"},{"gif":"https://66.media.tumblr.com/b934220c4e86e0f77b36bd362a8e4c72/tumblr_nyxn486PK81uuya3go1_500.gif","id":3072,"sender":"jesuissaloon"},{"gif":"https://66.media.tumblr.com/5693e1a4d18b03e31039ea919356434b/tumblr_ndydu86rn01tfuapwo1_400.gif","id":3222,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/bf1343217dce702da9c6b3742dc4f6ab/tumblr_mrhzvn3cqW1sr5h54o1_400.gif","id":3209,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/3ba792da5b680f010c2e3240cbfd1d37/tumblr_o9tm83wR5L1uuya3go1_540.gif","id":3218,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/1041c7fbe2a8778dedf9874f689af79e/tumblr_ntm4odAw7s1uuya3go1_400.gif","id":3248,"sender":"jesuissaloon"},{"gif":"https://67.media.tumblr.com/2645bd72fa269b3334c7d2a0c998c792/tumblr_npyyfywPvK1uuya3go1_250.gif","id":3546,"sender":"jesuissaloon"}]},"lolilol":{"isFriend":false,"tendresses":[{"gif":"https://66.media.tumblr.com/2f56d3d9681a944c4d565e0dbc843103/tumblr_nw2bo0UixN1uuya3go1_250.gif","id":1835,"sender":"lolilol"},{"gif":"https://66.media.tumblr.com/4e5a4f1de335b768892e2568c7cf5880/tumblr_nqo17zGTpO1uuya3go1_400.gif","id":1836,"sender":"lolilol"},{"gif":"https://67.media.tumblr.com/881a793b13f7c5fd2144779a30ad7191/tumblr_o09t6yj4VW1rsv6t3o6_500.gif","id":1873,"sender":"lolilol"}]}}
  ;
      callback(responseData);
  });
  
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
