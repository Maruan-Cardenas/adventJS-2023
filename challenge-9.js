function adjustLights(lights) {

    let changesNeeded1 = 0;
    let changesNeeded2 = 0;
  
    for (let i = 0; i < lights.length; i++) {

      const expectedColor1 = i % 2 === 0 ? '🔴' : '🟢';
      const expectedColor2 = i % 2 === 0 ? '🟢' : '🔴';
  
      if (lights[i] !== expectedColor1) {
        changesNeeded1++;
      }
      if (lights[i] !== expectedColor2) {
        changesNeeded2++;
      }
    }
  
    return changesNeeded1 < changesNeeded2 ? changesNeeded1 : changesNeeded2;
  }
  
  const lightsArray = ["🔴", "🔴", "🔴"];
  console.log(adjustLights(lightsArray));  