import {Handshake} from "./Handshake";

export interface ACK extends Handshake{
    protocol: string;
}
