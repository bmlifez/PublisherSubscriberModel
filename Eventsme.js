class EventEmitter{
   
   constructor(){
      this.event = {};
   }

 
   subscribe(eventName,func){
      this.event = {
         eventName : func
      }
   }

   emit(eventName,data){
      this.event.eventName.call(null,data);
   }

   eventState(){
      return this.event;
   }


}

let e = new EventEmitter();

function check(){
   function me(data){
      console.log("data is",data);
   }

   e.subscribe("register",me);
}

function foo(){
   e.emit("register",123);
   e.emit("register",[1,2,3]);
   e.emit("register","PubSub Model");
}

check();
foo();