# React H265 WASM Player [![NPM Package][npm_img]][npm_site] [![Travis Status][trav_img]][trav_site]

A higher-level react component to play h265 video


## About

## Usage

### NPM and Webpack/Browserify
Install via `npm`. Use `--save` to include it in your *package.json*.

```bash
npm install react-h265-wasm-player
```

Start by importing/requiring react-h265-wasm-player within your react code.

```js
import ReactH265Player from 'react-h265-wasm-player';

import React, { useState }  from 'react';
import ReactH265Player from './ReactH265Player'

function App() {
  const [playerRef, setPlayerRef] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <ReactH265Player 
          width="500" height="500"
          url="h265_high.mp4"
          bufferSize={512 * 1024}
          isStream={false}
          errorHandler={e => {
            console.log("play error " + e.error + " status " + e.status + ".");
            if (e.error === 1) {
              // finish
            }
          }}
          passRef={ref => setPlayerRef(ref)} />

          <div>
            <button onClick={() => {
              playerRef.resume();
            }}>play</button>
            <button onClick={() => {
              playerRef.pause();
            }}>pause</button>
            <button onClick={() => {
              playerRef.stop()
            }}>stop</button>
          </div>
      </header>
    </div>
  );
}

export default App;
```

### In `index.html`

Because decode job is distributed in JS worker, for better performance
You need to add these to your html container. 

```
<script type="text/javascript" src="assets/common.js"></script>
<script type="text/javascript" src="assets/pcm-player.js"></script>
<script type="text/javascript" src="assets/webgl.js"></script>
<script type="text/javascript" src="assets/player.js"></script>
```

## Todo
- Add vendor prefixes
- Find a good way for wasm loading

## Issues
Feel free to contribute. Submit a Pull Request or open an issue for further discussion.

## License
MIT &copy; [tcper][tcper]
