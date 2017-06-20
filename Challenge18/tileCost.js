var prompt = require('prompt');
prompt.start();
prompt.get(['costPerSquFt', 'roomW', 'roomL'], function (err, result) {
    console.log(calcTotalCost(result.costPerSquFt, result.roomW, result.roomL));
});

function calcTotalCost(tileCost, roomW, roomL) {
    let tileWidth = 1;
    let tileLength = 1;
    let roomSqFoot = Number(roomW * roomL);
    let tileSqFoot = Number(tileLength * tileWidth);

    var totalCost = Number(tileCost)*(Number(roomSqFoot) / Number(tileSqFoot));
    return totalCost;
}