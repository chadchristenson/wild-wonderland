namespace SpriteKind {
    export const toy = SpriteKind.create()
    export const pet = SpriteKind.create()
    export const trap = SpriteKind.create()
    export const point = SpriteKind.create()
    export const life = SpriteKind.create()
    export const end = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const floaty = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const queen = SpriteKind.create()
    export const bigger = SpriteKind.create()
    export const smaller = SpriteKind.create()
    export const Sword = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Sword, function (sprite, otherSprite) {
    if (otherSprite == Sword2) {
        statusbar_2.value += -5
        Jabberwocky_Health += -1
        sprites.destroy(otherSprite)
    }
})
function Level_1 () {
    level_complete = 0
    // let current_level = 0
    // current_level = 1
    Alice = sprites.create(img`
        ......555ff.ff555......
        .....5555fffff5555.....
        ....555fffffffff555....
        ...555f555555555f555...
        ...55f55555d55555f55...
        ...5f555ddddddd555f5...
        ..55f55ddddddddd55f55..
        ..55f55d81ddd18d55f55..
        ..55555d88ddd88d55555..
        ..55555ddddddddd555555.
        .5555555dd333dd5555555.
        .5555fff5ddddd5fff5555.
        .555f8881fdddf1888f555.
        .555f88811fdf11888f555.
        .55df888118f811888fd55.
        .55ddfff1111111fffdd555
        555dddf5f11111f55ddd555
        55fddddf5fffff55dddd555
        .55fddddf11111fdddd555.
        ..55fddf1111111fdd555..
        .....ff111111111f......
        .....f11111111111f.....
        ....f8111111111118f....
        ....f8111111111118f....
        ...f888111111111888f...
        ...f8888111111188888f..
        ..f888888888888888888f.
        ..f888888888888888888f.
        .f88888f88888888f88888f
        .f8f888f88888888f888f8f
        ..ff88f8888888888f88ff.
        ....fff88f8888f88fff...
        .......ffff88ffff......
        .........11fff11.......
        .........111.111.......
        .........111.111.......
        .........fff.fff.......
        ........f111f111f......
        ........fffffffff......
        .........fff.fff.......
        `, SpriteKind.Player)
    Alice.setPosition(125, 28)
    Throne = sprites.create(img`
        ..................5555555..................
        ..............555555555555555..............
        ...........555555555555555555555...........
        .........555555555555555555555555..........
        ........55555555522f222f225555555555.......
        ......55555555222222fff22222255555555......
        .....555555522222222fff222222225555555.....
        ....5555552222222222fff2222222222555555....
        ...5555552f22222222f222f22222222f2555555...
        ..555555222f222222f22222f222222f222555555..
        .55555522222f2222f2222222f2222f22222555555.
        .555522222222f22f222222222f22f222222225555.
        55555222222222ff22222222222ff22222222255555
        55552222222222ff22222222222ff22222222225555
        5555222222222f22f222222222f22f2222222225555
        5552f2222222f2222f2222222f2222f2222222f2555
        55522f22222f222222f22222f222222f22222f22555
        555222f222f22222222f222f22222222f222f222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        555222f222f22222222f222f22222222f222f222555
        55522f22222f222222f22222f222222f22222f22555
        5552f2222222f2222f2222222f2222f2222222f2555
        555f222222222f22f222222222f22f222222222f555
        55522222222222ff22222222222ff22222222222555
        55522222222222ff22222222222ff22222222222555
        555f222222222f22f222222222f22f222222222f555
        5552f2222222f2222f2222222f2222f2222222f2555
        55522f22222f222222f22222f222222f22222f22555
        555222f222f22222222f222f22222222f222f222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        555222f222f22222222f222f22222222f222f222555
        55522f22222f222222f22222f222222f22222f22555
        5552f2222222f2222f2222222f2222f2222222f2555
        555f222222222f22f222222222f22f222222222f555
        55522222222222ff22222222222ff22222222222555
        55522222222222ff22222222222ff22222222222555
        555f222222222f22f222222222f22f222222222f555
        5552f2222222f2222f2222222f2222f2222222f2555
        55522f22222f222222f22222f222222f22222f22555
        555222f222f22222222f222f22222222f222f222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        5552222fff2222222222fff2222222222fff2222555
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        `, SpriteKind.Player)
    Throne.setPosition(22, 32)
    Queen_of_Hearts = sprites.create(img`
        ..............5..55..5..............
        ..............5.5555.5..............
        ..............55522555..............
        ..............25222252..............
        .........111112522225211111.........
        ........11111155555555111111........
        .......11111ffddddddddff11111.......
        ......111111ffddddddddff111111......
        ......1111ffddddddddddddff1111......
        ......1111ffddf1dddd1fddff1111......
        ......1111ffddffddddffddff1111......
        .......111ffddddddddddddff111.......
        ddddff..1111dddddddddddd1111..ffdddd
        dddd2f..1111dddd2222dddd1111..ffdddd
        dddd22ff.111dddd2222dddd111.ffffdddd
        dddd22ff..11dddd2ff2dddd11..f2ffdddd
        ..f2ffffff21111dddddd1111fff2222ff..
        ..ffffffff221111dddd1111ff2222ffff..
        ......ffff22222111111fffff222f......
        ......ffff2222221111ffffffffff......
        ..........f2222222ffffffff..........
        ..........ff222222ffffffff..........
        ............f22222ffffff............
        ...........ff22222fffff2f...........
        ..........ffff2222ffff222f..........
        .........ffffff222fff22222f.........
        ........ffffffff22ff2222222f........
        .......fffffffff111122222222f.......
        .......fffffff11ff5511222222f.......
        ......ffffffff11ff55112222222f......
        ......ffffff115555ffff1122222f......
        ......ffffff115555ffff1122222f......
        ......ffffff11ffff55551122222f......
        ......ffffff11ffff55551122222f......
        ......ffffff115555ffff1122222f......
        ......ffffff115555ffff1122222f......
        ......ffffff11ffff55551122222f......
        ......ffffff11ffff55551122222f......
        ......111111115555ffff11111111......
        ......111111115555ffff11111111......
        `, SpriteKind.queen)
    Queen_of_Hearts.setPosition(22, 28)
    White_Rabbit = sprites.create(img`
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        .............ff.......
        .........ff.f11f......
        ........f11ff111f.....
        ........f131f111f.....
        ........f1331f11f.....
        .........f1331f1f.....
        ..........f131f1f.....
        ...........ff111f.....
        ............f1111f....
        ......ffffff111111f...
        ....ff11111f1113111f..
        ...f1111111f111f111f..
        .ff11111111f1111113f..
        fdf111111111f1111ff...
        fdf1111111111fffff55..
        .ff1111111111111f51f5.
        ..f11111111111111f115.
        ...f111111111fffff55..
        ....f11111fff.........
        ....f11111111f........
        .....fffffffff........
        `, SpriteKind.pet)
    White_Rabbit.setPosition(65, 33)
    Card_Guard_Heart_1 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f1122111111111111111f..
        f1212111111111111111f..
        f1222111111111111111f..
        f1212111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1112222211122222111f..
        f1122212221222222211f..
        f1122122222222222211f..
        f1121222222222222211f..
        f1122122222222222211f..
        f1122212222222222211f..
        f1112222222222222111f..
        f1111222222222221111f..
        f1111122222222211111f..
        f1111112222222111111f..
        f1111111222221111111f..
        f1111111122211111111f..
        f1111111112111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111221f..
        f1111111111111112121f..
        f1111111111111112221f..
        f1111111111111112121f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Heart_2 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f1122111111111111111f..
        f1212111111111111111f..
        f1222111111111111111f..
        f1212111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1112222211122222111f..
        f1122212221222222211f..
        f1122122222222222211f..
        f1121222222222222211f..
        f1122122222222222211f..
        f1122212222222222211f..
        f1112222222222222111f..
        f1111222222222221111f..
        f1111122222222211111f..
        f1111112222222111111f..
        f1111111222221111111f..
        f1111111122211111111f..
        f1111111112111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111221f..
        f1111111111111112121f..
        f1111111111111112221f..
        f1111111111111112121f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Heart_2.setPosition(320, 28)
    Card_Guard_Heart_1.setPosition(320, 56)
    Card_Guard_Diamond_1 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f1122111111111111111f..
        f1212111111111111111f..
        f1222111111111111111f..
        f1212111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111112111111111f..
        f1111111122211111111f..
        f1111111222221111111f..
        f1111112212222111111f..
        f1111122122222211111f..
        f1111221222222221111f..
        f1112212222222222111f..
        f1112222222222222111f..
        f1112222222222222111f..
        f1111222222222221111f..
        f1111122222222211111f..
        f1111112222222111111f..
        f1111111222221111111f..
        f1111111122211111111f..
        f1111111112111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111221f..
        f1111111111111112121f..
        f1111111111111112221f..
        f1111111111111112121f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Diamond_2 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f1122111111111111111f..
        f1212111111111111111f..
        f1222111111111111111f..
        f1212111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111112111111111f..
        f1111111122211111111f..
        f1111111222221111111f..
        f1111112212222111111f..
        f1111122122222211111f..
        f1111221222222221111f..
        f1112212222222222111f..
        f1112222222222222111f..
        f1112222222222222111f..
        f1111222222222221111f..
        f1111122222222211111f..
        f1111112222222111111f..
        f1111111222221111111f..
        f1111111122211111111f..
        f1111111112111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111221f..
        f1111111111111112121f..
        f1111111111111112221f..
        f1111111111111112121f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Diamond_2.setPosition(320, 81)
    Card_Guard_Diamond_1.setPosition(320, 70)
    Card_Guard_Club_1 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f11ff111111111111111f..
        f1f1f111111111111111f..
        f1fff111111111111111f..
        f1f1f111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111fffff1111111f..
        f111111ff1ffff111111f..
        f111111f1fffff111111f..
        f111111f1fffff111111f..
        f111111fffffff111111f..
        f111fff1fffff1fff111f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f111ffff1fff1ffff111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111ff1f..
        f111111111111111f1f1f..
        f111111111111111fff1f..
        f111111111111111f1f1f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Club_2 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f11ff111111111111111f..
        f1f1f111111111111111f..
        f1fff111111111111111f..
        f1f1f111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111fffff1111111f..
        f111111ff1ffff111111f..
        f111111f1fffff111111f..
        f111111f1fffff111111f..
        f111111fffffff111111f..
        f111fff1fffff1fff111f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f111ffff1fff1ffff111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111ff1f..
        f111111111111111f1f1f..
        f111111111111111fff1f..
        f111111111111111f1f1f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Club_2.setPosition(550, 90)
    Card_Guard_Club_1.setPosition(550, 40)
    Card_Guard_Spade_1 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f11ff111111111111111f..
        f1f1f111111111111111f..
        f1fff111111111111111f..
        f1f1f111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f111111111f111111111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f11111ff1ffffff11111f..
        f1111ff1ffffffff1111f..
        f111ff1ffffffffff111f..
        f11ff1ffffffffffff11f..
        f11ff1ffffffffffff11f..
        f11ff1ffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f111ffff1fff1ffff111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111ff1f..
        f111111111111111f1f1f..
        f111111111111111fff1f..
        f111111111111111f1f1f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Spade_2 = sprites.create(img`
        fffffffffffffffffffff..
        f1111111111111111111f..
        f11ff111111111111111f..
        f1f1f111111111111111f..
        f1fff111111111111111f..
        f1f1f111111111111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f111111111f111111111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f11111ff1ffffff11111f..
        f1111ff1ffffffff1111f..
        f111ff1ffffffffff111f..
        f11ff1ffffffffffff11f..
        f11ff1ffffffffffff11f..
        f11ff1ffffffffffff11f..
        f11fffffffffffffff11f..
        f11fffffffffffffff11f..
        f111ffff1fff1ffff111f..
        f11111111fff11111111f..
        f1111111fffff1111111f..
        f111111fffffff111111f..
        f1111111111111111111f..
        f1111111111111111111f..
        f1111111111111111ff1f..
        f111111111111111f1f1f..
        f111111111111111fff1f..
        f111111111111111f1f1f..
        f1111111111111111111f..
        fffffffffffffffffffff..
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        .....fff.....fff.......
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        ..ffffff.....ffffff....
        `, SpriteKind.Enemy)
    Card_Guard_Spade_1.setPosition(550, 99)
    Card_Guard_Spade_2.setPosition(550, 30)
    Door22 = sprites.create(img`
        ......1111111111111......
        .....12222221ffffff1.....
        ....122222221fffffff1....
        ...1222222221ffffffff1...
        ..12222222221fffffffff1..
        .122222222221ffffffffff1.
        .122222222221ffffffffff1.
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222555221ff555ffffff1
        1222222522221ffff5ffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        1222222222221fffffffffff1
        `, SpriteKind.Door)
    Door22.setPosition(630, 1570)
    tiles.setCurrentTilemap(tilemap`Level 1`)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 2 2 2 2 f f f 2 2 2 2 f f 
        . f 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 f f f 2 2 2 2 2 f 
        . f 2 2 2 2 f f 2 f f 2 2 2 2 f 
        . f 2 2 2 2 f 2 2 2 f 2 2 2 2 f 
        . f f 2 2 2 f f f f f 2 2 2 f f 
        . . f f 2 2 f 2 2 2 f 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Help Alice Escape from The Queen of Hearts' Castle by dropping through rooms", DialogLayout.Bottom)
    game.showLongText("Be careful of the Card guards and make it out before the timer ends", DialogLayout.Bottom)
    game.showLongText("(Using the Right & Left arrow keys)", DialogLayout.Bottom)
    game.showLongText("Good Luck!!!", DialogLayout.Bottom)
    controller.moveSprite(Alice, 100, 100)
    console.log(Alice)
    scene.cameraFollowSprite(Alice)
    info.startCountdown(180)
    for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
        Hearts1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f d d d d f f f d d d d f f 
            . f d 1 1 1 1 d f d 1 1 1 1 d f 
            . f d 1 1 1 1 1 d 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f f d 1 1 1 1 1 1 1 1 1 d f f 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.life)
        animation.runImageAnimation(
        Hearts1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f d d d d f f f d d d d f f 
            . f d 1 1 1 1 d f d 1 1 1 1 d f 
            . f d 1 1 1 1 1 d 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f f d 1 1 1 1 1 1 1 1 1 d f f 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f d d d f f f d d d f f . 
            . . f d 1 1 1 d f d 1 1 1 d f . 
            . . f d 1 1 1 1 d 1 1 1 1 d f . 
            . . f d 1 1 1 1 1 1 1 1 1 d f . 
            . . f d 1 1 1 1 1 1 1 1 1 d f . 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(Hearts1, value)
        tiles.setTileAt(value, assets.tile`myTile36`)
    }
    current_level = 1
    Card_Guard_Club_1.follow(Alice, 20)
    Card_Guard_Diamond_1.follow(Alice, 20)
    Card_Guard_Heart_1.follow(Alice, 20)
    Card_Guard_Spade_1.follow(Alice, 20)
    while (level_complete == 0) {
        pause(100)
    }
    return 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Sword2 = sprites.createProjectileFromSprite(img`
        . . . . . . . f . . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . f . f 1 1 f 1 f . . . . 
        . . . f e f f 4 4 f f e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . . . f e e f . . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . f e e f . . . . . . 
        . . . . . . f f f f . . . . . . 
        `, Alice, 0, -70)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    level_complete = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.floaty, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.clouds, 2000)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite == Fireball) {
        statusbar.value += -5
        Alice_Health += -1
        sprites.destroy(otherSprite)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    level_complete = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.halo, 2000)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.life, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
