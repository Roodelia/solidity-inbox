pragma solidity ^0.4.17;

contract Inbox {
    string public message;  // define storage variable - string type; stored on-chain vs local variable
    
    function inbox(string initialMessage) public { // constructor function don't need to have same name as contract
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}