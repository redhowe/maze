info.onCountdownEnd(function () {
    game.over(false, effects.blizzard)
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true, effects.starField)
    music.powerUp.play()
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d b b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d b b d d d e . . . . 
    e d 1 d d d d 1 d e b f b . 
    f d f d c c d f d f f d f . 
    f b d d d d d d d b f d f . 
    . f d d d d d d d b d b f . 
    . f d d d d d d d f f f . . 
    . f d b d f f f d f . . . . 
    . . f f f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030403050101020101020101010101010201030302010201020202010202020202010303010102010201020101010101010103030102020102010202020201020202030301010201020101010102010201010303020102010202020101020102010203030101010101010201010201010102030301020202020101010202010202020303010101010101020101010101010103030102020202020201020202020201030301020101010201010101010102010303010201020102010201020202020103030102010201020102010101010201030301010102010101020101020102010303030303030303030303030303030303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    . . . 2 . . 2 . . . . . . 2 . 2 
    2 2 . 2 . 2 2 2 . 2 2 2 2 2 . 2 
    2 . . 2 . 2 . 2 . . . . . . . 2 
    2 . 2 2 . 2 . 2 2 2 2 . 2 2 2 2 
    2 . . 2 . 2 . . . . 2 . 2 . . 2 
    2 2 . 2 . 2 2 2 . . 2 . 2 . 2 2 
    2 . . . . . . 2 . . 2 . . . 2 2 
    2 . 2 2 2 2 . . . 2 2 . 2 2 2 2 
    2 . . . . . . 2 . . . . . . . 2 
    2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
    2 . 2 . . . 2 . . . . . . 2 . 2 
    2 . 2 . 2 . 2 . 2 . 2 2 2 2 . 2 
    2 . 2 . 2 . 2 . 2 . . . . 2 . 2 
    2 . . . 2 . . . 2 . . 2 . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.dungeon.floorMixed,sprites.dungeon.stairSouth,sprites.dungeon.stairLarge], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
info.startCountdown(30)
