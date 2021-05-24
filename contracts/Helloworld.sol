pragma Solidity v0.5.16;

contract Helloworld {
  string   message;
  function Helloworld(string myMessage){
  message = myMessage;

  }
  function geMessage() constant returns(string) {
  return message;
}
}

