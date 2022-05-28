//@ts-ignore
import { Schema, Context, type } from "@colyseus/schema"

export class MyRoomState extends Schema {
    @type("string")
    public mySynchronizedProperty: string = "Hello world"
}
