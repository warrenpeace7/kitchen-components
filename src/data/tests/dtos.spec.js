import { KitchenDto, MicrowaveDto, FridgeDto } from '../dtos'


it('should contain a Microwave and a Fridge',() => {
    const expectedMicrowave = new MicrowaveDto(false)
    const expectedFridge = new FridgeDto(false)
    const kitchenInstance = new KitchenDto (expectedMicrowave, expectedFridge)
    expect(kitchenInstance).toBeDefined()
    expect(kitchenInstance.microwave).toEqual(expectedMicrowave)
    expect(kitchenInstance.fridge).toEqual(expectedFridge)
    expect(kitchenInstance.microwave.switchPower()).toBeTruthy()
    expect(kitchenInstance.fridge.switchPower()).toBeTruthy()
})


it('should switchPower', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.switchPower()).toBeTruthy
})

it('should turnTableIsOn', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.turnTable()).toBeTruthy
})


it('should switchPower', () => {
    const targetFridge = new FridgeDto(false)
    expect(targetFridge.switchPower()).toBeTruthy
})

it('should return string', () => {
    const targetFridge = new FridgeDto(false,'cubed ice')
    expect(targetFridge.iceType()).toEqual('cubed ice')
})