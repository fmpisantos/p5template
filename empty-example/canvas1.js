function canvas1(){
    
    var sketch = function(p){
        //VARIABLES
        var BLACK = 0;
        var WHITE = 255;
        
        p.setup = function (){
            //SETUP
            p.createCanvas(512,512);
            p.background(WHITE);
        }
        
        p.draw = function (){
            //DRAW
            //SEND p TO THE NEW CLASSES AND SAVE IT AS A VARIABLE
            //USE IT TO USE P5 FUNCTIONS
            
        }
    }
    
    return sketch;
}