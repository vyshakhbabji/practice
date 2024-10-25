var validIPAddress = function(queryIP) {

    let ip = queryIP.split('.');
    if(ip.length == 4){
        for(let i = 0; i < ip.length; i++){
            if(ip[i].length == 0 || ip[i].length > 3){
                return false;
            }
            if(ip[i].length > 1 && ip[i][0] == '0'){
                return false;
            }
            if(isNaN(ip[i])){
                return false;
            }
            if(parseInt(ip[i]) < 0 || parseInt(ip[i]) > 255){
                return false;
            }
        }
        return true;
    }

    ip = queryIP.split(':');
    if(ip.length == 8){
        for(let i = 0; i < ip.length; i++){
            if(ip[i].length == 0 || ip[i].length > 4){
                return false;
            }
            for(let j = 0; j < ip[i].length; j++){
                if(!((ip[i][j] >= '0' && ip[i][j] <= '9') || (ip[i][j] >= 'a' && ip[i][j] <= 'f') || (ip[i][j] >= 'A' && ip[i][j] <= 'F'))){
                    return false;
                }
            }
        }
        return true;
    }

    return false;

};