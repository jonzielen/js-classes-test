class MyName {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  };

  message(message) {
    console.log(this.first+' '+this.last+' '+message);
    return this.first+' '+this.last+' '+message;
  }
}

var jon = new MyName('Jon', 'Zielenkievicz');
jon.message('is tired.');
console.log(jon);
