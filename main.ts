enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    emej
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.emej, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
info.player2.onLifeZero(function () {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
info.player1.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.emej, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let 敵機子彈: Sprite = null
let mySprite2: Sprite = null
let 哪裡出來 = 0
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . 9 9 9 9 . . 9 9 9 . . . . 
. . 9 9 9 9 9 9 9 . . . . . . . 
9 9 9 9 9 d d d 1 . . . . . . . 
9 9 9 9 9 d d d 1 . . . . . . . 
. . 9 9 9 9 9 9 9 . . . . . . . 
. . . 9 9 9 9 . . 9 9 9 . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . 9 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Player)
let list = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . a . . . . . . 
. . . . . . . . a a a . . . . . 
. . . . . . . a a a a a a . . . 
. . . . . a a . . a a a a a . . 
. . . . . . . 1 d d d a a a a a 
. . . . . . . 1 d d d a a a a a 
. . . . . a a . . a a a a a . . 
. . . . . . . a a a a a a . . . 
. . . . . . . . a a a . . . . . 
. . . . . . . . . a . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . 4 4 4 . . . . . 
. . . . . . . 4 4 4 4 4 4 . . . 
. . . . . 4 4 . . 4 4 4 4 4 . . 
. . . . . . . 1 d d d 4 4 4 4 4 
. . . . . . . 1 d d d 4 4 4 4 4 
. . . . . 4 4 . . 4 4 4 4 4 . . 
. . . . . . . 4 4 4 4 4 4 . . . 
. . . . . . . . 4 4 4 . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . 2 2 2 2 2 2 . . . 
. . . . . 2 2 . . 2 2 2 2 2 . . 
. . . . . . . 1 d d d 2 2 2 2 2 
. . . . . . . 1 d d d 2 2 2 2 2 
. . . . . 2 2 . . 2 2 2 2 2 . . 
. . . . . . . 2 2 2 2 2 2 . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
scene.setBackgroundColor(15)
controller.moveSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
effects.starField.startScreenEffect()
forever(function () {
    if (info.score() % 20 == 0) {
        info.changeLifeBy(1)
        info.changeScoreBy(1)
    }
})
game.onUpdateInterval(1000, function () {
    哪裡出來 = Math.randomRange(0, 160)
    mySprite2 = sprites.create(list[Math.randomRange(0, 2)], SpriteKindLegacy.Enemy)
    敵機子彈 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.emej)
    mySprite2.setPosition(160, 哪裡出來)
    敵機子彈.setPosition(160, 哪裡出來)
    mySprite2.setVelocity(-50, 0)
    敵機子彈.setVelocity(-80, 0)
    mySprite2.lifespan = 3000
    敵機子彈.lifespan = 2000
})
