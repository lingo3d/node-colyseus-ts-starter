import { Room, Client } from "colyseus"
import { MyRoomState, Player } from "./schema/MyRoomState"

export class MyRoom extends Room<MyRoomState> {
  public onCreate(options: any) {
    this.setState(new MyRoomState())
  }

  public onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!")

    const player = new Player()
    this.state.players.set(client.sessionId, player)
  }

  public onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!")

    this.state.players.delete(client.sessionId)
  }

  public onDispose() {
    console.log("room", this.roomId, "disposing...")
  }
}
