/**
 * Created by Thinkpad on 2016/10/13.
 */
(function (window, document){

    window.NumberGrowth = function(){
        if (!arguments[0]) {
            throw new Error('please appoint div ID you want to append to');
        }
        if (!arguments[1]) {
            throw new Error('please appoint number you want to show');
        }
        if (isNaN(arguments[1])){
            throw new Error('second parameter is not a number');
        }

        // default setting parameters
        var mSettings = {
            startNumber: 0,
            growNumberAnimateTime: 1000*3,
            changeNumberAnimateTime: 1000*2,
            refreshTime: 100
        };

        // get custom setting parameters
        if(arguments[2]){
            var customSettings = arguments[2];
            for(var key in customSettings){
                var newSettingItem = customSettings[key];
                if( key in mSettings ){
                    mSettings[key] = newSettingItem;
                }
            }
        }
        var numberContainer = document.getElementById(arguments[0]);
        var initNumber = arguments[1];

        var startGrow = function(){
            change2targetNumber(mSettings.startNumber, initNumber, mSettings.growNumberAnimateTime);
        };

        var changeNumber = function(number){
            var currentNumber = parseInt(numberContainer.innerHTML);
            change2targetNumber(currentNumber, number, mSettings.changeNumberAnimateTime);
        };

        var changeInterval = undefined;
        var change2targetNumber = function(fromNumber, toNumber, animateTime){
            if(fromNumber === toNumber){return;}
            try{clearInterval(changeInterval)}catch(error){}
            var isIncrease = toNumber > fromNumber;
            var increaseNumber = Math.round((toNumber - fromNumber)/(animateTime/mSettings.refreshTime));
            changeInterval = setInterval(function(){
                increaseNumber = increaseNumber%2 == 0 ? increaseNumber -1: increaseNumber + 1 ;
                if(isIncrease){
                    increaseNumber = increaseNumber > 0 ? increaseNumber: 1;
                }else{
                    increaseNumber = increaseNumber < 0 ? increaseNumber: -1;
                }
                fromNumber += increaseNumber;
                if(fromNumber > toNumber && isIncrease || fromNumber < toNumber && !isIncrease){
                    numberContainer.innerHTML = toNumber;
                    clearInterval(changeInterval);
                }else{
                    numberContainer.innerHTML = fromNumber;
                }

            },mSettings.refreshTime)
        };

        return { startGrow: startGrow, changeNumber: changeNumber};
    };

})(window, document);