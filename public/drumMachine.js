// JavaScript source code

// TODO change 'remove FX' button so that each FX button toggles itself on/off,
//
// e.g.  !sound.addEffect('${effect}') ? sound.addEffect('${effect}') : sound.removeEffect('${effect}')
// or 'let active = false', onButtonPress(effect) { if (active) { removeEffect(etc... )} }


const removeFX = () => {
    GROUP.removeEffect(DELAY)
        .removeEffect(REVERB)
        .removeEffect(DISTORTION)
        .removeEffect(FLANGER)
        .removeEffect(PANNER)
        .removeEffect(HP)
        .removeEffect(LP)
        .removeEffect(TREMOLO)
};

const UPDATE_TAG = msg => {
    document.getElementById("soundInfo").innerHTML = msg;
};

//SOURCES FOR SOUND FILES
const URL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/",
    Q = new Pz.Sound(`${URL}open.WAV`),
    W = new Pz.Sound('https://s3.eu-west-2.amazonaws.com/jamesmaltby/codepen/audio/hihatopen.mp3'),
    E = new Pz.Sound('https://s3.eu-west-2.amazonaws.com/jamesmaltby/codepen/audio/crash.mp3'),
    A = new Pz.Sound(`${URL}snare.WAV`),
    S = new Pz.Sound(`${URL}PAD2.wav`),
    D = new Pz.Sound(`${URL}HORN1.wav`),
    Z = new Pz.Sound(`${URL}kick.WAV`),
    X = new Pz.Sound(`${URL}chord1.wav`),
    C = new Pz.Sound(`${URL}chord2.wav`);

const GROUP = new Pz.Group([Q, W, E, A, S, D, Z, X, C]);

//FX
const DELAY = new Pizzicato.Effects.Delay({
    feedback: 0.4,
    time: 0.4,
    mix: 0.5
}),
    DISTORTION = new Pizzicato.Effects.Distortion({
        gain: 0.3
    }),
    REVERB = new Pz.Effects.Reverb({
        time: 1,
        decay: 0.8,
        reverse: false,
        mix: 0.5
    }),
    FLANGER = new Pz.Effects.Flanger({
        time: 0.45,
        speed: 0.2,
        depth: 0.1,
        feedback: 0.1,
        mix: 0.5
    }),
    TREMOLO = new Pz.Effects.Tremolo({
        speed: 5,
        depth: 1,
        mix: 0.5
    }),
    PANNER = new Pz.Effects.StereoPanner({
        pan: 0.5
    }),
    LP = new Pz.Effects.LowPassFilter({
        frequency: 1000,
        peak: 10
    }),
    HP = new Pz.Effects.HighPassFilter({
        frequency: 100,
        peak: 10
    });

// TODO Bool for FX cause audio error when attempt to remove.
// ADD FX KEY BINDINGS e.g. U, I, O, etc...
// HAVE KEYPRESSES HIGHLIGH BUTTONS ON PAD
//
$(".drum-pad").keydown(e => {
    // Sets the color when the key is down...
    $(e).toggleClass("pressed");
});

document.onkeydown = function (e) {
    const key = e.which || e.keyCode;
    // const clip = String.fromCharCode(key)
    // clip.stop()
    // clip.play()

    // TODO change the switch statement to a function that takes the key value, then calls .play() and .stop() on the sound associated with the value
    switch (key) {
        case 37: // left arrow - filter / fx / pitch shift up
            GROUP.removeEffect(DELAY);
            GROUP.addEffect(DELAY);
            break;
        case 38: // up arrow - volume / filter up
            GROUP.volume += 0.1;
            break;
        case 39: // right arrow fx down
            GROUP.removeEffect(REVERB);
            GROUP.addEffect(REVERB);
            break;
        case 40: // down arrow volume / filter down
            GROUP.volume -= 0.1;
            break;
        case 81:
            Q.stop();
            Q.play();
            UPDATE_TAG("hi hat closed");
            $("#Q").toggleClass(pressed, addOrRemove);

            break;
        case 87: // w
            W.stop();
            W.play();
            UPDATE_TAG("hi hat open");
            break;
        case 69: // e
            E.stop();
            E.play();
            UPDATE_TAG("hi hat");
            break;
        case 65: //a
            A.stop();
            A.play();
            UPDATE_TAG("snare");
            break;
        case 83: //s
            S.stop();
            S.play();
            UPDATE_TAG("trombone");
            break;
        case 68: //d
            D.stop();
            D.play();
            UPDATE_TAG("trumpet");
            break;
        case 90: //z
            Z.stop();
            Z.play();
            UPDATE_TAG("bass kick");
            break;
        case 88: //x
            X.stop();
            X.play();
            UPDATE_TAG("keys up");
            break;
        case 67: //c
            C.stop();
            C.play();
            UPDATE_TAG("keys down");
            break;
        default:
            return null; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};

// TODO SEPARATE OUT COMPONENTS AND MOVE HTML FORMATTING INTO THEM

swal("Up/Down arrow for volume \n Left/Right arrow for delay/reverb ", {
    buttons: true,
    timer: 2500,
    closeOnEsc: true,
    closeOnClickOutside: true
});
