#Physical Connection Interface

Physical is an interface for a cross system 

##Reference Implementations
* https://www.npmjs.com/package/physical-node
* https://www.npmjs.com/package/physical-chrome

###Interoperability of known implementations
|_protocol : body_|physical-node|physical-chrome|
|---|---|---|
|**physical-node** | Socket : URI | WebSocket : URI |
|**physical-chrome** | WebSocket : URI | WebRTC : SDP|

##Usage:

If you want to connect with another host, you must
1) create a `new Physical` object
2) call `physical.request()` to generate a serializable `SYNQ` object
3) pass the `SYNQ` object to the other host
4) wait for an `ACK` object, deserialize if necessary
5) call `physical.open(ack)`
6) wait for onOpen to fire.

If you want to let a host connect to you with a `SYNQ` object, you must
1) create a `new Physical` object
2) call `physical.respond(synq)` to generate a serializable `ACK` object
3) pass the `ACK` object to the other host
4) wait for onOpen to fire.

###Methods:

####```request() : Promise<SYNQ>```
generate a SYNQ request

SYNQ must contain a list of protocol names in `SYNQ.supported`,
and the protocol offers in `SYNQ.body` in the same order.
####```respond(synq : SYNQ) : Promise<ACK>```
respond to a SYNQ request

ACK must choose one compatible protocol and return a compliant response
####```open(ack : ACK) : void```
unlock and open a physical connection

can only be called if request() has been called.
####```setOnOpen(f : ()=>void) : void```
register a function to be called when the connection opens

####```send(message : string) : void```
dispatch a message to the other host. throws exception if if the connection is not open

####```setOnMessage(f : (message : string) => void) : void```
register a function to be called when a message comes through the connection
this can be called multiple times if needed to update the onMessage function.

undefined behavior if not set.
####```close() : void```
close the connection from your end
####```setOnClose(f : ()=>void) : void```
register a function to be called when the connection closes