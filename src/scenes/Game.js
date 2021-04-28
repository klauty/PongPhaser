import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1)
        this.physics.add.existing(ball)
        ball.body.setBounce(1,1)

        ball.body.setCollideWorldBounds(true,1,1)

        ball.body.setVelocity(-200,200)

        const paddleLeft = this.add.rectangle(40,250,25,130,0xffffff,1)
        this.physics.add.existing(paddleLeft,true)

        const paddleRight = this.add.rectangle(760,250,25,130,0xffffff,1)
        this.physics.add.existing(paddleRight,true)

        this.physics.add.collider(paddleLeft,ball)
        this.physics.add.collider(paddleRightgit,ball)
    }
}