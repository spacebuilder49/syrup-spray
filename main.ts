sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 8 9 8 . . . . . . . . 
    . . . . . 8 9 8 . . . . . . . . 
    . . . . 8 8 9 8 8 . . . . . . . 
    . . . 8 f f f f f 8 . . . . . . 
    . . . 8 1 9 1 9 1 8 . . . . . . 
    . . . 8 f f f f f 8 . . . . . . 
    f . . 8 e e e e e 8 . . . f . . 
    . f f 8 e e f f e 8 f f f . . . 
    f . . 8 e e e e e 8 . . . f . . 
    . . . 8 f f f f f 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 4 5 . . . . . . 
        . . . . . 4 f 4 4 f 5 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        f . . 4 4 4 4 4 4 4 4 4 . . . f 
        . f f 4 4 4 4 4 4 4 4 4 f f f . 
        f . . . 4 4 4 4 4 4 4 . . . . f 
        . . . . . 4 4 f f 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f f . . . f f . . . . . 
        `, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
