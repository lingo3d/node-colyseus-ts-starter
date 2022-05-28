import { Room, Client } from "colyseus"
import { MyRoomState } from "./schema/MyRoomState.js"

export class MyRoom extends Room<MyRoomState> {
  public onCreate (options: any) {
    this.setState(new MyRoomState())

    this.onMessage("type", (client, message) => {
    })
  }

  public onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!")
  }

  public onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!")
  }

  public onDispose() {
    console.log("room", this.roomId, "disposing...")
  }
}
