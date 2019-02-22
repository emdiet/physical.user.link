import {SYNQ} from "./SYNQ";
import {ACK} from "./ACK";

export abstract class Physical {
    public abstract request() : SYNQ;
    public abstract respond(synq : SYNQ) : ACK;
    public abstract open(ack : ACK) : void;
    public abstract onMessage : (message : string) => void;
    public abstract send(message : string) : void;
    public abstract close() : void;
}