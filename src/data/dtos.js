class KitchenDto {
    constructor(microwave, fridge) {
        this.microwave = microwave
        this.fridge = fridge
    }
}

class ApplianceDto {
    constructor (hasPower){
        this.hasPower = hasPower
    }
    switchPower (){
        this.hasPower=!this.hasPower
        return this.hasPower
    }
    
}


class MicrowaveDto extends ApplianceDto {
    
    turnTable() {
        this.turnTableIsOn = !this.turnTableIsOn
        return this.turnTableIsOn
    }
    constructor(isPoweredParam, turnTableIsOn) {
        super(isPoweredParam)
        this.turnTableIsOn = turnTableIsOn
    }

}
class FridgeDto extends ApplianceDto {
   
    iceType() {
        return this.string
    }

    constructor(switchPowerParam, string) {
        super(switchPowerParam)
        this.string = string
    }
}



export { KitchenDto, MicrowaveDto, FridgeDto }
