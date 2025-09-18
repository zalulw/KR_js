type Szemely = {
    nev: string;
    kor: number;
    magassag?: number,
}

/*
const ember:Szemely = {
    nev: "x",
    kor: 25
};

const ember2:Szemely = {
    nev: "x2"
};*/

const emberek:Array<Szemely> = [
    {nev: "x", kor: 25},
    {nev: "x1", kor: 30, magassag: 67}
]

const fuggveny = (a:number, b:number): number => a + b;