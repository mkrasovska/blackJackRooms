type TPlayer = {
  isBot: boolean,
  name: string,
  cards: TCard[],
  isWinner: boolean,
  isFinished: boolean,
  score: number,
  id: number
};

type TCard = {
  name: string,
  value: number,
  suit: string,
  symbol: string,
  face: string,
  back: string
};

type TRoom = {
  name: string,
  id: number,
  counter: number,
  players: TPlayer[],
  deck: TCard[]
}

type TLocalData = {
  userName: string,
  userId: number
}
