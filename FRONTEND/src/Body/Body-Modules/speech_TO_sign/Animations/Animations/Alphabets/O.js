// export const O = (ref) => {

//     let animations = []

//     animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
//     animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
//     animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
//     animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

//     animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/1.45, "+"]);
//     animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
//     animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

//     animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
//     animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

//     animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
//     animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
//     animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

//     animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
//     animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);
//     animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/15, "+"]);

//     animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
//     animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
//     animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/13, "-"]);
//     animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/18, "+"]);

//     ref.animations.push(animations);

//     animations = []

//     animations.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"]);
//     animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", 0, "+"]);
//     animations.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "-"]);
//     animations.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"]);

//     animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
//     animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);

//     animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
//     animations.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);

//     animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
//     animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

//     animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
//     animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

//     animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
//     animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
//     animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
//     animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);

//     ref.animations.push(animations);

//     if(ref.pending === false){
//       ref.pending = true;
//       ref.animate();
//     }
    
// }

export const O = (ref) => {

  let animations = []

  animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/8, "+"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"]);

  animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

  ref.animations.push(animations);

  animations = []
  
  animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

  animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

  ref.animations.push(animations);

  if(ref.pending === false){
    ref.pending = true;
    ref.animate();
  }
}