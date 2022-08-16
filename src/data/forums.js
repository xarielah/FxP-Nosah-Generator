const forums = [
    {
        id: 1,
        name: 'Escape from Tarkov',
        logo: 'https://i.imagesup.co/images2/8fe3870147e8b64abe49c76ddf6cd5aa5760582d.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=10375',
        thread: 'https://www.fxp.co.il/showthread.php?t=21213724',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213779',
    },
    {
        id: 2,
        name: 'פעולה - כללי',
        logo: 'https://i.imagesup.co/images2/7c38dcc9ddae69b404d1af562e683e1b03515e36.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=435',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213791',
        thread: 'https://www.fxp.co.il/showthread.php?t=14894177',
    },
    {
        id: 3,
        name: 'GTA',
        logo: 'https://i.imagesup.co/images2/b0554633256fab6a0257e9540fb8b0796aadd590.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=3839',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21273988',
        thread: 'https://www.fxp.co.il/showthread.php?t=16495699',
    },
    {
        id: 4,
        name: 'CS:GO',
        logo: 'https://i.imagesup.co/images2/14c4b19357b2fba4298eee200e121bd11084c87c.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=4787',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21273989',
        thread: 'https://www.fxp.co.il/showthread.php?t=16254239',
    },
    {
        id: 5,
        name: 'Valorant',
        logo: 'https://i.imagesup.co/images2/59e2e31f254d138f396688da0bd52817bce35ae4.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=10081',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21220061',
        thread: 'https://www.fxp.co.il/showthread.php?t=20276930',
    },
    {
        id: 6,
        name: 'Rainbow Six Siege',
        logo: 'https://i.imagesup.co/images2/086a1ca616eaf3e7da33eba59b3e53edc60bc00e.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=8170',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213793',
        thread: 'https://www.fxp.co.il/showthread.php?t=17014573',
    },
    {
        id: 7,
        name: 'Fortnite',
        logo: 'https://i.imagesup.co/images2/7c3f691b3c5c4719d32aed4750308fc4720bd5e7.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=9507',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213798',
        thread: 'https://www.fxp.co.il/showthread.php?t=18472308',
    },
    {
        id: 8,
        name: 'Apex Legends',
        logo: 'https://i.imagesup.co/images2/2246e6fd7dd3af1fd599a114c9abc8a3dbf2ffb1.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=9874',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213802',
        thread: 'https://www.fxp.co.il/showthread.php?t=19460966',
    },
    {
        id: 9,
        name: 'PUBG',
        logo: 'https://cdn.discordapp.com/attachments/697060360003518535/697140638780489759/PUBG_FXP.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=9335',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213804',
        thread: 'https://www.fxp.co.il/showthread.php?t=18113763',
    },
    {
        id: 10,
        name: 'Assassin`s Creed',
        logo: 'https://i.imagesup.co/images2/f8f366c372b1b28f8feffd4d1a5a71c23a7d7fd3.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=1974',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213808',
        thread: 'https://www.fxp.co.il/showthread.php?t=14894236',
    },
    {
        id: 11,
        name: 'Far Cry',
        logo: 'https://i.imagesup.co/images2/676ff5f77b3d12893236a3ded47f826702c783cd.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=5315',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213810',
        thread: 'https://www.fxp.co.il/showthread.php?t=14894263',
    },
    {
        id: 12,
        name: 'Call of Duty',
        logo: 'https://i.imagesup.co/images2/a04ca88090cbac68f8ea3bf34eb021397deef38a.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=305',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213813',
        thread: 'https://www.fxp.co.il/showthread.php?t=14894313',
    },
    {
        id: 13,
        name: 'Battlefield',
        logo: 'https://i.imagesup.co/images2/1540b9d6e16422303bfe8aa892e97eed9630569a.png',
        href: 'https://www.fxp.co.il/forumdisplay.php?f=523',
        mThread: 'https://www.fxp.co.il/showthread.php?t=21213815',
        thread: 'https://www.fxp.co.il/showthread.php?t=18140845',
    },
];

module.exports = forums;
