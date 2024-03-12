const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     const printPlaylists = function() {
      
       const keyOfPList = Object.keys(library.playlists)
       let plistInfo = [];
       
       for (let plistKey of keyOfPList) {
         const plist = library.playlists[plistKey];
          plistInfo.push(`${plist.id}: ${plist.name} - ${plist.tracks.length} tracks`) ;
       }
       return plistInfo; 
        
     
       
       
     }
     
     
     
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
       const keyOfTracks = Object.keys(library.tracks)
       const trackListInfo = [];
       for( let tracklst of keyOfTracks){
         const unitTrack = library.tracks[tracklst];
         trackListInfo.push(`${unitTrack.id}: ${unitTrack.name} by ${unitTrack.artist} (${unitTrack.album})`) ;
     
       }
       return trackListInfo;
     };
     
     
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function (playlistId) {
       let keysList = Object.keys(library.playlists);
       const tracksInfo = [];
     
       for (let plist of keysList) {
         if(plist === playlistId) {
           const inPlaylst = library.playlists[plist];
           tracksInfo.push(`${inPlaylst.id}: ${inPlaylst.name} - ${inPlaylst.tracks.length} tracks`);
          for (let trks of inPlaylst.tracks) {
               const inTracks = library.tracks[trks]
               tracksInfo.push(`${inTracks.id}: ${inTracks.name} by ${inTracks.artist} (${inTracks.album})`)
              }
         
         }
       }
       return tracksInfo;
     }
     
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
       const keyOfPList = Object.keys(library.playlists)
        for (let plist of keyOfPList) {
         if(plist === playlistId) {
           const selectPlaylist = library.playlists[plist]
           selectPlaylist.tracks.push(trackId);
         
          
         }
        }
        return printPlaylist(playlistId);
     
     }
     
     
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
       let idUsed = generateUid();
       library.tracks.idUsed = {
         id :  idUsed,
         name : name,
         artist : artist,
         album : album
     
       } ;
       
     
     };
     
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
       let playlistId = generateUid();
       library.playlists.playlistId= {
         id: playlistId,
         name: name,
         tracks: []
       }
                                 
       return printPlaylists();
     
     }
     


     // Testing using assertArrayEqual 

     
     const eqArrays = function(firstArr, secondArr) {
      if(firstArr.length === secondArr.length){
       let isEqual = true;
       for(let i = 0; i < firstArr.length; i++){
        
         if(firstArr[i] !== secondArr[i]){
           isEqual = false;
         }
       }
       return isEqual;
      } else {
       return false;
      }
     };
    
     const assertArraysEqual = function(arr1, arr2) {  //intialize an assertArraysEqual fn with two array arguments
      let result = eqArrays(arr1, arr2);
      if(result) {     // check if arr1 is equal to arr2
        console.log(`✅✅✅ Test Passed: ${arr1} === ${arr2} : Arrays are equal.`); // if equal return this message
      } else {
        console.log(`❌❌❌ Test Failed: ${arr1} !== ${arr2} :Arrays are not equal.`); // else return this message
      }
     }

     //Testing each of the functions

    // const result1 = printPlaylists();
    // const result2 = printTracks();
    const result3 = printPlaylist("p01") //should print playlist p01
    const result4 = addTrackToPlaylist("t03","p01")
   
   
    
    // assertArraysEqual(result1, [ 'p01: Coding Music - 2 tracks', 'p02: Other Playlist - 1 tracks' ]);
    // assertArraysEqual(result2, [
    //   't01: Code Monkey by Jonathan Coulton (Thing a Week Three)',
    //   't02: Model View Controller by James Dempsey (WWDC 2003)',
    //   't03: Four Thirty-Three by John Cage (Woodstock 1952)'
    // ]);
    assertArraysEqual(result3,[
      'p01: Coding Music - 2 tracks',
      't01: Code Monkey by Jonathan Coulton (Thing a Week Three)',
      't02: Model View Controller by James Dempsey (WWDC 2003)'
    ]);  // Test Passed
    assertArraysEqual(result4,[
      'p01: Coding Music - 3 tracks',
      't01: Code Monkey by Jonathan Coulton (Thing a Week Three)',
      't02: Model View Controller by James Dempsey (WWDC 2003)',
      't03: Four Thirty-Three by John Cage (Woodstock 1952)'
    ]); // Test Passed
     
    

    