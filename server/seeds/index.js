const User = require('../models/User')
const Transaction = require('../models/Transaction')
const Rent = require('../models/Rent');
const Product = require('../models/Product');
const Category = require('../models/Category')

User.bulkCreate(
    [{
        username: 'cat',
        email: 'cat@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'dog',
        email: 'dog@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'cow',
        email: 'cow@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'fish',
        email: 'fish@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'rhino',
        email: 'rhino@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'elephant',
        email: 'elephant@gmail.com',
        password: 'password',
        zip: '43214'
    },
    {
        username: 'ancs214',
        email: 'ancs214@gmail.com',
        password: 'password1234',
        zip: '43214'
    }
    ])

Category.bulkCreate(
    [
        {
            name: 'Outdoor Gear',
            description: 'Gear for outdoors'
        },
        {
            name: 'Tools',
            description: 'any and all tools'
        },
        {
            name: 'Sports',
            description: 'any gear for sports'
        },
        {
            name: 'Tech',
            description: 'get geeky'
        },
        {
            name: 'Motorized Vehicles',
            description: 'any thing that requires a motor to run'
        },
        {
            name: 'Instruments',
            description: 'stuff that make loud noices'
        },
    ])

Product.bulkCreate([
    {
        category_id: 1,
        user_id: 1,
        name: 'climbing gear',
        description: 'All the gear you need to climb that hill',
        img: '/uploads/Rock-Climbing-Equipment.jpg',
        state: 'available',
        price: '50.00'
    },
    {
        category_id: 1,
        user_id: 2,
        name: 'snowboard',
        description: 'a 163 burton snowboard with size 13 boots',
        img: '/uploads/snowboard-11530957793gzcann9txv.png',
        state: 'available',
        price: '50.00'
    },
    {
        category_id: 2,
        user_id: 3,
        name: 'chainsaw',
        description: 'an 18 inch ryobi 2 cycle saw that can cut through anything you need',
        img: '/uploads/chainsaw.png',
        state: 'available',
        price: '30.00'
    },
    {
        category_id: 2,
        user_id: 4,
        name: '30 foot extention ladder',
        description: 'A double set of 30 foot extention ladders with window guards and a 15 foot walk board',
        img: '/uploads/ladder.jpg',
        state: 'available',
        price: '100.00'
    },

    {
        category_id: 3,
        user_id: 5,
        name: 'football helmet',
        description: 'a schults dna helmet with the latest technology',
        img: '/uploads/Football-helmet.png',
        state: 'available',
        price: '50.00'
    },
    {
        category_id: 3,
        user_id: 6,
        name: 'catching gear',
        description: 'a full set of adult large catching equipment with knee savers',
        img: '/uploads/catchinggear.png',
        state: 'available',
        price: '20.00'
    },
    {

        category_id: 4,
        user_id: 1,
        name: 'drone',
        description: 'A 1/10 scale drone flies up to 50 mph and up to 1000 feet high',
        img: '/uploads/drone.png',
        state: 'available',
        price: '75.00'
    },
    {
        category_id: 4,
        user_id: 2,
        name: '3d printer',
        description: 'make anything you want with this 1/20 th scale printer comes with ink',
        img: '/uploads/3d printer.png',
        state: 'available',
        price: '60.00'
    },
    {
        category_id: 5,
        user_id: 3,
        name: 'Boat',
        description: 'A wake boat full stacked',
        img: '/uploads/wakeboat.png',
        state: 'available',
        price: '100.00'
    },
    {
        category_id: 5,
        user_id: 4,
        name: 'quad',
        description: 'an automatic quad that holds two people and can go 65mph',
        img: '/uploads/quad.png',
        state: 'available',
        price: '75.00'
    },
    {
        category_id: 6,
        user_id: 5,
        name: 'drumset',
        description: 'a drum set to bang on to drive your neighbors crazy',
        img: '/uploads/drums.png',
        state: 'available',
        price: '30.00'
    }
    ,
    {
        category_id: 6,
        user_id: 6,
        name: 'mayonnaise',
        description: 'yes patrick mayonnaise is an instrument',
        img: '/uploads/mayonnaise.png',
        state: 'available',
        price: '1.00'
    }
    ,





])
