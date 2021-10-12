var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

var eles = [];

function box(itm){
    const that=this;
    that.loop(itm);
    this.ele.addEventListener("click", function (){
        that.changeColor1();
    })
}

box.prototype.loop = function(itm){
    const that=this
    if (itm < 10){
        that.write(itm+" and is less than 10");
    }
    else if (itm.length > 5){
        that.write(itm+" and has more than 5 characters");
    }
    else if (itm === 15){
        that.write(itm+" and ....is the number 15....");
    }
    else {
        that.write(itm+" and is normal");
    }
}

box.prototype.write = function(mssg){
    this.ele = document.createElement("div");
    this.ele.innerHTML = "The value is " + mssg;
    document.body.appendChild(this.ele);
}

for (i=0; i<stringers.length;i++){
    eles.push(new box(stringers[i]));
}

box.prototype.changeColor1= function(){
    const that=this
    this.ele.style.color="blue";
    this.ele.addEventListener("click",function (){
        that.changeColor2();
    })
}

box.prototype.changeColor2 = function(){
    const that=this;
    this.ele.style.color="black";
    this.ele.addEventListener("click", function (){
        that.changeColor1();
    })
}