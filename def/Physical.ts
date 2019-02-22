import {SYNQ} from "./SYNQ";
import {ACK} from "./ACK";

export interface Physical {
    request() : SYNQ;
    respond(synq : SYNQ) : ACK;
    open(ack : ACK) : void;
    onMessage : (message : string) => void;
    send(message : string) : void;
    close() : void;
}