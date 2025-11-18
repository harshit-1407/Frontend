 const person=function (name ,birthyear){
    this.firstName=name;
    this.birthyear=birthyear;
  };
  person.prototype.calcAge=function(){
    const currentYear=2025;
    console.log(currentYear-this.birthyear);
    return currentYear-this.birthyear;
  };

  const Nikhil=new person("Harshit",2007);
  Nikhil.calcAge();