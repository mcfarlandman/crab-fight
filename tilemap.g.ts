// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000800060302010101010101020306060302010101010101020306060402010101010101020306060202010101010101020206060302010101010101020506060302010101010101020306060302010101010101020306060302010101010101020306`, img`
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 . . 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
