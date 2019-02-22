import {SYNQ} from "./SYNQ";
import {ACK} from "./ACK";

export interface Physical {
    request() : SYNQ;
    respond(synq : SYNQ) : ACK;
    open(ack : ACK) : void;
    setOnMessage(f : (message : string) => void) : void;
    send(message : string) : void;
    close() : void;
}