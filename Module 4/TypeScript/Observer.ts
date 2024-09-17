class Duck implements Obersvable{
    #id: number;
    #name: string;
    nickName: string;

    observers: Observer[];

    register(observer: Observer) : void {
        this.observers.push(observer)
    }

    unregister(observer: Observer) : void{
        
    }


    change(): void{
        
        this.notifyObservers()
    }

    notifyObservers() : void{
        this.observers.forEach(observer => {
            observer.respond()
        });
    }

    constructor(id: number, name: string, nickName: string) {
        this.#id = id;
        this.#name = name;
        this.nickName = nickName
        this.observers = new Array<Observer>
    }

    Quack() {
        console.log("Quuackk!!")
    }
}

class Ornathologist implements Observer{
    name:string =""
    respond() : void{
        console.log("Wow I just saw that happen")
    }
}

const albinoMandarin = new Duck(1,"Steven","Steve")

const orn1 = new Ornathologist()
const orn2 = new Ornathologist()
const orn3 = new Ornathologist()


albinoMandarin.register(orn1)
albinoMandarin.register(orn2)

albinoMandarin.change()


interface Obersvable{
    observers:Array<Observer>|undefined
    register(observer:Observer): void
    unregister(observer:Observer): void
    notifyObservers(): void
}

interface Observer{
    respond(): void
}