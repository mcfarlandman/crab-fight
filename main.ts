namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Ball1 = SpriteKind.create()
    export const Ball2 = SpriteKind.create()
    export const Projectile1 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const camera = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Projectile1, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    music.knock.play()
    sittingBall1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball1)
    tiles.placeOnTile(sittingBall1, location)
    sittingBall1.setKind(SpriteKind.Ball1)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Ball2, function (sprite, otherSprite) {
    if (haveBall2 == 0) {
        music.baDing.play()
        otherSprite.destroy()
        haveBall2 = 1
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (haveBall2 == 1) {
        ballMoving2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 9 8 . . . . . . . 
            . . . . . 8 9 9 9 8 . . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . 8 9 9 9 8 . . . . . . 
            . . . . . . 8 9 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_2, -75, 0)
        haveBall2 = 0
        ballMoving2.setKind(SpriteKind.Projectile2)
        ballMoving2.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Projectile1, function (sprite, otherSprite) {
    game.splash("Red Crab Wins!")
    game.reset()
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    music.knock.play()
    SittingBall2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball2)
    tiles.placeOnTile(SittingBall2, location)
    SittingBall2.setKind(SpriteKind.Ball2)
})
scene.onOverlapTile(SpriteKind.Projectile1, sprites.builtin.forestTiles0, function (sprite, location) {
    music.knock.play()
    sprite.destroy()
    sittingBall1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 4 5 5 5 4 . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball1)
    tiles.placeOnTile(sittingBall1, location)
    sittingBall1.setPosition(sittingBall1.x - 16, sittingBall1.y)
    sittingBall1.setKind(SpriteKind.Ball1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile2, function (sprite, otherSprite) {
    game.splash("Blue Crab Wins!")
    game.reset()
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (haveBall1 == 1) {
        ballMoving1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 4 . . . . . . . 
            . . . . . 4 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 4 5 5 5 4 . . . . . . 
            . . . . . . 4 5 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_1, 75, 0)
        haveBall1 = 0
        ballMoving1.setKind(SpriteKind.Projectile1)
        ballMoving1.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball1, function (sprite, otherSprite) {
    if (haveBall1 == 0) {
        music.baDing.play()
        otherSprite.destroy()
        haveBall1 = 1
    }
})
scene.onOverlapTile(SpriteKind.Projectile2, sprites.builtin.forestTiles0, function (sprite, location) {
    music.knock.play()
    sprite.destroy()
    SittingBall2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball2)
    tiles.placeOnTile(SittingBall2, location)
    SittingBall2.setPosition(SittingBall2.x + 16, SittingBall2.y)
    SittingBall2.setKind(SpriteKind.Ball2)
})
let ballMoving1: Sprite = null
let SittingBall2: Sprite = null
let ballMoving2: Sprite = null
let sittingBall1: Sprite = null
let haveBall2 = 0
let haveBall1 = 0
let Player_2: Sprite = null
let Player_1: Sprite = null
tiles.setTilemap(tilemap`level1`)
Player_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . c c c c 3 c c c c . c c . . 
    . . c 6 3 3 f f 2 c 6 c 2 f f . 
    . c 3 3 3 3 f f 2 c 6 c 2 f f . 
    c 3 3 3 3 3 c 2 2 2 c 2 2 2 b . 
    c 3 3 3 3 6 c 2 2 2 c 2 2 2 b . 
    c c 3 3 3 6 3 c 2 2 3 2 2 b b . 
    c c 6 6 3 3 3 c 2 2 3 2 2 b b . 
    c 3 3 3 3 c c b 2 2 2 2 2 c c . 
    c 3 3 3 c 2 2 b 4 2 2 2 4 2 2 c 
    . c 3 3 c 2 b b 4 4 4 4 b 4 2 b 
    . . b b c 4 2 2 2 b 4 b 2 2 4 c 
    . b 2 4 4 c 2 2 2 c 4 c 2 2 2 c 
    . c 2 c 4 c 2 2 2 2 4 2 2 2 2 c 
    . c c c c c c c c c c c c c c c 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Player_1, assets.tile`myTile`)
controller.player1.moveSprite(Player_1, 100, 100)
Player_2 = sprites.create(assets.image`Blue Crab`, SpriteKind.Player2)
tiles.placeOnRandomTile(Player_2, assets.tile`myTile0`)
controller.player2.moveSprite(Player_2, 100, 100)
let camera = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.camera)
camera.setPosition(96, 60)
scene.cameraFollowSprite(camera)
haveBall1 = 1
haveBall2 = 1
