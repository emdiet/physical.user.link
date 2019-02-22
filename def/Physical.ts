import {SYNQ} from "./SYNQ";
import {ACK} from "./ACK";

export interface Physical {
    request() : Promise<SYNQ>;
    respond(synq : SYNQ) : Promise<ACK>;
    open(ack : ACK) : void;
    setOnOpen(f : ()=>void) : void;
    setOnMessage(f : (message : string) => void) : void;
    send(message : string) : void;
    close() : void;
    setOnClose(f : ()=>void) :void;
}