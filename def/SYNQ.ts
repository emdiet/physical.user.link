import {Handshake} from "./Handshake";

export interface SYNQ extends Handshake{
    supported: string[];
}