function Level_3 () {
    level_complete = 0
    Jabberwock = sprites.create(img`
        ..............ff......ff..............
        .............ff........ff.............
        ............ff..........ff............
        ...........f5f..........f5f...........
        ..........f55f.ffffffff.f55f..........
        ..........f55ff77777777ff55f..........
        ..........f55f7777777777f55f..........
        ..........f55f7ff7777ff7f55f..........
        ..........f5f7777f77f7777f7f..........
        ..........f7777227777227777f..........
        ..........f77772f7777f27777f..........
        ..........f7777777777777777f..........
        ..........f7777777777777777f..........
        ..........f7777777337777777f..........
        ..........f7777773113777777f..........
        ..........f7777773223777777f..........
        ..........f7777773223777777f..........
        ..ffffffff.f77777311377777f.ffffffff..
        .f77777777f.f777773377777f.f77777777f.
        f77ffffff77f.f7777777777f.f77ffffff77f
        f7f5f5f55f77f.ff777777ff.f77f55f5f5f7f
        ff55f5ff55f77f77ffffff77f77f55ff5f55ff
        .fff555ff55fff7777777777fff55ff555fff.
        ..f55555f5555f7777777777f5555f55555f..
        ...ff555f5fff777777777777fff5f5555f...
        ....ffffff..f777f7777f777f..ffffff....
        ............f777f7777f777f............
        ............f7777f77f7777f............
        ...........f7f777f77f777f7f...........
        ..........f77f777f77f777f77f..........
        ..........f777f777ff777f777f..........
        ..........f777f777ff777f777f..........
        ...........ffff777ff777ffff...........
        ..............ffffffffff..............
        `, SpriteKind.Enemy)
    Alice3 = sprites.create(img`
        ......55555555555......
        .....5555555555555.....
        ....555555555555555....
        ...55555555555555555...
        ...55555555555555555...
        ...55555555555555555...
        ..5555555555555555555..
        ..5555555555555555555..
        ..5555555555555555555..
        ..55555555555555555555.
        .555555555555555555555.
        .555555555555555555555.
        .555555555555555555555.
        .555555555555555555555.
        .555555555555555555555.
        .5555555555555555555555
        55555555555555555555555
        55555555555555555555555
        .555555555555555555555.
        ..5555555555555555555..
        ....555555555555555....
        ....f5555555555555f....
        ....f8888888888888f....
        ....f8888888888888f....
        ...f888888888888888f...
        ...f8888888888888888f..
        ..f888888888888888888f.
        ..f888888888888888888f.
        .f88888f88888888f88888f
        .f8f888f88888888f888f8f
        ..ff88f8888888888f88ff.
        ....fff88f8888f88fff...
        .......ffff88ffff......
        .........11fff11.......
        .........111.111.......
        .........111.111.......
        .........fff.fff.......
        ........fffffffff......
        ........fffffffff......
        .........fff.fff.......
        `, SpriteKind.Player)
    Jabberwock.setPosition(72, 21)
    Alice3.setPosition(77, 90)
    controller.moveSprite(Alice, 100, 0)
    Alice3.setStayInScreen(true)
    tiles.setCurrentTilemap(tilemap`level1`)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.attachToSprite(Alice3)
    statusbar_2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar_2.attachToSprite(Jabberwock)
    statusbar_2.setLabel("HP")
    Jabberwocky_Health = 20
    Alice_Health = 20
    while (level_complete == 0) {
        Count += 1
        Jabberwock.follow(Alice, 50)
        Jabberwock.y = 21
        if (Count == 30) {
            Fireball = sprites.createProjectileFromSprite(img`
                . . . . c c c b b b b b . . . . 
                . . c c b 4 4 4 4 4 4 b b b . . 
                . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
                . e b 4 4 4 4 4 5 4 4 4 4 b e . 
                8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                8 7 2 e e e e e e e e e e 2 7 8 
                e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                e b e 8 8 c c 8 8 c c c 8 e b e 
                e e b e c c e e e e e c e b e e 
                . e e b b 4 4 4 4 4 4 4 4 e e . 
                . . . c c c c c e e e e e . . . 
                `, Jabberwock, 0, 70)
            Count = 0
        }
        if (Jabberwocky_Health == 0) {
            game.gameOver(true)
        }
        if (Alice_Health == 0) {
            game.gameOver(false)
        }
    }
    return 0
}
function Level_2 () {
    level_complete = 0
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 2 2 2 2 f f f 2 2 2 2 f f 
        . f 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 f f f 2 2 2 2 2 f 
        . f 2 2 2 2 f f 2 f f 2 2 2 2 f 
        . f 2 2 2 2 f 2 2 2 f 2 2 2 2 f 
        . f f 2 2 2 f f f f f 2 2 2 f f 
        . . f f 2 2 f 2 2 2 f 2 2 f f . 
        . . . f f 2 2 2 2 2 2 2 f f . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . f f 2 2 2 f f . . . . 
        . . . . . . f f 2 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level1`)
    game.showLongText("Use the arrow keys to navigate Alice around the Castle's Garden maze.", DialogLayout.Bottom)
    game.showLongText("If you collect a coin, get a point, if you collect a heart, get a point. But, if you overlap the cloud you loose a point. ", DialogLayout.Bottom)
    game.showLongText("Oh! And be careful because the Cheshire cat is following you and if he catches you, lose 2 lives.", DialogLayout.Bottom)
    Alice2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 d d 5 5 5 5 . . . 
        . . . 5 d d d d d d d d 5 . . . 
        . . . 5 d f 1 d d f 1 d 5 . . . 
        . . . 5 d d d d d d d d 5 . . . 
        . . 5 5 d d 3 3 3 d d d 5 5 . . 
        . 5 5 8 8 d d d d d d 8 8 5 5 . 
        . 5 d d 8 8 8 8 8 8 8 8 d d 5 . 
        . . d 8 8 8 8 8 8 8 8 8 8 d . . 
        . . d 8 8 8 8 8 8 8 8 8 8 d . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 f f 8 8 f f 8 8 8 . . 
        `, SpriteKind.Player)
    info.setScore(3)
    info.setLife(5)
    Cheshire_kitty = sprites.create(img`
        f f f . . . . f f f . . . . 
        f c c f . . f a a f . . . . 
        f 3 b a f f c 3 b f . . . . 
        f 3 3 c c a c 3 3 f . . . . 
        f c f f a c f f c f . . . . 
        f c f 1 c c f 1 c f . . . . 
        f a c a 3 3 c c a f . f f f 
        f c c c c c c c c f . f c f 
        f a a c a a a a a f . f a f 
        . f c c c c c c c f f f c f 
        . f a a a c a a a a a a a f 
        . f a c c a c c c c f f f f 
        . f c f f f a f f a a . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    controller.moveSprite(Alice2, 40, 40)
    tiles.placeOnRandomTile(Alice2, sprites.castle.tileDarkGrass2)
    tiles.placeOnRandomTile(Cheshire_kitty, assets.tile`myTile44`)
    scene.cameraFollowSprite(Alice2)
    Cheshire_kitty.follow(Alice2, 30)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile40`)) {
        coin = sprites.create(img`
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 4 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 4 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 4 5 5 5 5 5 5 5 5 5 5 1 5 5 . 
            4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            4 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            4 4 1 4 5 5 5 5 5 5 5 5 5 5 5 5 
            4 1 4 4 5 5 5 5 5 5 5 5 5 5 5 5 
            4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 
            4 4 1 4 4 5 5 5 5 5 5 5 5 5 5 5 
            . 4 4 4 4 5 5 5 5 5 5 5 5 5 5 . 
            . 4 4 4 4 4 5 5 5 5 5 5 5 5 5 . 
            . . 4 4 4 4 4 4 5 5 5 5 5 5 . . 
            . . . 4 4 4 4 4 4 5 5 5 5 . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            `, SpriteKind.point)
        tiles.placeOnTile(coin, value2)
        tiles.setTileAt(value2, sprites.castle.tileDarkGrass3)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile39`)) {
        cloudy = sprites.create(img`
            .........bbbb...........
            .......bb1111bb.........
            ......bb111111bbbbb.....
            ......b1111111ddd11b....
            ......b11111111d1111b...
            ...bbbd11111111d1111b...
            ..b11111111111111111bb..
            .b11111111111111111d11b.
            .b111d11111111111111111b
            cdd1d111111111111111111c
            cdddd11111111111111111dc
            cddbd11111d11111dd111dc.
            .cbbdd111dddd11ddbdddcc.
            .ccbbdddddbdddddddbcc...
            ...cccdddbbbdddddcc.....
            ......ccccccccccc.......
            `, SpriteKind.floaty)
        tiles.placeOnTile(cloudy, value3)
        tiles.setTileAt(value3, sprites.castle.tileDarkGrass1)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile41`)) {
        heart = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f d d d d f f f d d d d f f 
            . f d 1 1 1 1 d f d 1 1 1 1 d f 
            . f d 1 1 1 1 1 d 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f f d 1 1 1 1 1 1 1 1 1 d f f 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.life)
        animation.runImageAnimation(
        Hearts1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f d d d d f f f d d d d f f 
            . f d 1 1 1 1 d f d 1 1 1 1 d f 
            . f d 1 1 1 1 1 d 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f d 1 1 1 1 1 1 1 1 1 1 1 d f 
            . f f d 1 1 1 1 1 1 1 1 1 d f f 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f d d d f f f d d d f f . 
            . . f d 1 1 1 d f d 1 1 1 d f . 
            . . f d 1 1 1 1 d 1 1 1 1 d f . 
            . . f d 1 1 1 1 1 1 1 1 1 d f . 
            . . f d 1 1 1 1 1 1 1 1 1 d f . 
            . . f f d 1 1 1 1 1 1 1 d f f . 
            . . . f f d 1 1 1 1 1 d f f . . 
            . . . . f f d 1 1 1 d f f . . . 
            . . . . . f f d 1 d f f . . . . 
            . . . . . . f f d f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(heart, value4)
        tiles.setTileAt(value4, sprites.castle.tileDarkGrass3)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile38`)) {
        magic_arch = sprites.create(img`
            7 7 7 7 7 7 1 7 1 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 1 7 1 7 7 7 7 7 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
            a 7 a 7 6 6 6 6 6 6 6 6 7 7 7 7 
            7 5 7 7 6 6 6 6 6 6 6 6 9 7 9 7 
            a 7 a 7 6 6 6 6 6 6 6 6 7 5 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 9 7 9 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 b 7 b 
            3 7 3 7 6 6 6 6 6 6 6 6 7 7 5 7 
            7 5 7 7 6 6 6 6 6 6 6 6 7 b 7 b 
            3 7 3 7 6 6 6 6 6 6 6 6 7 7 7 7 
            7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
            `, SpriteKind.portal)
        tiles.placeOnTile(magic_arch, value5)
        tiles.setTileAt(value5, sprites.castle.tileDarkGrass1)
    }
    while (level_complete == 0) {
        pause(100)
    }
    return 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeLifeBy(-1)
})
let magic_arch: Sprite = null
let heart: Sprite = null
let cloudy: Sprite = null
let coin: Sprite = null
let Cheshire_kitty: Sprite = null
let Alice2: Sprite = null
let Count = 0
let Alice3: Sprite = null
let Jabberwock: Sprite = null
let Alice_Health = 0
let statusbar: StatusBarSprite = null
let Fireball: Sprite = null
let current_level = 0
let Hearts1: Sprite = null
let Door22: Sprite = null
let Card_Guard_Spade_2: Sprite = null
let Card_Guard_Spade_1: Sprite = null
let Card_Guard_Club_2: Sprite = null
let Card_Guard_Club_1: Sprite = null
let Card_Guard_Diamond_2: Sprite = null
let Card_Guard_Diamond_1: Sprite = null
let Card_Guard_Heart_2: Sprite = null
let Card_Guard_Heart_1: Sprite = null
let White_Rabbit: Sprite = null
let Queen_of_Hearts: Sprite = null
let Throne: Sprite = null
let Alice: Sprite = null
let level_complete = 0
let Jabberwocky_Health = 0
let statusbar_2: StatusBarSprite = null
let Sword2: Sprite = null
console.log("\"starting\"")
Level_1()
console.log("level 2")
Level_2()
console.log("level 3")
Level_3()
console.log("finished")
