const tamogotchi = {
  name: 'Vakha',
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function (){
    if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
         return `${this.name} умер :(`
        }
    else if(this.meal < 3 && this.meal > 0){
        this.meal = 'Я голоден'
    } else {
        this.meal = 'Я не голоден' 
    }
     if(this.energy < 3 && this.energy > 0){
        this.energy = 'Я хочу спать'
     } else {
        this.energy = 'Я не хочу спать'
     }
     if(this.mood < 3 && this.mood > 0) {
        this.mood = 'Мне скучно'
     }else {
        this.mood = 'Мне весело'
     }
    return `Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}.`
  },
  setName: function () {
    this.name = 'Said'
    return
},

eat : function () {
    if (this.meal < 5) {
        this.meal ++ && this.mood --;

    }
    return 
},
sleep : function () {
    if (this.energy < 5) {
        this.energy ++ && this.meal --;

    }
    return 
},
play : function () {
    if (this.mood < 5) {
        this.mood ++ && this.energy --;

    }
    return 
},

}


console.log(tamogotchi.getStatus())