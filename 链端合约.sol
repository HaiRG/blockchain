pragma solidity ^0.4.21;
contract trysa {
    address public bank;
    struct deal{
        address buyer;
        address seller;
        uint money;
        uint year;
        uint mon;
        uint day;
    }
    mapping (address => uint) public credit;
    mapping (address => uint) public balances;
    mapping (address => deal[]) public dels_for_buy;
    mapping (address => deal[]) public dels_for_sell;
    constructor() {
        bank = msg.sender;
    }
    function set_credit(address com,uint cre){
        if(msg.sender != bank) return;
        credit[com] = cre;
    }
    function loan(uint num){
        if(credit[msg.sender] > 3){
            for(uint i  = 0;i < dels_for_sell[msg.sender].length;i ++){
                if(credit[dels_for_sell[msg.sender][i].buyer] < 3) balances[msg.sender] += num;
            }
        }else{
            balances[msg.sender] += num;
        }
    }
    function pay(uint year,uint mon,uint day){
        for(uint i = 0;i < dels_for_buy[msg.sender].length;i ++){
            if(dels_for_buy[msg.sender][i].year == year && dels_for_buy[msg.sender][i].mon == mon && dels_for_buy[msg.sender][i].day == day){
                balances[msg.sender] -= dels_for_buy[msg.sender][i].money;
                balances[dels_for_buy[msg.sender][i].seller] += dels_for_buy[msg.sender][i].money;
                uint h;
                uint j;
                address tmp = dels_for_buy[msg.sender][i].seller;
                for(j = 0;j < dels_for_sell[tmp].length;j ++){
                    if(dels_for_sell[tmp][j].buyer == msg.sender && dels_for_sell[tmp][j].year == year && dels_for_sell[tmp][j].mon == mon && dels_for_sell[tmp][j].day == day){
                        for(h = j;h < dels_for_sell[tmp].length - 1;h ++) dels_for_sell[tmp][h] = dels_for_sell[tmp][h+1];
                        delete dels_for_sell[tmp][dels_for_sell[tmp].length - 1];
                        dels_for_sell[tmp].length -= 1;
                    }
                }
                for(h = i;i < dels_for_buy[msg.sender].length - 1;h ++) dels_for_buy[msg.sender][h] =  dels_for_buy[msg.sender][h+1];
                delete dels_for_buy[msg.sender][dels_for_buy[msg.sender].length - 1];
                dels_for_buy[msg.sender].length -= 1;
                
                
            }
        }
    }
    function getpaid(uint year,uint mon,uint day){
        for(uint i = 0;i < dels_for_sell[msg.sender].length;i ++){
            if(dels_for_sell[msg.sender][i].year == year && dels_for_sell[msg.sender][i].mon == mon && dels_for_sell[msg.sender][i].day == day){
                balances[msg.sender] += dels_for_sell[msg.sender][i].money;
                balances[dels_for_sell[msg.sender][i].buyer] -= dels_for_sell[msg.sender][i].money;
                uint h;
                address tmp = dels_for_sell[msg.sender][i].buyer;
                uint j;
                for(j = 0;j < dels_for_buy[tmp].length;j ++){
                    if(dels_for_buy[tmp][j].seller == msg.sender && dels_for_buy[tmp][j].year == year && dels_for_buy[tmp][j].mon == mon && dels_for_buy[tmp][j].day == day){
                        for(h = j;h < dels_for_buy[tmp].length - 1;h ++) dels_for_buy[tmp][h] = dels_for_buy[tmp][h+1];
                        delete dels_for_buy[tmp][dels_for_buy[tmp].length - 1];
                        dels_for_buy[tmp].length -= 1;
                    }
                }
                for(h = i;i < dels_for_sell[msg.sender].length - 1;h ++) dels_for_sell[msg.sender][h] =  dels_for_sell[msg.sender][h+1];
                delete dels_for_sell[msg.sender][dels_for_sell[msg.sender].length - 1];
                dels_for_sell[msg.sender].length -= 1;
                
                
            }
        }
    }
    function make_a_deal_transfer(address recever,uint money)public{
        uint j;
        uint h;
        for(uint i = 0;i < dels_for_sell[msg.sender].length && money != 0 ;i ++){
            address tmp = dels_for_sell[msg.sender][i].buyer;
            if(dels_for_sell[msg.sender][i].money > money){
                for(j = 0;j < dels_for_buy[tmp].length;j ++){
                    if(dels_for_buy[tmp][j].seller == msg.sender && dels_for_buy[tmp][j].money == dels_for_sell[msg.sender][i].money 
                        && dels_for_buy[tmp][j].year == dels_for_sell[msg.sender][i].year && dels_for_buy[tmp][j].mon == dels_for_sell[msg.sender][i].mon && 
                        dels_for_buy[tmp][j].day == dels_for_sell[msg.sender][i].day){
                        dels_for_buy[tmp][j].money -= money;
                    
                        break;        
                    }
                            
                }
                dels_for_sell[msg.sender][i].money -= money;
                dels_for_sell[recever].push(deal(tmp,recever,money,dels_for_sell[msg.sender][i].year,dels_for_sell[msg.sender][i].mon,dels_for_sell[msg.sender][i].day));
                dels_for_buy[tmp].push(deal(tmp,recever,money,dels_for_sell[msg.sender][i].year,dels_for_sell[msg.sender][i].mon,dels_for_sell[msg.sender][i].day));
                break;
            }else{
                for(j = 0;j < dels_for_buy[tmp].length;j ++){
                    if(dels_for_buy[tmp][j].seller == msg.sender && dels_for_buy[tmp][j].money == dels_for_sell[msg.sender][i].money 
                        && dels_for_buy[tmp][j].year == dels_for_sell[msg.sender][i].year && dels_for_buy[tmp][j].mon == dels_for_sell[msg.sender][i].mon && 
                        dels_for_buy[tmp][j].day == dels_for_sell[msg.sender][i].day){
                            delete dels_for_buy[tmp][j];
                            for(h = j ;h < dels_for_buy[tmp].length - 1;++ h) dels_for_buy[tmp][h] = dels_for_buy[tmp][h+1];
                            delete dels_for_buy[tmp][dels_for_buy[tmp].length - 1];
                            dels_for_buy[tmp].length -= 1;
                            break;
                        }
                }
                money -= dels_for_sell[msg.sender][i].money;
                
                
                uint mone = dels_for_sell[msg.sender][i].money;
                uint year = dels_for_sell[msg.sender][i].year;
                uint mon = dels_for_sell[msg.sender][i].mon;
                uint day = dels_for_sell[msg.sender][i].year;
                for(h = i;h < dels_for_sell[msg.sender].length - 1;h ++) dels_for_sell[msg.sender][h] = dels_for_sell[msg.sender][h+1];
                delete dels_for_sell[msg.sender][dels_for_sell[msg.sender].length - 1];
                dels_for_sell[msg.sender].length -= 1;
                i --;
                dels_for_sell[recever].push(deal(tmp,recever,mone,year,mon,day));
                dels_for_buy[tmp].push(deal(tmp,recever,mone,year,mon,day));
                
            }
        }    
    }
    function make_a_deal(address recever,uint money,uint year,uint mon,uint day) public{
        dels_for_buy[msg.sender].push(deal(msg.sender,recever,money,year,mon,day));
        dels_for_sell[recever].push(deal(msg.sender,recever,money,year,mon,day));
         
    }
    
}