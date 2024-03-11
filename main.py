@namespace
class SpriteKind:
    toy = SpriteKind.create()
    pet = SpriteKind.create()
    Door = SpriteKind.create()
    Life = SpriteKind.create()
    Bigger = SpriteKind.create()
    Smaller = SpriteKind.create()
    Jabberwock = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global Alice
    game.splash("Eat Me")
    Alice = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
sprites.on_overlap(SpriteKind.player, SpriteKind.Smaller, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global Alice
    game.splash("Drink Me")
    Alice = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . 5 5 f 5 f 5 5 . . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 . . . . 
                    . . 5 5 5 d d d d d 5 5 5 . . . 
                    . . 5 5 d 1 f d f 1 d 5 5 . . . 
                    . . 5 5 d 1 1 d 1 1 d 5 5 . . . 
                    . . 5 5 d d d d d d d 5 5 . . . 
                    . . 5 5 d d 3 3 3 d d 5 5 . . . 
                    . . 5 5 d d d d d d d 5 5 . . . 
                    . . 5 d 8 8 8 8 8 8 8 d 5 . . . 
                    . . 5 d 8 8 8 8 8 8 8 d 5 . . . 
                    . . . d 8 8 8 8 8 8 8 d . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . 8 8 8 8 f 8 f 8 8 8 8 . . .
        """),
        SpriteKind.player)
sprites.on_overlap(SpriteKind.player, SpriteKind.Bigger, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    info.change_life_by(1)
    sprites.destroy(otherSprite3, effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Life, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    sprites.destroy(otherSprite4, effects.spray, 500)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

Hearts: Sprite = None
Alice: Sprite = None
Alice = sprites.create(img("""
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
    """),
    SpriteKind.player)
Alice.set_position(125, 28)
Throne = sprites.create(img("""
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
    """),
    SpriteKind.player)
Throne.set_position(22, 32)
Queen_of_Hearts = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Queen_of_Hearts.set_position(22, 28)
White_Rabbit = sprites.create(img("""
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
    """),
    SpriteKind.pet)
White_Rabbit.set_position(65, 33)
Card_Guard_Heart_1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Heart_2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Heart_2.set_position(320, 28)
Card_Guard_Heart_1.set_position(320, 56)
Card_Guard_Diamond_1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Diamond_2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Diamond_2.set_position(320, 81)
Card_Guard_Diamond_1.set_position(320, 70)
Card_Guard_Club_1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Club_2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Club_2.set_position(550, 90)
Card_Guard_Club_1.set_position(550, 40)
Card_Guard_Spade_1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Spade_2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Card_Guard_Spade_1.set_position(550, 99)
Card_Guard_Spade_2.set_position(550, 30)
Door2 = sprites.create(img("""
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
    """),
    SpriteKind.Door)
Door2.set_position(630, 1570)
Table = sprites.create(img("""
        .................................................
            .................................................
            .................................................
            .................................................
            .................................................
            .................................................
            .................................................
            .................................................
            ................fffffffffffffff..................
            .............fffeeeeeeeeeeeeeeefff...............
            ...........ffeeeeeeeeeeeeeeeeeeeeeff.............
            .........ffeeeeeeeeeeeeeeeeeeeeeeeeeff...........
            ........feeeeeeeeeeeeeeeeeeeeeeeeeeeeef..........
            .......feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.........
            ......feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef........
            .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
            .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
            .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
            .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
            .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
            ......feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef........
            .......feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.........
            ........feeeeeeeeeeeeeeeeeeeeeeeeeeeeef..........
            .........ffeeeeeeeeeeeeeeeeeeeeeeeeeff...........
            ...........ffeeeeeeeeeeeeeeeeeeeeeff.............
            .............fffffffffffffffffffff...............
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            .....................feeeef......................
            ...................ffeeeeeeff....................
            .................ffeeeeeeeeeeff..................
    """),
    SpriteKind.projectile)
Table.set_position(595, 1570)
Drink_me = sprites.create(img("""
        ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ..bb................
            .aaaa...............
            .aaaa...............
            ..ff................
            ..af................
            ..aa................
            .aaaa...............
            abbaaa..............
            abaaaa..............
            aaaaaa..............
            aaaaaf..............
            .afff...............
    """),
    SpriteKind.Bigger)
Drink_me.set_position(590, 1565)
Eat_Me = sprites.create(img("""
        . . . . . . . . . . a a a . . . 
            . . . . . . . . a a 7 7 7 a . . 
            . . . . . . a a 7 7 7 7 7 a . . 
            . . . . a a 7 7 7 e e 7 7 7 a . 
            . . a a 7 7 7 7 e 3 2 e 7 7 a . 
            a a 7 7 7 7 7 7 e 2 2 e 7 7 7 a 
            a 7 7 7 7 7 7 7 7 e e 7 7 7 7 a 
            a a a a a a a 7 7 7 7 7 7 7 7 a 
            a 3 3 3 3 3 a a a a a a a a 7 a 
            a 3 3 3 3 3 3 3 3 3 3 3 3 a 7 a 
            a a a a a a a 3 3 3 3 3 3 a 7 a 
            a 3 3 3 3 3 a a a a a a a a 7 a 
            a a a 3 3 3 3 3 3 3 3 3 3 a 7 a 
            . . . a a a 3 3 3 3 3 3 3 a 7 a 
            . . . . . . a a a a 3 3 3 a 7 a 
            . . . . . . . . . . a a a a a a
    """),
    SpriteKind.Smaller)
Eat_Me.set_position(600, 1565)
tiles.set_current_tilemap(tilemap("""
    Level 1
"""))
game.set_dialog_cursor(img("""
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
"""))
game.show_long_text("Help Alice Escape from The Queen of Hearts' Castle by dropping through rooms",
    DialogLayout.BOTTOM)
game.show_long_text("Be careful of the Card guards and make it out before the timer ends",
    DialogLayout.BOTTOM)
game.show_long_text("(Using the Right & Left arrow keys)", DialogLayout.BOTTOM)
game.show_long_text("Good Luck!!!", DialogLayout.BOTTOM)
controller.move_sprite(Alice)
scene.camera_follow_sprite(Alice)
info.start_countdown(180)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile36
""")):
    Hearts = sprites.create(img("""
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
        """),
        SpriteKind.Life)
    animation.run_image_animation(Hearts,
        [img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    tiles.place_on_tile(Hearts, value)
    tiles.set_tile_at(value, assets.tile("""
        myTile36
    """))
Card_Guard_Club_1.follow(Alice, 20)
Card_Guard_Diamond_1.follow(Alice, 20)
Card_Guard_Heart_1.follow(Alice, 20)
Card_Guard_Spade_1.follow(Alice, 20)