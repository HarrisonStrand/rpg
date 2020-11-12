// gunner character has properties of: name, weapons, inventory
// name will be user input
// weapons: bazooka, heavy machine gun, pump-shotgun, assault-rifle
// inventory = []
import Gunner from "./../src/js/gunner.js";


describe('Gunner', () => {
  let gunner;
  beforeEach(() => {
    gunner = new Gunner("Gunther", "bazooka", 100);
  });
    test('should correctly create a gunner character with properties', () => {
      expect(gunner.name).toEqual("Gunther");
      expect(gunner.weapon).toEqual("bazooka");
  });

    test('should subtract 10hp from health with small attack method', () => {
      expect(gunner.smAttack()).toEqual(90);
  });

    test('should subtract 20hp from health with medium attack method', () => {
      expect(gunner.mdAttack()).toEqual(80);
  });

    test('should subtract 50hp from health with special attack method', () => {
      expect(gunner.spcAttack()).toEqual(50);
  });
});




// describe('Triangle', () => {
  //   test('should correctly create a triangle object with three lengths', () => {
    //     const triangle = new Triangle(2,4,5);
    //     expect(triangle.side1).toEqual(2);
    //     expect(triangle.side2).toEqual(4);
    //     expect(triangle.side3).toEqual(5);
    //   });
    
    
    // health: max health = 100 current health = 0-100
    // defense: shields that add 20 to health