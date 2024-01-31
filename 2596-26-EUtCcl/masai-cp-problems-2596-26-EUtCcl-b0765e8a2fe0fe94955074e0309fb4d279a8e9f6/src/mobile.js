class Mobile {
    #unlockPin 
    constructor(model, number, unlockPin){
        this.model = model;
        this.number = number;
        this.#unlockPin = unlockPin;
    }

        get getUnlockPin(){
           return this.#unlockPin;
        };

        set unlockPin(Newpin) {
             this.#unlockPin =Newpin
        };
        sendSMS(textmsg){
            return textmsg;
        };
    }
    let p=new Mobile("guru",9822,123)

  
export default Mobile